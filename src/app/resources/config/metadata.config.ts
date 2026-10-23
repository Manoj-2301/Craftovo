import type { Metadata } from 'next';
import { siteConfig } from './site.config';

export const defaultMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} — We Build Digital Experiences That Define Tomorrow`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Web Development',
    'Web Applications',
    'UI/UX Design',
    'Mobile Apps',
    'E-commerce',
    'Custom Software',
    'React',
    'Next.js',
    'Digital Agency'
  ],
  authors: [{ name: 'Craftovo Team' }],
  creator: 'Craftovo',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@craftovo',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }
    ]
  },
  other: {
    'application-name': 'Craftovo',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Craftovo',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#2F4CFF'
  }
};

export const pageMetadataMap: Record<string, Metadata> = {
  home: {
    title: 'Craftovo — Digital Experiences That Define Tomorrow',
    description: 'Elevate your brand with world-class web applications, immersive websites, and scalable digital ecosystems.',
  },
  about: {
    title: 'About Us',
    description: 'We are a dedicated designer and engineer duo building exceptional digital products that push boundaries.',
  },
  work: {
    title: 'Selected Work',
    description: 'A curated collection of our most impactful projects and digital products.',
  },
  services: {
    title: 'Our Services',
    description: 'Comprehensive digital solutions tailored to elevate your business in the modern landscape.',
  },
  gigs: {
    title: 'Productised Gigs',
    description: 'High-impact, pre-packaged services with clear deliverables and transparent pricing.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    description: 'Everything you need to know about how we work, our process, and what it is like to partner with us.',
  },
  contact: {
    title: 'Contact Us',
    description: 'Tell us about your next project. We typically respond within 24 hours.',
  },
  projectIntake: {
    title: 'Start a Project — Project Intake Brief',
    description: 'Interactive project brief wizard to help us understand your business, requirements, timeline, and budget.',
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'How Craftovo collects, uses, and protects your personal information.',
  },
  terms: {
    title: 'Terms of Service',
    description: 'The terms and conditions that govern use of Craftovo services and website engagements.',
  }
};

export const generateMetadata = (pageKey: string): Metadata => {
  const pageMeta = pageMetadataMap[pageKey];
  if (!pageMeta) {
    return defaultMetadata;
  }
  return {
    ...defaultMetadata,
    ...pageMeta,
  };
};
