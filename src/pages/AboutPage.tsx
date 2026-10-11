import React from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import { FOUNDER_INFO } from '../config/founder.ts';
import { FounderImage } from '../components/ui/FounderImage.tsx';
import {
  ArrowRight,
  ShieldCheck,
  Dumbbell,
  Clock,
  MapPin,
  Users,
  HeartPulse,
  Instagram,
  Phone,
  Sparkles,
  Award,
  CheckCircle2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-24 pb-20 space-y-20 font-sans">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-zinc-300">
          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
          <span>Kailahat Bazaar, Uttar Pradesh 231305</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-tight">
          Built for genuine physical transformation.
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
          Oxygen Fitness was founded by <strong>{FOUNDER_INFO.name}</strong> to deliver world-class gym equipment, science-based athletic coaching, and certified 100% authentic sports nutrition to Kailahat at accessible Indian membership rates from ₹800/month.
        </p>
      </section>

      {/* MEET THE FOUNDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Founder Image Card */}
            <div className="md:col-span-5 max-w-sm lg:max-w-md mx-auto w-full">
              <div className="aspect-[3/4] w-full">
                <FounderImage className="w-full h-full object-cover" showBadge={true} />
              </div>
            </div>

            {/* Founder Details & Bio */}
            <div className="md:col-span-7 space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-zinc-200 border border-neutral-700 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Gym Owner, Founder & Head Coach</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                  {FOUNDER_INFO.name}
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm font-medium">
                  Owner & Managing Director of Oxygen Fitness Kailahat
                </p>
              </div>

              {/* Direct Founder Contacts */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href={FOUNDER_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600 text-zinc-200 hover:text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-zinc-300" />
                  <span>{FOUNDER_INFO.instagram}</span>
                </a>

                <a
                  href={`tel:${FOUNDER_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600 text-zinc-200 hover:text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-zinc-300" />
                  <span>{FOUNDER_INFO.phone}</span>
                </a>

                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-950/60 border border-neutral-800 text-[11px] text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>Kailahat bazaar, UP</span>
                </div>
              </div>

              {/* Founder Bio */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {FOUNDER_INFO.bio}
              </p>

              {/* Founder Philosophy Quote */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950/80 border-l-2 border-zinc-400 border-y border-r border-neutral-800 space-y-1">
                <p className="text-xs text-zinc-300 italic leading-relaxed">
                  "{FOUNDER_INFO.philosophy}"
                </p>
                <span className="text-[11px] font-bold text-zinc-400 block pt-1">
                  — {FOUNDER_INFO.name}, Founder
                </span>
              </div>

              {/* Key Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1 sm:pt-2">
                {FOUNDER_INFO.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>

              {/* Direct Inquiry CTA */}
              <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3">
                <button
                  onClick={() => navigate('/join')}
                  className="px-5 py-2.5 rounded-xl bg-zinc-200 hover:bg-white text-neutral-950 font-bold text-xs tracking-tight transition-all shadow-md cursor-pointer"
                >
                  Join Oxygen Fitness from ₹800
                </button>
                <a
                  href={`tel:${FOUNDER_INFO.phoneRaw}`}
                  className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-zinc-200 font-semibold text-xs tracking-tight transition-all border border-neutral-700 flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Call Founder: {FOUNDER_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Facility Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] min-h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80"
            alt="Oxygen Fitness Kailahat Workout Floor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-xs">
            <span className="font-mono text-zinc-300 uppercase tracking-wider font-semibold">
              Kailahat Kailahat bazaar, Uttar Pradesh 231305
            </span>
            <span className="text-neutral-400">Full Air-Conditioned Training · Authentic Indian Supplement Desk</span>
          </div>
        </div>
      </section>

      {/* The 4 Architectural Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
            Core Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            The Four Foundations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <Dumbbell className="w-6 h-6 text-zinc-300" />
            <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
              Biomechanics First
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every station is selected for resistance profiles that respect natural joint articulation and provide pure muscle tension.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <HeartPulse className="w-6 h-6 text-zinc-300" />
            <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
              Targeted Progression
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Structured progressive overload splits customized for Indian body compositions, fat loss, muscle building, and athletics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <Users className="w-6 h-6 text-zinc-300" />
            <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
              Supportive Community
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              A respectful, zero-intimidation environment where beginner lifters and seasoned powerlifters train alongside with mutual support.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <ShieldCheck className="w-6 h-6 text-zinc-300" />
            <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
              Air & Cleanliness
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              High-ventilation cooling, hygienic sanitizer stations, and clean rubber flooring engineered for maximum training oxygenation.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Specs Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-neutral-800 pb-4">
            <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
              Club Technical Specifications
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              What members experience every day at Oxygen Fitness Kailahat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Founder & Coach</span>
                <span className="font-semibold text-white">{FOUNDER_INFO.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Contact Number</span>
                <span className="font-semibold text-white">{FOUNDER_INFO.phone}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Instagram Handle</span>
                <span className="font-semibold text-white">{FOUNDER_INFO.instagram}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Gym Location</span>
                <span className="font-semibold text-white">Kailahat bazaar, UP 231305</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Monthly Plan</span>
                <span className="font-semibold text-white">₹800 / month</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Quarterly (Popular)</span>
                <span className="font-semibold text-white">₹2,100 (₹700/mo)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Yearly Plan</span>
                <span className="font-semibold text-white">₹8,000 (Best Value)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Supplement Store</span>
                <span className="font-semibold text-white">100% Genuine Certified In-House</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Join */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
          Experience Oxygen Fitness in person.
        </h2>
        <p className="text-sm text-neutral-400 max-w-lg mx-auto">
          Submit your membership registration online. Head coach Arpit Singh and our staff will verify your application and invite you for a personal club tour.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => navigate('/join')}
            className="px-8 py-3.5 rounded-xl bg-zinc-200 hover:bg-white text-neutral-950 font-bold text-sm tracking-tight transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Apply for Membership (₹800/mo)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={`tel:${FOUNDER_INFO.phoneRaw}`}
            className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-zinc-200 hover:text-white font-semibold text-sm tracking-tight transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-zinc-400" />
            <span>Call: {FOUNDER_INFO.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
