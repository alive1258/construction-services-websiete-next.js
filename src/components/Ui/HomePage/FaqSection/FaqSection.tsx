"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What areas do you serve?",
    a: "We take on residential, commercial, and industrial projects across the metro area and surrounding regions. Reach out with your project location and we'll confirm coverage.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope — a renovation may take a few weeks, while a full commercial build can take several months. You'll get a clear schedule as part of your estimate.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes. Every project starts with a free, no-obligation consultation and estimate before any work begins.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — Constructa is fully licensed and insured, and every project is backed by our workmanship warranty.",
  },
  {
    q: "Can you work with my own architect or design?",
    a: "Absolutely. We regularly partner with outside architects and designers, or can handle design in-house if you prefer.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-[100px] bg-white py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={q}
                className="overflow-hidden rounded-xl border border-brand-900/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-brand-900">{q}</span>
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

export default FaqSection;
