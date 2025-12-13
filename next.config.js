/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  experimental: {
    appDir: true,
    legacyBrowsers: false
  },

  swcMinify: true,

  compiler: {
    removeConsole: true
  }
};

module.exports = nextConfig;
