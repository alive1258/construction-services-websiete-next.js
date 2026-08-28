import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";

const FinalCta = () => {
  return (
    <section className="bg-brand-900 py-16 md:py-20">
      <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <SlideLeft>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-2 text-white/60">
            Get in touch today for a free consultation.
          </p>
        </SlideLeft>

        <SlideRight className="flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+12025550198"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Phone size={16} />
            +1 (202) 555-0198
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-600"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </SlideRight>
      </div>
    </section>
  );
};

export default FinalCta;
