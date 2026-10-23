/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import NotFoundView from '@/Components/website/not-found';

export const metadata: Metadata = {
  title: 'Page Not Found | Craftovo',
  description: 'The requested page could not be found on Craftovo Studio.',
};

export default function NotFound() {
  /** ---------- Render ---------- */
  return <NotFoundView />;
}
