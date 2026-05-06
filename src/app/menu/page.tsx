'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import MenuGrid from "@/components/menu/MenuGrid";
import styles from "./menu.module.css";

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Read from URL, default to food
  const menuType = (searchParams.get('type') === 'drinks') ? 'drinks' : 'food';

  const handleToggle = (type: 'food' | 'drinks') => {
    router.push(`/menu?type=${type}`, { scroll: false });
  };

  return (
    <div className={styles.menuPage}>
      {/* Menu Header */}
      <div className={`${styles.menuHeader} animate-fade-in`}>
        <h1 className="heading font-vintage text-gold">The Menu</h1>
        <p>
          Explore our carefully curated selection of signature dishes and premium drinks, designed to complement your night out in Kigali.
        </p>
      </div>

      {/* Menu Grid Container */}
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className={styles.menuContainer}>
          <div className={styles.containerHeader}>
            <h2 className="heading">Taste the Vibe</h2>
            <p>Select a menu to view our offerings.</p>
          </div>

          {/* Master Toggle (Food vs Drinks) */}
          <div className={styles.masterToggleContainer}>
            <div className={styles.toggleSwitch}>
              <div className={`${styles.toggleSlider} ${menuType === 'food' ? styles.toggleSliderFood : styles.toggleSliderDrinks}`}></div>
              <button 
                className={`${styles.toggleButton} ${menuType === 'food' ? styles.toggleButtonActive : ''}`}
                onClick={() => handleToggle('food')}
              >
                Food Menu
              </button>
              <button 
                className={`${styles.toggleButton} ${menuType === 'drinks' ? styles.toggleButtonActive : ''}`}
                onClick={() => handleToggle('drinks')}
              >
                Drinks Menu
              </button>
            </div>
          </div>
          
          {/* Dynamic MenuGrid passing down the selected master type */}
          <MenuGrid menuType={menuType} />
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-gold">Loading Menu...</div>}>
      <MenuContent />
    </Suspense>
  );
}
