import React, { useState } from "react";
import styles from "./Header.module.scss";

export interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState("HOME");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = activeSection === "HOME";

  const menuItems = [
    { label: "HOME", target: "home" },
    { label: "ABOUT", target: "about" },
    { label: "360° VR TOUR", target: "vr" },
    { label: "CONTACT", target: "contact" },
  ];

  const centerMenuItems = [
    { label: "HOME", target: "home" },
    { label: "ABOUT", target: "about" },
    { label: "360° VR TOUR", target: "vr" },
  ];

  // Smooth Scroll Function
  const handleScroll = (sectionId: string, label: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setActiveMenu(label);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${
        isHome ? styles.headerTransparent : styles.headerColored
      }`}
    >
      <div className={styles.container}>
        <div className={styles.headerContent}>

          {/* Logo */}
          <div className={styles.logo}>
            <div className={styles.logoWrapper}>
              <img
                src="/logo/goldiSand_logo.png"
                alt="Goldi Sand Logo"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='48'%3E%3Crect fill='%23D4AF37' width='120' height='48' rx='4'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='16' font-weight='bold'%3EGoldi Sand%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>

          {/* Center Navigation */}
          <nav className={styles.nav}>
            {centerMenuItems.map(({ label, target }) => (
              <button
                key={label}
                onClick={() => handleScroll(target, label)}
                className={`${styles.navItem} ${
                  activeMenu === label ? styles.active : ""
                }`}
              >
                {label}
                {activeMenu === label && (
                  <span className={styles.activeIndicator} />
                )}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <button
            onClick={() => handleScroll("contact", "CONTACT")}
            className={`${styles.contactBtn} ${
              activeMenu === "CONTACT" ? styles.active : ""
            }`}
          >
            CONTACT
          </button>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className={styles.menuIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${
            mobileMenuOpen ? styles.open : ""
          }`}
        >
          <nav className={styles.mobileNav}>
            {menuItems.map(({ label, target }) => (
              <button
                key={label}
                onClick={() => handleScroll(target, label)}
                className={`${styles.mobileNavItem} ${
                  activeMenu === label ? styles.active : ""
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
