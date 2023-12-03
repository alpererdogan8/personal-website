import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/hooks/theme-provider";
import Header from "@/components/ui-server-components/header/header";
import Navbar from "@/components/ui-server-components/navbar/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Personal Website",
  description: "Alper's site",
  icons: {
    icon: {
      url: "/logo-light.ico",
      sizes: "64x64",
    },
  },
  // openGraph: {
  //   images: [{ url: "./LogoBlack.ico", width: 800, height: 600 }],
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="transition-all flex flex-col justify-center selection:bg-purple-500 selection:text-white  w-full max-w-2xl mx-auto px-8 sm:px-16 py-8 sm:py-12 ">
            <Header />
            <Navbar />
            {children}
            <Analytics />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
