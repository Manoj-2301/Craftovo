import { Project } from '@/types/common.types';

export const projects: Project[] = [
  {
    id: 'nexa-commerce',
    slug: 'nexa-commerce',
    title: 'Nexa Commerce',
    category: 'E-commerce',
    description: 'A modern commerce experience designed for a growing digital brand.',
    longDescription: 'We built a high-performance headless ecommerce solution using Next.js and Shopify.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=800',
    gallery: [],
    technologies: ['Next.js', 'TypeScript', 'Shopify'],
    featured: true,
  },
  {
    id: 'orbit-app',
    slug: 'orbit-app',
    title: 'Orbit Workspace',
    category: 'Web Application',
    description: 'A collaborative workspace tool for modern remote teams.',
    longDescription: 'A real-time collaboration tool built with React and WebSockets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800',
    gallery: [],
    technologies: ['React', 'Node.js', 'Socket.io'],
    featured: true,
  },
  {
    id: 'lumina-health',
    slug: 'lumina-health',
    title: 'Lumina Health',
    category: 'Mobile App',
    description: 'A health tracking application focusing on privacy and ease of use.',
    longDescription: 'A cross-platform mobile application for tracking daily health metrics.',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200&h=800',
    gallery: [],
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    featured: true,
  }
];
