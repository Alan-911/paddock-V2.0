'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.css';

export default function AboutClient() {
  const [animKey] = useState(() => Date.now());

  return (
    <div className={styles.contentOverlay}>
      {/* Left side: Shadow Box with gradient and blur */}
      <div className={styles.shadowBox}>

        {/* The Movie Credit Scrolling Area */}
        <div className={styles.scrollWindow}>
          <motion.div
            key={animKey}
            className={styles.scrollContent}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 4,
              ease: "easeOut",
              delay: 0
            }}
            style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
          >
            <div className={styles.storyBlock}>
              <p className={styles.storyText}>
                We didn&apos;t just build a lounge; we captured the city&apos;s heartbeat as the sun dips below the hills
              </p>
              <p className={styles.storyText}>
                Where the orange glow of the sunset meets the deep bass of the Afrobeats
              </p>
              <p className={styles.storyText}>
                This is where the daylight fades and the electric energy takes over
              </p>
              <p className={styles.storyText}>
                No stiff collars. No pretension. Just the snap of a perfect pour against a sky on fire
              </p>
              <p className={styles.storyText}>
                From the first golden ray to the final early hour, we are the innovators of the night
              </p>
            </div>

            <h2 className={styles.finalLock}>THIS IS PADDOCK</h2>

            <div className={styles.signatureBlock}>
              <span className={styles.location}>
                <svg className={styles.rwandaFlag} viewBox="0 0 60 40" width="24" height="16" aria-label="Rwanda flag">
                  <rect width="60" height="20" y="0" fill="#00A1DE" />
                  <rect width="60" height="10" y="20" fill="#FAD201" />
                  <rect width="60" height="10" y="30" fill="#20603D" />
                  <circle cx="50" cy="10" r="6" fill="#FAD201" />
                  <path d="M50 4 l1.5 3.5 3.8 0.5 -2.8 2.7 0.7 3.8 -3.2-1.8 -3.2 1.8 0.7-3.8 -2.8-2.7 3.8-0.5z" fill="#FAD201" />
                </svg>
                KIGALI, RWANDA
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side: Kept empty so background peeks through clearly */}
      <div className={styles.emptySpace}></div>
    </div>
  );
}
