import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HardHat, ShieldCheck, Timer, Wrench } from "lucide-react";

const QUICK_FACTS = [
  { icon: ShieldCheck, label: "Quality Materials", sub: "We never compromise" },
  { icon: HardHat, label: "Expert Team", sub: "Skilled professionals" },
  { icon: Timer, label: "On-Time Delivery", sub: "Projects on schedule" },
  { icon: Wrench, label: "24/7 Support", sub: "We're always here" },
];

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative flex min-h-[560px] items-center overflow-hidden py-16 md:min-h-[680px] md:py-24">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80"
          alt="Construction worker on site reviewing blueprints"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-900/75" />
        <div className="absolute inset-0 bg-linear-to-t from-brand-900 via-brand-900/50 to-transparent" />

        <div className="container relative">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400 backdrop-blur-sm">
              Trusted, Reliable, Professional
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Building Tomorrow&apos;s
              <br />
              Landmarks Today
            </h1>

            <p className="mt-6 text-white/80 text-base md:text-lg max-w-lg leading-relaxed">
              We deliver high-quality construction services for residential,
              commercial, and industrial projects. Your vision, our
              expertise — built to last.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-600 sm:w-auto"
              >
                Explore Services
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK FACTS STRIP */}
      <div className="relative z-10 bg-white shadow-lg">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 py-6 md:grid-cols-4 md:gap-8 md:py-8 -mt-0 md:-mt-14">
            {QUICK_FACTS.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-gold-600">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-brand-900">{label}</p>
                  <p className="truncate text-xs text-brand-900/60">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
