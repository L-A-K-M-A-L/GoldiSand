import React, { FormEvent, useEffect } from "react";
import styles from "./Contact.module.scss";

export interface ContactProps {
  setActiveSection: (section: string) => void;
}

export function Contact({ setActiveSection }: ContactProps) {
  useEffect(() => {
    setActiveSection("CONTACT");
  }, [setActiveSection]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up form submission
    // You can collect form data here using FormData(e.currentTarget)
    alert("Message sent (demo) — wire up your backend to actually send it.");
  };

  return (
    <section className={styles.contactPage} id="contact">
      <div className={styles.contactContainer}>
        {/* LEFT SIDE */}
        <div className={styles.contactLeft}>
          <h2>Contact Us</h2>
          <p className={styles.subtitle}>
            Feel free to reach out to us anytime. We will get back to you as soon
            as possible!
          </p>

          <div className={styles.infoBox}>
            <div className={styles.infoItem}>
              <h3>📍 Address</h3>
              <p>Goldi Sands Hotel, Ethukala, Negombo, Sri Lanka</p>
            </div>

            <div className={styles.infoItem}>
              <h3>📞 Phone</h3>
              <p>+94 31 2279021 / +94 31 2279227 / +94 31 2278020</p>
            </div>

            <div className={styles.infoItem}>
              <h3>📧 Email</h3>
              <p>
                <a href="mailto:goldi@eureka.lk">goldi@eureka.lk</a>
              </p>
            </div>
          </div>

          {/* FORM */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
            <textarea name="message" rows={4} placeholder="Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* RIGHT SIDE - MAP */}
        <div className={styles.contactRight}>
          <iframe
            title="Goldi Sands Location"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126741.71133483678!2d79.78616454781448!3d6.921837933457628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596e8db857ed%3A0x60599e9d741b93d7!2sColombo!5e0!3m2!1sen!2slk!4v1707130000000"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
