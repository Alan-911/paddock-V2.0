import AboutClient from './AboutClient';
import styles from './about.module.css';

export const metadata = {
  title: "About | Paddock Lounge Kigali",
  description: "Experience the ultimate nightlife at Paddock Lounge Kigali. Our story, our vibe, and why we are Kigali's premier nightlife destination.",
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
