/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import GigsView from '@/Components/website/gigs';

/** Local Imports */
import { generateMetadata as getPageMetadata } from '@/config/metadata.config';

export const metadata: Metadata = getPageMetadata('gigs');

/** Main Export */
export default function GigsPage() {
  return <GigsView />;
}
