'use client';

import { useState, useEffect, useCallback } from 'react';
import type { InstagramStory } from '@/lib/types/instagram';
import styles from './InstagramStories.module.css';

/* ─── Fallback stories when API is not connected ─── */
export const FALLBACK_STORIES = [
  { id: 'f1', gradient: 'linear-gradient(135deg, #833AB4, #FD1D1D)', label: 'Epic Friday', emoji: '🔥' },
  { id: 'f2', gradient: 'linear-gradient(135deg, #FCB045, #FD1D1D)', label: 'VIP Night', emoji: '🍾' },
  { id: 'f3', gradient: 'linear-gradient(135deg, #4f0099, #FCB045)', label: 'DJ Set', emoji: '🎧' },
  { id: 'f4', gradient: 'linear-gradient(135deg, #FD1D1D, #833AB4)', label: 'Ladies Night', emoji: '💃' },
  { id: 'f5', gradient: 'linear-gradient(135deg, #833AB4, #4f0099)', label: 'Vibes', emoji: '✨' },
  { id: 'f6', gradient: 'linear-gradient(135deg, #FCB045, #4f0099)', label: 'Cocktails', emoji: '🥃' },
];

export function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export interface InstagramStoriesProps {
  onStoryClick?: (index: number) => void;
  onStoriesLoaded?: (stories: InstagramStory[], fallback: boolean) => void;
}

