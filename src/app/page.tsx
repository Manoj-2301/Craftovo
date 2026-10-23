/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import HomeView from '@/Components/website/home';

/** Local Imports */
import { generateMetadata as getPageMetadata } from '@/config/metadata.config';

export const metadata: Metadata = getPageMetadata('home');

/** Main Export */
export default function HomePage() {
  return <HomeView />;
}
