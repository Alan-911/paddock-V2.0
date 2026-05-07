'use client';

import { useState, useEffect } from 'react';
import styles from './SocialSidebar.module.css';

type Platform = 'instagram' | 'tiktok' | 'youtube';

/* ========= Platform icons — real colored versions ========= */
const IGIcon = () => (
  <svg viewBox="0 0 132 132" width="32" height="32" fill="none">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#FCAF45" />
        <stop offset="50%" stopColor="#F77737" />
        <stop offset="75%" stopColor="#F56040" />
        <stop offset="90%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#833AB4" />
      </linearGradient>
    </defs>
    <rect width="132" height="132" rx="30" fill="url(#ig-grad)" />
    <rect x="14" y="14" width="104" height="104" rx="22" stroke="#fff" strokeWidth="8" fill="none" />
    <circle cx="66" cy="66" r="24" stroke="#fff" strokeWidth="8" fill="none" />
    <circle cx="96" cy="36" r="7" fill="#fff" />
  </svg>
);

const TTIcon = () => (
  <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
    <rect width="48" height="48" rx="10" fill="#000" />
    <path d="M33.2 17.1a7.3 7.3 0 0 1-4.4-3.9v12.3a7.7 7.7 0 1 1-5.3-7.3v4.5a3.3 3.3 0 1 0 1.8 2.9V10h3.6a7.3 7.3 0 0 0 4.3 3.7v3.4z" fill="#fff" />
    <path d="M32.2 16.1a7.3 7.3 0 0 1-4.4-3.9v12.3a7.7 7.7 0 1 1-5.3-7.3v4.5a3.3 3.3 0 1 0 1.8 2.9V9h3.6a7.3 7.3 0 0 0 4.3 3.7v3.4z" fill="#25F4EE" />
    <path d="M34.2 18.1a7.3 7.3 0 0 1-4.4-3.9v12.3a7.7 7.7 0 1 1-5.3-7.3v4.5a3.3 3.3 0 1 0 1.8 2.9V11h3.6a7.3 7.3 0 0 0 4.3 3.7v3.4z" fill="#FE2C55" />
  </svg>
);

const YTIcon = () => (
  <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
    <rect width="48" height="48" rx="10" fill="#FF0000" />
    <path d="M38 16.8c-.3-1.2-1.2-2.1-2.4-2.4C33.5 14 24 14 24 14s-9.5 0-11.6.5c-1.2.3-2.1 1.2-2.4 2.4C9.5 18.9 9.5 24 9.5 24s0 5.1.5 7.2c.3 1.2 1.2 2.1 2.4 2.4 2.1.5 11.6.5 11.6.5s9.5 0 11.6-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-7.2.5-7.2s0-5.1-.5-7.2z" fill="#FF0000" />
    <path d="M21 29.5V18.5l8 5.5-8 5.5z" fill="#fff" />
  </svg>
);

/* ========= Profile data ========= */
const PROFILES = {
  instagram: {
    handle: '@paddocklounge_f1',
    displayName: 'Paddock Lounge',
    bio: '',
    followers: '2,205',
    following: '120',
    posts: '342',
    link: 'https://instagram.com/paddocklounge_f1',
    accent: 'linear-gradient(45deg, #FCB045, #FD1D1D, #833AB4)',
    accentSolid: '#E1306C',
    btnLabel: 'Follow',
    btnBg: 'linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)',
  },
  tiktok: {
    handle: '@paddock_lounge_kgl',
    displayName: 'Paddock Lounge',
    bio: '',
    followers: '15.2K',
    following: '45',
    posts: '120',
    link: 'https://tiktok.com/@paddock_lounge_kgl',
    accent: 'linear-gradient(135deg, #25F4EE, #FE2C55)',
    accentSolid: '#FE2C55',
    btnLabel: 'Follow',
    btnBg: '#FE2C55',
  },
  youtube: {
    handle: '@paddocklounge',
    displayName: 'Paddock Lounge TV',
    bio: '',
    followers: '5.8K',
    following: '12',
    posts: '48',
    link: 'https://youtube.com/@paddocklounge',
    accent: 'linear-gradient(135deg, #FF0000, #cc0000)',
    accentSolid: '#FF0000',
    btnLabel: 'Subscribe',
    btnBg: '#FF0000',
  },
};

