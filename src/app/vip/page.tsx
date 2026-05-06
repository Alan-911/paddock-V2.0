import VipCard from "@/components/vip/VipCard";
import ContactSection from "@/components/vip/ContactSection";
import styles from "./vip.module.css";

export const metadata = {
  title: "VIP Reservations | Paddock Lounge Kigali",
  description: "Book your premium VIP table at Paddock Lounge. Advance reservations, bottle service, and exclusive experiences.",
};

const VIP_TABLES = [
  {
    id: 1,
    title: "The Paddock VVIP Suite",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=1000",
    price: "RWF 500,000",
    features: [
      "Seats up to 12 guests",
      "Choice of 3 premium bottles",
      "Dedicated security & hostess",
      "Assorted gourmet snacks",
      "Ultimate privacy & VIP entry"
    ]
  },
  {
    id: 2,
    title: "DJ Booth VIP Section",
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80&w=1000",
    price: "RWF 350,000",
    features: [
      "Seats up to 8 guests",
      "Choice of 2 premium liquor bottles",
      "Direct view and access to DJ booth",
      "Free snacks included",
      "Advance payment required"
    ]
  },
  {
    id: 3,
    title: "The Mezzanine Table",
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=1000",
    price: "RWF 250,000",
    features: [
      "Seats up to 6 guests",
      "Choice of 1 premium liquor bottle",
      "Elevated view of the entire lounge",
      "Mixers included",
      "Dedicated waitstaff"
    ]
  },
  {
    id: 4,
    title: "The Grandstand Table",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1000",
    price: "RWF 200,000",
    features: [
      "Seats up to 5 guests",
      "Choice of 1 standard premium bottle",
      "Comfortable luxury seating",
      "Free snacks included",
      "Perfect for medium groups"
    ]
  },
  {
    id: 5,
    title: "The Trackside Table",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000",
    price: "RWF 150,000",
    features: [
      "Seats up to 4 guests",
      "1 Champagne or Standard Spirit",
      "Close to the action and screens",
      "Standard table service",
      "Walk-ins accepted (subject to availability)"
    ]
  },
  {
    id: 6,
    title: "The Main Floor Table",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=1000",
    price: "RWF 100,000",
    features: [
      "Seats up to 4 guests",
      "Minimum spend deposit",
      "Right by the dancefloor",
      "Mixers included",
      "High energy vibe"
    ]
  }
];

export default function VipPage() {
  return (
    <div className={styles.pageContainer}>
      
      {/* Header */}
      <div className={`${styles.header} animate-fade-in`}>
        <h1 className={`${styles.title} heading`}>VIP Experience</h1>
        <p className={styles.subtitle}>
          Elevate your night out with our premium bottle service and exclusive table reservations. 
          Book in advance to secure your spot in Kigali's most sought-after nightlife destination.
        </p>
      </div>

      {/* Gallery Section */}
      <section className={`${styles.gallerySection} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
        <div className={styles.galleryGrid}>
          {VIP_TABLES.map((table) => (
            <VipCard key={table.id} {...table} />
          ))}
        </div>
      </section>

      {/* Contact & Reservation Section */}
      <ContactSection />
      
    </div>
  );
}
