'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import { WHATSAPP_BOOKING_URL } from '@/lib/constants';

const WHATSAPP_URL = WHATSAPP_BOOKING_URL;

export default function Footer() {
  const pathname = usePathname();

  // Hide the footer entirely on the About page
  if (pathname === '/about') {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.bgArea}>
        <div className={styles.bgImage} aria-hidden="true" />

        <div className={styles.container}>
          {/* Glassmorphism 3-column layout */}
          <div className={styles.top}>
            
            {/* Left Section: Brand & Socials */}
            <div className={`${styles.glassColumn} ${styles.brandColumn}`}>
              <p className={styles.logo}>PADDOCK</p>
              <p className={styles.tagline}>
                Kigali&apos;s premier nightlife destination.<br />
                Where the night comes alive.
              </p>
              <div className={styles.socials}>
                <a href="https://instagram.com/paddocklounge_f1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.social}>
                  <svg viewBox="0 0 132 132" width="32" height="32" fill="none">
                    <defs>
                      <linearGradient id="ig-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFDC80" />
                        <stop offset="25%" stopColor="#FCAF45" />
                        <stop offset="50%" stopColor="#F77737" />
                        <stop offset="75%" stopColor="#F56040" />
                        <stop offset="90%" stopColor="#C13584" />
                        <stop offset="100%" stopColor="#833AB4" />
                      </linearGradient>
                    </defs>
                    <rect width="132" height="132" rx="30" fill="url(#ig-footer)" />
                    <rect x="14" y="14" width="104" height="104" rx="22" stroke="#fff" strokeWidth="8" fill="none" />
                    <circle cx="66" cy="66" r="24" stroke="#fff" strokeWidth="8" fill="none" />
                    <circle cx="96" cy="36" r="7" fill="#fff" />
                  </svg>
                </a>
                <a href="https://tiktok.com/@paddock_lounge_kgl" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.social}>
                  <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
                    <rect width="48" height="48" rx="10" fill="#000" />
                    <path d="M33.2 17.1a7.3 7.3 0 0 1-4.4-3.9v12.3a7.7 7.7 0 1 1-5.3-7.3v4.5a3.3 3.3 0 1 0 1.8 2.9V10h3.6a7.3 7.3 0 0 0 4.3 3.7v3.4z" fill="#fff" />
                    <path d="M32.2 16.1a7.3 7.3 0 0 1-4.4-3.9v12.3a7.7 7.7 0 1 1-5.3-7.3v4.5a3.3 3.3 0 1 0 1.8 2.9V9h3.6a7.3 7.3 0 0 0 4.3 3.7v3.4z" fill="#25F4EE" />
                    <path d="M34.2 18.1a7.3 7.3 0 0 1-4.4-3.9v12.3a7.7 7.7 0 1 1-5.3-7.3v4.5a3.3 3.3 0 1 0 1.8 2.9V11h3.6a7.3 7.3 0 0 0 4.3 3.7v3.4z" fill="#FE2C55" />
                  </svg>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.social}>
                  <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
                    <rect width="48" height="48" rx="10" fill="#25D366" />
                    <path d="M24 10.5c-7.18 0-13 5.82-13 13 0 2.29.6 4.53 1.74 6.5L11 37l7.2-1.7A12.94 12.94 0 0024 36.5c7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 23.8a10.7 10.7 0 01-5.6-1.58l-.4-.24-4.14.98.98-4-.26-.42A10.8 10.8 0 0113.3 23.5c0-5.9 4.8-10.7 10.7-10.7s10.7 4.8 10.7 10.7-4.8 10.8-10.7 10.8zm5.86-8.02c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.22-.37.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.22-.32.32-.53.11-.22.06-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.72-.55h-.6c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67 0 1.58 1.15 3.1 1.31 3.32.16.21 2.26 3.45 5.47 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.1 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38z" fill="#fff"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Middle Section: Empty (Spacer) */}
            <div className={styles.middleColumn}></div>

            {/* Right Section: Explore Links */}
            <div className={`${styles.glassColumn} ${styles.linksColumn}`}>
              <h4 className={styles.groupTitle}>Explore</h4>
              <ul>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/vip">VIP Tables</Link></li>
                <li><Link href="/about">About</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.copyrightBar}>
        <div className={styles.copyrightInner}>
          <p>© {new Date().getFullYear()} Paddock Lounge. All rights reserved.</p>
          <p className={styles.credit}>Kigali, Rwanda</p>
        </div>
      </div>
    </footer>
  );
}
