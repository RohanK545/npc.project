'use client';

import { useState } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Bar - Skip to content */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <a href="#main-content" className={styles.skipLink}>
            Skip to main content
          </a>
        </div>
      </div>

      {/* Main Header with Logo and Ministry Info */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.headerMain}>
            {/* Ministry Text */}
            <div className={styles.ministryInfo}>
              <div className={styles.govIndia}>Government of India</div>
              <div className={styles.ministryName}>Ministry of Skill Development and Entrepreneurship</div>
            </div>

            {/* Logo Section - Multiple Logos */}
            <div className={styles.logoSection}>
              <img 
                src="/images/logos/digital-india.png" 
                alt="Digital India" 
                className={styles.logo}
              />
              <img 
                src="/images/logos/skill-india.png" 
                alt="Skill India" 
                className={styles.logo}
              />
              <img 
                src="/images/logos/make-in-india.png" 
                alt="Make in India" 
                className={styles.logo}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <button 
            className={styles.mobileToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuOpen : ''}`}>
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="/ministry" className={styles.navLink}>Ministry</a>
            </li>
            <li className={styles.navItem}>
              <a href="/documents" className={styles.navLink}>Documents</a>
            </li>
            <li className={styles.navItem}>
              <a href="/media" className={styles.navLink}>Media</a>
            </li>
            <li className={styles.navItem}>
              <a href="/connect" className={styles.navLink}>Connect</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}