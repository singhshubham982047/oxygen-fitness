import { PlanConfig } from '../types/index.ts';

export const MEMBERSHIP_PLANS: PlanConfig[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    tagline: 'Standard full gym floor access with flexible month-to-month commitment.',
    price: 800,
    billingCycle: 'per month',
    popular: false,
    features: [
      'Unlimited access to all gym workout zones and heavy weight floor',
      'Cardio machines (treadmills, spin bikes, ellipticals)',
      'Clean changing rooms & personal lockers',
      'Initial fitness assessment & workout chart guidance',
      'No registration fee or hidden maintenance charge'
    ],
    equipmentAccess: 'Full weight training & cardio floor',
    guestPasses: 1,
    personalTrainingSessions: 0
  },
  {
    id: 'quarterly',
    name: 'Quarterly Transformation',
    tagline: 'Most recommended 90-day plan for visible body composition changes.',
    price: 2100,
    billingCycle: 'for 3 months (₹700/mo)',
    savingsBadge: 'Most Popular',
    popular: true,
    features: [
      'Everything in Monthly Plan',
      'Discounted effective rate of ₹700 per month (Save ₹300)',
      'Custom 12-week muscle building or fat loss split',
      'Complimentary diet & nutrition consultation',
      'Dietary supplement guidance from certified trainers',
      'Priority access to peak workout floor equipment'
    ],
    equipmentAccess: 'Complete gym floor + functional turf + strength racks',
    guestPasses: 2,
    personalTrainingSessions: 1
  },
  {
    id: 'annual',
    name: 'Yearly VIP Membership',
    tagline: 'The ultimate year-long athletic transformation at maximum savings.',
    price: 8000,
    billingCycle: 'for 12 months (₹667/mo)',
    savingsBadge: 'Save ₹1,600',
    popular: false,
    features: [
      'Everything in Quarterly Transformation',
      'Lowest rate: effectively only ₹667/month',
      'Complimentary Oxygen Fitness workout shaker & club kit',
      'Bi-monthly body fat & measurement tracking',
      'Up to 30 days travel freeze allowance without fee',
      'Exclusive member discount on in-gym supplement purchases'
    ],
    equipmentAccess: 'All-access VIP tier across all gym equipment',
    guestPasses: 5,
    personalTrainingSessions: 3
  }
];

export const getPlanById = (id: string): PlanConfig => {
  const found = MEMBERSHIP_PLANS.find((p) => p.id === id);
  return found || MEMBERSHIP_PLANS[0];
};

