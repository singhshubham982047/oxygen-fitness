export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'Very High' | 'Custom';
  image: string;
  benefits: string[];
  suitedFor: string;
}

export const TRAINING_PROGRAMS: ProgramItem[] = [
  {
    id: 'strength-training',
    title: 'Pure Strength & Power',
    category: 'Barbell & Powerlifting',
    tagline: 'Master compound movements and build raw physical capacity.',
    description:
      'A structured program rooted in progressive overload across squats, deadlifts, bench press, and overhead mechanics. Guided by calibrated Eleiko plates and competition racks.',
    duration: '60–75 min sessions',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Significant neural adaptations and maximal force production',
      'Structural bone density and connective tissue reinforcement',
      'Individualized lifting percentage calculations and velocity tracking',
      'Certified coach feedback on technique and bar paths'
    ],
    suitedFor: 'Lifters looking to break strength plateaus and build resilient biomechanics.'
  },
  {
    id: 'muscle-building',
    title: 'Hypertrophy Architecture',
    category: 'Bodybuilding & Aesthetics',
    tagline: 'Sculpt balanced muscular symmetry through precision tension.',
    description:
      'Engineered for muscle hypertrophy using periodized volume, targeted mechanical tension, and customized metabolic stress protocols with premium pin-select and plate-loaded equipment.',
    duration: '50–65 min sessions',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Strategic exercise sequencing to maximize motor unit recruitment',
      'Targeted muscle group splits with deliberate tempo and range of motion',
      'Nutritional macronutrient guidelines tailored to lean mass accumulation',
      'Minimization of joint wear through ergonomic Prime & Arsenal machines'
    ],
    suitedFor: 'Individuals aiming for aesthetic physique development and muscle density.'
  },
  {
    id: 'weight-management',
    title: 'Metabolic Conditioning',
    category: 'Energy & Fat Loss',
    tagline: 'High-density caloric burn and cardiovascular conditioning.',
    description:
      'Dynamic hybrid training combining intervals, sled pushes, kettlebells, and bodyweight endurance to rev baseline metabolism and preserve lean muscle during calorie deficits.',
    duration: '45–55 min sessions',
    intensity: 'Very High',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'High EPOC (excess post-exercise oxygen consumption) burn rate',
      'Heart-rate zoned circuit training with live feedback telemetry',
      'Sustainable habit formation and sustainable lifestyle integration',
      'Improved insulin sensitivity and all-day vitality'
    ],
    suitedFor: 'Those prioritizing fat reduction, cardiovascular stamina, and dynamic energy.'
  },
  {
    id: 'functional-fitness',
    title: 'Kinetic Movement & Agility',
    category: 'Athletic Conditioning',
    tagline: 'Move smoothly across all planes with athletic coordination.',
    description:
      'Train movement patterns rather than isolated muscles. Utilizes turf lanes, plyometrics, suspension trainers, sandbags, and multi-planar mobility drills for real-world athleticism.',
    duration: '50 min sessions',
    intensity: 'Medium',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Rotational torque and core stabilization for injury prevention',
      'Enhanced joint range-of-motion and thoracic spine mobility',
      'Real-world coordination, decelerative braking power, and balance',
      'Adaptable workouts suitable for cross-sport transfer'
    ],
    suitedFor: 'Athletes, weekend warriors, and anyone seeking fluid, pain-free daily movement.'
  },
  {
    id: 'cardio-training',
    title: 'Endurance & Vo2 Max Engine',
    category: 'Cardiovascular Health',
    tagline: 'Elevate your aerobic threshold and cardiac output.',
    description:
      'Low-impact and high-yield cardio conditioning utilizing Woodway curved treadmills, Concept2 RowErgs and SkiErgs, and Wattbikes with heart-rate zone periodization.',
    duration: '40–60 min sessions',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Measurable expansion of aerobic base (Zone 2) and peak VO2 Max',
      'Reduced resting heart rate and arterial pressure',
      'Enhanced mitochondrial density and cellular recovery speed',
      'Non-impact running and rowing techniques that spare knee cartilage'
    ],
    suitedFor: 'Runners, cyclists, and all members wanting optimal cardiovascular health.'
  },
  {
    id: 'personal-training',
    title: 'Private Coaching & Protocol',
    category: '1-on-1 Dedicated Mentorship',
    tagline: 'One-on-one attention customized directly to your unique anatomy.',
    description:
      'Our senior coaches develop fully bespoke biomechanical programs, postural assessments, recovery tracking, and weekly progress audits tailored to your exact schedule and physiology.',
    duration: '60 min bespoke',
    intensity: 'Custom',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Comprehensive functional movement screen & postural alignment evaluation',
      'Direct hands-on tactile coaching on every repetition and set',
      'Accountability check-ins and tailored nutritional guidance',
      'Customized tapering, deloads, and active recovery planning'
    ],
    suitedFor: 'Members wanting the fastest, safest, and most precise path to their targets.'
  }
];
