import Link from "next/link";
import styles from "./events.module.css";
import { djLineup } from "@/lib/data/djLineup";
import { getInstagramFeed, extractHashtags, formatCount } from "@/lib/instagram";
import type { InstagramPost } from "@/lib/types/instagram";
import ResidentDJsSection from "@/components/home/ResidentDJsSection";

export const metadata = {
  title: "Events & DJ Lineup",
  description:
    "Discover upcoming events at Paddock Lounge Kigali — Epic Fridays, Ladies Affair, Games Night, and live DJ sets. See this week's lineup and book your VIP table.",
};

// Fallback Unsplash images — used when Instagram API is not configured
const fallbackImages: Record<string, string> = {
  'Industry Night': 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=800',
  'Games Night': 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
  'Mid-Week Vibe': 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=800',
  'Ladies Affair': 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
  'Epic Fridays': 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80&w=800',
  'Saturday Turnup': 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=800',
  'Golden Oldies': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
};

// Keywords to match Instagram posts to events
const eventKeywords: Record<string, string[]> = {
  'Industry Night': ['industry', 'monday', 'lounge', 'chill'],
  'Games Night': ['games', 'gaming', 'fifa', 'pool', 'tournament', 'tuesday'],
  'Mid-Week Vibe': ['midweek', 'wednesday', 'afrobeats'],
  'Ladies Affair': ['ladies', 'ladiesnight', 'thursday', 'rnb', 'amapiano'],
  'Epic Fridays': ['epicfriday', 'friday', 'epic', 'dancehall'],
  'Saturday Turnup': ['saturday', 'turnup', 'weekend'],
  'Golden Oldies': ['oldies', 'golden', 'sunday', 'classic'],
};

function extractTitleFromCaption(caption: string | null): string {
  if (!caption) return 'Paddock Event';
  const lines = caption.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return 'Paddock Event';
  let title = lines[0];
  if (title.length > 50) title = title.slice(0, 47) + '...';
  return title;
}

/** Match an Instagram post to an event name via caption keywords/hashtags */
function matchPostToEvent(post: InstagramPost): string | null {
  const caption = (post.caption || '').toLowerCase();

  // Filter out recaps / past event posts
  const pastKeywords = ['last friday', 'last week', 'about last night', 'recap', 'what happened', 'last saturday', 'relive'];
  for (const pastKw of pastKeywords) {
    if (caption.includes(pastKw)) return null;
  }

  const hashtags = extractHashtags(post.caption);
  const allText = caption + ' ' + hashtags.join(' ');

  for (const [eventName, keywords] of Object.entries(eventKeywords)) {
    for (const kw of keywords) {
      if (allText.includes(kw)) return eventName;
    }
  }
  return null;
}

export default async function EventsPage() {
  // Fetch real Instagram posts (server-side, cached)
  const { posts: igPosts } = await getInstagramFeed(25);

  // 1. Get today's day in Kigali timezone
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayDate = new Date();
  const kigaliTime = new Date(todayDate.toLocaleString("en-US", {timeZone: "Africa/Kigali"}));
  const todayDayName = daysOfWeek[kigaliTime.getDay()];

  // 2. Sort the djLineup so today is first
  const todayIndex = djLineup.findIndex(slot => slot.day === todayDayName);
  let sortedLineup = [...djLineup];
  if (todayIndex > 0) {
    sortedLineup = [...djLineup.slice(todayIndex), ...djLineup.slice(0, todayIndex)];
  }

  // 3. Build events to display (max 6, must have IG post)
  const eventsToDisplay = [];
  const usedPosts = new Set<string>();
  const highlightPosts: InstagramPost[] = [];

  // Collect highlight posts first
  for (const post of igPosts) {
    highlightPosts.push(post);
  }

  for (const event of sortedLineup) {
    if (event.djName === "DJ Chill" || event.djName === "DJ Mellow") continue;

    let matchedPost: InstagramPost | null = null;
    
    // Find the first matching IG post for this event that hasn't been used
    for (const post of igPosts) {
      const matchedEventName = matchPostToEvent(post);
      if (matchedEventName === event.djName && !usedPosts.has(post.id)) {
        matchedPost = post;
        usedPosts.add(post.id);
        break;
      }
    }

    if (matchedPost) {
      eventsToDisplay.push({
        ...event,
        dynamicTitle: extractTitleFromCaption(matchedPost.caption),
        igMatch: matchedPost
      });
    }

    if (eventsToDisplay.length === 6) break;
  }

  const hasIgData = highlightPosts.length > 0;

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <div className={`${styles.header} animate-fade-in`}>
        <h1 className={`${styles.title} heading font-vintage text-gold`}>The Lineup</h1>
        <p className={styles.subtitle}>
          Paddock Lounge is the pulse of Kigali&apos;s nightlife. From high-stakes Games Nights to Epic Fridays, discover our weekly curated experiences.
        </p>
      </div>

      {/* Events Grid */}
      <section className={`${styles.eventsGrid} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
        {eventsToDisplay.map((event, index) => {
          const imageSrc = event.igMatch.media_type === 'VIDEO' 
            ? (event.igMatch.thumbnail_url || event.igMatch.media_url) 
            : event.igMatch.media_url;

          return (
            <div key={index} className={styles.eventCard}>
              <div className={styles.eventImageWrap}>
                <img
                  src={imageSrc}
                  alt={event.dynamicTitle}
                  className={styles.eventImage}
                  loading="lazy"
                />
                <a
                  href={event.igMatch.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.igBadge}
                  title="View on Instagram"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {event.isSpecial && event.specialLabel && (
                  <span className={styles.specialBadge}>{event.specialLabel}</span>
                )}
              </div>
              <div className={styles.eventContent}>
                <span className={styles.eventDay}>{event.day}</span>
                <h3 className={styles.eventTitle}>{event.genre}</h3>
                <p className={styles.eventGenre} style={{ 
                  lineHeight: '1.4', 
                  maxHeight: '3em', 
                  overflow: 'hidden', 
                  display: '-webkit-box', 
                  WebkitLineClamp: 2, 
                  WebkitBoxOrient: 'vertical',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  {event.dynamicTitle}
                </p>

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
          );
        })}
      </section>

      {/* ─── Instagram Highlights Gallery ─── */}
      {hasIgData && (
        <section className={`${styles.highlightsSection} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
          <div className={styles.highlightsHeader}>
            <span className={styles.highlightsEyebrow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: 6 }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Live from @paddocklounge_f1
            </span>
            <h2 className={styles.highlightsTitle}>Recent Highlights</h2>
            <p className={styles.highlightsSubtitle}>
              Straight from our Instagram — the latest moments, events, and vibes at Paddock.
            </p>
          </div>

          <div className={styles.highlightsGrid}>
            {highlightPosts.slice(0, 12).map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.highlightCard}
              >
                <img
                  src={post.media_type === 'VIDEO' ? (post.thumbnail_url || post.media_url) : post.media_url}
                  alt={post.caption ? post.caption.slice(0, 80) : 'Paddock event'}
                  className={styles.highlightImg}
                  loading="lazy"
                />
                <div className={styles.highlightOverlay}>
                  {post.media_type === 'VIDEO' && (
                    <span className={styles.videoIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </span>
                  )}
                  <div className={styles.highlightStats}>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {formatCount(post.like_count)}
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                      </svg>
                      {formatCount(post.comments_count)}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.highlightsFooter}>
            <a
              href="https://www.instagram.com/paddocklounge_f1/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.followButton}
            >
              Follow @paddocklounge_f1
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </section>
      )}

      {/* The Talent Section */}
      <ResidentDJsSection />
    </div>
  );
}
