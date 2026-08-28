import Image from "next/image";
import { Award, Clock, ShieldCheck, Users } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const REASONS = [
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Skilled engineers and architects with decades in the field.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Top-grade materials and rigorous safety standards.",
  },
  {
    icon: Award,
    title: "Transparent Pricing",
    desc: "No hidden costs — clear estimates before we break ground.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "On time, every time, without cutting corners.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <SlideLeft>
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            We Provide The Best Construction Experience
          </h2>
          <p className="mt-4 max-w-lg text-brand-900/60">
            From planning to execution, we ensure quality, transparency, and
            satisfaction on every project we take on.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {REASONS.map(({ icon: Icon, title, desc }, index) => (
              <SlideUp key={title} delay={index + 1} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-900 text-gold-400">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-bold text-brand-900">{title}</p>
                  <p className="mt-1 text-sm text-brand-900/60">{desc}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </SlideLeft>

        <SlideRight className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt="Crane building a high-rise construction site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-gold-500 px-6 py-5 text-white shadow-xl sm:-left-8">
            <p className="text-3xl font-bold">25+</p>
            <p className="text-xs font-medium uppercase tracking-wide text-white/90">
              Years of Experience
            </p>
          </div>
        </SlideRight>
      </div>
    </section>
  );
};

export default WhyChooseUs;
