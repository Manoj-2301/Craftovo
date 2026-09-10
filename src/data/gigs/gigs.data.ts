import { Gig } from '@/types/common.types';

export const gigs: Gig[] = [
  {
    id: 'business-website',
    slug: 'business-website',
    title: 'Business Website',
    category: 'Web Development',
    description: 'I will design and develop a modern responsive website for your business.',
    startingPrice: '₹40,000',
    deliveryDays: '14-21 days',
    revisions: '3 rounds',
    features: ['Responsive design', 'Basic SEO', 'Contact form', 'CMS setup'],
    packages: [],
    active: true,
  },
  {
    id: 'landing-page',
    slug: 'landing-page',
    title: 'Landing Page',
    category: 'Web Development',
    description: 'I will design and develop a high-converting landing page for your product or service.',
    startingPrice: '₹25,000',
    deliveryDays: '7-10 days',
    revisions: '2 rounds',
    features: ['High conversion focus', 'Responsive design', 'Lead capture'],
    packages: [],
    active: true,
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-commerce Website',
    category: 'Web Development',
    description: 'I will build a modern online store designed around your products and customers.',
    startingPrice: '₹80,000',
    deliveryDays: '30-45 days',
    revisions: 'Unlimited during design',
    features: ['Custom design', 'Payment gateway', 'Product management', 'Order tracking'],
    packages: [],
    active: true,
  }
];
