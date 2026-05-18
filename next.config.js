/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ops',
        destination: '/suite',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
