import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { membershipSchema, MembershipFormData } from '../../lib/validations/membership.ts';
import { MEMBERSHIP_PLANS } from '../../config/plans.ts';
import { useRouter } from '../../context/RouterContext.tsx';
import { useToast } from '../../context/ToastContext.tsx';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
  Lock,
  FileCheck2
} from 'lucide-react';

interface SubmissionResult {
  registrationReference: string;
  fullName: string;
  email: string;
  membershipPlan: string;
  status: string;
  createdAt: string;
}

export const RegistrationForm: React.FC = () => {
  const { navigate, queryParams } = useRouter();
  const toast = useToast();
  const [serverError, setServerError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<SubmissionResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Initialize form with defaults as specified
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<MembershipFormData>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: undefined,
      membershipPlan: 'monthly',
      fitnessGoal: 'muscle_building',
      experienceLevel: 'beginner',
      preferredStartDate: '',
      additionalNotes: '',
      consentAccepted: false
    }
  });

  const selectedPlan = watch('membershipPlan');

  // Sync plan if specified in URL query
  useEffect(() => {
    const planFromUrl = queryParams.get('plan');
    if (planFromUrl && ['monthly', 'quarterly', 'annual'].includes(planFromUrl)) {
      setValue('membershipPlan', planFromUrl as 'monthly' | 'quarterly' | 'annual');
    }
  }, [queryParams, setValue]);

  // Form submission handler
  const onSubmit = async (data: MembershipFormData) => {
    setServerError(null);

    try {
      const response = await fetch('/api/memberships', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to record registration. Please try again.');
      }

      // Successful persistence confirmation
      setSubmissionSuccess(result.data);
      toast.success(
        'Registration Recorded',
        `Reference ${result.data.registrationReference} has been saved to the database.`
      );

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fail
      }

      reset();
    } catch (err: any) {
      const msg = err.message || 'An unexpected network error occurred.';
      setServerError(msg);
      toast.error('Submission Failed', msg);
    }
  };

  const copyReference = () => {
    if (!submissionSuccess?.registrationReference) return;
    navigator.clipboard.writeText(submissionSuccess.registrationReference);
    setCopied(true);
    toast.info('Copied to Clipboard', submissionSuccess.registrationReference);
    setTimeout(() => setCopied(false), 3000);
  };

  // Helper to format today's date for start date min value
  const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // SUCCESS CONFIRMATION VIEW
  if (submissionSuccess) {
    return (
      <div className="max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-8 md:p-10 shadow-2xl space-y-6 sm:space-y-8 animate-in fade-in duration-300 font-sans">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-neutral-800 border border-neutral-700 rounded-2xl flex items-center justify-center text-zinc-200 mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
            Application Successfully Recorded
          </h2>
          <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
            Your membership registration has been stored in MongoDB. Founder Arpit Singh and our desk staff will review your application and finalize your onboarding at Kailahat bazaar.
          </p>
        </div>

        {/* Reference Callout Card */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400">
                Official Registration Reference
              </span>
              <p className="text-2xl sm:text-3xl font-mono font-extrabold text-zinc-200 tracking-wider">
                {submissionSuccess.registrationReference}
              </p>
            </div>
            <button
              onClick={copyReference}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-750 text-xs font-semibold rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-zinc-200" />
                  <span className="text-zinc-200">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>Copy Reference</span>
                </>
              )}
            </button>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 text-xs pt-1">
            <div>
              <span className="text-neutral-400 block">Applicant Name</span>
              <span className="text-white font-medium text-sm">{submissionSuccess.fullName}</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Contact Email</span>
              <span className="text-white font-medium text-sm truncate block">{submissionSuccess.email}</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Requested Plan</span>
              <span className="text-white font-medium text-sm capitalize">
                {submissionSuccess.membershipPlan}
              </span>
            </div>
            <div>
              <span className="text-neutral-400 block">Application Status</span>
              <span className="text-zinc-200 font-semibold text-sm capitalize flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse" />
                {submissionSuccess.status} Review
              </span>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-4 flex items-start gap-3 text-xs text-neutral-300">
          <FileCheck2 className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="font-semibold text-white">Notice Regarding Application Status</h5>
            <p className="text-neutral-400 leading-relaxed">
              This application has been recorded in our MongoDB database. Membership is not active until the club team confirms your identification and completes the club induction in Kailahat bazaar. No online payment has been processed.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <button
            onClick={() => {
              setSubmissionSuccess(null);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 text-neutral-300 text-sm font-medium transition-colors cursor-pointer"
          >
            Submit Another Application
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-zinc-200 hover:bg-white text-neutral-950 text-sm font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Return to Home</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // STANDARD FORM VIEW
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 sm:p-8 md:p-10 shadow-2xl space-y-6 sm:space-y-8 font-sans"
      noValidate
    >
      {/* Header Info */}
      <div className="space-y-2 pb-5 sm:pb-6 border-b border-neutral-800">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
          Oxygen Fitness Membership Registration
        </h2>
        <p className="text-sm text-neutral-400 leading-relaxed">
          Register your membership for Oxygen Fitness, Kailahat bazaar. Submissions are persistently stored in our MongoDB database and verified at the gym desk.
        </p>
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-start gap-3 text-rose-300 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
          <div className="flex-1">
            <h4 className="font-semibold text-rose-200">Unable to complete registration</h4>
            <p className="text-xs text-rose-300/90 mt-0.5">{serverError}</p>
          </div>
        </div>
      )}

      {/* SECTION 1: Personal Information */}
      <div className="space-y-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
          <span>1. Personal Information</span>
          <span className="text-xs text-neutral-400 font-normal">· Contact & Identification</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div className="sm:col-span-2 space-y-1.5">
            <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-300">
              Full Legal Name <span className="text-zinc-300">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Rahul Sharma"
              {...register('fullName')}
              className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                errors.fullName
                  ? 'border-rose-500 focus:border-rose-500'
                  : 'border-neutral-800 focus:border-zinc-400'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.fullName.message}</span>
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-semibold text-neutral-300">
              Email Address <span className="text-zinc-300">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="rahul.sharma@example.com"
              {...register('email')}
              className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                errors.email
                  ? 'border-rose-500 focus:border-rose-500'
                  : 'border-neutral-800 focus:border-zinc-400'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs font-semibold text-neutral-300">
              Phone Number <span className="text-zinc-300">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="073803 03271 or +91 9876543210"
              {...register('phone')}
              className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                errors.phone
                  ? 'border-rose-500 focus:border-rose-500'
                  : 'border-neutral-800 focus:border-zinc-400'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phone.message}</span>
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="space-y-1.5">
            <label htmlFor="dateOfBirth" className="block text-xs font-semibold text-neutral-300">
              Date of Birth <span className="text-neutral-500 font-normal">(Optional)</span>
            </label>
            <input
              id="dateOfBirth"
              type="date"
              {...register('dateOfBirth')}
              className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white focus:outline-none transition-colors [color-scheme:dark] ${
                errors.dateOfBirth
                  ? 'border-rose-500 focus:border-rose-500'
                  : 'border-neutral-800 focus:border-zinc-400'
              }`}
            />
            {errors.dateOfBirth && (
              <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.dateOfBirth.message}</span>
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-1.5">
            <label htmlFor="gender" className="block text-xs font-semibold text-neutral-300">
              Gender Identity <span className="text-neutral-500 font-normal">(Optional)</span>
            </label>
            <select
              id="gender"
              {...register('gender')}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-zinc-400 transition-colors"
            >
              <option value="">Prefer not to state</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non_binary">Non-binary</option>
              <option value="other">Self-describe / Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* SECTION 2: Membership Plan Selection */}
      <div className="space-y-4 pt-6 border-t border-neutral-800">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
            <span>2. Select Membership Plan</span>
            <span className="text-zinc-300">*</span>
          </h3>
          <span className="text-xs text-neutral-400">All prices in Indian Rupee</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <label
                key={plan.id}
                className={`relative flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-neutral-950 border-zinc-400 ring-1 ring-zinc-400 shadow-lg shadow-zinc-400/5'
                    : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <input
                  type="radio"
                  value={plan.id}
                  {...register('membershipPlan')}
                  className="sr-only"
                />
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-sm">{plan.name}</span>
                  {plan.savingsBadge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                      {plan.savingsBadge}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-2xl font-extrabold text-white">₹{plan.price}</span>
                  <span className="text-xs text-neutral-400">/{plan.id}</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">{plan.tagline}</p>
                <div className="mt-3 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
                  <span>Guest passes: {plan.guestPasses}</span>
                  <div
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-zinc-300 bg-zinc-200' : 'border-neutral-600'
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}
                  </div>
                </div>
              </label>
            );
          })}
        </div>
        {errors.membershipPlan && (
          <p className="text-xs text-rose-400">{errors.membershipPlan.message}</p>
        )}
      </div>

      {/* SECTION 3: Fitness Goals & Experience */}
      <div className="space-y-5 pt-6 border-t border-neutral-800">
        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-300">
          3. Training Profile & Preferences
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Primary Fitness Goal */}
          <div className="space-y-1.5">
            <label htmlFor="fitnessGoal" className="block text-xs font-semibold text-neutral-300">
              Primary Fitness Goal <span className="text-zinc-300">*</span>
            </label>
            <select
              id="fitnessGoal"
              {...register('fitnessGoal')}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-zinc-400 transition-colors"
            >
              <option value="muscle_building">Muscle Building (Hypertrophy)</option>
              <option value="weight_loss">Weight Loss & Conditioning</option>
              <option value="general_fitness">General Health & Longevity</option>
              <option value="strength_training">Pure Strength & Powerlifting</option>
            </select>
            {errors.fitnessGoal && (
              <p className="text-xs text-rose-400">{errors.fitnessGoal.message}</p>
            )}
          </div>

          {/* Experience Level */}
          <div className="space-y-1.5">
            <label htmlFor="experienceLevel" className="block text-xs font-semibold text-neutral-300">
              Current Experience Level <span className="text-zinc-300">*</span>
            </label>
            <select
              id="experienceLevel"
              {...register('experienceLevel')}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-zinc-400 transition-colors"
            >
              <option value="beginner">Beginner (0–12 months consistent training)</option>
              <option value="intermediate">Intermediate (1–3 years disciplined routine)</option>
              <option value="advanced">Advanced (3+ years competitive / seasoned lifter)</option>
            </select>
            {errors.experienceLevel && (
              <p className="text-xs text-rose-400">{errors.experienceLevel.message}</p>
            )}
          </div>

          {/* Preferred Start Date */}
          <div className="space-y-1.5">
            <label htmlFor="preferredStartDate" className="block text-xs font-semibold text-neutral-300">
              Preferred Start Date <span className="text-neutral-500 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <input
                id="preferredStartDate"
                type="date"
                min={getTodayDateString()}
                {...register('preferredStartDate')}
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-zinc-400 transition-colors [color-scheme:dark]"
              />
            </div>
            {errors.preferredStartDate && (
              <p className="text-xs text-rose-400">{errors.preferredStartDate.message}</p>
            )}
          </div>

          {/* Additional Notes */}
          <div className="sm:col-span-2 space-y-1.5">
            <label htmlFor="additionalNotes" className="block text-xs font-semibold text-neutral-300">
              Additional Notes or Health Considerations <span className="text-neutral-500 font-normal">(Optional)</span>
            </label>
            <textarea
              id="additionalNotes"
              rows={3}
              placeholder="Injuries, previous athletic background, personal coaching under Arpit Singh, or preferred hours..."
              {...register('additionalNotes')}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-zinc-400 transition-colors resize-none"
            />
            {errors.additionalNotes && (
              <p className="text-xs text-rose-400">{errors.additionalNotes.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 4: Terms Consent */}
      <div className="space-y-3 pt-6 border-t border-neutral-800">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register('consentAccepted')}
            className="mt-1 h-4 w-4 rounded border-neutral-700 bg-neutral-950 text-zinc-300 focus:ring-zinc-400 focus:ring-offset-neutral-900 cursor-pointer"
          />
          <span className="text-xs text-neutral-400 leading-relaxed select-none group-hover:text-neutral-300 transition-colors">
            I confirm that the details provided are accurate. I acknowledge and agree to the{' '}
            <button
              type="button"
              onClick={() => navigate('/privacy')}
              className="text-zinc-200 underline hover:text-white"
            >
              Privacy Policy
            </button>{' '}
            and{' '}
            <button
              type="button"
              onClick={() => navigate('/terms')}
              className="text-zinc-200 underline hover:text-white"
            >
              Club Terms & Conditions
            </button>
            . I understand this application is subject to verification by Oxygen Fitness in Kailahat bazaar. <span className="text-zinc-300">*</span>
          </span>
        </label>
        {errors.consentAccepted && (
          <p className="text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.consentAccepted.message}</span>
          </p>
        )}
      </div>

      {/* Security & Persistence Notice */}
      <div className="flex items-center gap-2.5 text-xs text-neutral-400 bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
        <Lock className="w-4 h-4 text-zinc-300 shrink-0" />
        <span>
          Applications are securely stored in our MongoDB database. No online card payment required at registration.
        </span>
      </div>

      {/* Submission CTA */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-zinc-200 hover:bg-white active:scale-[0.99] disabled:opacity-50 text-neutral-950 text-base font-extrabold tracking-tight transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Saving to MongoDB Database...</span>
            </>
          ) : (
            <>
              <span>Submit Membership Application</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
