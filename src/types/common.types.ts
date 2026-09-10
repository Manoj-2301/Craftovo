export interface Service { id: string; slug: string; title: string; shortDescription: string; description: string; icon: string; features: string[]; technologies: string[]; active: boolean; }
export interface Project { id: string; slug: string; title: string; category: string; description: string; longDescription: string; image: string; gallery: string[]; technologies: string[]; featured: boolean; }
export interface Gig { id: string; slug: string; title: string; category: string; description: string; startingPrice: string; deliveryDays: string; revisions: string; features: string[]; packages: any[]; active: boolean; }
export interface FAQ { id: string; question: string; answer: string; active: boolean; }
