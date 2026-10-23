/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import ServicesView from '@/Components/website/services';

/** Local Imports */
import { generateMetadata as getPageMetadata } from '@/config/metadata.config';

export const metadata: Metadata = getPageMetadata('services');

/** Main Export */
export default function ServicesPage() {
  return <ServicesView />;
}
