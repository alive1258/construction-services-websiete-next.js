import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Their project management alone was worth it — every phase came in on schedule.",
    name: "Laura Bennett",
    role: "Facilities Director",
  },
  {
    quote:
      "The consultation was thorough and the pricing was transparent from day one.",
    name: "James Carter",
    role: "Homeowner",
  },
  {
    quote:
      "Licensed, insured, and it showed in every inspection. No surprises.",
    name: "Priya Nair",
    role: "Property Developer",
  },
];

const ServicesTestimonials = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Client Feedback
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Service You Can Rely On
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role }) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;
