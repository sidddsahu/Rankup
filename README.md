# RankUp — Next.js 14 Landing (Complete)

This project is a production-ready Next.js 14 landing page for the RankUp app with:

- TailwindCSS
- SEO best practices (metadata, OpenGraph, Twitter cards)
- Dynamic per-page JSON-LD schemas (WebPage + FAQ)
- JSON-LD Organization & MobileApplication (where needed)
- Google Analytics (gtag) boilerplate
- IndexNow ping script
- next-sitemap config for sitemap.xml generation

## Setup

1. Replace placeholders: `yourdomain.com`, GA ID `G-XXXXXXX`, IndexNow key.
2. Install deps: `npm install`
3. Dev: `npm run dev`
4. Generate sitemap: `npm run sitemap`
5. Trigger IndexNow: `npm run indexnow`

## Deploy
Recommended: Vercel — it supports Next.js app dir and provides best performance.

## Notes
- Fill `public/og-image.png` and `public/app-screenshot-1.webp` with real images.
- Update metadata in `app/layout.jsx` and page JSON-LD as necessary.
