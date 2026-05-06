import Link from 'next/link';
import styles from './MenuCTASection.module.css';

export default function MenuCTASection() {
  return (
    <section className={styles.bgArea}>
      <div className={styles.bgImage} aria-hidden="true" />
      <div className={styles.bgOverlay} aria-hidden="true" />

      <div className={styles.menuCTA}>
        <p className={styles.menuTag}>Over 40 cocktails. Crafted nightly.</p>
        <h3 className={styles.menuHeading}>Discover the Full Menu</h3>
        <Link href="/menu" className={styles.menuBtn}>
          Explore Full Menu
        </Link>
      </div>
    </section>
  );
}
