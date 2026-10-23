/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import TermsView from '@/Components/website/terms';

/** Local Imports */
import { generateMetadata as getPageMetadata } from '@/config/metadata.config';

export const metadata: Metadata = getPageMetadata('terms');

/** Main Export */
export default function TermsPage() {
  return <TermsView />;
}
