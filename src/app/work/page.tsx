/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import WorkView from '@/Components/website/work';

/** Local Imports */
import { generateMetadata as getPageMetadata } from '@/config/metadata.config';

export const metadata: Metadata = getPageMetadata('work');

/** Main Export */
export default function WorkPage() {
  return <WorkView />;
}
