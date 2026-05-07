'use client';

import { useState } from 'react';
import styles from './StickyBookCTA.module.css';
import { PHONE_URL, ADDRESS } from '@/lib/constants';
import BookingModal from '../booking/BookingModal';

export default function StickyBookCTA() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      {/* Desktop: floating Book button */}
      <button
        className={styles.floatingBtn}
        onClick={() => setShowBooking(true)}
        aria-label="Book a table"
      >
        <span className={styles.pulse} />
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.112 1.529 5.833L.057 23.43a.5.5 0 0 0 .617.608l5.76-1.51A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.935 9.935 0 0 1-5.056-1.374l-.363-.215-3.761.986.999-3.667-.236-.376A9.94 9.94 0 0 1 2.063 12C2.063 6.51 6.51 2.063 12 2.063S21.938 6.51 21.938 12 17.49 21.938 12 21.938z"/>
        </svg>
        <span className={styles.label}>Book Now</span>
      </button>

      {/* Mobile: bottom strip */}
      <div className={styles.mobileStrip}>
        <a href={PHONE_URL} className={styles.stripBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          Call
        </a>
        <button
          className={`${styles.stripBtn} ${styles.stripBook}`}
          onClick={() => setShowBooking(true)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/></svg>
          Book Table
        </button>
        <a
          href={ADDRESS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.stripBtn}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          Location
        </a>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
    </>
  );
}
