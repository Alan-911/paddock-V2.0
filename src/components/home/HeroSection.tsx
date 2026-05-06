'use client';

import Link from 'next/link';
import styles from './HeroSection.module.css';
import SocialSidebar from './SocialSidebar';

const WHATSAPP_URL =
  "https://wa.me/1540319181819?text=Hi%2C%20I'd%20like%20to%20book%20a%20table%20at%20Paddock%20Lounge";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Cinematic Video Background (YouTube Iframe for guaranteed cross-origin playback) */}
      <div className={styles.bgVideoContainer}>
        <iframe
          src="https://www.youtube.com/embed/jWAYmmLqlQQ?autoplay=1&mute=1&controls=0&loop=1&playlist=jWAYmmLqlQQ&showinfo=0&rel=0&modestbranding=1"
          title="Nightclub Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className={styles.bgVideo}
        ></iframe>
      </div>
      <div className={styles.bgOverlay} aria-hidden="true" />

      {/* Main layout container */}
      <div className={styles.heroLayoutWrapper}>
        
        {/* Main content */}
        <div className={styles.content}>
          <div className={styles.eyebrowContainer}>
            {"Kigali's Premier Nightlife Destination".split(' ').map((word, index) => (
              <span 
                key={index} 
                className={styles.eyebrowWord} 
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>PADDOCK</span>
            <span className={styles.titleLine}>LOUNGE</span>
          </h1>

          <p className={styles.subtitle}>
            Want to experience Kigali night?<br />
            <em>We&apos;ve got you.</em>
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

        {/* Vertical Social Media Sidebar */}
        <div className={styles.socialColumn}>
          <SocialSidebar />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
