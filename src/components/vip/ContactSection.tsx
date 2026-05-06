import Image from "next/image";
import styles from "@/app/vip/vip.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      {/* Background Image (Liquor Bottles) */}
      <Image 
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
        alt="Vintage Spirits"
        fill
        className={styles.bgImage}
      />
      <div className={styles.bgOverlay}></div>

      {/* Content Box */}
      <div className={`${styles.contactBox} animate-fade-in`}>
        <div className={styles.elegantBorder}>
          <h2 className={`${styles.elegantTitle} font-vintage text-gold`}>Reservations</h2>
        </div>
        
        <p className={styles.elegantSubtitle}>
          Secure your VIP table or private event booking.
        </p>

        {/* Real Contact Info */}
        <div className="flex flex-col gap-4 my-8 text-white/80">
          <div className="flex items-center gap-3 justify-center">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span>Kicukiro – KK 367, No.2, Kigali</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span>+250 788 471 841 / +250 788 413 997</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a href="tel:+250788471841" className={styles.reserveButton}>
            Call to Book
          </a>
          <a href="https://instagram.com/paddock_kigali" target="_blank" rel="noopener noreferrer" className={styles.learnMore}>
            DM us on Instagram
          </a>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 w-full text-center">
          <a href="/menu" className="text-white/60 hover:text-white text-sm transition-colors">
            Explore our Menu
          </a>
        </div>
      </div>
    </section>
  );
}
