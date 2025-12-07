export async function GET() {
  const key = "706b52414be744fc89aebf68cd06571b";
  const baseUrl = "https://www.rankupp.in";

  // Submit to multiple IndexNow endpoints
  const endpoints = [
    `https://www.bing.com/indexnow?url=${baseUrl}&key=${key}`,
    `https://api.indexnow.org/indexnow?url=${baseUrl}&key=${key}`,
    `https://yandex.com/indexnow?url=${baseUrl}&key=${key}`,
    `https://search.seznam.cz/indexnow?url=${baseUrl}&key=${key}`
  ];

  try {
    const results = await Promise.allSettled(
      endpoints.map(endpoint => fetch(endpoint))
    );

    return new Response(JSON.stringify({
      success: true,
      results: results.map((r, i) => ({
        endpoint: endpoints[i],
        status: r.status === 'fulfilled' ? 'success' : 'failed'
      }))
    }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), { status: 500 });
  }
}