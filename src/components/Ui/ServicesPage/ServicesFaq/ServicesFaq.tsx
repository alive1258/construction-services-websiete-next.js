"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope — a renovation may take 4-8 weeks while a full commercial build can run 6-12 months. We give you a firm schedule in the proposal stage.",
  },
  {
    q: "Do you handle permits and inspections?",
    a: "Yes. Our project managers file all required permits and coordinate every inspection, so you don't have to chase paperwork.",
  },
  {
    q: "What warranty comes with the work?",
    a: "Every project ships with a written workmanship warranty, plus manufacturer warranties on materials and installed systems.",
  },
  {
    q: "How do I get an accurate quote?",
    a: "Book a free consultation — we'll assess your site, review your goals, and return a transparent, itemized estimate within days.",
  },
  {
    q: "Can you source materials sustainably?",
    a: "Yes, sustainable and energy-efficient material options are available on every plan tier at your request.",
  },
  {
    q: "Do you offer ongoing maintenance after handover?",
    a: "We do — ask about our post-handover maintenance packages when you sign your contract.",
  },
];

const ServicesFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="scroll-mt-[100px] bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            FAQs
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-brand-900/10 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-brand-900 sm:text-base">
                    {item.q}
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
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesFaq;
