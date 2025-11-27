/** @type {import('next-sitemap').IConfig} */
const dynamicPages = [
  // Agar aapke app me dynamic pages hain, yaha unke paths add karo
  // Example: '/courses/1', '/courses/2', '/courses/3'
];

module.exports = {
  siteUrl: 'https://www.rankupp.in',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.8,
  transform: async (config, path) => {
    // Automatic sitemap entries for static + dynamic pages
    return {
      loc: path, // URL
      changefreq: 'daily',
      priority: dynamicPages.includes(path) ? 0.9 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    return dynamicPages.map((page) => ({
      loc: page,
      changefreq: 'daily',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));
  },
};
