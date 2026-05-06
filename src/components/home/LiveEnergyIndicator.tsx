import styles from './LiveEnergyIndicator.module.css';

type EnergyLevel = 'high' | 'moderate' | 'chill';

const config: Record<EnergyLevel, { label: string; subtext: string; color: string }> = {
  high:     { label: 'HIGH ENERGY',  subtext: 'Only 3 tables left tonight — don\'t miss out.',  color: '#FF3A3A' },
  moderate: { label: 'MODERATE',     subtext: 'The night is warming up — grab your table now.', color: '#FFB800' },
  chill:    { label: 'CHILL',        subtext: 'Perfect time to arrive early and settle in.',     color: '#00C853' },
};

// Change this value to update the vibe displayed on the site
const CURRENT_ENERGY: EnergyLevel = 'high';

export default function LiveEnergyIndicator() {
  const { label, subtext, color } = config[CURRENT_ENERGY];

  return (
    <>
      <div className={styles.strip}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.dot} style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
            <span className={styles.dotPulse} style={{ background: color }} />
            <span className={styles.liveTag}>LIVE</span>
            <span className={styles.label} style={{ color }}>
              PADDOCK IS {label}
            </span>
          </div>
          <p className={styles.subtext}>{subtext}</p>
          <a
            href="https://wa.me/250700000000?text=Hi%2C%20I'd%20like%20to%20book%20a%20table%20at%20Paddock%20Lounge"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Book Now →
          </a>
        </div>
      </div>
      
      {/* Special event announcement ticker */}
      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className={styles.tickerItem}>
              ⚡ SPECIAL EVENT — 24 MAY: PADDOCK 1ST ANNIVERSARY NIGHT — Book your VIP table now →
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
