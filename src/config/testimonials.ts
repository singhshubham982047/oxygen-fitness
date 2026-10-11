export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  duration: string;
  quote: string;
  plan: string;
  focus: string;
  avatar: string;
}

// Sample illustrative member feedback for presentation purposes
export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sample-1',
    name: 'Marcus Vance',
    role: 'Architect & Powerlifter',
    duration: 'Member since 2024',
    quote:
      'The calibrated plates, chalk-friendly platforms, and lighting make this hands down the most focused training atmosphere I have experienced. The staff respects serious lifting.',
    plan: 'Annual Elite',
    focus: 'Strength Training',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'sample-2',
    name: 'Elena Rostova',
    role: 'Biochemist & Trail Runner',
    duration: 'Member since 2025',
    quote:
      'I transitioned from chronic knee fatigue to fluid 20km trail runs thanks to the functional mobility coaching and Woodway treadmills. The recovery cold plunge is a game changer.',
    plan: 'Quarterly Builder',
    focus: 'Cardio & Mobility',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'sample-3',
    name: 'Darius Chen',
    role: 'Product Designer',
    duration: 'Member since 2025',
    quote:
      'No crowded waiting lines for racks, immaculate locker suites, and coaches who understand anatomical mechanics. Registering online took two minutes.',
    plan: 'Monthly Flexible',
    focus: 'Muscle Building',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export interface CoachItem {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
}

// Sample illustrative coaching profiles for demonstrative purposes
export const SAMPLE_COACHES: CoachItem[] = [
  {
    id: 'coach-1',
    name: 'Tariq Sterling',
    specialty: 'Head of Strength & Biomechanics',
    experience: '12+ Years Coaching Experience',
    bio: 'Specializes in barbell kinematics, neuromuscular adaptation, and post-rehabilitation return to sport.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coach-2',
    name: 'Sophia Lindqvist',
    specialty: 'Performance Hypertrophy & Nutrition',
    experience: '8+ Years Coaching Experience',
    bio: 'Focuses on periodized hypertrophy splits, metabolic tracking, and female hormone-aware training cycles.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coach-3',
    name: 'Julian Mercer',
    specialty: 'Athletic Conditioning & Mobility',
    experience: '10+ Years Coaching Experience',
    bio: 'Former collegiate track trainer specializing in rotational power, agility ladders, and joint decompression.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80'
  }
];
