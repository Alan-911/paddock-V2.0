import Link from 'next/link';
import { djLineup } from '@/lib/data/djLineup';
import InstagramStories from './InstagramStories';
import styles from './DJLineupSection.module.css';

export default function DJLineupSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Weekly Schedule</span>
          <h2 className={styles.title}>This Week&apos;s Lineup</h2>
        </div>

        {/* Instagram Stories */}
        <InstagramStories />

        <div className={styles.grid}>
          {djLineup.map((slot) => (
            <div
              key={slot.day}
              className={`${styles.card} ${slot.isSpecial ? styles.specialCard : ''}`}
            >
              {slot.isSpecial && (
                <span className={styles.specialBadge}>{slot.specialLabel}</span>
              )}

              <span className={styles.dayShort}>{slot.short}</span>
              <p className={styles.dayFull}>{slot.day}</p>

              <div className={styles.divider} />

              <div className={styles.djAvatar}>
                <span>{slot.djName.charAt(0)}</span>
              </div>

              <p className={styles.djName}>{slot.djName}</p>
              <p className={styles.genre}>{slot.genre}</p>
              <p className={styles.time}>{slot.time}</p>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/events" className={styles.fullLineupBtn}>
            View All Events →
          </Link>
        </div>
      </div>
    </section>
  );
}
