'use client';

import { useState } from 'react';
import { foodItems } from '@/lib/data/food';
import styles from './CocktailSection.module.css';

export default function FoodSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      {/* Dynamic Crossfading Background Layer */}
      <div className={styles.bgImagesContainer}>
        {foodItems.map((item, index) => (
          <div 
            key={item.id}
            className={`${styles.bgImage} ${index === activeIndex ? styles.activeBg : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>
      <div className={styles.bgOverlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Gourmet Bites</span>
          <h2 className={styles.title}>The Food<br />Experience</h2>
          <p className={styles.subtitle}>
            A curated selection of premium flavors. Perfect for sharing,<br />
            designed to elevate your night out.
          </p>
        </div>

        <div className={styles.interactiveContainer}>
          <div className={styles.cocktailsGrid}>
            
            {/* Left Column (Items 1-4) */}
            <div className={styles.cocktailColumn}>
              {foodItems.slice(0, 4).map((item, index) => (
                <div 
                  key={item.id}
                  className={`${styles.listItem} ${index === activeIndex ? styles.activeItem : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className={styles.itemHeader}>
                    <span className={styles.itemNumber}>0{index + 1}</span>
                    <h3 className={styles.itemName}>{item.name}</h3>
                  </div>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemTag}>{item.tag}</span>
                    <p className={styles.itemDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column (Items 5-8) */}
            <div className={styles.cocktailColumn}>
              {foodItems.slice(4, 8).map((item, index) => (
                <div 
                  key={item.id}
                  className={`${styles.listItem} ${(index + 4) === activeIndex ? styles.activeItem : ''}`}
                  onMouseEnter={() => setActiveIndex(index + 4)}
                >
                  <div className={styles.itemHeader}>
                    <span className={styles.itemNumber}>0{index + 5}</span>
                    <h3 className={styles.itemName}>{item.name}</h3>
                  </div>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemTag}>{item.tag}</span>
                    <p className={styles.itemDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className={styles.pourStrip}>
          <div className={styles.pourText}>
            <span>Premium ingredients</span>
            <span className={styles.pourDot}>·</span>
            <span>Crafted for sharing</span>
            <span className={styles.pourDot}>·</span>
            <span>Late night satisfaction</span>
            <span className={styles.pourDot}>·</span>
            <span>Only at Paddock</span>
          </div>
        </div>
      </div>
    </section>
  );
}
