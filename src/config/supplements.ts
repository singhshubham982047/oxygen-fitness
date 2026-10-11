export interface SupplementItem {
  id: string;
  name: string;
  brand: string;
  category: 'protein' | 'creatine' | 'preworkout' | 'bcaa' | 'gainer' | 'wellness';
  priceINR: number;
  mrpINR: number;
  weightOrServings: string;
  proteinPerServing?: string;
  flavors: string[];
  description: string;
  benefits: string[];
  certification: string;
  image: string;
  inStock: boolean;
  bestSeller?: boolean;
}

export const SUPPLEMENT_CATEGORIES = [
  { id: 'all', label: 'All Supplements' },
  { id: 'protein', label: 'Whey Protein' },
  { id: 'creatine', label: 'Creatine Monohydrate' },
  { id: 'preworkout', label: 'Pre-Workout & Energy' },
  { id: 'bcaa', label: 'BCAA & Intra-Workout' },
  { id: 'gainer', label: 'Mass Gainers' },
  { id: 'wellness', label: 'Peanut Butter & Vitamins' }
];

export const SUPPLEMENT_CATALOG: SupplementItem[] = [
  // 1. Whey Proteins
  {
    id: 'on-gold-standard-whey-2lb',
    name: 'Optimum Nutrition (ON) Gold Standard 100% Whey',
    brand: 'Optimum Nutrition',
    category: 'protein',
    priceINR: 3299,
    mrpINR: 3899,
    weightOrServings: '2 lbs (907 g) · 29 Servings',
    proteinPerServing: '24g Protein · 5.5g BCAAs',
    flavors: ['Double Rich Chocolate', 'Extreme Milk Chocolate', 'Vanilla Ice Cream'],
    description:
      'The world’s most awarded whey protein blend consisting of Whey Protein Isolate as primary ingredient. Fast-absorbing and ultra-filtered for lean muscle recovery.',
    benefits: [
      '24g premium protein blend per scoop',
      '5.5g naturally occurring BCAAs to support muscle repair',
      'Informed-Choice certified & banned substance tested',
      'Smooth mixability with water or milk'
    ],
    certification: '100% Authentic Imported with Scratch Auth Code',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    bestSeller: true
  },
  {
    id: 'mb-biozyme-performance-1kg',
    name: 'MuscleBlaze Biozyme Performance Whey',
    brand: 'MuscleBlaze',
    category: 'protein',
    priceINR: 2299,
    mrpINR: 2799,
    weightOrServings: '1 kg (2.2 lbs) · 28 Servings',
    proteinPerServing: '25g Protein · Enhanced Absorption',
    flavors: ['Rich Chocolate', 'Kesar Kulfi', 'Magical Mango', 'Cafe Mocha'],
    description:
      'India’s first clinically tested whey protein formulated for Indian bodies with Enhanced Absorption Formula (EAF®) for 50% higher protein absorption and zero stomach bloating.',
    benefits: [
      '25g protein & 11.75g EAAs per scoop',
      '50% higher protein absorption proven in clinical trials',
      'Awarded NutraIngredients USA Product of the Year',
      'FSSAI approved with unique authentication scratch code'
    ],
    certification: 'Labdoor Certified & Informed-Choice Tested',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    bestSeller: true
  },
  {
    id: 'asitis-pure-whey-1kg',
    name: 'AS-IT-IS Nutrition 100% Pure Whey Protein Concentrate 80%',
    brand: 'AS-IT-IS Nutrition',
    category: 'protein',
    priceINR: 1699,
    mrpINR: 2199,
    weightOrServings: '1 kg (2.2 lbs) · 33 Servings',
    proteinPerServing: '24g Protein (Unflavored Raw)',
    flavors: ['Unflavored Raw'],
    description:
      'Minimal processing, 100% unadulterated raw whey concentrate with no artificial flavors, colors, fillers, or added sugar. Maximum pure protein per rupee.',
    benefits: [
      '24g pure whey protein in every 30g scoop',
      '5.4g BCAAs and 4g Glutamine precursors',
      'Zero added sugars, emulsifiers, or preservatives',
      'Versatile for shakes, oats, and protein smoothies'
    ],
    certification: 'Labdoor Quality Tested & FSSAI Compliant',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'dymatize-iso100-hydrolyzed',
    name: 'Dymatize ISO100 Hydrolyzed 100% Whey Protein Isolate',
    brand: 'Dymatize',
    category: 'protein',
    priceINR: 3499,
    mrpINR: 4199,
    weightOrServings: '1.1 lbs (500 g) · 16 Servings',
    proteinPerServing: '25g Hydrolyzed Isolate · <1g Carb',
    flavors: ['Gourmet Chocolate', 'Fudge Brownie', 'Cookies & Cream'],
    description:
      'Ultra-pure hydrolyzed whey isolate formulated for fast digestion, rapid amino acid delivery, and zero digestive distress during intense cutting splits.',
    benefits: [
      '25g hydrolyzed whey isolate per serving',
      'Less than 1g sugar and less than 1g fat',
      'Informed-Choice tested for banned substances',
      'Rapid absorption for post-workout recovery'
    ],
    certification: '100% Genuine Importer Seal (GMC/Paradise)',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },

  // 2. Creatine Monohydrate
  {
    id: 'mb-creatine-creamp-250g',
    name: 'MuscleBlaze Creatine Monohydrate CreAMP (Micronized)',
    brand: 'MuscleBlaze',
    category: 'creatine',
    priceINR: 899,
    mrpINR: 1199,
    weightOrServings: '250 g · 83 Servings',
    proteinPerServing: '3g 100% Pure Creatine',
    flavors: ['Unflavored', 'Tangy Orange', 'Fruit Punch'],
    description:
      'Micronized 200-mesh creatine with CreAMP bioavailability formula to saturate muscle phosphocreatine stores, boosting explosive strength and bench press power.',
    benefits: [
      'Instant cellular ATP replenishment for heavy lifting',
      'Faster muscle volumization and intracellular hydration',
      'Zero grit texture with rapid dissolution',
      '83 heavy training sessions per pack'
    ],
    certification: 'Labdoor Certified & Authenticity Verification',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    bestSeller: true
  },
  {
    id: 'on-micronized-creatine-250g',
    name: 'Optimum Nutrition (ON) Micronized Creatine Powder',
    brand: 'Optimum Nutrition',
    category: 'creatine',
    priceINR: 1099,
    mrpINR: 1499,
    weightOrServings: '250 g · 83 Servings',
    proteinPerServing: '3g Pure Creatine Monohydrate',
    flavors: ['Unflavored'],
    description:
      'Pharmaceutical grade 99.9% pure Creapure-quality micronized creatine monohydrate. Unmatched purity for athletic speed and power output.',
    benefits: [
      '99.9% pure micronized creatine monohydrate',
      'Supports maximal power output during sprints and squats',
      'Unflavored for effortless mixing into protein shakes or juices',
      'Zero calories and zero artificial additives'
    ],
    certification: 'Genuine Importer Authenticated',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'wellcore-creatine-250g',
    name: 'Wellcore Pure Micronized Creatine Monohydrate',
    brand: 'Wellcore',
    category: 'creatine',
    priceINR: 999,
    mrpINR: 1299,
    weightOrServings: '250 g · 83 Servings',
    proteinPerServing: '3g Micronized Creatine',
    flavors: ['Unflavored', 'Blue Raspberry'],
    description:
      'Fine mesh creatine engineered for zero clumping and maximum muscle absorption. Proven to enhance muscular endurance and lean tissue accrual.',
    benefits: [
      'Micro-filtered for effortless mixing',
      'Promotes cellular hydration and hypertrophy',
      'Tested for heavy metals and purity'
    ],
    certification: 'Third-Party Batch Certified',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },

  // 3. Pre-Workouts & Energy
  {
    id: 'cellucor-c4-original-30s',
    name: 'Cellucor C4 Original Explosive Pre-Workout',
    brand: 'Cellucor',
    category: 'preworkout',
    priceINR: 2199,
    mrpINR: 2699,
    weightOrServings: '195 g · 30 Servings',
    proteinPerServing: '150mg Caffeine · 1.6g CarnoSyn Beta-Alanine',
    flavors: ['Icy Blue Razz', 'Fruit Punch', 'Watermelon'],
    description:
      'America’s #1 selling pre-workout powder with clinically studied CarnoSyn Beta-Alanine, Nitramax Arginine, and caffeine anhydrous for laser focus and skin-splitting pumps.',
    benefits: [
      '150mg caffeine for clean, focused training energy',
      '1.6g CarnoSyn® Beta-Alanine to delay muscle fatigue',
      '1g Creatine Nitrate (NO3-T®) for intense vascular pumps',
      'Zero sugar and rapid 15-minute kick-in'
    ],
    certification: 'Official Importer Sealed (GMC/SSNC)',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    bestSeller: true
  },
  {
    id: 'mb-preworkout-200',
    name: 'MuscleBlaze Pre-Workout 200 Extreme Focus',
    brand: 'MuscleBlaze',
    category: 'preworkout',
    priceINR: 1199,
    mrpINR: 1599,
    weightOrServings: '100 g · 30 Servings',
    proteinPerServing: '200mg Caffeine · 2.2g Citrulline Malate',
    flavors: ['Fruit Punch', 'Green Apple', 'Berry Blitz'],
    description:
      'High-potency Indian formulated pre-workout packing 200mg instant caffeine, 2.2g L-Citrulline, and BioPerine for heightened nutrient uptake and explosive energy.',
    benefits: [
      '200mg caffeine anhydrous for razor-sharp workout drive',
      '2.2g L-Citrulline for boosted nitric oxide vascularity',
      'BioPerine® for rapid gastrointestinal absorption',
      'Cost-effective power for high-intensity lifting'
    ],
    certification: 'FSSAI Verified & Anti-Doping Tested',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },

  // 4. BCAA & Intra-Workout Recovery
  {
    id: 'xtend-original-bcaa-30s',
    name: 'Scivation XTEND Original BCAA 7g',
    brand: 'XTEND / Scivation',
    category: 'bcaa',
    priceINR: 2099,
    mrpINR: 2599,
    weightOrServings: '420 g · 30 Servings',
    proteinPerServing: '7g BCAAs (2:1:1 Ratio) · 1g Citrulline',
    flavors: ['Watermelon Explosion', 'Blue Raspberry Ice', 'Mango Madness'],
    description:
      'The gold standard intra-workout electrolyte and amino acid drink. Supplies 7 grams of pure branched-chain amino acids with hydration electrolytes.',
    benefits: [
      '7g BCAAs in clinically researched 2:1:1 ratio',
      'Hydration blend with sodium, potassium, and magnesium',
      'Zero sugar, zero carbs, zero calories',
      'Prevents intra-workout muscle catabolism'
    ],
    certification: 'NSF & Informed-Choice Certified',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'mb-bcaa-pro-electrolyte',
    name: 'MuscleBlaze BCAA Pro with Electrolytes',
    brand: 'MuscleBlaze',
    category: 'bcaa',
    priceINR: 1099,
    mrpINR: 1499,
    weightOrServings: '250 g · 30 Servings',
    proteinPerServing: '7g BCAAs · 1g Glutamine · 1g Citrulline',
    flavors: ['Watermelon', 'Green Apple', 'Pineapple Delight'],
    description:
      'Formulated for hot Indian climates to combat cramp-inducing dehydration. Delivers branched-chain aminos alongside essential mineral electrolytes.',
    benefits: [
      '7g instantized BCAAs per serving',
      'Electrolytes for rapid sweat rehydration',
      '1g L-Glutamine for gut and immune support'
    ],
    certification: 'FSSAI Approved & Scratch Code Protected',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },

  // 5. Mass Gainers
  {
    id: 'mb-super-gainer-xxl-3kg',
    name: 'MuscleBlaze Super Gainer XXL High Calorie',
    brand: 'MuscleBlaze',
    category: 'gainer',
    priceINR: 2399,
    mrpINR: 3199,
    weightOrServings: '3 kg (6.6 lbs) · 30 Servings',
    proteinPerServing: '22.5g Protein · 112g Carbs · 562 Kcal',
    flavors: ['Chocolate', 'Banana', 'Kulfi'],
    description:
      'Engineered for hardgainers struggling to gain bodyweight. Combines fast and slow digesting carbs with multi-stage protein and 27 vital vitamins.',
    benefits: [
      '562 clean calories per serving in milk',
      '1:5 protein-to-carb ratio designed for bulk phase',
      'Fortified with 27 vitamins and minerals',
      'Zero added trans-fats and easy digestibility'
    ],
    certification: 'Labdoor Certified & FSSAI Compliant',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    bestSeller: true
  },
  {
    id: 'labrada-muscle-mass-gainer-3kg',
    name: 'Labrada Muscle Mass Gainer',
    brand: 'Labrada Nutrition',
    category: 'gainer',
    priceINR: 3199,
    mrpINR: 4199,
    weightOrServings: '3 kg (6.6 lbs) · 20 Servings',
    proteinPerServing: '52g Protein · 193g Carbs · 1240 Kcal (Full Serving)',
    flavors: ['Chocolate', 'Vanilla', 'Strawberry'],
    description:
      'High-calorie bodybuilding gainer created by IFBB Pro Lee Labrada. Contains BCAAs, creatine, and digestive enzymes for serious bulking regimens.',
    benefits: [
      'Up to 1,240 calories when taken with whole milk',
      '52g multi-source protein blend',
      'Includes creatine and essential amino acids',
      'Rich milkshake taste with easy blending'
    ],
    certification: 'Official Importer Authenticated',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },

  // 6. Peanut Butter & Daily Wellness
  {
    id: 'mb-high-protein-peanut-butter-1kg',
    name: 'MuscleBlaze High Protein Dark Chocolate Peanut Butter',
    brand: 'MuscleBlaze',
    category: 'wellness',
    priceINR: 499,
    mrpINR: 649,
    weightOrServings: '1 kg · 31 Servings',
    proteinPerServing: '30g Protein per 100g (Whey Enriched)',
    flavors: ['Dark Chocolate Crunchy', 'Classic Crunchy'],
    description:
      'Crafted with slow-roasted premium bold peanuts and enriched with pure whey protein concentrate. No hydrogenated oils, palm oil, or trans fats.',
    benefits: [
      '30% protein with whey isolate/concentrate blend',
      'Zero palm oil and zero trans-fats',
      'Rich Belgian dark chocolate taste',
      'High in dietary fiber and healthy heart monounsaturated fats'
    ],
    certification: 'FSSAI Certified Fresh Batch',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    bestSeller: true
  },
  {
    id: 'mb-fish-oil-omega3-90',
    name: 'MuscleBlaze Omega-3 Fish Oil (1000mg / 180 EPA & 120 DHA)',
    brand: 'MuscleBlaze',
    category: 'wellness',
    priceINR: 699,
    mrpINR: 899,
    weightOrServings: '90 Softgels · 90 Days Supply',
    proteinPerServing: '1000mg Fish Oil · Molecularly Distilled',
    flavors: ['Enteric Coated (No Fishy Burps)'],
    description:
      'Purified deep-sea fish oil providing essential EPA and DHA fatty acids to reduce lifting joint inflammation, lubricate cartilage, and protect heart health.',
    benefits: [
      '180mg EPA & 120mg DHA per softgel',
      'Molecularly distilled to eliminate heavy metals & mercury',
      'Anti-reflux enteric coating prevents fishy aftertaste',
      'Essential for heavy squats, deadlifts, and joint recovery'
    ],
    certification: 'Labdoor Tested for Purity & FSSAI',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'hk-vitals-multivitamin-60',
    name: 'HK Vitals Multivitamin with Zinc, Vitamin C, D3 & Ginseng',
    brand: 'HealthKart / HK Vitals',
    category: 'wellness',
    priceINR: 449,
    mrpINR: 599,
    weightOrServings: '60 Tablets · 60 Days Supply',
    proteinPerServing: '100% RDA of 12 Essential Vitamins & Minerals',
    flavors: ['Coated Tablets'],
    description:
      'Comprehensive daily micronutrient formulation designed for active gym goers to maintain cellular vitality, immune function, and hormonal balance.',
    benefits: [
      'Contains Zinc, Vitamin C, Vitamin D3, and Vitamin B-Complex',
      'Korean Ginseng extract to enhance daytime alertness',
      'Fills nutritional gaps in high-intensity training diets',
      'Supports connective tissue and collagen synthesis'
    ],
    certification: 'FSSAI Certified Dietary Supplement',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'fastandup-reload-electrolytes-20',
    name: 'Fast&Up Reload Hydration Effervescent Electrolytes',
    brand: 'Fast&Up',
    category: 'wellness',
    priceINR: 299,
    mrpINR: 370,
    weightOrServings: '20 Effervescent Tablets · 20 Servings',
    proteinPerServing: 'Sodium, Potassium, Magnesium, Calcium & B-Vitamins',
    flavors: ['Citrus', 'Berry', 'Orange'],
    description:
      'Informed-Sport certified effervescent drink that dissolves in water to replace critical electrolytes lost in heavy gym sweat, preventing painful muscle cramps.',
    benefits: [
      'Instant fizzy hydration drink in 15 seconds',
      'Informed-Sport UK Certified (No banned substances)',
      'Gentle on stomach with low sugar and rapid cellular absorption',
      'Ideal for heavy summer training sessions in UP'
    ],
    certification: 'Informed-Sport UK Certified',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    inStock: true
  }
];

export const getSupplementById = (id: string): SupplementItem | undefined => {
  return SUPPLEMENT_CATALOG.find((s) => s.id === id);
};
