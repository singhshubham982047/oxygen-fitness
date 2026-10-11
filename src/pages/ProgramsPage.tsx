import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import { TRAINING_PROGRAMS } from '../config/programs.ts';
import { FOUNDER_INFO } from '../config/founder.ts';
import { Check, ArrowRight, Clock, Gauge, Phone } from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'strength', label: 'Strength & Power' },
    { id: 'hypertrophy', label: 'Hypertrophy' },
    { id: 'conditioning', label: 'Conditioning & Cardio' },
    { id: 'bespoke', label: '1-on-1 Coaching' }
  ];

  const filteredPrograms = TRAINING_PROGRAMS.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'strength') return p.id.includes('strength');
    if (selectedFilter === 'hypertrophy') return p.id.includes('muscle');
    if (selectedFilter === 'conditioning') return p.id.includes('weight') || p.id.includes('cardio') || p.id.includes('functional');
    if (selectedFilter === 'bespoke') return p.id.includes('personal');
    return true;
  });

  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
          Training Methodologies
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
          Systematic disciplines. Lasting physiological adaptations.
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
          Each training discipline at Oxygen Fitness is anchored in exercise science, structured progressive overload, and biomechanical safety overseen by founder Arpit Singh. Choose your focus or blend them seamlessly.
        </p>
        <p className="text-[11px] text-neutral-500 italic">
          *Program schedules and splits are customized for Indian lifters in Kailahat bazaar.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-2 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider bg-neutral-950/85 backdrop-blur-md px-2.5 py-1 rounded text-neutral-200 border border-neutral-800">
                    {program.category}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                      {program.title}
                    </h3>
                    <p className="text-xs text-zinc-300 font-medium">{program.tagline}</p>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-neutral-400 py-2 border-y border-neutral-800">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-300" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-zinc-300" />
                      <span>Intensity: {program.intensity}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-300 block">
                      Key Physiological Benefits
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {program.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-zinc-300 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-[11px] text-neutral-400 bg-neutral-950/60 p-3 rounded-lg border border-neutral-800">
                    <strong className="text-neutral-300">Target Lifter:</strong> {program.suitedFor}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => navigate('/join')}
                  className="w-full py-3 rounded-xl bg-zinc-200 hover:bg-white active:scale-[0.99] text-neutral-950 font-bold text-xs tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Register for {program.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-8">
        <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
          Not sure which discipline aligns with your current fitness level?
        </h3>
        <p className="text-xs text-neutral-400 max-w-lg mx-auto">
          Every membership registration includes an induction screen and workout split planning with founder Arpit Singh.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigate('/join')}
            className="px-6 py-3 rounded-xl bg-zinc-200 hover:bg-white text-neutral-950 font-bold text-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule Your Gym Induction</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={`tel:${FOUNDER_INFO.phoneRaw}`}
            className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-zinc-300 hover:text-white font-semibold text-xs transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-zinc-400" />
            <span>Call: {FOUNDER_INFO.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
