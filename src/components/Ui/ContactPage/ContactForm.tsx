"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Renovation",
  "Other",
];

// TODO: no backend yet — wire this up to a real inbox/CRM once one exists.
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SlideUp className="flex flex-col items-center gap-3 rounded-2xl border border-brand-900/10 bg-brand-50/50 px-6 py-16 text-center">
        <CheckCircle2 size={32} className="text-gold-600" />
        <h3 className="text-lg font-bold text-brand-900">
          Thanks — we&apos;ve got your message.
        </h3>
        <p className="max-w-sm text-sm text-brand-900/60">
          A member of our team will reply within one business day.
        </p>
      </SlideUp>
    );
  }

  return (
    <SlideUp>
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm sm:p-8"
      >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
            Full Name
          </span>
          <input
            type="text"
            required
            className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 focus:border-gold-500 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
            Email
          </span>
          <input
            type="email"
            required
            className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 focus:border-gold-500 focus:outline-none"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
            Phone
          </span>
          <input
            type="tel"
            className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 focus:border-gold-500 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
            Project Type
          </span>
          <select className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 focus:border-gold-500 focus:outline-none">
            <option value="">Select a project type</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
          Message
        </span>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your project scope, timeline, and budget."
          className="w-full resize-none rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 focus:border-gold-500 focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-600"
      >
        Send Message
        <Send size={15} />
      </button>
      </form>
    </SlideUp>
  );
};

export default ContactForm;
