/** @type {import("next").NextConfig} */
const nextConfig = {
  // ❌ Remove "i18n" because it cannot be used with output: export
  // i18n: undefined, // (Removed completely)

  // If you are exporting static site
  output: "export",

  // Fix your redirect
  async redirects() {
    return [
      {
        source: "/706b52414be744fc89aebf68cd06571b.txt",
        destination: "/api/indexnow-verify",
        permanent: false, // must be TRUE or FALSE
      },
    ];
  },
};

module.exports = nextConfig;
