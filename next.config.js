/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core Settings
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Experimental Features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    serverComponentsExternalPackages: ["sharp", "mongoose"],
  },

  // Security & SEO Headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "X-IndexNow-Key",
            value:
              process.env.INDEX_NOW_KEY ||
              "706b52414be744fc89aebf68cd06571b",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },

      // Service Worker
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },

      // Manifest
      {
        source: "/manifest.json",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },

      // .txt static files
      {
        source: "/(.*)\\.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // robots.txt
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },

      // sitemap.xml
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },

      // Static assets
      {
        source: "/:path*(jpg|jpeg|png|gif|webp|avif|ico|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Rewrites
  async rewrites() {
    return [
      { source: "/sitemap.xml", destination: "/api/sitemap" },
      { source: "/sitemap-:page.xml", destination: "/api/sitemap?page=:page" },
      { source: "/feed.xml", destination: "/api/feed" },
      { source: "/robots.txt", destination: "/api/robots" },
    ];
  },

  // Redirects (FULLY FIXED)
  async redirects() {
    return [
      // Remove trailing slash
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },

      // Non-www → www
      {
        source: "/:path*",
        has: [{ type: "host", value: "rankupp.in" }],
        destination: "https://www.rankupp.in/:path*",
        permanent: true,
      },

      // Common redirects
      { source: "/neet", destination: "/neet-ug", permanent: true },
      { source: "/mbbs-coaching", destination: "/courses", permanent: true },
      { source: "/blog/:slug", destination: "/resources/:slug", permanent: true },

      // IndexNow Verification — FIXED ✔
      {
        source: `/${
          process.env.INDEX_NOW_KEY || "706b52414be744fc89aebf68cd06571b"
        }.txt`,
        destination: "/api/indexnow-verify",
        permanent: false, // required
      },
    ];
  },

  // Environment Variables
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://www.rankupp.in",
    INDEX_NOW_KEY:
      process.env.INDEX_NOW_KEY || "706b52414be744fc89aebf68cd06571b",
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION || "",
    BING_SITE_VERIFICATION: process.env.BING_SITE_VERIFICATION || "",
    YANDEX_SITE_VERIFICATION: process.env.YANDEX_SITE_VERIFICATION || "",
  },

  // Disable i18n because static export does NOT support it
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  // Webpack
  webpack: (config, { dev }) => {
    try {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    } catch {}
    if (dev) config.devtool = "cheap-module-source-map";
    return config;
  },

  // Export settings
  output: "export",
  trailingSlash: false,
  compress: true,
  generateEtags: true,
};

module.exports = nextConfig;
