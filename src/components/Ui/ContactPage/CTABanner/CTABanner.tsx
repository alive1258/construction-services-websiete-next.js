import { Phone } from "lucide-react";

const CONTACT_PHONE = "+1 (202) 555-0198";

const CTABanner = () => {
  return (
    <section className="bg-brand-900 py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-gold-500 px-8 py-10 text-center sm:px-12 md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Prefer to Talk? Call Us Now
            </h3>
            <p className="mt-2 text-white/90">
              Speak directly with our team about your project.
            </p>
          </div>
          <a
            href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 md:w-auto"
          >
            <Phone size={16} />
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
