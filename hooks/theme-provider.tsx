'use client';

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect } from 'react';

function ManifestThemeGenerateCookie({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const actualTheme = resolvedTheme || theme;
    document.cookie = `theme=${actualTheme};path=/;max-age=31536000`;
  }, [theme, resolvedTheme]);

  return children;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ManifestThemeGenerateCookie>{children}</ManifestThemeGenerateCookie>
    </NextThemesProvider>
  );
}
