/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'superhuman.com',
      },
      {
        protocol: 'https',
        hostname: 'hardhat.org',
      },
      {
        protocol: 'https',
        hostname: 'metamask.io',
      },
      {
        protocol: 'https',
        hostname: 'a0.awsstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
    ],
  },
}

module.exports = nextConfig

