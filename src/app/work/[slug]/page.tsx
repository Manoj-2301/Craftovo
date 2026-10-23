/* React import */
import React from 'react';

/** Libraries */
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

/** Components */
import ProjectDetailView from '@/Components/website/work/project-detail';

/** Local Imports */
import { projects } from '@/models/projects.data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Selected Work`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

/** Main Export */
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
