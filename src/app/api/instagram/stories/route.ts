import { getInstagramStories } from '@/lib/instagram';
import type { InstagramStoriesResponse } from '@/lib/types/instagram';

export async function GET() {
  try {
    const { stories, fromCache } = await getInstagramStories();

    const response: InstagramStoriesResponse = {
      stories,
      fromCache,
      fallback: stories.length === 0,
    };

    return Response.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('[API] Instagram stories error:', error);
    return Response.json(
      { stories: [], fromCache: false, fallback: true } satisfies InstagramStoriesResponse,
      { status: 200 }
    );
  }
}
