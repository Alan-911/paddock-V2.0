import Link from 'next/link';
import { events } from '@/lib/data/events';
import styles from './WhatsOnSection.module.css';

export default function WhatsOnSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Events & Highlights</span>
          <h2 className={styles.title}>What&apos;s On at Paddock</h2>
        </div>

        <div className={styles.grid}>
          {events.map((event) => (
            <article
              key={event.id}
              className={`${styles.card} ${event.isHighlighted ? styles.highlighted : ''}`}
            >
              <div className={styles.cardTop}>
                <div className={styles.dateBadge}>
                  <span className={styles.dateNum}>{event.date}</span>
                  <span className={styles.dateMonth}>{event.month}</span>
                </div>
                <span className={styles.tag}>{event.tag}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDesc}>{event.description}</p>
              </div>

              <Link href="/events" className={styles.cardLink}>
                View Details <span>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/events" className={styles.allEventsBtn}>
            See All Events →
          </Link>
        </div>

      </div>
    </section>
  );
}
