/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 13.4+,
  // so we don't need experimental.appDir anymore.
  
  // Image optimization configuration
  images: {
    // Allow local images from public folder
    domains: ['localhost'],
    // Configure remote patterns for external images if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Disable image optimization for debugging if needed
    unoptimized: false,
  },
};

export default nextConfig;
