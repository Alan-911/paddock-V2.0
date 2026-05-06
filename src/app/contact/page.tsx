import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact & Location | Paddock Lounge Kigali",
  description: "Find Paddock Lounge in Kigali. Operating hours, contact numbers, map, and VIP table reservations.",
};

export default function ContactPage() {
  return (
    <div className={styles.pageContainer}>

      {/* Full Page Background Layer */}
      <div className={styles.backgroundLayer}>
        <div className={styles.visualOverlay}></div>
        <img
          src="/images/sunset-picture.jpg"
          alt="People enjoying drinks at sunset at Paddock Lounge"
          className={styles.visualImage}
        />
      </div>

      {/* Left Side: Transparent Visual Space */}
      <div className={`${styles.visualSide} animate-fade-in`}></div>

      {/* Right Side: Content */}
      <div className={styles.contentSide}>
        <div className={`${styles.contentWrapper} animate-fade-in`} style={{ animationDelay: '0.2s' }}>

          <div className={styles.header}>
            <h1 className="heading font-vintage text-gold">Find Your Spot at the Paddock</h1>
            <p>Join us at Kigali's premier nightlife destination. Reserve your VIP section or drop by for an unforgettable evening from the sunset till the sunrise.</p>
          </div>



          <div className={styles.infoGrid}>
            <div className={styles.infoBlock}>
              <h3>Location & Direct Lines</h3>
              <p className="mb-4">Kicukiro – KK 367, No.2<br />Kigali, Rwanda</p>
              <a href="tel:+250788471841">+250 788 471 841</a>
              <a href="tel:+250788413997">+250 788 413 997</a>
              <a href="mailto:info@paddockkigali.com" className="mt-4 text-white/50 text-sm">info@paddockkigali.com</a>
            </div>

            <div className={styles.infoBlock}>
              <h3>Operating Hours</h3>
              <p><strong>Mon - Thu:</strong> 5:00 PM – 2:00 AM</p>
              <p><strong>Fri - Sat:</strong> 5:00 PM – 5:00 AM</p>
              <p><strong>Sun:</strong> 3:00 PM – 1:00 AM</p>
            </div>
          </div>

          {/* Strategic Reservation Hooks */}
          <div className={styles.actionGroup}>
            <a href="tel:+250788471841" className={styles.primaryBtn}>
              Call to Reserve
            </a>
            <Link href="/vip" className={styles.secondaryBtn}>
              Book VIP Table
            </Link>
          </div>

          {/* Visual Hierarchy for Menu & Socials */}
          <div className={styles.footerArea}>
            <Link href="/menu" className={styles.menuLink}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              View Digital Menu
            </Link>

            <a href="https://instagram.com/paddock_kigali" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors flex items-center gap-2 font-bold text-sm uppercase tracking-widest">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              INSTAGRAM
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
