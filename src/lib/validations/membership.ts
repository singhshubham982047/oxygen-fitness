import { z } from 'zod';

export const membershipPlanValues = ['monthly', 'quarterly', 'annual'] as const;
export const membershipPlanEnum = z.enum(membershipPlanValues);

export const fitnessGoalValues = [
  'muscle_building',
  'weight_loss',
  'general_fitness',
  'strength_training'
] as const;
export const fitnessGoalEnum = z.enum(fitnessGoalValues);

export const experienceLevelValues = ['beginner', 'intermediate', 'advanced'] as const;
export const experienceLevelEnum = z.enum(experienceLevelValues);

export const membershipSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message: 'Full name should only contain letters, spaces, hyphens, and apostrophes.'
    }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: 'Email address is required.' })
    .email({ message: 'Please provide a valid email address.' })
    .max(120, { message: 'Email address cannot exceed 120 characters.' }),

  phone: z
    .string()
    .trim()
    .min(8, { message: 'Phone number must be at least 8 digits.' })
    .max(25, { message: 'Phone number is too long.' })
    .regex(/^[\d\s+\-().]+$/, {
      message: 'Phone number may only contain numbers, spaces, and standard formatting (+, -, parentheses).'
    }),

  dateOfBirth: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        const date = new Date(val);
        if (isNaN(date.getTime())) return false;
        const now = new Date();
        const age = now.getFullYear() - date.getFullYear();
        return age >= 14 && age <= 110;
      },
      { message: 'Members must be at least 14 years old with a valid birth date.' }
    ),

  gender: z
    .string()
    .trim()
    .max(50, { message: 'Gender value is too long.' })
    .optional(),

  membershipPlan: membershipPlanEnum,

  fitnessGoal: fitnessGoalEnum,

  experienceLevel: experienceLevelEnum,

  preferredStartDate: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        const start = new Date(val);
        if (isNaN(start.getTime())) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return start >= today;
      },
      { message: 'Preferred start date cannot be in the past.' }
    ),

  additionalNotes: z
    .string()
    .trim()
    .max(1000, { message: 'Notes cannot exceed 1,000 characters.' })
    .optional(),

  consentAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the Privacy Policy and Terms to proceed.'
  })
});

export type MembershipFormData = z.infer<typeof membershipSchema>;
