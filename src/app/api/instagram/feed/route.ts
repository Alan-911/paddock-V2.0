import { getInstagramFeed } from '@/lib/instagram';
import type { InstagramFeedResponse } from '@/lib/types/instagram';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '12', 10), 25);

    const { posts, fromCache } = await getInstagramFeed(limit);

    const response: InstagramFeedResponse = {
      posts,
      fromCache,
      fallback: posts.length === 0,
    };

    return Response.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('[API] Instagram feed error:', error);
    return Response.json(
      { posts: [], fromCache: false, fallback: true } satisfies InstagramFeedResponse,
      { status: 200 } // Return 200 so clients handle fallback gracefully
    );
  }
}
