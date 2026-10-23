/* React import */
import React from 'react';

/** Libraries */
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

/** Components */
import GigDetailView from '@/Components/website/gigs/gig-detail';

/** Local Imports */
import { gigs } from '@/models/gigs.data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gig = gigs.find((g) => g.slug === slug);
  if (!gig) return { title: 'Gig Not Found' };

  return {
    title: `${gig.title} — Productised Gig`,
    description: gig.description,
  };
}

export function generateStaticParams() {
  return gigs.map((g) => ({
    slug: g.slug,
  }));
}

/** Main Export */
export default async function GigDetailPage({ params }: Props) {
  const { slug } = await params;
  const gig = gigs.find((g) => g.slug === slug);

  if (!gig) {
    notFound();
  }

  return <GigDetailView gig={gig} />;
}
