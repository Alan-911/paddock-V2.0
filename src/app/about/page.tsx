import AboutClient from './AboutClient';
import styles from './about.module.css';

export const metadata = {
  title: "About Us",
  description:
    "Learn the story behind Paddock Lounge — Kigali's premier nightlife destination. Our vision, our vibe, and why we set the standard for nightlife in Rwanda.",
};

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.backgroundLayer}>
        <div className={styles.visualOverlay}></div>
        <img
          src="/images/about-bg.png"
          alt="Paddock Lounge About Background"
          className={styles.visualImage}
        />
      </div>

      <AboutClient />
    </div>
  );
}
