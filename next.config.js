/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['picsum.photos', 'res.cloudinary.com', 'media2.dev.to', 'localhost', 'api.anggagumilang.my.id'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.anggagumilang.my.id/api/email' // Sesuaikan dengan path Anda
      }
    ]
  }
}

module.exports = nextConfig
