import styles from './LocationSection.module.css';

export default function LocationSection() {
  return (
    <section id="location" className={styles.section}>
      <div className={styles.bgOverlay} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Find Us</span>
          <h2 className={styles.title}>Navigate to<br />The Paddock</h2>
        </div>

        <div className={styles.grid}>
          {/* Contact Info */}
          <div className={styles.infoColumn}>
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
                Monday – Thursday: 4 PM – 2 AM<br />
                Friday – Saturday: 4 PM – Late<br />
                Sunday: 2 PM – 12 AM
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

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Paddock+Lounge+Kigali"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsBtn}
            >
              Get Directions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </div>

          {/* Map centered on Paddock Lounge */}
          <div className={styles.mapColumn}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://maps.google.com/maps?q=Paddock+Lounge+Kigali&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paddock Lounge Kigali location"
              />
              {/* Pulsating Location Marker */}
              <div className={styles.pinWrapper}>
                <div className={styles.pinCore} />
                <div className={styles.pinPulseRing} />
                <div className={styles.pinPulseRing2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
