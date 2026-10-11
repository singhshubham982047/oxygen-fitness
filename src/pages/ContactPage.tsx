import React from 'react';
import { ContactForm } from '../components/forms/ContactForm.tsx';
import { FOUNDER_INFO } from '../config/founder.ts';
import { useOwnerImage } from '../context/OwnerImageContext.tsx';
import { MapPin, Mail, Phone, Clock, Car, ShieldCheck, Instagram, UserCheck, Camera } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { ownerImage, openModal } = useOwnerImage();
  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
          Gym Operations & Helpdesk
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
          Connect with Oxygen Fitness
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
          Have questions about gym timings, monthly fees (₹800), personal training under founder Arpit Singh, or supplement inventory? Reach out directly or visit us at Kailahat bazaar.
        </p>
      </section>

      {/* Grid: Information + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                Kailahat Fitness Facility
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Located right in the heart of Kailahat bazaar with easy road connectivity and spacious parking for bikes and cars.
              </p>
            </div>

            {/* Owner & Founder Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 sm:w-16 h-14 sm:h-16 rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700 shrink-0 shadow-md">
                    <img
                      src={ownerImage}
                      alt={FOUNDER_INFO.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={openModal}
                      className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity text-white cursor-pointer"
                      title="Change owner photo"
                    >
                      <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-base truncate">{FOUNDER_INFO.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-800 text-zinc-300 border border-neutral-700">Owner</span>
                    </div>
                    <p className="text-xs text-zinc-400">Owner & Head Coach</p>
                    <p className="text-xs text-zinc-300 font-mono mt-0.5 font-bold">
                      <a href={`tel:${FOUNDER_INFO.phoneRaw}`} className="hover:underline">
                        {FOUNDER_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <a
                    href={FOUNDER_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-zinc-200 text-xs font-semibold border border-neutral-700 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-zinc-300" />
                    <span>{FOUNDER_INFO.instagram}</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-xs text-neutral-400">
                <span>Direct consultation & personal coaching under Arpit Singh</span>
                <button
                  onClick={openModal}
                  className="text-zinc-300 hover:text-white underline text-[11px] cursor-pointer"
                >
                  Change Photo
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <MapPin className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-white">Gym Address</h4>
                  <p className="text-zinc-200 font-semibold text-sm">
                    Kailahat Kailahat bazaar, Uttar Pradesh 231305
                  </p>
                  <p className="text-neutral-400">Near Main Market, Chunar/Mirzapur Highway Road</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <Phone className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-white">Direct Phone & WhatsApp</h4>
                  <p className="text-sm">
                    <a
                      href={`tel:${FOUNDER_INFO.phoneRaw}`}
                      className="text-white hover:text-zinc-300 font-bold font-mono text-base transition-colors"
                    >
                      {FOUNDER_INFO.phone}
                    </a>
                  </p>
                  <p className="text-neutral-400">Call or message for instant registration assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <Clock className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-white">Daily Workout Timings</h4>
                  <p className="text-neutral-300">
                    <strong className="text-white">Morning Shift:</strong> 5:30 AM – 11:30 AM
                  </p>
                  <p className="text-neutral-300">
                    <strong className="text-white">Evening Shift:</strong> 4:00 PM – 10:00 PM
                  </p>
                  <p className="text-neutral-400">
                    <strong className="text-white">Sunday:</strong> 6:00 AM – 1:00 PM (Recovery & Open Floor)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <Mail className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-white">Email Desk</h4>
                  <p className="text-neutral-300">
                    Email: <span className="text-zinc-300 font-mono">concierge@oxygenfitness.in</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Parking Details */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <Car className="w-4 h-4 text-zinc-300" />
                <h5 className="font-semibold text-white">Parking Facility</h5>
                <p className="text-neutral-400 text-[11px]">
                  Dedicated spacious parking for motorcycles, scooters, and cars right in front of the gym.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <ShieldCheck className="w-4 h-4 text-zinc-300" />
                <h5 className="font-semibold text-white">Supplement Counter</h5>
                <p className="text-neutral-400 text-[11px]">
                  Purchase 100% genuine whey, creatine, and pre-workouts directly at the gym desk.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
