import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-gold-500 px-8 py-10 sm:px-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-2 text-white/90">
              Get in touch with our team today for a free consultation.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 md:w-auto"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
