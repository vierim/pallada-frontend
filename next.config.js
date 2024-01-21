/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          '8f823f85-92cd089c-3186-42a3-961f-4c250ee2746f.s3.timeweb.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig
