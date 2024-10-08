/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=1, stale-while-revalidate=3600',
          },
        ],
      },
      {
        source: '/partner',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=1, stale-while-revalidate=3600',
          },
        ],
      },
      {
        source: '/about',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=1, stale-while-revalidate=3600',
          },
        ],
      },
      {
        source: '/contact',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=1, stale-while-revalidate=3600',
          },
        ],
      },
    ];
  },
  images: {
    domains: [
      'vnoc.com',
      'cdn.vnoc.com',
      'd2qcctj8epnr7y.cloudfront.net',
      'vnoclogos.s3.amazonaws.com',
      'contentbots.com',
      'vnoclogos.s3-us-west-1.amazonaws.com',
      'tools.contrib.com',
      'contrib.com',
      'www.contrib.com',
      'vnoclogos.s3-us-west-1.amazonaws.com',
      'vnoc.com',
      's3.amazonaws.com',
      'images.pexels.com',
      'vbot-images.s3.us-east-1.amazonaws.com'
    ],
  },
};

module.exports = nextConfig;
