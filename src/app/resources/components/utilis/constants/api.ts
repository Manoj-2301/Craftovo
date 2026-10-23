export const Api = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
  endpoints: {
    contact: '/api/contact',
    projectIntake: '/api/project-intake',
    newsletter: '/api/newsletter',
  },
  baseurl(endpoint: string) {
    return `${this.baseUrl}${endpoint}`;
  }
};
