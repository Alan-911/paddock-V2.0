import Link from 'next/link';
import styles from './Footer.module.css';

const WHATSAPP_URL =
  "https://wa.me/250700000000?text=Hi%2C%20I'd%20like%20to%20book%20a%20table%20at%20Paddock%20Lounge";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ONE continuous background image covers menuCTA + linkColumns */}
      <div className={styles.bgArea}>
        <div className={styles.bgImage} aria-hidden="true" />
        <div className={styles.bgOverlay} aria-hidden="true" />

        {/* Menu CTA (was in CocktailSection — now lives here so it shares the bg) */}
        <div className={styles.menuCTA}>
          <p className={styles.menuTag}>Over 40 cocktails. Crafted nightly.</p>
          <h3 className={styles.menuHeading}>Discover the Full Menu</h3>
          <Link href="/menu" className={styles.menuBtn}>
            Explore Full Menu
          </Link>
        </div>

        {/* Address / link columns */}
        <div className={styles.container}>
          <div className={styles.top}>

            <div className={styles.brand}>
              <p className={styles.logo}>PADDOCK</p>
              <p className={styles.tagline}>
                Kigali&apos;s premier nightlife destination.<br />
                Where the night comes alive.
              </p>
              <div className={styles.socials}>
                <a href="#" aria-label="Instagram" className={styles.social}>IG</a>
                <a href="#" aria-label="TikTok" className={styles.social}>TK</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.social}>WA</a>
              </div>
            </div>

            <div className={styles.linksGroup}>
              <h4 className={styles.groupTitle}>Explore</h4>
              <ul>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/vip">VIP Tables</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className={styles.linksGroup}>
              <h4 className={styles.groupTitle}>Visit Us</h4>
              <ul>
                <li>Kigali, Rwanda</li>
                <li>Mon – Thu: 9PM – 2AM</li>
                <li>Fri – Sat: 10PM – 5AM</li>
                <li>Sun: 7PM – 1AM</li>
              </ul>
            </div>

            <div className={styles.linksGroup}>
              <h4 className={styles.groupTitle}>Book</h4>
              <ul>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    WhatsApp Reservations
                  </a>
                </li>
                <li><Link href="/vip">VIP Packages</Link></li>
                <li><a href="tel:+250700000000">+250 700 000 000</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Pure black copyright bar — outside the bg area */}
      <div className={styles.copyrightBar}>
        <div className={styles.copyrightInner}>
          <p>© {new Date().getFullYear()} Paddock Lounge. All rights reserved.</p>
          <p className={styles.credit}>Kigali, Rwanda</p>
        </div>
      </div>
    </footer>
  );
}
