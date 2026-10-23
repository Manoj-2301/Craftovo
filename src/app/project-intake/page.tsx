/* React import */
import React from 'react';

/** Libraries */
import type { Metadata } from 'next';

/** Components */
import ProjectIntakeView from '@/Components/website/project-intake';

/** Local Imports */
import { generateMetadata as getPageMetadata } from '@/config/metadata.config';

export const metadata: Metadata = getPageMetadata('projectIntake');

/** Main Export */
export default function ProjectIntakePage() {
  return <ProjectIntakeView />;
}
