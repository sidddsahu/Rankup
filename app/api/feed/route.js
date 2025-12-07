export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rankupp.in';

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>RankUp NEET-UG Preparation</title>
    <link>${baseUrl}</link>
    <description>Latest updates from RankUp NEET-UG preparation platform</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <item>
      <title>NEET UG 2025 Preparation Started</title>
      <link>${baseUrl}/resources/neet-ug-2025</link>
      <guid>${baseUrl}/resources/neet-ug-2025</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>Start your NEET UG 2025 preparation with RankUp's proven strategies</description>
    </item>
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}