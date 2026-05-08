import { refreshAccessToken } from '@/lib/instagram';

export async function POST(request: Request) {
  // Protect this endpoint — only allow calls with the correct secret
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const result = await refreshAccessToken();

  if (result.success) {
    return Response.json({
      message: 'Token refreshed successfully',
      expiresIn: result.expiresIn,
      // IMPORTANT: The new token is logged server-side.
      // You must update INSTAGRAM_ACCESS_TOKEN in Vercel env vars manually.
    });
  }

  return Response.json(
    { error: result.error },
    { status: 500 }
  );
}
