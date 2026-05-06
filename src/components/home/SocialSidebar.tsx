'use client';

import { useState } from 'react';
import styles from './SocialSidebar.module.css';

type SocialNetwork = 'instagram' | 'tiktok' | 'youtube';

const SOCIAL_DATA = {
  instagram: {
    name: 'PADDOCK LOUNGE',
    handle: '@paddock_kigali',
    followers: '24.5K',
    following: '120',
    link: 'https://instagram.com/paddock_kigali',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    )
  },
  tiktok: {
    name: 'PADDOCK LOUNGE',
    handle: '@paddockloungekgl',
    followers: '15.2K',
    following: '45',
    link: 'https://tiktok.com/@paddockloungekgl',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 6.08-1.48 1.54-3.55 2.52-5.72 2.67-2.3.16-4.67-.32-6.52-1.64-1.79-1.28-3.01-3.23-3.32-5.41-.33-2.22.05-4.57 1.25-6.44 1.16-1.79 3.01-3.07 5.06-3.46 1.07-.2 2.16-.18 3.23-.05v4.21c-.6-.11-1.22-.09-1.81.04-.6.13-1.16.42-1.61.85-.46.43-.79.99-.95 1.59-.16.6-.13 1.24.08 1.81.2.56.55 1.07.99 1.44.44.38 1.01.62 1.59.7.6.08 1.22.02 1.8-.18.57-.2 1.08-.55 1.46-1 .38-.45.64-1.01.76-1.59.04-.2.06-.4.07-.6V.02h-4.32z"/></svg>
    )
  },
  youtube: {
    name: 'PADDOCK LOUNGE',
    handle: '@PaddockLoungeTV',
    followers: '5.8K',
    following: '12',
    link: 'https://youtube.com/@PaddockLoungeTV',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,5.413c-0.254-0.949-0.998-1.693-1.947-1.947C17.918,3,12,3,12,3s-5.918,0-7.635,0.465c-0.949,0.254-1.693,0.998-1.947,1.947C1.953,7.13,1.953,12,1.953,12s0,4.87,0.465,6.587c0.254,0.949,0.998,1.693,1.947,1.947C6.082,21,12,21,12,21s5.918,0,7.635-0.465c0.949-0.254,1.693-0.998,1.947-1.947C22.047,16.87,22.047,12,22.047,12S22.047,7.13,21.582,5.413z M9.953,15.541V8.459L16.12,12L9.953,15.541z"/></svg>
    )
  }
};

export default function SocialSidebar() {
  const [activeCard, setActiveCard] = useState<SocialNetwork | null>(null);

  const handleToggle = (network: SocialNetwork) => {
    if (activeCard === network) {
      setActiveCard(null);
    } else {
      setActiveCard(network);
    }
  };

  return (
    <div className={styles.sidebar}>
      {(Object.keys(SOCIAL_DATA) as SocialNetwork[]).map((network) => {
        const data = SOCIAL_DATA[network];
        const isActive = activeCard === network;

        return (
          <div key={network} className={styles.socialWrapper}>
            {/* Popover Profile Card */}
            <div className={`${styles.profileCard} ${isActive ? styles.visible : ''}`}>
              <div className={styles.cardHeader}>
                <img 
                  src="/images/logo_fitz.png" // We'll assume you have a logo image or fallback to a default
                  alt="Paddock Logo" 
                  className={styles.avatar}
                  onError={(e) => {
                    // Fallback to Unsplash if logo fails to load
                    e.currentTarget.src = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=100";
                  }}
                />
                <div className={styles.accountInfo}>
                  <span className={styles.accountName}>{data.name}</span>
                  <span className={styles.accountHandle}>{data.handle}</span>
                </div>
              </div>
              
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{data.followers}</span>
                  <span className={styles.statLabel}>Followers</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{data.following}</span>
                  <span className={styles.statLabel}>Following</span>
                </div>
              </div>

              <a href={data.link} target="_blank" rel="noopener noreferrer" className={styles.followBtn}>
                Follow
              </a>
            </div>

            {/* Icon Button */}
            <button 
              className={`${styles.iconBtn} ${isActive ? styles.active : ''}`}
              onClick={() => handleToggle(network)}
              aria-label={`Open ${network} profile`}
            >
              {data.icon}
            </button>
          </div>
        );
      })}
    </div>
  );
}
