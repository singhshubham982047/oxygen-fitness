import React from 'react';
import { RegistrationForm } from '../components/forms/RegistrationForm.tsx';
import { FOUNDER_INFO } from '../config/founder.ts';
import { Phone, MapPin } from 'lucide-react';

export const JoinPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 space-y-12 font-sans">
      {/* Intro Header */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-zinc-300">
          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
          <span>Kailahat Bazaar, Uttar Pradesh 231305</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
          Join Oxygen Fitness
        </h1>
        <p className="text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto">
          Start your transformation at Oxygen Fitness, Kailahat, Uttar Pradesh. Flexible plans starting from ₹800/month. No advance online payment needed.
        </p>

        {/* 3 Step Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-left max-w-2xl mx-auto text-xs">
          <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
            <span className="font-bold text-zinc-200 block">Step 1: Apply</span>
            <p className="text-neutral-400 text-[11px]">Submit details & receive unique reference ID.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
            <span className="font-bold text-neutral-300 block">Step 2: Verification</span>
            <p className="text-neutral-400 text-[11px]">Desk reviews goals and preferred start date.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
            <span className="font-bold text-neutral-300 block">Step 3: Induction</span>
            <p className="text-neutral-400 text-[11px]">Tour the floor, pay in person, start training.</p>
          </div>
        </div>

        <p className="text-xs text-neutral-400 pt-2">
          Need immediate phone assistance? Call founder Arpit Singh:{' '}
          <a href={`tel:${FOUNDER_INFO.phoneRaw}`} className="text-zinc-200 font-bold underline">
            {FOUNDER_INFO.phone}
          </a>
        </p>
      </section>

      {/* Main Registration Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RegistrationForm />
      </section>
    </div>
  );
};
