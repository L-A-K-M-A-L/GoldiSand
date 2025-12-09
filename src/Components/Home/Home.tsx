import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';

export function Home({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = Array.from({ length: 14 }, (_, i) => `/images/${i + 1}.jpg`);

  useEffect(() => {
    setActiveSection("Home");
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    pauseAutoplay();
  };

  const pauseAutoplay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);

  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide();
    if (touchStart - touchEnd < -75) prevSlide();
  };

  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const dragEnd = e.clientX;

    if (dragStart - dragEnd > 75) nextSlide();
    if (dragStart - dragEnd < -75) prevSlide();
  };

  const handleMouseLeave = () => setIsDragging(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    pauseAutoplay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    pauseAutoplay();
  };

  return (
    <section
      className={styles.heroSection}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.slideshow}>
        {images.map((src, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === currentSlide ? styles.active : ""}`}
          >
            <img src={src} alt={`Slide ${i + 1}`} />
          </div>
        ))}

        <div className={styles.dots}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentSlide ? styles.active : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
