import Image from "next/image";
import Link from "next/link";
import styles from "./events.module.css";
import { djLineup } from "@/lib/data/djLineup";
import ResidentDJsSection from "@/components/home/ResidentDJsSection";

export const metadata = {
  title: "Events | Paddock Lounge Kigali",
  description: "Join us for Epic Fridays, Ladies Affair, and Games Night. See what's happening this week at Paddock Lounge.",
};

// Map realistic Unsplash party/club images to the events
const eventImages: Record<string, string> = {
  'Industry Night': 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=800',
  'Games Night': 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
  'Mid-Week Vibe': 'https://images.unsplash.com/photo-1470229722913-7c092fb27218?auto=format&fit=crop&q=80&w=800',
  'Ladies Affair': 'https://images.unsplash.com/photo-1530103862676-de8892bf309c?auto=format&fit=crop&q=80&w=800',
  'Epic Fridays': 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80&w=800',
  'Saturday Turnup': 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=800',
  'Golden Oldies': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
};

export default function EventsPage() {
  // Only show the active scheduled events from djLineup
  const events = djLineup.filter(slot => slot.djName !== "DJ Chill" && slot.djName !== "DJ Mellow");

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <div className={`${styles.header} animate-fade-in`}>
        <h1 className={`${styles.title} heading font-vintage text-gold`}>The Lineup</h1>
        <p className={styles.subtitle}>
          Paddock Lounge is the pulse of Kigali's nightlife. From high-stakes Games Nights to Epic Fridays, discover our weekly curated experiences.
        </p>
      </div>

      {/* Events Grid */}
      <section className={`${styles.eventsGrid} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <img 
              src={eventImages[event.djName] || eventImages['Epic Fridays']} 
              alt={event.djName}
              className={styles.eventImage}
              loading="lazy"
            />
            <div className={styles.eventContent}>
              <span className={styles.eventDay}>{event.day}</span>
              <h3 className={styles.eventTitle}>{event.djName}</h3>
              <p className={styles.eventGenre}>{event.genre}</p>
              
              <div className={styles.eventMeta}>
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {event.time}
              </div>

              <Link href="/vip" className={styles.bookButton}>
                Book VIP Table
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* The Talent Section */}
      <ResidentDJsSection />
    </div>
  );
}