/* ========= Sample post data ========= */
const POSTS = {
  instagram: [
    { g: 'linear-gradient(135deg, #833AB4, #FD1D1D)', tag: '🏎️', likes: '1.2K', comments: 47 },
    { g: 'linear-gradient(135deg, #FCB045, #FD1D1D)', tag: '🍾', likes: '892', comments: 23 },
    { g: 'linear-gradient(135deg, #4f0099, #FCB045)', tag: '🔥', likes: '2.1K', comments: 89 },
    { g: 'linear-gradient(135deg, #FD1D1D, #833AB4)', tag: '💃', likes: '743', comments: 31 },
    { g: 'linear-gradient(135deg, #FCB045, #4f0099)', tag: '🎧', likes: '1.5K', comments: 62 },
    { g: 'linear-gradient(135deg, #833AB4, #FCB045)', tag: '✨', likes: '956', comments: 28 },
    { g: 'linear-gradient(135deg, #FD1D1D, #FCB045)', tag: '🥃', likes: '1.8K', comments: 71 },
    { g: 'linear-gradient(135deg, #4f0099, #FD1D1D)', tag: '🎉', likes: '643', comments: 19 },
    { g: 'linear-gradient(135deg, #833AB4, #4f0099)', tag: '🏁', likes: '2.4K', comments: 94 },
  ],
  tiktok: [
    { g: 'linear-gradient(135deg, #25F4EE, #000)', cap: 'Weekend recap 🔥 Best Lounge in Kigali', views: '48.2K', likes: '4.1K' },
    { g: 'linear-gradient(135deg, #FE2C55, #25F4EE)', cap: 'Midweek turn-ups hit different here 🍾', views: '32.7K', likes: '2.8K' },
    { g: 'linear-gradient(135deg, #000, #FE2C55)', cap: 'Paddock 1st Anniversary 🎉', views: '127K', likes: '12.4K' },
    { g: 'linear-gradient(135deg, #FE2C55, #000)', cap: 'Friday night energy ⚡ Epic Fridays', views: '67.1K', likes: '5.9K' },
    { g: 'linear-gradient(135deg, #25F4EE, #FE2C55)', cap: 'Saturday turnup 🔥 #homeofvibes', views: '54.3K', likes: '4.7K' },
    { g: 'linear-gradient(135deg, #000, #25F4EE)', cap: 'Ladies night affair 💃 Thursdays', views: '41.8K', likes: '3.6K' },
  ],
  youtube: [
    { g: 'linear-gradient(135deg, #1a0000, #FF0000)', title: 'Inside Paddock Lounge — Kigali\'s F1 Hotspot', views: '12.4K', time: '3 days ago', dur: '4:32' },
    { g: 'linear-gradient(135deg, #FF0000, #4a0000)', title: 'Weekend Recap — Best Moments', views: '8.1K', time: '1 week ago', dur: '6:15' },
    { g: 'linear-gradient(135deg, #4a0000, #FF0000)', title: 'How We Make Signature Cocktails', views: '5.7K', time: '2 weeks ago', dur: '8:48' },
    { g: 'linear-gradient(135deg, #1a0000, #cc0000)', title: 'Behind the Scenes — VIP Tour', views: '11.2K', time: '3 weeks ago', dur: '5:21' },
    { g: 'linear-gradient(135deg, #FF0000, #1a0000)', title: 'DJ Krest Live at Epic Fridays', views: '24.6K', time: '1 month ago', dur: '12:04' },
    { g: 'linear-gradient(135deg, #cc0000, #FF0000)', title: '1 Year Anniversary Highlights', views: '38.9K', time: '2 months ago', dur: '7:33' },
  ],
};

