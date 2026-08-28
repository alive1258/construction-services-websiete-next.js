import { Star } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const TESTIMONIALS = [
  {
    quote:
      "What stood out was how consistent the team stayed from our first meeting to the final walkthrough.",
    name: "Rachel Kim",
    role: "Commercial Developer",
  },
  {
    quote:
      "Twenty-five years in business shows — they've clearly built a real culture, not just a workforce.",
    name: "Tom Alvarez",
    role: "General Contractor Partner",
  },
  {
    quote: "Their values aren't just on a poster in the office — you see them on-site every day.",
    name: "Nina Torres",
    role: "Homeowner",
  },
];

const AboutTestimonials = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            What People Say
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            A Team Worth Trusting
          </h2>
        </SlideUp>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role }) => (
            <ZoomIn key={name} className="rounded-2xl bg-brand-900 p-7 text-white shadow-sm">
              <div className="flex gap-1 text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-bold">{name}</p>
                <p className="text-xs text-white/50">{role}</p>
              </div>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
