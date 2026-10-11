import React from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import { FOUNDER_INFO } from '../config/founder.ts';
import { ArrowLeft } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans">
      <div className="space-y-4">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
            Club Regulations
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            Terms & Conditions
          </h1>
          <p className="text-xs text-neutral-400">
            Effective Date: October 2026 · Oxygen Fitness, Kailahat, Uttar Pradesh
          </p>
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            1. Membership Application & Admission
          </h2>
          <p>
            Submission of an online registration application constitutes an expression of intent to join Oxygen Fitness and authorization for our staff to evaluate facility capacity. Submission of this form does not guarantee automatic admittance. All applicants must complete a physical identity verification and welcome induction prior to key pass issuance at our Kailahat bazaar gym.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            2. Code of Floor Conduct & Etiquette
          </h2>
          <p>
            To preserve the high standard of training at Oxygen Fitness, all active members and trial guests agree to adhere to our gym standards:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
            <li><strong>Re-racking Responsibility:</strong> All barbells, weight plates, and dumbbells must be returned to designated storage racks immediately following use.</li>
            <li><strong>Hygiene & Cleanliness:</strong> Members must carry a gym towel and wipe down machine upholstery after heavy sets.</li>
            <li><strong>Respectful Environment:</strong> Safe gym atmosphere where every member is treated with mutual respect and athletic encouragement.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            3. Assumption of Risk & Health Self-Certification
          </h2>
          <p>
            Physical resistance training and cardiovascular exercise inherently involve physiological exertion. By registering, you attest that you are in adequate cardiovascular and musculoskeletal health to engage in athletic exercise. Oxygen Fitness assumes no liability for injuries resulting from reckless exercise execution without trainer guidance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            4. Membership Dues & Access
          </h2>
          <p>
            Gym access is granted for the registered duration (Monthly ₹800, Quarterly ₹2,100, or Yearly ₹8,000). Passes are non-transferable and valid during all operational workout shifts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            5. Cancellation & Freeze Provisions
          </h2>
          <p>
            <strong>Monthly Plan (₹800):</strong> Month-to-month commitment.<br />
            <strong>Quarterly Transformation (₹2,100):</strong> Includes up to 15 days of complimentary hold for exam/travel periods.<br />
            <strong>Yearly VIP (₹8,000):</strong> Includes up to 30 days of travel hold.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            6. Inquiries Regarding Terms
          </h2>
          <p>
            Direct questions regarding gym rules to founder Arpit Singh at <a href={`tel:${FOUNDER_INFO.phoneRaw}`} className="text-zinc-200 font-bold underline">{FOUNDER_INFO.phone}</a> or visit our front desk at Kailahat Kailahat bazaar, Uttar Pradesh 231305.
          </p>
        </section>
      </div>
    </div>
  );
};
