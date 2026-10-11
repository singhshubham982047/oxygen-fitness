import React from 'react';
import { useRouter } from '../context/RouterContext.tsx';
import { ArrowLeft } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
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
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            Privacy Policy
          </h1>
          <p className="text-xs text-neutral-400">
            Last Updated: October 2026 · Oxygen Fitness, Kailahat, Uttar Pradesh
          </p>
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            1. Overview & Commitment
          </h2>
          <p>
            At Oxygen Fitness, your privacy is paramount. This Privacy Policy outlines the specific categories of personal information collected when you register for membership or submit inquiries through our web platform, how that information is processed, and our persistent storage standards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            2. Information We Collect
          </h2>
          <p>When you submit a membership registration at Oxygen Fitness, we collect:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
            <li><strong>Identity & Contact Information:</strong> Full legal name, verified email address, and direct telephone number.</li>
            <li><strong>Demographic Information (Optional):</strong> Date of birth (to verify adult membership eligibility) and gender identity.</li>
            <li><strong>Training Profile:</strong> Selected membership plan (Monthly ₹800, Quarterly ₹2,100, Annual ₹8,000), primary fitness objective (e.g. Muscle Building, Strength Training), and current training experience level.</li>
            <li><strong>Administrative Notes:</strong> Preferred start date and health notes or athletic background disclosures voluntarily provided.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            3. Database Storage & Security Architecture
          </h2>
          <p>
            All membership registrations are processed via server-side APIs and stored in an enterprise MongoDB database. We enforce strict data sanitization, schema constraints, and parameterized ODM queries to prevent injection attacks. Database credentials and connection secrets are strictly isolated on server environments and are never exposed to browser clients.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            4. Purpose of Data Processing
          </h2>
          <p>Your data is utilized strictly for the following operational tasks:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
            <li>Recording and confirming your fitness club membership application with a unique registration reference.</li>
            <li>Enabling founder Arpit Singh and staff to contact you regarding membership review, club tours, and facility induction.</li>
            <li>Managing facility check-in and gym pass records at Kailahat bazaar.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, monetize, or trade applicant personal data with third-party marketing brokers or advertising networks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            5. Payment Information
          </h2>
          <p>
            The initial Oxygen Fitness registration portal is an application intake system. We do not solicit, store, or process payment card numbers or bank credentials through this online form. Financial transactions occur only during in-person onboarding at Kailahat bazaar, Uttar Pradesh.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            6. Your Rights & Data Inquiries
          </h2>
          <p>
            Under applicable privacy frameworks, you retain the right to inspect, update, or request the deletion of your registration record at any time. To exercise these rights, submit your registration reference to <span className="text-zinc-200 font-mono">concierge@oxygenfitness.in</span> or call <span className="text-zinc-200 font-mono">073803 03271</span>.
          </p>
        </section>
      </div>
    </div>
  );
};
