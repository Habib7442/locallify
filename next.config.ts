import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    qualities: [70, 75],
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      // Legacy /cities local-storefront pages retired in favor of a single,
      // genuinely useful location page (see /web-development-company-silchar).
      {
        source: '/cities/silchar',
        destination: '/web-development-company-silchar',
        permanent: true,
      },
      {
        source: '/cities/:city',
        destination: '/',
        permanent: true,
      },
      // Domain consolidation: locallify.in (+ www) and bare locallifyagency.com
      // all 301 to the single canonical host, path-preserving.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'locallify.in' }],
        destination: 'https://www.locallifyagency.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.locallify.in' }],
        destination: 'https://www.locallifyagency.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'locallifyagency.com' }],
        destination: 'https://www.locallifyagency.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
