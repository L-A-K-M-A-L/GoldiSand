import React, { useEffect } from "react";
import styles from "./About.module.scss";

export function About({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) {
  useEffect(() => {
    setActiveSection("ABOUT");
  }, [setActiveSection]);

  return (
    <>
      <section id="about" className={styles.aboutSection}>
        <div className={styles.container}>

          {/* ABOUT TEXT */}
          <div className={styles.content}>
            <h2 className={styles.title}>About Goldi Sands</h2>

            <p className={styles.text}>
              Goldi Sands is a glamorous iconic hotel nestled on the golden beaches
              of Negombo. Just imagine staying in a hotel that’s right on the
              beach next to the Indian Ocean and what a wonderful feeling knowing
              the beach is yours anytime of the day or night.<br /><br />

              Everything at Goldi Sands is waiting to be experienced. Discover 131
              air-conditioned rooms including Junior Suites, Duplex Suites, Deluxe
              Sea View Rooms, Standard Sea View Rooms and Economy Rooms. Most
              rooms feature private balconies or terraces offering breathtaking
              views of the Indian Ocean and lush landscaped gardens.<br /><br />

              Daytime sunshine brings swimming, water sports, beach walks,
              relaxation by the pool, or simply unwinding with a book and a cool
              beverage. When night falls, enjoy fine dining, great entertainment,
              or a romantic candlelit dinner by the ocean.<br /><br />

              Our professionally trained staff will always go the extra mile to
              ensure your stay is nothing short of exceptional.
            </p>
          </div>

        </div>
      </section>

      {/* ICON GRID OUTSIDE SECTION */}
      <div className={styles.iconGrid}>

        <div className={styles.iconCard}>
          <img src="/AboutPageImages/delivery.png" alt="24H Service" />
          <p>24 Hour Reception</p>
        </div>

        <div className={styles.iconCard}>
          <img src="/AboutPageImages/sofa.png" alt="Lobby Lounge" />
          <p>Lobby Lounge</p>
        </div>

        <div className={styles.iconCard}>
          <img src="/AboutPageImages/dinner.png" alt="Restaurant" />
          <p>Restaurant & Bar</p>
        </div>

        <div className={styles.iconCard}>
          <img src="/AboutPageImages/hotel-service.png" alt="Room Service" />
          <p>Room Service</p>
        </div>

        <div className={styles.iconCard}>
          <img src="/AboutPageImages/facial-treatment.png" alt="Spa" />
          <p>Spa & Beauty Salon</p>
        </div>

        <div className={styles.iconCard}>
          <img src="/AboutPageImages/wifi.png" alt="WiFi" />
          <p>Wi-Fi in All Areas</p>
        </div>

      </div>
    </>
  );
}
