'use client';

import { useState } from 'react';
import { cocktails } from '@/lib/data/cocktails';
import styles from './CocktailSection.module.css';

export default function CocktailSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      {/* Dynamic Crossfading Background Layer */}
      <div className={styles.bgImagesContainer}>
        {cocktails.map((cocktail, index) => (
          <div 
            key={cocktail.id}
            className={`${styles.bgImage} ${index === activeIndex ? styles.activeBg : ''}`}
            style={{ backgroundImage: `url(${cocktail.image})` }}
          />
        ))}
      </div>
      <div className={styles.bgOverlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Signature Cocktails</span>
          <h2 className={styles.title}>The Drinks<br />Experience</h2>
          <p className={styles.subtitle}>
            Every glass tells a story. Crafted by our expert mixologists, designed to be as unforgettable as the night itself.
          </p>
        </div>

        <div className={styles.interactiveContainer}>
          <div className={styles.cocktailsGrid}>
            
            {/* Left Column (Cocktails 1-4) */}
            <div className={styles.cocktailColumn}>
              {cocktails.slice(0, 4).map((cocktail, index) => (
                <div 
                  key={cocktail.id}
                  className={`${styles.listItem} ${index === activeIndex ? styles.activeItem : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={styles.itemHeader}>
                    <span className={styles.itemNumber}>0{index + 1}</span>
                    <h3 className={styles.itemName}>{cocktail.name}</h3>
                  </div>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemTag}>{cocktail.tag}</span>
                    <p className={styles.itemDesc}>{cocktail.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column (Cocktails 5-8) */}
            <div className={styles.cocktailColumn}>
              {cocktails.slice(4, 8).map((cocktail, index) => (
                <div
                  key={cocktail.id}
                  className={`${styles.listItem} ${(index + 4) === activeIndex ? styles.activeItem : ''}`}
                  onMouseEnter={() => setActiveIndex(index + 4)}
                  onClick={() => setActiveIndex(index + 4)}
                >
                  <div className={styles.itemHeader}>
                    <span className={styles.itemNumber}>0{index + 5}</span>
                    <h3 className={styles.itemName}>{cocktail.name}</h3>
                  </div>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemTag}>{cocktail.tag}</span>
                    <p className={styles.itemDesc}>{cocktail.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className={styles.pourStrip}>
          <div className={styles.pourText}>
            <span>Crafted with precision</span>
            <span className={styles.pourDot}>·</span>
            <span>Served with passion</span>
            <span className={styles.pourDot}>·</span>
            <span>Designed for the night</span>
            <span className={styles.pourDot}>·</span>
            <span>Only at Paddock</span>
          </div>
        </div>
      </div>
    </section>
  );
}
