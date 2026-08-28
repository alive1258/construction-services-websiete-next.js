import { Handshake, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const VALUES = [
  {
    icon: Sparkles,
    title: "Quality",
    desc: "We hold every build to the highest standard of craftsmanship and materials.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    desc: "Transparent pricing and honest timelines, from the first estimate onward.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    desc: "Rigorous site safety protocols to protect our crews and your property.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Modern methods and technology applied to classic, durable construction.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Our Values
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Mission, Vision &amp; Core Values
          </h2>
          <p className="mt-4 text-brand-900/60">
            The principles that guide every project we take on, from the
            smallest renovation to the largest industrial build.
          </p>
        </SlideUp>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <ZoomIn
              key={title}
              className="rounded-2xl border border-brand-900/10 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-gold-400">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/60">
                {desc}
              </p>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
