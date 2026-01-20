/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    // Optimize SVG and PNG files
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
};

module.exports = nextConfig;
