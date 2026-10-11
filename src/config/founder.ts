export interface FounderInfo {
  name: string;
  role: string;
  title: string;
  club: string;
  phone: string;
  phoneRaw: string;
  instagram: string;
  instagramUrl: string;
  address: string;
  addressShort: string;
  pincode: string;
  bio: string;
  philosophy: string;
  image: string;
  fallbackImage: string;
  certifications: string[];
}

export const FOUNDER_INFO: FounderInfo = {
  name: 'Arpit Singh',
  role: 'Owner & Founder',
  title: 'Owner & Head Coach, Oxygen Fitness',
  club: 'Oxygen Fitness',
  phone: '073803 03271',
  phoneRaw: '07380303271',
  instagram: '@oygenfitnessofficial',
  instagramUrl: 'https://instagram.com/oygenfitnessofficial',
  address: 'Kailahat Kailahat bazaar, Uttar Pradesh 231305',
  addressShort: 'Kailahat Bazaar, Uttar Pradesh',
  pincode: '231305',
  bio: 'Arpit Singh is the owner and founder behind Oxygen Fitness. Driven by an uncompromising passion for authentic physical conditioning, athletic longevity, and science-backed training, Arpit founded Oxygen Fitness in Kailahat bazaar to bring an elite gym experience, certified coaching, and genuine sports nutrition to the community.',
  philosophy: 'Real strength begins with consistency and science. At Oxygen Fitness, we provide the cleanest atmosphere, calibrated equipment, and authentic nutrition so every member can reach their highest physical potential.',
  image: '/founder.jpg',
  fallbackImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
  certifications: [
    'Certified Strength & Conditioning Specialist',
    'Advanced Sports Hypertrophy & Biomechanics',
    'Sports Nutrition & Supplement Specialist',
    'CPR & Emergency Safety Certified'
  ]
};
