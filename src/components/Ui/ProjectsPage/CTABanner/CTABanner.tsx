import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gold-500 px-8 py-10 sm:px-12">
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Have a Project in Mind? Let&apos;s Build It.
              </h3>
              <p className="mt-2 text-white/90">
                Tell us about your vision and we&apos;ll turn it into a plan.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 md:w-auto"
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
