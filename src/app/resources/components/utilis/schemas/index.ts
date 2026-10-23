import * as z from 'zod';
import formfields from '@/models/formfields.json';

export const contactSchema = z.object({
  name: z.string().min(2, formfields.contact.name.error),
  email: z.string().email(formfields.contact.email.error),
  service: z.string().optional(),
  details: z.string().min(10, formfields.contact.details.error),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const projectIntakeSchema = z.object({
  companyName: z.string().min(2, formfields.projectIntake.companyName.error),
  businessDescription: z.string().min(5, formfields.projectIntake.businessDescription.error),
  industry: z.string().optional(),
  projectType: z.string().optional(),
  currentSiteUrl: z.string().optional(),
  primaryGoal: z.string().optional(),
  successDefinition: z.string().optional(),
  primaryAudience: z.string().optional(),
  secondaryAudience: z.string().optional(),
  primaryDevice: z.string().optional(),
  primaryAction: z.string().optional(),
  pages: z.array(z.string()).optional(),
  dynamicFeatures: z.array(z.string()).optional(),
  needsCms: z.string().optional(),
  integrations: z.array(z.string()).optional(),
  budgetRange: z.string().optional(),
  targetLaunchDate: z.string().optional(),
  contactName: z.string().min(2, formfields.projectIntake.contactName.error),
  contactEmail: z.string().email(formfields.projectIntake.contactEmail.error),
  contactPhone: z.string().optional(),
});

export type ProjectIntakeFormValues = z.infer<typeof projectIntakeSchema>;
