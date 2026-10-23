/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import PrivacyView from '@/Components/website/privacy';

/** Local Imports */
import { generateMetadata as getPageMetadata } from '@/config/metadata.config';

export const metadata: Metadata = getPageMetadata('privacy');

/** Main Export */
export default function PrivacyPage() {
  return <PrivacyView />;
}
