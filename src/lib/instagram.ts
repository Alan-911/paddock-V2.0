// ─── Instagram Graph API Client ───────────────────────────────────
// Server-only module: fetches posts & stories with in-memory cache.
// Falls back gracefully when the API is unavailable.

import type { InstagramPost, InstagramStory } from './types/instagram';

// ─── Config ───────────────────────────────────────────────────────
const IG_API_VERSION = 'v21.0';
const IG_BASE_URL = `https://graph.instagram.com/${IG_API_VERSION}`;

const FEED_CACHE_TTL = 5 * 60 * 1000;    // 5 minutes
const STORIES_CACHE_TTL = 2 * 60 * 1000; // 2 minutes (stories change fast)

// ─── In-Memory Cache ──────────────────────────────────────────────
type CacheEntry<T> = { data: T; timestamp: number };

let feedCache: CacheEntry<InstagramPost[]> | null = null;
let storiesCache: CacheEntry<InstagramStory[]> | null = null;

function isFresh<T>(cache: CacheEntry<T> | null, ttl: number): boolean {
  return cache !== null && Date.now() - cache.timestamp < ttl;
}

// ─── Fetch Instagram Profile Stats ──────────────────────────────────
export async function getInstagramProfile(): Promise<{
  followers_count: number;
  follows_count: number;
  media_count: number;
} | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!token || !userId || token === 'your_token_here') {
    return null;
  }

  try {
    const fields = 'followers_count,follows_count,media_count';
    const url = `${IG_BASE_URL}/${userId}?fields=${fields}&access_token=${token}`;

    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error(`[Instagram] Profile API error ${res.status}`);
      return null;
    }

    const json = await res.json();
    return {
      followers_count: json.followers_count || 0,
      follows_count: json.follows_count || 0,
      media_count: json.media_count || 0,
    };
  } catch (error) {
    console.error('[Instagram] Profile fetch error:', error);
    return null;
  }
}

// ─── Fetch Instagram Feed ─────────────────────────────────────────
export async function getInstagramFeed(limit = 12): Promise<{
  posts: InstagramPost[];
  fromCache: boolean;
}> {
  // Return fresh cache
  if (isFresh(feedCache, FEED_CACHE_TTL)) {
    return { posts: feedCache!.data.slice(0, limit), fromCache: true };
  }

  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!token || !userId || token === 'your_token_here') {
    console.warn('[Instagram] No valid access token configured');
    // Return stale cache if available
    if (feedCache) {
      return { posts: feedCache.data.slice(0, limit), fromCache: true };
    }
    return { posts: [], fromCache: false };
  }

  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count';
    const url = `${IG_BASE_URL}/${userId}/media?fields=${fields}&limit=${Math.min(limit, 25)}&access_token=${token}`;

    const res = await fetch(url, {
      next: { revalidate: 300 }, // ISR: revalidate every 5 min
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error(`[Instagram] API error ${res.status}:`, errBody);
      // Serve stale cache
      if (feedCache) {
        return { posts: feedCache.data.slice(0, limit), fromCache: true };
      }
      return { posts: [], fromCache: false };
    }

    const json = await res.json();
    const posts: InstagramPost[] = (json.data || []).map((item: Record<string, unknown>) => ({
      id: item.id as string,
      caption: (item.caption as string) || null,
      media_type: item.media_type as InstagramPost['media_type'],
      media_url: item.media_url as string,
      thumbnail_url: (item.thumbnail_url as string) || undefined,
      permalink: item.permalink as string,
      timestamp: item.timestamp as string,
      like_count: (item.like_count as number) || 0,
      comments_count: (item.comments_count as number) || 0,
    }));

    // Update cache
    feedCache = { data: posts, timestamp: Date.now() };

    return { posts: posts.slice(0, limit), fromCache: false };
  } catch (error) {
    console.error('[Instagram] Feed fetch error:', error);
    if (feedCache) {
      return { posts: feedCache.data.slice(0, limit), fromCache: true };
    }
    return { posts: [], fromCache: false };
  }
}

// ─── Fetch Instagram Stories ──────────────────────────────────────
export async function getInstagramStories(): Promise<{
  stories: InstagramStory[];
  fromCache: boolean;
}> {
  if (isFresh(storiesCache, STORIES_CACHE_TTL)) {
    return { stories: storiesCache!.data, fromCache: true };
  }

  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!token || !userId || token === 'your_token_here') {
    if (storiesCache) {
      return { stories: storiesCache.data, fromCache: true };
    }
    return { stories: [], fromCache: false };
  }

  try {
    const fields = 'id,media_type,media_url,timestamp';
    const url = `${IG_BASE_URL}/${userId}/stories?fields=${fields}&access_token=${token}`;

    const res = await fetch(url, {
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      console.error(`[Instagram] Stories API error ${res.status}`);
      if (storiesCache) {
        return { stories: storiesCache.data, fromCache: true };
      }
      return { stories: [], fromCache: false };
    }

    const json = await res.json();
    const stories: InstagramStory[] = (json.data || []).map((item: Record<string, unknown>) => ({
      id: item.id as string,
      media_type: item.media_type as InstagramStory['media_type'],
      media_url: item.media_url as string,
      timestamp: item.timestamp as string,
    }));

    storiesCache = { data: stories, timestamp: Date.now() };

    return { stories, fromCache: false };
  } catch (error) {
    console.error('[Instagram] Stories fetch error:', error);
    if (storiesCache) {
      return { stories: storiesCache.data, fromCache: true };
    }
    return { stories: [], fromCache: false };
  }
}

// ─── Refresh Long-Lived Token ─────────────────────────────────────
// Called by cron job every ~50 days to prevent token expiry (60 days).
export async function refreshAccessToken(): Promise<{
  success: boolean;
  newToken?: string;
  expiresIn?: number;
  error?: string;
}> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token || token === 'your_token_here') {
    return { success: false, error: 'No token configured' };
  }

  try {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`;
    const res = await fetch(url);

    if (!res.ok) {
      const errBody = await res.text();
      return { success: false, error: `API ${res.status}: ${errBody}` };
    }

    const json = await res.json();
    // Note: You must manually update the env var with the new token
    // Vercel does not allow runtime env var updates — log it for manual update
    console.log('[Instagram] Token refreshed successfully. New token expires in:', json.expires_in, 'seconds');
    console.log('[Instagram] IMPORTANT: Update INSTAGRAM_ACCESS_TOKEN in Vercel env vars with the new token.');

    return {
      success: true,
      newToken: json.access_token,
      expiresIn: json.expires_in,
    };
  } catch (error) {
    console.error('[Instagram] Token refresh error:', error);
    return { success: false, error: String(error) };
  }
}

// ─── Utility: Format engagement numbers ───────────────────────────
export function formatCount(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return String(num);
}

// ─── Utility: Extract hashtags from caption ───────────────────────
export function extractHashtags(caption: string | null): string[] {
  if (!caption) return [];
  const matches = caption.match(/#[\w]+/g);
  return matches ? matches.map(tag => tag.toLowerCase()) : [];
}
