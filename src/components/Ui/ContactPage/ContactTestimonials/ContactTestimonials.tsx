import { Star } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const TESTIMONIALS = [
  {
    quote:
      "They answered every question the same day and made the whole process feel effortless.",
    name: "Amanda Reyes",
    role: "Homeowner",
  },
  {
    quote:
      "Clear communication from the first call to the final walkthrough — no surprises.",
    name: "Tom Baker",
    role: "Facilities Director",
  },
  {
    quote:
      "Our quote was ready within two days and every detail matched what we discussed.",
    name: "Priya Nair",
    role: "Retail Operations Lead",
  },
];

const ContactTestimonials = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Client Feedback
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Trusted For Our Responsiveness
          </h2>
        </SlideUp>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role }) => (
            <ZoomIn
              key={name}
              className="rounded-2xl border border-brand-900/10 bg-brand-50/40 p-7"
            >
              <div className="flex gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-900/70">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-brand-900/10 pt-4">
                <p className="font-bold text-brand-900">{name}</p>
                <p className="text-xs text-brand-900/50">{role}</p>
              </div>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactTestimonials;
