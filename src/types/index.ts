export type MembershipPlan = 'monthly' | 'quarterly' | 'annual';

export type FitnessGoal =
  | 'muscle_building'
  | 'weight_loss'
  | 'general_fitness'
  | 'strength_training';

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

export type RegistrationStatus = 'pending' | 'reviewed' | 'confirmed' | 'cancelled';

export interface PlanConfig {
  id: MembershipPlan;
  name: string;
  tagline: string;
  price: number;
  billingCycle: string;
  savingsBadge?: string;
  popular?: boolean;
  features: string[];
  equipmentAccess: string;
  guestPasses: number;
  personalTrainingSessions: number;
}

export interface MembershipInput {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender?: string;
  membershipPlan: MembershipPlan;
  fitnessGoal: FitnessGoal;
  experienceLevel: ExperienceLevel;
  preferredStartDate?: string;
  additionalNotes?: string;
  consentAccepted: boolean;
}

export interface MembershipConfirmation {
  registrationReference: string;
  fullName: string;
  email: string;
  membershipPlan: MembershipPlan;
  status: RegistrationStatus;
  createdAt: string;
  message: string;
}

export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactConfirmation {
  inquiryReference: string;
  receivedAt: string;
  message: string;
}
