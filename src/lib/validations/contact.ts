import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name cannot exceed 100 characters.' }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: 'Email address is required.' })
    .email({ message: 'Please provide a valid email address.' })
    .max(120, { message: 'Email cannot exceed 120 characters.' }),

  subject: z
    .string()
    .trim()
    .min(3, { message: 'Subject must be at least 3 characters.' })
    .max(150, { message: 'Subject cannot exceed 150 characters.' }),

  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message cannot exceed 2,000 characters.' })
});

export type ContactFormData = z.infer<typeof contactSchema>;
