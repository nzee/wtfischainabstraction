/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'loremicon.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
            port: '',
            pathname: '/**',
          }
        ],
      },
};

export default nextConfig;
