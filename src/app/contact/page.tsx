/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import ContactView from '@/Components/website/contact';

/** Local Imports */
import { generateMetadata as getPageMetadata } from '@/config/metadata.config';

export const metadata: Metadata = getPageMetadata('contact');

/** Main Export */
export default function ContactPage() {
  return <ContactView />;
}
