'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LocationModal from './LocationModal';
import BookingModal from '../booking/BookingModal';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Events', href: '/events' },
  { label: 'VIP', href: '/vip' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Only disable body scroll for the mobile menu if the map modal is NOT open.
    // The map modal handles its own body scroll locking.
    if (!showMapModal) {
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    }
    return () => { 
      if (!showMapModal) document.body.style.overflow = ''; 
    };
  }, [menuOpen, showMapModal]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>

        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          PADDOCK
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className={styles.link} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
          <li className={styles.mobileBook}>
            <button className={styles.bookBtn} onClick={() => { setMenuOpen(false); setShowBooking(true); }}>
              Book Now
            </button>
          </li>
        </ul>

        <div className={`${styles.bookActionGroup} ${styles.desktopBook}`}>
          <button className={styles.bookBtn} onClick={() => setShowBooking(true)}>
            Book Now
          </button>
          <span className={styles.separator}>|</span>
          <button className={styles.mapPinBtn} onClick={() => setShowMapModal(true)} aria-label="View location">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </button>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

      </div>
      
      <LocationModal isOpen={showMapModal} onClose={() => setShowMapModal(false)} />
      <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
    </nav>
  );
}
