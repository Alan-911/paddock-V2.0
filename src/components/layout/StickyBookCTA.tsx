'use client';

import styles from './StickyBookCTA.module.css';
import { PHONE_URL, ADDRESS } from '@/lib/constants';
import PaddockChatbot from '../chatbot/PaddockChatbot';

export default function StickyBookCTA() {
  return (
    <>
      {/* Paddock AI Concierge Chatbot (replaces old WhatsApp floating button) */}
      <PaddockChatbot />

      {/* Mobile: bottom strip */}
      <div className={styles.mobileStrip}>
        <a href={PHONE_URL} className={styles.stripBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          Call
        </a>
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
    </>
  );
}
