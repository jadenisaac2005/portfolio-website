/** @type {import('next').NextConfig} */
const nextConfig = {
  // These are now at the top level, where they belong
  output: "export",
  images: {
    unoptimized: true,
  },

  // This webpack config is also at the top level
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = nextConfig;
