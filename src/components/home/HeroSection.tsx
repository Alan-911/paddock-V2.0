'use client';

import Link from 'next/link';
import styles from './HeroSection.module.css';
import SocialSidebar from './SocialSidebar';

const WHATSAPP_URL =
  "https://wa.me/250788471841?text=Hi%2C%20I'd%20like%20to%20book%20a%20table%20at%20Paddock%20Lounge";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Cinematic Video Background — Paddock footage */}
      <div className={styles.bgVideoContainer}>
        <video
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/paddock-hero-poster.jpg"
        >
          <source src="/paddock-hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.bgOverlay} aria-hidden="true" />

      {/* Main layout container */}
      <div className={styles.heroLayoutWrapper}>
        
        {/* Main content */}
        <div className={styles.content}>
          <div className={styles.eyebrowWrapper}>
            <div className={styles.eyebrowContainer}>
              {"Kigali's Premier Nightlife Destination".split(' ').map((word, index) => (
                <span 
                  key={index} 
                  className={styles.eyebrowWord} 
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </div>
            <div className={styles.eyebrowContainer}>
              {"HOME OF VIBES".split(' ').map((word, index) => (
                <span 
                  key={`home-${index}`} 
                  className={styles.eyebrowWord} 
                  style={{ animationDelay: `${(index + 4) * 0.2}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </div>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>PADDOCK</span>
            <span className={styles.titleLine}>LOUNGE</span>
          </h1>

          <p className={styles.subtitle}>
            <span>BORN IN KIGALI</span>
            <span className={styles.subtitleIndent}>BUILT FOR THE WORLD.</span>
          </p>

          <div className={styles.ctas}>
            <Link
              href="/vip"
              className={styles.ctaPrimary}
            >
              Book a Table
            </Link>
            <Link href="/events" className={styles.ctaSecondary}>
              View DJ Lineup
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Vertical Social Media Sidebar */}
      <div className={styles.socialColumn}>
        <SocialSidebar />
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
