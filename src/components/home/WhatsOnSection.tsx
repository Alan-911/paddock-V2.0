import { getInstagramFeed, formatCount } from '@/lib/instagram';
import styles from './WhatsOnSection.module.css';

export default async function WhatsOnSection() {
  // Fetch Instagram feed server-side (cached with ISR)
  const { posts } = await getInstagramFeed(12);
  const hasRealPosts = posts && posts.length > 0;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Events & Highlights</span>
          <h2 className={styles.title}>What&apos;s On at Paddock</h2>
        </div>

        {/* ─── Instagram Profile Stats Header ─── */}
        <div className={styles.igProfileHeader}>
          <div className={styles.igProfileInfo}>
            <a 
              href="https://instagram.com/paddocklounge_f1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.igProfileName}
            >
              @paddocklounge_f1
            </a>
            <div className={styles.igStats}>
              <div className={styles.igStat}><strong>342</strong> Posts</div>
              <div className={styles.igStat}><strong>2,205</strong> Followers</div>
              <div className={styles.igStat}><strong>120</strong> Following</div>
            </div>
          </div>
        </div>

        <div className={styles.dynamicContent}>
          {/* ─── Instagram Feed Marquee ─── */}
          <div className={styles.eventsScroll}>
            <div className={styles.eventsTrack}>
              {[0, 1].map((loopIndex) => (
                <div key={loopIndex} className={styles.eventsSet}>
                  {hasRealPosts ? (
                    posts.map((post) => (
                      <a 
                        key={`${loopIndex}-${post.id}`} 
                        href={post.permalink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.igCard}
                      >
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
                            alt={post.caption ? post.caption.slice(0, 80) : "Instagram Post"} 
                            className={styles.igCardMedia} 
                            loading="lazy"
                          />
                        )}
                        <div className={styles.igCardOverlay}>
                          <div className={styles.igCardStats}>
                            <span className={styles.igCardStat}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                              </svg>
                              {formatCount(post.like_count)}
                            </span>
                            <span className={styles.igCardStat}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                              </svg>
                              {formatCount(post.comments_count)}
                            </span>
                          </div>
                        </div>
                      </a>
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
