'use client';

import { useState, useEffect } from 'react';
import type { InstagramPost } from '@/lib/types/instagram';
import styles from './WhatsOnSection.module.css';

export default function WhatsOnSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/instagram/feed')
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && !data.fallback && data.posts) {
          setPosts(data.posts);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const hasRealPosts = posts.length > 0;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Events & Highlights</span>
          <h2 className={styles.title}>What&apos;s On at Paddock</h2>
        </div>

        <div className={styles.dynamicContent}>
          {/* ─── Instagram Feed Marquee ─── */}
          <div className={styles.eventsScroll}>
            <div className={styles.eventsTrack}>
              {[0, 1].map((loopIndex) => (
                <div key={loopIndex} className={styles.eventsSet}>
                  {hasRealPosts ? (
                    posts.map((post) => (
                      <article key={`${loopIndex}-${post.id}`} className={styles.igCard}>
                        {post.media_type === 'VIDEO' ? (
                          <video 
                            src={post.media_url} 
                            className={styles.igCardMedia} 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                          />
                        ) : (
                          <img 
                            src={post.media_url} 
                            alt="Instagram Post" 
                            className={styles.igCardMedia} 
                            loading="lazy"
                          />
                        )}
                        <div className={styles.igCardOverlay}>
                          <a href={post.permalink} target="_blank" rel="noopener noreferrer" className={styles.igCardLink}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                            View on Instagram
                          </a>
                        </div>
                      </article>
                    ))
                  ) : (
                    /* Fallback cards if no API */
                    [1, 2, 3, 4, 5].map((idx) => (
                      <article key={`fallback-${loopIndex}-${idx}`} className={styles.igCard}>
                        <div className={styles.igCardFallback}>
                          <span className={styles.igCardFallbackIcon}>📸</span>
                          <p>Instagram Post</p>
                        </div>
                      </article>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <a href="https://instagram.com/paddocklounge_f1" target="_blank" rel="noopener noreferrer" className={styles.allEventsBtn}>
            Follow us on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
