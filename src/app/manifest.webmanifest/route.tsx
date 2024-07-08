// app/manifest.webmanifest/route.js

import { Manifest } from 'next/dist/lib/metadata/types/manifest-types';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  // Tema tercihini almak için cookieleri kontrol edebilirsiniz
  const theme = cookies().get('theme')?.value;

  const iconSizes = [72, 96, 120, 128, 144, 152, 180, 192, 384, 512];
  const userAgent = request.headers.get('user-agent') || '';
  const isAppleDevice = /iPhone|iPad|iPod|Macintosh/.test(userAgent);
  const manifest: Manifest = {
    display: 'standalone',
    scope: '/',
    start_url: '/',
    name: 'Alper Erdogan',
    short_name: 'Æ',
    description: 'A Personal Website',
    icons: [
      ...iconSizes.map((size) => ({
        rel: isAppleDevice ? 'apple-touch-icon' : 'icon',
        src: `/${theme}/logo-${size}.png`,
        sizes: `${size}x${size}`,
        type: 'image/png',
      })),
      {
        src: `/${theme}/logo.ico`,
        sizes: '64x64',
        type: 'image/x-icon',
      },
    ],
    theme_color: theme === 'dark' ? '#000000' : '#FFFFFF',
    background_color: theme === 'dark' ? '#000000' : '#FFFFFF',
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/manifest+json',
    },
  });
}
