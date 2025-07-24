/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Vercel
  output: 'export',
  
  // Base path if your app is served from a subdirectory
  // basePath: '/your-base-path',
  
  // Asset prefix if your app is served from a CDN
  // assetPrefix: '/your-cdn-path/',
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Enable compression
  compress: true,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com'],
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000',
  },
  
  // Enable source maps in production for debugging
  productionBrowserSourceMaps: true,
};

// Only require @next/bundle-analyzer in development
if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}