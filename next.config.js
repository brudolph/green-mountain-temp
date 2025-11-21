/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // static export configuration
  output: 'export',
  images: { unoptimized: true },
}

module.exports = nextConfig