export default function InstagramStories({ onStoryClick, onStoriesLoaded }: InstagramStoriesProps = {}) {
  const [stories, setStories] = useState<InstagramStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewingStory, setViewingStory] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/instagram/stories')
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) {
          if (!data.fallback && data.stories?.length > 0) {
            setStories(data.stories);
            onStoriesLoaded?.(data.stories, false);
          } else {
            onStoriesLoaded?.([], true);
          }
        }
      })
      .catch(() => {
        if (!cancelled) onStoriesLoaded?.([], true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [onStoriesLoaded]);

  // Lock scroll when viewing story
  useEffect(() => {
    if (viewingStory !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [viewingStory]);

  const nextStory = useCallback(() => {
    if (viewingStory !== null && viewingStory < stories.length - 1) {
      setViewingStory(viewingStory + 1);
    } else {
      setViewingStory(null);
    }
  }, [viewingStory, stories.length]);

  const prevStory = useCallback(() => {
    if (viewingStory !== null && viewingStory > 0) {
      setViewingStory(viewingStory - 1);
    }
  }, [viewingStory]);

  // Auto-advance image stories
  useEffect(() => {
    if (viewingStory === null) return;
    const story = stories[viewingStory];
    if (!story || story.media_type === 'VIDEO') return;
    const timer = setTimeout(nextStory, 5000);
    return () => clearTimeout(timer);
  }, [viewingStory, stories, nextStory]);

  const hasRealStories = stories.length > 0;

  return (
    <>
      <div className={styles.storiesContainer}>
        <div className={styles.storiesLabel}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={styles.igIcon}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Stories
        </div>

        <div className={styles.storiesScroll}>
          <div className={styles.storiesTrack}>
            {[0, 1].map((loopIndex) => (
              <div key={loopIndex} className={styles.storiesSet}>
                {/* Paddock profile bubble — always first */}
                <div
                  className={styles.storyItem}
                  onClick={() => {
                    if (onStoryClick) {
                      onStoryClick(0);
                    } else if (hasRealStories && stories.length > 0) {
                      setViewingStory(0);
                    }
                  }}
                  style={{ cursor: hasRealStories ? 'pointer' : 'default' }}
                >
                  <div className={`${styles.storyRing} ${styles.storyRingProfile}`}>
                    <div className={styles.storyRingInner}>
                      <div className={styles.profileBubble}>
                        <span className={styles.profileLetter}>P</span>
                      </div>
                    </div>
                  </div>
                  <span className={styles.storyName}>paddock</span>
                </div>

                {/* Real stories from API */}
                {hasRealStories &&
                  stories.map((story, i) => (
                    <button
                      key={story.id}
                      className={styles.storyItem}
                      onClick={() => {
                        if (onStoryClick) {
                          onStoryClick(i);
                        } else {
                          setViewingStory(i);
                        }
                      }}
                    >
                      <div className={styles.storyRing}>
                        <div className={styles.storyRingInner}>
                          {story.media_type === 'VIDEO' ? (
                            <div className={styles.storyThumbPlaceholder}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                          ) : (
                            <img src={story.media_url} alt="" className={styles.storyThumb} loading="lazy" />
                          )}
                        </div>
                      </div>
                      <span className={styles.storyName}>{timeAgo(story.timestamp)}</span>
                    </button>
                  ))}

                {/* Fallback bubbles when no API */}
                {!hasRealStories && !loading &&
                  FALLBACK_STORIES.map((s, idx) => (
                    <div
                      key={s.id}
                      className={styles.storyItem}
                      onClick={() => {
                        if (onStoryClick) onStoryClick(idx);
                      }}
                      style={{ cursor: onStoryClick ? 'pointer' : 'default' }}
                    >
                      <div className={styles.storyRing}>
                        <div className={styles.storyRingInner}>
                          <div className={styles.storyThumbPlaceholder} style={{ background: s.gradient }}>
                            <span style={{ fontSize: 18 }}>{s.emoji}</span>
                          </div>
                        </div>
                      </div>
                      <span className={styles.storyName}>{s.label}</span>
                    </div>
                  ))}

                {/* Loading skeletons */}
                {loading &&
                  [1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={styles.storyItem}>
                      <div className={`${styles.storyRing} ${styles.storySkeleton}`}>
                        <div className={styles.storyRingInner} />
                      </div>
                      <span className={styles.storyNameSkeleton} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Full-screen Story Viewer ─── */}
      {viewingStory !== null && stories[viewingStory] && (
        <div className={styles.viewer} onClick={() => setViewingStory(null)}>
          {/* Progress bars */}
          <div className={styles.viewerProgress}>
            {stories.map((_, i) => (
              <div key={i} className={styles.viewerProgressBar}>
                <div
                  className={styles.viewerProgressFill}
                  style={{
                    width: i < viewingStory ? '100%' : i === viewingStory ? '100%' : '0%',
                    animation: i === viewingStory && stories[viewingStory].media_type !== 'VIDEO'
                      ? 'storyFill 5s linear forwards'
                      : undefined,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Header */}
          <div className={styles.viewerHeader} onClick={(e) => e.stopPropagation()}>
            <div className={styles.viewerProfile}>
              <div className={styles.viewerProfilePic}>P</div>
              <div>
                <p className={styles.viewerProfileName}>paddocklounge_f1</p>
                <p className={styles.viewerProfileTime}>{timeAgo(stories[viewingStory].timestamp)}</p>
              </div>
            </div>
            <button className={styles.viewerClose} onClick={() => setViewingStory(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Media */}
          {stories[viewingStory].media_type === 'VIDEO' ? (
            <video
              src={stories[viewingStory].media_url}
              className={styles.viewerMedia}
              autoPlay
              playsInline
              muted
              onClick={(e) => e.stopPropagation()}
              onEnded={nextStory}
            />
          ) : (
            <img
              src={stories[viewingStory].media_url}
              alt=""
              className={styles.viewerMedia}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {/* Navigation */}
          <button
            className={`${styles.viewerNav} ${styles.viewerNavPrev}`}
            onClick={(e) => { e.stopPropagation(); prevStory(); }}
            aria-label="Previous story"
          />
          <button
            className={`${styles.viewerNav} ${styles.viewerNavNext}`}
            onClick={(e) => { e.stopPropagation(); nextStory(); }}
            aria-label="Next story"
          />
        </div>
      )}
    </>
  );
}
