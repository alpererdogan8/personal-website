// app/manifest.webmanifest/route.js

import { Manifest } from 'next/dist/lib/metadata/types/manifest-types';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  // Tema tercihini almak için cookieleri kontrol edebilirsiniz
  // Bu örnekte varsayılan olarak 'dark' kullanıyoruz
  const theme = cookies().get('theme')?.value; // veya request.cookies.get('theme')?.value ?? 'dark'

  const iconSizes = [72, 96, 120, 128, 144, 152, 180, 192, 384, 512];

  const manifest: Manifest = {
    display: 'fullscreen',
    scope: '/',
    start_url: '/',
    name: 'Alper Erdogan',
    short_name: 'Æ',
    description: 'A Personal Website',
    icons: [
      ...iconSizes.map((size) => ({
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
    // @ts-ignore
    theme_color: theme === 'dark' ? '#000000' : '#FFFFFF',
    // @ts-ignore
    background_color: theme === 'dark' ? '#000000' : '#FFFFFF',
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/manifest+json',
    },
  });
}
