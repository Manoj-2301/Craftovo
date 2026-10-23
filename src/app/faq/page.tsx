/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import FAQView from '@/Components/website/faq';

/** Local Imports */
import { generateMetadata as getPageMetadata } from '@/config/metadata.config';

export const metadata: Metadata = getPageMetadata('faq');

/** Main Export */
export default function FAQPage() {
  return <FAQView />;
}
