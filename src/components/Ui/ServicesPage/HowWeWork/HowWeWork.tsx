import { FileSignature, HardHat, MessageSquare, Search } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const STEPS = [
  { num: "01", icon: MessageSquare, title: "Consultation", desc: "We learn your goals and constraints" },
  { num: "02", icon: Search, title: "Site Assessment", desc: "Surveys, feasibility, and cost estimates" },
  { num: "03", icon: FileSignature, title: "Proposal & Contract", desc: "Transparent scope, timeline, and pricing" },
  { num: "04", icon: HardHat, title: "Execution & Handover", desc: "Built to spec and handed over on schedule" },
];

const HowWeWork = () => {
  return (
    <section className="bg-forest-900 py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Our Engagement Process
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            How We Work With You
          </h2>
        </SlideUp>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map(({ num, icon: Icon, title, desc }, i) => (
            <SlideUp
              key={num}
              delay={i + 1}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-12%] top-7 hidden h-px w-[24%] bg-white/15 lg:block"
                />
              )}
              <span className="text-4xl font-bold text-white/10">{num}</span>
              <span className="-mt-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-gold-400 ring-1 ring-white/10 lg:-mt-7">
                <Icon size={24} />
              </span>
              <p className="mt-4 font-bold text-white">{title}</p>
              <p className="mt-1 text-sm text-white/60">{desc}</p>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
