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

        <div className={styles.mapContainer}>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Paddock+Lounge+Kigali"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pinWrapper}
            aria-label="Open Google Maps to Paddock Lounge"
          >
            <div className={styles.pulsatingRing} />
            <div className={styles.pinIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className={styles.pinLabel}>Proceed to Map</div>
          </a>
        </div>
      </div>
    </section>
  );
}
