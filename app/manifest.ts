import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Locallify | Custom Software, Web & Mobile Apps',
    short_name: 'Locallify',
    description: 'Global software studio for custom software, web apps, mobile apps, AI features, and SEO + GEO.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0E',
    theme_color: '#0A0A0E',
    icons: [
      {
        src: '/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicons/favicon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
