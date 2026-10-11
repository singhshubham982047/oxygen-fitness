import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import { MEMBERSHIP_PLANS } from '../config/plans.ts';
import { TRAINING_PROGRAMS } from '../config/programs.ts';
import { FAQS } from '../config/faq.ts';
import { SUPPLEMENT_CATALOG } from '../config/supplements.ts';
import { FOUNDER_INFO } from '../config/founder.ts';
import { OxygenLogo } from '../components/ui/OxygenLogo.tsx';
import { FounderImage } from '../components/ui/FounderImage.tsx';
import {
  ArrowRight,
  ShieldCheck,
  Check,
  ChevronDown,
  Flame,
  Award,
  Clock,
  ShoppingBag,
  MapPin,
  Phone,
  Instagram,
  UserCheck
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 sm:space-y-32 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Ambient Dark Gradient Background with Subtle Metallic Glow */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
            alt="Oxygen Fitness Kailahat Training Floor"
            className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-zinc-400/10 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Logo Badge in Hero */}
          <div className="flex justify-center mb-2">
            <OxygenLogo className="h-14 sm:h-16 w-auto text-white drop-shadow-2xl" />
          </div>

          {/* Location Kick Header & Contact */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-semibold text-neutral-300 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>Kailahat Kailahat bazaar, Uttar Pradesh 231305</span>
            <span className="text-neutral-600 hidden sm:inline">·</span>
            <span className="text-zinc-200 font-bold">Plans from ₹800/mo</span>
            <span className="text-neutral-600 hidden sm:inline">·</span>
            <a
              href={`tel:${FOUNDER_INFO.phoneRaw}`}
              className="text-zinc-300 hover:text-white flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-zinc-400" />
              <span>{FOUNDER_INFO.phone}</span>
            </a>
          </div>

          {/* Strong Fitness Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif] leading-[1.08] break-words">
              UNLEASH YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                PEAK POWER & PHYSIQUE
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-normal px-2">
              Welcome to <strong>Oxygen Fitness</strong>, founded by <strong>{FOUNDER_INFO.name}</strong> in Kailahat bazaar. High-grade iron, heavy dumbbells, imported cardio machines, and authentic sports nutrition under one roof.
            </p>
          </div>

          {/* Primary Call-To-Action Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => navigate('/join')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-zinc-200 hover:bg-white active:scale-[0.98] text-neutral-950 font-extrabold text-sm sm:text-base tracking-tight transition-all shadow-xl shadow-zinc-200/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Join Oxygen Fitness (₹800/mo)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/supplements')}
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-zinc-200 hover:text-white font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-zinc-400" />
              <span>Supplements Catalog (INR)</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="pt-6 sm:pt-8 border-t border-neutral-800/60 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-center sm:text-left max-w-4xl mx-auto">
            <div className="p-2.5 sm:p-3 rounded-lg bg-neutral-900/40 sm:bg-transparent">
              <span className="block text-xl sm:text-2xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">₹800/mo</span>
              <span className="text-[11px] sm:text-xs text-neutral-400">Monthly Flexible Access</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-lg bg-neutral-900/40 sm:bg-transparent">
              <span className="block text-xl sm:text-2xl font-extrabold text-zinc-200 font-['Plus_Jakarta_Sans',sans-serif]">₹2,100</span>
              <span className="text-[11px] sm:text-xs text-neutral-400">Popular Quarterly Split</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-lg bg-neutral-900/40 sm:bg-transparent">
              <span className="block text-xl sm:text-2xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">100% Raw</span>
              <span className="text-[11px] sm:text-xs text-neutral-400">Authentic Supplement Desk</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-lg bg-neutral-900/40 sm:bg-transparent">
              <span className="block text-xl sm:text-2xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">Kailahat</span>
              <span className="text-[11px] sm:text-xs text-neutral-400">Bazaar, UP 231305</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER SPOTLIGHT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Founder Image */}
            <div className="md:col-span-5 max-w-sm mx-auto w-full">
              <div className="aspect-[3/4] w-full">
                <FounderImage className="w-full h-full object-cover" showBadge={true} />
              </div>
            </div>

            {/* Founder Details */}
            <div className="md:col-span-7 space-y-4 sm:space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-zinc-200 border border-neutral-700 text-xs font-bold uppercase tracking-wider">
                  <UserCheck className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Meet the Owner & Founder</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  {FOUNDER_INFO.name}
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm font-medium">
                  Owner & Head Coach, Oxygen Fitness Kailahat
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                "{FOUNDER_INFO.philosophy}"
              </p>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href={FOUNDER_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-zinc-200 hover:text-white text-xs font-bold transition-all cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-zinc-300" />
                  <span>{FOUNDER_INFO.instagram}</span>
                </a>

                <a
                  href={`tel:${FOUNDER_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-zinc-200 hover:text-white text-xs font-bold transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-zinc-300" />
                  <span>{FOUNDER_INFO.phone}</span>
                </a>

                <button
                  onClick={() => navigate('/about')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-zinc-400 hover:text-white font-semibold transition-colors cursor-pointer"
                >
                  <span>Read Founder Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION & CLUB ADVANTAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
                The Oxygen Fitness Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                Designed for those who take physical transformation seriously.
              </h2>
            </div>
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              At Oxygen Fitness, we provide the ultimate training environment in Kailahat bazaar with professional lifting setups, customized workout schedules, and direct guidance on both Indian home diets and certified sports nutrition.
            </p>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Whether you are preparing for police/defense physical exams, bodybuilding hypertrophy, strength building, or rapid healthy weight loss, our coaching under Arpit Singh is focused on measurable results.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                <ShieldCheck className="w-5 h-5 text-zinc-300" />
                <h4 className="text-sm font-bold text-white">Heavy Lifting Racks</h4>
                <p className="text-xs text-neutral-400">
                  Squat cages, Olympic bench presses, and heavy dumbbells up to 40 kg+.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                <Flame className="w-5 h-5 text-zinc-300" />
                <h4 className="text-sm font-bold text-white">Genuine Supplement Bar</h4>
                <p className="text-xs text-neutral-400">
                  ON, MuscleBlaze, AS-IT-IS with authentic batch verification codes.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>Read more about our facility in Kailahat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                alt="Oxygen Fitness Gym Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">Oxygen Fitness Floor</span>
                  <span className="text-neutral-400">Kailahat bazaar, Uttar Pradesh 231305</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED TRAINING DISCIPLINES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
              Training Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
              Tailored fitness programs for your goals.
            </h2>
          </div>
          <button
            onClick={() => navigate('/programs')}
            className="inline-flex items-center gap-2 text-sm font-bold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINING_PROGRAMS.slice(0, 3).map((program) => (
            <div
              key={program.id}
              className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded text-neutral-200 border border-neutral-800">
                  {program.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                    {program.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-neutral-800/80">
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {program.benefits.slice(0, 2).map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                        <span className="truncate">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate('/join')}
                    className="w-full py-2.5 rounded-lg bg-neutral-800 hover:bg-zinc-200 hover:text-neutral-950 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Register for Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MEMBERSHIP PLAN PREVIEWS WITH INDIAN RUPEE PRICING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
            Indian Rupee Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            Affordable, transparent gym membership.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Zero admission fee. Start with our flexible monthly plan at ₹800, or choose our popular Quarterly plan at ₹2,100 (₹700/mo), or annual at ₹8,000.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                plan.popular
                  ? 'bg-neutral-900 border-2 border-zinc-400 shadow-2xl shadow-zinc-400/5'
                  : 'bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-zinc-200 text-neutral-950 text-[10px] font-extrabold uppercase tracking-wider">
                  Most Popular Choice in Kailahat
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">{plan.tagline}</p>
                </div>

                <div className="flex items-baseline gap-1.5 pt-2 border-t border-neutral-800">
                  <span className="text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                    ₹{plan.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">/{plan.billingCycle}</span>
                </div>

                <ul className="space-y-2.5 text-xs text-neutral-300 pt-2">
                  {plan.features.slice(0, 4).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => navigate(`/join?plan=${plan.id}`)}
                  className={`w-full py-3 rounded-xl font-bold text-sm tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-zinc-200 hover:bg-white text-neutral-950 shadow-md'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                  }`}
                >
                  <span>Select {plan.name} (₹{plan.price})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. AUTHENTIC SUPPLEMENTS HIGHLIGHT SECTION */}
      <section className="bg-neutral-900/40 border-y border-neutral-850 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
                Oxygen Supplement Counter
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                100% Genuine Supplements with Indian Pricing.
              </h2>
              <p className="text-xs text-neutral-400">
                Pick up at Oxygen Fitness Kailahat bazaar. FSSAI approved, genuine batch scratch codes.
              </p>
            </div>
            <button
              onClick={() => navigate('/supplements')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-200 hover:bg-white text-neutral-950 text-xs font-bold transition-colors self-start md:self-auto cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Browse Full Catalog ({SUPPLEMENT_CATALOG.length} Products)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SUPPLEMENT_CATALOG.slice(0, 4).map((supp) => (
              <div
                key={supp.id}
                className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl overflow-hidden p-5 flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-950 relative">
                    <img
                      src={supp.image}
                      alt={supp.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 bg-neutral-950/85 text-[10px] font-bold uppercase text-white px-2 py-0.5 rounded">
                      {supp.brand}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm line-clamp-1 group-hover:text-zinc-200 transition-colors">
                      {supp.name}
                    </h4>
                    <span className="text-[11px] text-neutral-400">{supp.weightOrServings}</span>
                  </div>
                  <div className="flex items-baseline gap-2 pt-1 border-t border-neutral-800">
                    <span className="text-lg font-extrabold text-white">
                      ₹{supp.priceINR.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-neutral-500 line-through">
                      ₹{supp.mrpINR.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/supplements')}
                  className="w-full py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-zinc-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Details & Reserve</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
            Kailahat Gym FAQs
          </span>
          <h2 className="text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            Everything you need to know.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-zinc-200 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-zinc-200' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-neutral-400 leading-relaxed border-t border-neutral-800 pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. FINAL REGISTRATION CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-zinc-400/10 blur-[100px] rounded-full pointer-events-none" />

          <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
            Oxygen Fitness · Kailahat Bazaar
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif] max-w-2xl mx-auto leading-tight">
            Ready to train in the best gym in Kailahat?
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Apply online now. No advance online payment needed. Connect with founder <strong>{FOUNDER_INFO.name}</strong> or call <a href={`tel:${FOUNDER_INFO.phoneRaw}`} className="text-zinc-200 font-bold underline">{FOUNDER_INFO.phone}</a>.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/join')}
              className="px-8 py-4 rounded-xl bg-zinc-200 hover:bg-white text-neutral-950 font-extrabold text-base tracking-tight transition-all shadow-xl inline-flex items-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>Submit Registration (₹800/mo)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={`tel:${FOUNDER_INFO.phoneRaw}`}
              className="px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-700 text-zinc-200 font-bold text-base tracking-tight transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-zinc-400" />
              <span>Call: {FOUNDER_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
