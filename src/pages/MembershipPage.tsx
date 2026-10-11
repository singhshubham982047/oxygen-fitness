import React from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import { MEMBERSHIP_PLANS } from '../config/plans.ts';
import { FOUNDER_INFO } from '../config/founder.ts';
import { Check, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

export const MembershipPage: React.FC = () => {
  const { navigate } = useRouter();

  const handleSelectPlan = (planId: string) => {
    navigate(`/join?plan=${planId}`);
  };

  return (
    <div className="pt-24 pb-20 space-y-20 font-sans">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
          Oxygen Fitness · Kailahat Bazaar
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
          Transparent Membership Pricing.
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
          Premium gym facilities in Kailahat at honest Indian prices. Monthly ₹800, Quarterly ₹2,100 (popular), and Yearly ₹8,000. No hidden admission fees.
        </p>

        {/* Clear Notice on Payment Handling */}
        <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 max-w-xl mx-auto text-left">
          <ShieldCheck className="w-5 h-5 text-zinc-300 shrink-0" />
          <span>
            <strong>Pay at Gym Counter:</strong> Online registration reserves your spot without advance online card deduction. You can inspect the floor in Kailahat bazaar and pay in person.
          </span>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {MEMBERSHIP_PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between relative transition-all duration-300 ${
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

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="py-4 border-y border-neutral-800 space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                        ₹{plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400">/{plan.id}</span>
                    </div>
                    <span className="text-[11px] text-zinc-300 font-semibold block">
                      {plan.billingCycle}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-300 block">
                      Included Privileges & Perks:
                    </span>
                    <ul className="space-y-2.5 text-xs text-neutral-300">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-[11px] text-neutral-400 space-y-1 border-t border-neutral-800">
                    <p>
                      <strong className="text-neutral-300">Gym Access:</strong> {plan.equipmentAccess}
                    </p>
                    <p>
                      <strong className="text-neutral-300">Guest Passes:</strong> {plan.guestPasses} per cycle
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-zinc-200 hover:bg-white text-neutral-950 shadow-md'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    <span>Apply for {plan.name} (₹{plan.price})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            Tier Comparison Matrix
          </h2>
          <p className="text-xs text-neutral-400">
            Compare all facilities across Monthly (₹800), Quarterly (₹2,100), and Yearly (₹8,000) tiers.
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-400 px-1 md:hidden">
          <span>← Swipe horizontally to see all plans</span>
          <span className="font-mono text-[11px] bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">3 Tiers</span>
        </div>

        <div className="overflow-x-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-3 sm:p-6 -mx-1 sm:mx-0">
          <table className="w-full text-left text-xs text-neutral-300 min-w-[500px]">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400 uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Amenity / Privilege</th>
                <th className="py-3 px-4 text-center">Monthly (₹800)</th>
                <th className="py-3 px-4 text-center text-zinc-200 font-bold">Quarterly (₹2,100)</th>
                <th className="py-3 px-4 text-center">Yearly (₹8,000)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Full Gym Floor & Free Weights</td>
                <td className="py-3 px-4 text-center text-zinc-200 font-semibold">Included</td>
                <td className="py-3 px-4 text-center text-zinc-200 font-semibold">Included</td>
                <td className="py-3 px-4 text-center text-zinc-200 font-semibold">Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Cardio Zone (Treadmill, Bike)</td>
                <td className="py-3 px-4 text-center text-zinc-200 font-semibold">Included</td>
                <td className="py-3 px-4 text-center text-zinc-200 font-semibold">Included</td>
                <td className="py-3 px-4 text-center text-zinc-200 font-semibold">Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Personal Workout & Diet Chart</td>
                <td className="py-3 px-4 text-center text-neutral-400">Basic Guidance</td>
                <td className="py-3 px-4 text-center text-zinc-200 font-semibold">Custom 12-Week Split</td>
                <td className="py-3 px-4 text-center text-zinc-200 font-semibold">VIP Periodic Updates</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">In-Gym Supplement Discount</td>
                <td className="py-3 px-4 text-center text-neutral-500">Standard Price</td>
                <td className="py-3 px-4 text-center text-zinc-200 font-semibold">5% Member Off</td>
                <td className="py-3 px-4 text-center text-zinc-200 font-semibold">10% VIP Off</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Effective Monthly Cost</td>
                <td className="py-3 px-4 text-center font-bold text-white">₹800 / mo</td>
                <td className="py-3 px-4 text-center font-bold text-zinc-200">₹700 / mo</td>
                <td className="py-3 px-4 text-center font-bold text-zinc-200">₹667 / mo</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Travel Freeze Allowance</td>
                <td className="py-3 px-4 text-center text-neutral-500">—</td>
                <td className="py-3 px-4 text-center">15 days hold</td>
                <td className="py-3 px-4 text-center">30 days hold</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Action</td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleSelectPlan('monthly')}
                    className="text-xs text-zinc-300 hover:text-white underline font-bold cursor-pointer"
                  >
                    Select ₹800
                  </button>
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleSelectPlan('quarterly')}
                    className="text-xs text-zinc-200 hover:text-white underline font-bold cursor-pointer"
                  >
                    Select ₹2,100
                  </button>
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleSelectPlan('annual')}
                    className="text-xs text-zinc-300 hover:text-white underline font-bold cursor-pointer"
                  >
                    Select ₹8,000
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Assistance hotline */}
        <div className="text-center pt-4">
          <p className="text-xs text-neutral-400">
            Need customized corporate or student plan? Call founder Arpit Singh at{' '}
            <a href={`tel:${FOUNDER_INFO.phoneRaw}`} className="text-zinc-200 font-bold underline">
              {FOUNDER_INFO.phone}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};
