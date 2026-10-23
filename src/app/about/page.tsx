/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import AboutView from '@/Components/website/about';

/** Local Imports */
import { generateMetadata as getPageMetadata } from '@/config/metadata.config';

export const metadata: Metadata = getPageMetadata('about');

/** Main Export */
export default function AboutPage() {
  return <AboutView />;
}
