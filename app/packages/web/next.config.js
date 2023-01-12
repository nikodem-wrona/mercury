/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  env: {
    API_URL: 'http://localhost:3002',
    AUTH0_DOMAIN: 'nikodems-home-lab.eu.auth0.com',
    AUTH0_CLIENT_ID: 'nwoFxoxjS1ZsJkpzuqo2PPLOE0gDMQSZ',
    AUTH0_AUDIENCE: 'https://nikodemwrona.dev/lab/analytics',
  }
}

module.exports = nextConfig
