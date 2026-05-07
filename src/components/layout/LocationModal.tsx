'use client';

import { useEffect } from 'react';
import styles from './LocationModal.module.css';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* Fullscreen Map Background */}
      <div className={styles.mapLayer}>
        <iframe
          src="https://maps.google.com/maps?q=Paddock+Lounge+Kigali&t=&z=17&ie=UTF8&iwloc=&output=embed"
          className={styles.mapIframe}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Paddock Lounge Kigali"
        />
      </div>

      {/* Pulsating Red Dot */}
      <div className={styles.pinWrapper}>
        <div className={styles.pinCore} />
        <div className={styles.pulseRing} />
        <div className={styles.pulseRing2} />
      </div>

      {/* Close Button */}
      <button className={styles.closeBtn} onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Info Panel — transparent glass */}
      <div className={styles.infoPanel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.infoPanelInner}>
          <div className={styles.infoHeader}>
            <span className={styles.eyebrow}>Find Us</span>
            <h2 className={styles.title}>The Paddock</h2>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>Address</h3>
              <p className={styles.infoText}>
                KG 7 Ave, Kigali<br />
                Rwanda
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>Opening Hours</h3>
              <p className={styles.infoText}>
                Mon – Thu: 4 PM – 2 AM<br />
                Fri – Sat: 4 PM – Late<br />
                Sun: 2 PM – 12 AM
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>Reservations</h3>
              <p className={styles.infoText}>
                <a href="https://wa.me/250788471841" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                  +250 788 471 841
                </a>
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Paddock+Lounge+Kigali"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsBtn}
          >
            Get Directions
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
