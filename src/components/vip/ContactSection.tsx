'use client';

import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        {/* Left — headline and description */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>Reservations</span>
          <h2 className={styles.title}>Secure Your<br />VIP Experience</h2>
          <p className={styles.desc}>
            Book your table in advance and guarantee the best seats in the house.
            Walk-ins are welcome but VIP tables fill fast on weekends.
          </p>
        </div>

        {/* Right — contact card */}
        <div className={styles.card}>
          <div className={styles.cardInner}>
            {/* Contact details */}
            <div className={styles.infoBlock}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Kicukiro - KK 367, No.2, Kigali</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Call Us</span>
                  <span className={styles.infoValue}>+250 788 471 841</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Hours</span>
                  <span className={styles.infoValue}>Sun–Thu 11AM–1AM · Fri–Sat 11AM–2AM</span>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className={styles.actions}>
              <a
                href="https://wa.me/250788471841?text=Hi%2C%20I'd%20like%20to%20book%20a%20VIP%20table%20at%20Paddock%20Lounge"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp
              </a>
              <a href="tel:+250788471841" className={styles.btnSecondary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call to Reserve
              </a>
            </div>

            <div className={styles.divider} />

            <a
              href="https://instagram.com/paddocklounge_f1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igLink}
            >
              <svg viewBox="0 0 132 132" width="20" height="20" fill="none">
                <defs>
                  <linearGradient id="ig-vip" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDC80" />
                    <stop offset="25%" stopColor="#FCAF45" />
                    <stop offset="50%" stopColor="#F77737" />
                    <stop offset="75%" stopColor="#F56040" />
                    <stop offset="90%" stopColor="#C13584" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </linearGradient>
                </defs>
                <rect width="132" height="132" rx="30" fill="url(#ig-vip)" />
                <rect x="14" y="14" width="104" height="104" rx="22" stroke="#fff" strokeWidth="8" fill="none" />
                <circle cx="66" cy="66" r="24" stroke="#fff" strokeWidth="8" fill="none" />
                <circle cx="96" cy="36" r="7" fill="#fff" />
              </svg>
              DM us @paddocklounge_f1
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