export default function SocialSidebar() {
  const [active, setActive] = useState<Platform>('instagram');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile panel is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleIconClick = (p: Platform) => {
    setActive(p);
    setMobileOpen(true);
  };

  const profile = PROFILES[active];
  const posts = POSTS[active];

  const renderFeed = () => (
    <>
      {active === 'instagram' && (
        <div className={styles.igFeed}>
          {posts.map((p, i) => {
            const post = p as { g: string; tag: string; likes: string; comments: number };
            return (
              <a key={i} href={profile.link} target="_blank" rel="noopener noreferrer" className={styles.igPost}>
                <div className={styles.igPostImage} style={{ background: post.g }}>
                  <span className={styles.igEmoji}>{post.tag}</span>
                </div>
                <div className={styles.igPostFooter}>
                  <span className={styles.igAction}>♡ {post.likes}</span>
                  <span className={styles.igAction}>💬 {post.comments}</span>
                </div>
              </a>
            );
          })}
        </div>
      )}
      {active === 'tiktok' && (
        <div className={styles.ttList}>
          {posts.map((p, i) => {
            const post = p as { g: string; cap: string; views: string; likes: string };
            return (
              <a key={i} href={profile.link} target="_blank" rel="noopener noreferrer" className={styles.ttItem}>
                <div className={styles.ttThumb} style={{ background: post.g }}>
                  <span className={styles.ttPlay}>▶</span>
                  <span className={styles.ttViews}>▶ {post.views}</span>
                </div>
                <div className={styles.ttInfo}>
                  <p className={styles.ttCap}>{post.cap}</p>
                  <p className={styles.ttMeta}>♡ {post.likes}</p>
                </div>
              </a>
            );
          })}
        </div>
      )}
      {active === 'youtube' && (
        <div className={styles.ytList}>
          {posts.map((p, i) => {
            const post = p as { g: string; title: string; views: string; time: string; dur: string };
            return (
              <a key={i} href={profile.link} target="_blank" rel="noopener noreferrer" className={styles.ytItem}>
                <div className={styles.ytThumb} style={{ background: post.g }}>
                  <span className={styles.ytPlay}>▶</span>
                  <span className={styles.ytDur}>{post.dur}</span>
                </div>
                <div className={styles.ytInfo}>
                  <p className={styles.ytTitle}>{post.title}</p>
                  <p className={styles.ytMeta}>{post.views} views · {post.time}</p>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </>
  );

  return (
    <>
      {/* ===== Desktop: inline sidebar (unchanged) ===== */}
      <div className={styles.wrapper}>
        <div className={styles.iconTabs}>
          {(['instagram', 'tiktok', 'youtube'] as Platform[]).map((p) => (
            <button
              key={p}
              className={`${styles.iconTab} ${active === p ? styles.iconTabActive : ''} ${styles[`icon_${p}`]}`}
              onClick={() => setActive(p)}
              aria-label={`Show ${p}`}
            >
              <span className={styles.iconWrap}>
                {p === 'instagram' && <IGIcon />}
                {p === 'tiktok' && <TTIcon />}
                {p === 'youtube' && <YTIcon />}
              </span>
            </button>
          ))}
        </div>

        <div className={styles.panel}>
          <div className={styles.panelHeader} style={{ background: profile.accent }}>
            <span className={styles.headerHandle}>{profile.handle}</span>
            <a href={profile.link} target="_blank" rel="noopener noreferrer" className={styles.followBtn} style={{ background: profile.btnBg }}>
              {profile.btnLabel}
            </a>
          </div>
          <div className={styles.profileBar}>
            <div className={styles.stat}><span className={styles.statValue}>{profile.posts}</span><span className={styles.statLabel}>{active === 'youtube' ? 'Videos' : 'Posts'}</span></div>
            <div className={styles.stat}><span className={styles.statValue}>{profile.followers}</span><span className={styles.statLabel}>{active === 'youtube' ? 'Subscribers' : 'Followers'}</span></div>
            <div className={styles.stat}><span className={styles.statValue}>{profile.following}</span><span className={styles.statLabel}>Following</span></div>
          </div>
          <div className={styles.panelBody}>{renderFeed()}</div>
        </div>
      </div>

      {/* ===== Mobile: floating icons + slide-in panel ===== */}
      <div className={styles.mobileIcons}>
        {(['instagram', 'tiktok', 'youtube'] as Platform[]).map((p) => (
          <button
            key={p}
            className={`${styles.mobileIconBtn} ${styles[`icon_${p}`]}`}
            onClick={() => handleIconClick(p)}
            aria-label={`Open ${p}`}
          >
            <span className={styles.iconWrap}>
              {p === 'instagram' && <IGIcon />}
              {p === 'tiktok' && <TTIcon />}
              {p === 'youtube' && <YTIcon />}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile slide-in overlay */}
      {mobileOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)}>
          <div className={styles.mobilePanel} onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button className={styles.mobilePanelClose} onClick={() => setMobileOpen(false)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Platform tabs inside panel */}
            <div className={styles.mobilePanelTabs}>
              {(['instagram', 'tiktok', 'youtube'] as Platform[]).map((p) => (
                <button
                  key={p}
                  className={`${styles.mobilePanelTab} ${active === p ? styles.mobilePanelTabActive : ''}`}
                  onClick={() => setActive(p)}
                >
                  <span className={styles.iconWrap}>
                    {p === 'instagram' && <IGIcon />}
                    {p === 'tiktok' && <TTIcon />}
                    {p === 'youtube' && <YTIcon />}
                  </span>
                </button>
              ))}
            </div>

            {/* Header */}
            <div className={styles.panelHeader} style={{ background: profile.accent }}>
              <span className={styles.headerHandle}>{profile.handle}</span>
              <a href={profile.link} target="_blank" rel="noopener noreferrer" className={styles.followBtn} style={{ background: profile.btnBg }}>
                {profile.btnLabel}
              </a>
            </div>

            {/* Stats */}
            <div className={styles.profileBar}>
              <div className={styles.stat}><span className={styles.statValue}>{profile.posts}</span><span className={styles.statLabel}>{active === 'youtube' ? 'Videos' : 'Posts'}</span></div>
              <div className={styles.stat}><span className={styles.statValue}>{profile.followers}</span><span className={styles.statLabel}>{active === 'youtube' ? 'Subscribers' : 'Followers'}</span></div>
              <div className={styles.stat}><span className={styles.statValue}>{profile.following}</span><span className={styles.statLabel}>Following</span></div>
            </div>

            {/* Scrollable feed */}
            <div className={styles.mobilePanelBody}>{renderFeed()}</div>
          </div>
        </div>
      )}
    </>
  );
}
