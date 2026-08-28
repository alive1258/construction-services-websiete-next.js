"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How quickly will you respond to my inquiry?",
    a: "We respond to every message within one business day, and most site visits can be scheduled within the same week.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes — the first consultation and initial project estimate are always free, with no obligation to proceed.",
  },
  {
    q: "What areas do you serve?",
    a: "We take on residential, commercial, and industrial projects across the metro area and surrounding counties.",
  },
  {
    q: "How do I get an accurate quote?",
    a: "Send us your project details through the form above or call us directly — we'll follow up to schedule a site visit and prepare a detailed estimate.",
  },
  {
    q: "What information should I prepare before contacting you?",
    a: "Rough project scope, desired timeline, budget range, and any drawings or reference photos help us give you a faster, more accurate response.",
  },
];

const ContactFaq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-[100px] bg-brand-50/40 py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            FAQs
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Common Questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                className="overflow-hidden rounded-xl border border-brand-900/10 bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-brand-900 sm:text-base">
                    {q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-gold-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-brand-900/60">
                    {a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
