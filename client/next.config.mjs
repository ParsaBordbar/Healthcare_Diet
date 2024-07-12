/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // Add your environment variables here
  env: {
    DOMAIN_FILES: 'http://localhost:8080/',
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // Remove static export paths for dynamic routes, handled by getStaticPaths
  async exportPathMap(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/admin/panel': { page: '/admin/panel' },
      '/admin/panel/bmi': { page: '/admin/panel/bmi' },
      '/admin/panel/comments': { page: '/admin/panel/comments' },
      '/admin/panel/mediterranean': { page: '/admin/panel/mediterranean' },
      '/admin/panel/unvisited_diets': { page: '/admin/panel/unvisited_diets' },
      '/article': { page: '/article' },
    };
  },

  // Add trailing slash for compatibility
  exportTrailingSlash: true,
};

export default nextConfig;
