export async function GET() {
  const key = process.env.INDEX_NOW_KEY || '706b52414be744fc89aebf68cd06571b';

  return new Response(key, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}