/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // development
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**randomuser.me/*',
      },
    ],
  },
};

module.exports = nextConfig;
