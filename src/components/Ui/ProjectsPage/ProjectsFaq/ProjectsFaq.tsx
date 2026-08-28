"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const FAQS = [
  {
    q: "Can I visit an active project site?",
    a: "Yes — with advance notice and proper safety gear, prospective clients are welcome to tour active or recently completed sites.",
  },
  {
    q: "What happens if I want to change the scope mid-project?",
    a: "We handle change orders through a clear written process: any scope change is priced and scheduled before work proceeds, so there are no surprises on your invoice.",
  },
  {
    q: "Who handles permits and inspections?",
    a: "Our team manages all permitting and coordinates every required inspection as part of the project timeline — you don't have to chase City Hall.",
  },
  {
    q: "Do you work with subcontractors or an in-house crew?",
    a: "A mix of both: core trades (structural, MEP) are in-house, and we partner with vetted, licensed subcontractors for specialized work — all under our direct supervision.",
  },
  {
    q: "How do you handle project photos and documentation?",
    a: "Every project is documented with progress photos and milestone reports, which you can request at any stage and which inform the case studies featured on this page.",
  },
];

const ProjectsFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container max-w-3xl">
        <SlideUp className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Questions About Our Projects
          </h2>
        </SlideUp>

        <div className="mt-10 space-y-4">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <SlideUp
                key={q}
                delay={i + 1}
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
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsFaq;
