'use client';

import { useState, useEffect, useMemo } from 'react';
import { residentDJs, ResidentDJ } from '@/lib/data/djs';
import type { InstagramPost } from '@/lib/types/instagram';
import styles from './ResidentDJsSection.module.css';

export default function ResidentDJsSection() {
  const [activeDJ, setActiveDJ] = useState<ResidentDJ | null>(null);
  const [igPosts, setIgPosts] = useState<InstagramPost[]>([]);

  // Fetch overall feed once to check for matches
  useEffect(() => {
    let cancelled = false;
    fetch('/api/instagram/feed')
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && data.posts) {
          setIgPosts(data.posts);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  // Filter posts for the active DJ based on keywords
  const activeDJPosts = useMemo(() => {
    if (!activeDJ || !activeDJ.igKeywords || activeDJ.igKeywords.length === 0) return [];
    return igPosts.filter(post => {
      const caption = (post.caption || '').toLowerCase();
      return activeDJ.igKeywords!.some(kw => caption.includes(kw));
    }).slice(0, 6); // Max 6 posts
  }, [activeDJ, igPosts]);

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

                {activeDJPosts.length > 0 && (
                  <div className={styles.igSection}>
                    <h4 className={styles.igTitle}>Recent Highlights</h4>
                    <div className={styles.igGrid}>
                      {activeDJPosts.map((post) => (
                        <a 
                          key={post.id} 
                          href={post.permalink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.igPost}
                        >
                          <img 
                            src={post.media_type === 'VIDEO' ? (post.thumbnail_url || post.media_url) : post.media_url} 
                            alt={`${activeDJ.name} highlight`} 
                            className={styles.igImg}
                            loading="lazy"
                          />
                          <div className={styles.igOverlay}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={styles.igIcon}>
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
