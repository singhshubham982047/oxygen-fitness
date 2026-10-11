export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'How does the membership registration process work?',
    answer:
      'After submitting your application through our secure registration form, your details are instantly registered in our club database. Our membership concierge will review your preferred start date and fitness goals, then contact you within 24 hours to schedule your welcome orientation and keyless access activation.',
    category: 'Registration'
  },
  {
    question: 'Are there any hidden sign-up fees or maintenance dues?',
    answer:
      'None. All rates shown on our membership page are transparent. You pay only for the billing cycle chosen (Monthly, Quarterly, or Annual) with zero hidden facility fees or towel maintenance charges.',
    category: 'Billing'
  },
  {
    question: 'Can I freeze or cancel my membership if I travel?',
    answer:
      'Yes. Monthly members can cancel with a standard 14-day advance notice. Quarterly and Annual memberships include up to 60 days of complimentary travel hold per calendar year at no charge.',
    category: 'Policies'
  },
  {
    question: 'What are the gym hours and peak access times?',
    answer:
      'FitFlow is open 24 hours a day, 7 days a week for active members using secure digital key access. Dedicated coaching staff and concierge services are on site Monday through Friday from 6:00 AM to 10:00 PM, and weekends from 7:00 AM to 8:00 PM.',
    category: 'Facility'
  },
  {
    question: 'What equipment and amenities are included with membership?',
    answer:
      'All tiers include full access to Eleiko competition barbells, calibrated iron and bumper plates, Arsenal Strength and Prime Fitness selectorized machines, Woodway treadmills, infrared saunas, private showers, cold plunges, and organic grooming products.',
    category: 'Amenities'
  },
  {
    question: 'Can I bring a training partner or guest with me?',
    answer:
      'Yes! Monthly Flexible includes 1 guest pass per month; Quarterly includes 3 guest passes; and Annual Elite includes 12 guest passes plus unlimited weekend guest privileges.',
    category: 'Guest Passes'
  }
];
