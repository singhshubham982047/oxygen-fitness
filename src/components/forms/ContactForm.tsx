import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '../../lib/validations/contact.ts';
import { useToast } from '../../context/ToastContext.tsx';
import { CheckCircle2, AlertCircle, Loader2, Send, MessageSquare } from 'lucide-react';
import { ContactConfirmation } from '../../types/index.ts';

export const ContactForm: React.FC = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResult, setSuccessResult] = useState<ContactConfirmation | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        const errorMsg = resData.error || 'Failed to submit inquiry.';
        setServerError(errorMsg);
        toast.error('Inquiry Submission Failed', errorMsg);
        return;
      }

      setSuccessResult({
        inquiryReference: resData.inquiryReference,
        receivedAt: resData.receivedAt,
        message: resData.message
      });

      reset();
      toast.success('Inquiry Logged', 'Your message has been stored in MongoDB.');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Network error.';
      setServerError(msg);
      toast.error('Network Error', msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successResult) {
    return (
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-300 font-sans">
        <div className="w-14 h-14 bg-neutral-800 border border-neutral-700 rounded-xl flex items-center justify-center text-zinc-200 mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
          Inquiry Successfully Recorded
        </h3>
        <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
          {successResult.message}
        </p>
        <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 inline-block text-left">
          <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">
            Inquiry Tracking Code
          </span>
          <span className="text-lg font-mono font-bold text-zinc-200">
            {successResult.inquiryReference}
          </span>
        </div>
        <div className="pt-2">
          <button
            onClick={() => setSuccessResult(null)}
            className="px-5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-5 font-sans"
      noValidate
    >
      <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-800">
        <MessageSquare className="w-5 h-5 text-zinc-300" />
        <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
          Send Direct Inquiry
        </h3>
      </div>

      {serverError && (
        <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/40 flex items-start gap-2.5 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Name */}
      <div className="space-y-1.5">
        <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-300">
          Your Name <span className="text-zinc-300">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="e.g. Vikram Singh"
          {...register('name')}
          className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
            errors.name ? 'border-rose-500' : 'border-neutral-800 focus:border-zinc-400'
          }`}
        />
        {errors.name && (
          <p className="text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.name.message}</span>
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-300">
          Email Address <span className="text-zinc-300">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="vikram@example.com"
          {...register('email')}
          className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
            errors.email ? 'border-rose-500' : 'border-neutral-800 focus:border-zinc-400'
          }`}
        />
        {errors.email && (
          <p className="text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.email.message}</span>
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label htmlFor="contact-subject" className="block text-xs font-semibold text-neutral-300">
          Subject <span className="text-zinc-300">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="e.g. Gym Timings, Arpit Singh Coaching, or Supplements"
          {...register('subject')}
          className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
            errors.subject ? 'border-rose-500' : 'border-neutral-800 focus:border-zinc-400'
          }`}
        />
        {errors.subject && (
          <p className="text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.subject.message}</span>
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-300">
          Message <span className="text-zinc-300">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="How can Arpit Singh and the Oxygen Fitness staff assist you?"
          {...register('message')}
          className={`w-full px-4 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none ${
            errors.message ? 'border-rose-500' : 'border-neutral-800 focus:border-zinc-400'
          }`}
        />
        {errors.message && (
          <p className="text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-5 rounded-xl bg-zinc-200 hover:bg-white active:scale-[0.99] disabled:opacity-50 text-neutral-950 text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Saving Inquiry to MongoDB...</span>
          </>
        ) : (
          <>
            <span>Submit Inquiry</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};
