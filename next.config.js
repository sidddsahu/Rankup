/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    serverComponentsExternalPackages: ["sharp", "mongoose"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
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
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      { source: "/sitemap.xml", destination: "/api/sitemap" },
      { source: "/sitemap-:page.xml", destination: "/api/sitemap?page=:page" },
      { source: "/feed.xml", destination: "/api/feed" },
      { source: "/robots.txt", destination: "/api/robots" },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "rankupp.in" }],
        destination: "https://www.rankupp.in/:path*",
        permanent: true,
      },
      { source: "/neet", destination: "/neet-ug", permanent: true },
      { source: "/mbbs-coaching", destination: "/courses", permanent: true },
      { source: "/blog/:slug", destination: "/resources/:slug", permanent: true },

      {
        source: `/${
          process.env.INDEX_NOW_KEY || "706b52414be744fc89aebf68cd06571b"
        }.txt`,
        destination: "/api/indexnow-verify",
      },
    ];
  },

  compress: true,
  generateEtags: true,

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

  output: "export", // FOR STATIC EXPORT
  trailingSlash: false,
};

module.exports = nextConfig;
