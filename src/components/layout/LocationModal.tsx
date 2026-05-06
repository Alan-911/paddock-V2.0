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

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close Map">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Paddock Lounge</span>
          <h2 className={styles.title}>Kigali, Rwanda</h2>
        </div>

        <div className={styles.mapContainer}>
          <iframe 
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Paddock%20Lounge,%20Kigali+(Paddock%20Lounge)&t=&z=16&ie=UTF8&iwloc=B&output=embed" 
            className={styles.mapIframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          {/* Custom Pulsating Center Pin */}
          <div className={styles.centerPinOverlay}>
            <div className={styles.pulseRing}></div>
            <div className={styles.pulseRingDelayed}></div>
          </div>
        </div>

        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=Paddock+Lounge+Kigali"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directionsBtn}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Get Directions
        </a>
      </div>
    </div>
  );
}
