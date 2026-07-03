/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: false,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
