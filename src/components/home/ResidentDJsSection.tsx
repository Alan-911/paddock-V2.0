'use client';

import { useState, useEffect } from 'react';
import { residentDJs, ResidentDJ } from '@/lib/data/djs';
import styles from './ResidentDJsSection.module.css';

export default function ResidentDJsSection() {
  const [activeDJ, setActiveDJ] = useState<ResidentDJ | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDJ(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeDJ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeDJ]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>The Talent</span>
          <h2 className={styles.title}>Resident & Guest DJs</h2>
        </div>

        {/* DJ Cards Carousel (Infinite Scroll) */}
        <div className={styles.carousel}>
          <div className={styles.track}>
            {[...residentDJs, ...residentDJs].map((dj, index) => (
              <div 
                key={`${dj.id}-${index}`} 
                className={styles.card}
                onClick={() => setActiveDJ(dj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveDJ(dj);
                  }
                }}
              >
                <div className={styles.imageWrapper}>
                  <img src={dj.image} alt={dj.name} className={styles.image} loading="lazy" />
                </div>
                <div className={styles.cardOverlay}>
                  <span className={styles.cardGenre}>{dj.genre}</span>
                  <h3 className={styles.cardName}>{dj.name}</h3>
                  <p className={styles.cardTagline}>{dj.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      <div 
        className={`${styles.modalOverlay} ${activeDJ ? styles.active : ''}`}
        onClick={() => setActiveDJ(null)}
      >
        <div 
          className={styles.modalContent} 
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className={styles.closeButton} 
            onClick={() => setActiveDJ(null)}
            aria-label="Close modal"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {activeDJ && (
            <>
              <div className={styles.modalImageArea}>
                <img src={activeDJ.image} alt={activeDJ.name} className={styles.modalImage} />
              </div>
              <div className={styles.modalInfoArea}>
                <span className={styles.modalGenre}>{activeDJ.genre}</span>
                <h3 className={styles.modalName}>{activeDJ.name}</h3>
                {activeDJ.realName && (
                  <p className={styles.modalRealName}>{activeDJ.realName}</p>
                )}
                
                <p className={styles.modalBio}>{activeDJ.bio}</p>

                <div className={styles.achievements}>
                  <h4 className={styles.achievementsTitle}>Highlights & Achievements</h4>
                  <ul className={styles.achievementsList}>
                    {activeDJ.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
