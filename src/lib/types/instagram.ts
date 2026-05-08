// ─── Instagram Graph API Types ────────────────────────────────────

export interface InstagramPost {
  id: string;
  caption: string | null;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
}

export interface InstagramStory {
  id: string;
  media_type: 'IMAGE' | 'VIDEO';
  media_url: string;
  timestamp: string;
}

export interface InstagramFeedResponse {
  posts: InstagramPost[];
  fromCache: boolean;
  fallback: boolean;
}

export interface InstagramStoriesResponse {
  stories: InstagramStory[];
  fromCache: boolean;
  fallback: boolean;
}
