'use client';

import { useState, useEffect } from 'react';
import MenuCard from './MenuCard';
import styles from '@/app/menu/menu.module.css';
import { FOOD_ITEMS, DRINKS_ITEMS, ALL_FOOD_CATEGORIES, ALL_DRINKS_CATEGORIES } from '@/lib/data/menuData';

interface MenuGridProps {
  menuType: 'food' | 'drinks';
}

export default function MenuGrid({ menuType }: MenuGridProps) {
  const isFood = menuType === 'food';
  const categories = isFood ? ALL_FOOD_CATEGORIES : ALL_DRINKS_CATEGORIES;
  const items = isFood ? FOOD_ITEMS : DRINKS_ITEMS;

  // Set the first category as active by default when switching menu types
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Update active category if the menu type changes (e.g. food -> drinks)
  useEffect(() => {
    setActiveCategory(categories[0]);
  }, [menuType, categories]);

  const filteredItems = items.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className={styles.menuTabs}>
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${styles.tabButton} ${activeCategory === category ? styles.tabButtonActive : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Grid */}
      <div className={styles.menuGrid}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full col-span-full py-12">
            Items for this category are being updated...
          </p>
        )}
      </div>
    </div>
  );
}
