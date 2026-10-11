import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext.tsx';
import { useOwnerImage } from '../../context/OwnerImageContext.tsx';
import { OxygenLogo } from '../ui/OxygenLogo.tsx';
import { FOUNDER_INFO } from '../../config/founder.ts';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  ArrowRight,
  Search,
  CheckCircle2,
  AlertCircle,
  Instagram,
  UserCheck,
  Camera
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const { ownerImage, openModal } = useOwnerImage();
  const [refInput, setRefInput] = useState('');
  const [refLoading, setRefLoading] = useState(false);
  const [refResult, setRefResult] = useState<{
    found: boolean;
    data?: any;
    error?: string;
  } | null>(null);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanRef = refInput.trim();
    if (!cleanRef) return;

    setRefLoading(true);
    setRefResult(null);

    try {
      const res = await fetch(`/api/memberships/reference/${encodeURIComponent(cleanRef)}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setRefResult({ found: true, data: data.data });
      } else {
        setRefResult({
          found: false,
          error: data.message || 'Reference ID not found. Verify the code on your receipt.'
        });
      }
    } catch {
      setRefResult({
        found: false,
        error: 'Network connectivity error. Please try again.'
      });
    } finally {
      setRefLoading(false);
    }
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand & Founder info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <OxygenLogo className="h-8 w-auto text-white" />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Premier modern fitness sanctuary in Kailahat bazaar, Uttar Pradesh. Built for progressive strength training, fat loss conditioning, and authentic sports nutrition.
            </p>

            {/* Founder / Owner Card */}
            <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-2.5 max-w-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-neutral-800 border border-neutral-700 shrink-0">
                    <img
                      src={ownerImage}
                      alt={FOUNDER_INFO.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Owner: {FOUNDER_INFO.name}</span>
                    <span className="text-[10px] text-zinc-400 block">{FOUNDER_INFO.role}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href={FOUNDER_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-semibold text-zinc-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 px-2 py-1 rounded transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{FOUNDER_INFO.instagram}</span>
                  </a>
                  <button
                    onClick={openModal}
                    className="p-1 rounded bg-neutral-800 hover:bg-neutral-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Change owner photo"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <p className="text-[11px] text-neutral-400">
                Direct inquiries or personal fitness guidance directly with owner & head coach {FOUNDER_INFO.name}.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-300 pt-1">
              <ShieldCheck className="w-4 h-4 text-zinc-400" />
              <span>Affordable Indian Fitness: Starting ₹800/Month</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Oxygen Gym
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/programs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Workout Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/membership')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Membership Plans (₹800/mo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/supplements')}
                  className="text-zinc-200 hover:text-white font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Supplements Catalog</span>
                  <span className="text-[9px] bg-neutral-800 text-zinc-300 px-1.5 py-0.5 rounded font-mono">INR</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/join')}
                  className="text-zinc-200 hover:text-white font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Register Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Club Concierge & Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Club Location
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-neutral-300 font-medium leading-relaxed">
                  Kailahat Kailahat bazaar,<br />
                  Uttar Pradesh 231305, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href={`tel:${FOUNDER_INFO.phoneRaw}`}
                  className="text-neutral-200 hover:text-white font-semibold transition-colors"
                >
                  {FOUNDER_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href={FOUNDER_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white font-medium transition-colors"
                >
                  {FOUNDER_INFO.instagram}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>concierge@oxygenfitness.in</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <span>
                  Mon–Sat: 5:30 AM – 10:00 PM<br />
                  Sun: 6:00 AM – 1:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Registration Status Lookup */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Verify Registration
            </h4>
            <p className="text-xs text-neutral-400">
              Submitted your application? Check your review status:
            </p>
            <form onSubmit={handleLookup} className="space-y-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. OXY-2026-X8K9L2"
                  value={refInput}
                  onChange={(e) => setRefInput(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-xs rounded-lg px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-zinc-500 uppercase tracking-wider"
                />
                <button
                  type="submit"
                  disabled={refLoading || !refInput.trim()}
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 text-zinc-200 rounded-md text-xs font-medium flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Verify Application"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {refResult && (
              <div
                className={`p-3 rounded-lg border text-xs ${
                  refResult.found
                    ? 'bg-neutral-900 border-zinc-700 text-neutral-200'
                    : 'bg-neutral-900 border-rose-500/30 text-rose-300'
                }`}
              >
                {refResult.found && refResult.data ? (
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-zinc-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
                      <span>Application Located</span>
                    </div>
                    <p className="text-[11px] text-neutral-300">
                      Member: <strong className="text-white">{refResult.data.fullName}</strong>
                    </p>
                    <p className="text-[11px] text-neutral-400">
                      Plan: <span className="capitalize text-white">{refResult.data.membershipPlan}</span> · Status:{' '}
                      <span className="capitalize text-zinc-200 font-semibold">{refResult.data.status}</span>
                    </p>
                  </div>
                ) : (
                  <div className="flex items-start gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-400" />
                    <span>{refResult.error}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Oxygen Fitness Kailahat. Founded by Arpit Singh. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <button
              onClick={() => navigate('/privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact Kailahat Gym
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
