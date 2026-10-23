/* React import */
import React from 'react';

/** Libraries */
import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';

/** Components */
import Navbar from '@/Components/common/navbar';
import Footer from '@/Components/common/footer';

/** Local Imports */
import { defaultMetadata } from '@/config/metadata.config';

/** Styles */
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: '#2F4CFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /** ---------- Render ---------- */
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <Navbar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
