/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack is now stable in Next.js 15, no need for experimental flag
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable modern features
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig