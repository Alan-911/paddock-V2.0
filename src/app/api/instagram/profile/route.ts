import { getInstagramProfile } from '@/lib/instagram';

export async function GET() {
  try {
    const profile = await getInstagramProfile();

    if (!profile) {
      return Response.json(
        { fallback: true },
        { status: 200 }
      );
    }

    return Response.json({
      profile,
      fallback: false,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('[API] Instagram profile error:', error);
    return Response.json(
      { fallback: true },
      { status: 200 }
    );
  }
}
