/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core Settings
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [], // Add external image domains if needed
    minimumCacheTTL: 60 * 60 * 24, // 24 hours
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Experimental Features (updated for Next.js 14)
  experimental: {
    // appDir: true, // Removed - no longer experimental in Next.js 14
    optimizeCss: true,
    scrollRestoration: true,
    serverComponentsExternalPackages: ['sharp', 'mongoose'],
    // serverActions: { // Removed - enabled by default in Next.js 14
    //   bodySizeLimit: '2mb',
    // },
  },

  // Headers for Security & SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security Headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // SEO Headers
          {
            key: 'X-IndexNow-Key',
            value: process.env.INDEX_NOW_KEY || '706b52414be744fc89aebf68cd06571b',
          },
          {
            key: 'X-Clacks-Overhead',
            value: 'GNU Terry Pratchett',
          },
          // Performance Headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        source: '/(.*)\\.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      // Static assets
      {
        source: '/:path*(jpg|jpeg|png|gif|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Rewrites for SEO
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/sitemap-:page.xml',
        destination: '/api/sitemap?page=:page',
      },
      {
        source: '/feed.xml',
        destination: '/api/feed',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },

  // Redirects for SEO - FIXED
  async redirects() {
    return [
      // Remove trailing slashes
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      // Non-www to www - Fixed source format
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rankupp.in',
          },
        ],
        destination: 'https://www.rankupp.in/:path*',
        permanent: true,
      },
      // Common typos
      {
        source: '/neet',
        destination: '/neet-ug',
        permanent: true,
      },
      {
        source: '/mbbs-coaching',
        destination: '/courses',
        permanent: true,
      },
      // Old URLs to new
      {
        source: '/blog/:slug',
        destination: '/resources/:slug',
        permanent: true,
      },
      // IndexNow verification
      {
        source: `/${process.env.INDEX_NOW_KEY || '706b52414be744fc89aebf68cd06571b'}.txt`,
        destination: '/api/indexnow-verify',
        permanent: false,
      },
    ];
  },

  // Environment Variables
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rankupp.in',
    INDEX_NOW_KEY: process.env.INDEX_NOW_KEY || '706b52414be744fc89aebf68cd06571b',
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION || '',
    BING_SITE_VERIFICATION: process.env.BING_SITE_VERIFICATION || '',
    YANDEX_SITE_VERIFICATION: process.env.YANDEX_SITE_VERIFICATION || '',
  },

  // i18n Configuration (if needed) - FIXED
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    localeDetection: true, // This should be boolean, not string
    // Removed domains array as it's not compatible with app directory
    // If you need domain-based routing, you might need a different approach
  },

  // Compression
  compress: true,

  // Generate ETags
  generateEtags: true,

  // On Demand ISR
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
    pagesBufferLength: 5,
  },

  // Webpack Configuration
  webpack: (config, { dev, isServer }) => {
    // SVG Support - only add if @svgr/webpack is installed
    try {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    } catch (error) {
      console.log('@svgr/webpack not installed, skipping SVG rule');
    }

    // Source Maps in Development
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }

    return config;
  },

  // Export Configuration
  output: 'standalone',
  trailingSlash: false,

  // Production Browser Source Maps
  productionBrowserSourceMaps: false,
};

// Bundle Analyzer Configuration
if (process.env.ANALYZE === 'true') {
  try {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: true,
    });
    module.exports = withBundleAnalyzer(nextConfig);
  } catch (error) {
    console.log('@next/bundle-analyzer not installed, skipping bundle analysis');
    module.exports = nextConfig;
  }
} else {
  module.exports = nextConfig;
}