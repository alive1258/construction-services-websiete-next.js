import Link from "next/link";
import {
  Building2,
  Compass,
  Hammer,
  ArrowRight,
  Ruler,
  ClipboardList,
  PaintRoller,
} from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    title: "Building Construction",
    desc: "From concept to completion, full-scale builds delivered on time.",
  },
  {
    icon: Compass,
    title: "Architecture Design",
    desc: "Modern designs and functional spaces tailored to your site.",
  },
  {
    icon: Hammer,
    title: "Renovation",
    desc: "Upgrade, remodel, and renovate with minimal disruption.",
  },
  {
    icon: PaintRoller,
    title: "Interior Design",
    desc: "Beautiful interiors that inspire and work for how you live.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Planning, execution, and delivery under one accountable team.",
  },
  {
    icon: Ruler,
    title: "Consultation",
    desc: "Expert advice to help you make better, faster decisions.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Smart Construction Services
          </h2>
          <p className="mt-4 text-brand-900/60">
            We offer end-to-end construction solutions tailored to your
            needs, backed by decades of hands-on experience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-brand-900/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-white">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/60">
                {desc}
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition group-hover:gap-2.5"
              >
                Read More
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
