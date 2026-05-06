import Image from 'next/image';
import styles from '@/app/menu/menu.module.css';

interface MenuCardProps {
  title: string;
  image: string;
  prepTime: string;
  rating: number;
  description: string;
  price: string;
}

export default function MenuCard({ title, image, prepTime, rating, description, price }: MenuCardProps) {
  return (
    <div className={styles.card}>
      {/* Top Image */}
      <div className={styles.cardImageWrapper}>
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
        />
      </div>
      
      {/* Thick Separator Line (RUTZ Style) */}
      <div className={styles.separator}></div>

      {/* Content */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        
        {/* Prep Time & Rating (Conditional for Drinks) */}
        {(prepTime || rating) && (
          <div className={styles.metaInfo}>
            {prepTime && (
              <div className={styles.metaItem}>
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {prepTime}
              </div>
            )}
            {rating && (
              <div className={styles.metaItem}>
                <svg className={`${styles.icon} ${styles.starIcon}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                {rating.toFixed(1)}
              </div>
            )}
          </div>
        )}

        {/* Description */}
        <p className={styles.description}>
          {description}
        </p>

        {/* Price & Add Button */}
        <div className={styles.priceAddWrapper}>
          <div className={styles.priceContainer}>
            <span className={styles.currency}>RWF</span>
            <span className={styles.price}>{price}</span>
          </div>
          <button className={styles.addButton}>
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
