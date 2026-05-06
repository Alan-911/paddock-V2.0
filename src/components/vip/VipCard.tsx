import Image from "next/image";
import styles from "@/app/vip/vip.module.css";

interface VipCardProps {
  title: string;
  image: string;
  price: string;
  features: string[];
}

export default function VipCard({ title, image, price, features }: VipCardProps) {
  return (
    <div className={styles.vipCard}>
      <div className={styles.cardImageWrapper}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          style={{ objectFit: "cover" }} 
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={`${styles.cardTitle} heading`}>{title}</h3>
        <p className={styles.cardPrice}>{price}</p>
        
        <ul className={styles.featureList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <svg className={styles.featureIcon} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <button className={styles.bookButton}>
          Book Table
        </button>
      </div>
    </div>
  );
}
