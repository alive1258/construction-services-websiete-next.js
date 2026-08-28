import Link from "next/link";
import {
  Building2,
  Compass,
  Hammer,
  ArrowRight,
  Ruler,
  ClipboardList,
  PaintRoller,
  Zap,
  Landmark,
  Leaf,
} from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    title: "Building Construction",
    desc: "Full-scale residential and commercial builds delivered on time and on budget.",
  },
  {
    icon: Compass,
    title: "Architecture & Design",
    desc: "Modern, functional designs tailored to your site, code, and vision.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    desc: "Upgrade, remodel, and restore existing structures with minimal disruption.",
  },
  {
    icon: PaintRoller,
    title: "Interior Design",
    desc: "Interiors that balance form and function, finished to the last detail.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "One accountable team overseeing planning, execution, and delivery.",
  },
  {
    icon: Ruler,
    title: "Consultation & Planning",
    desc: "Feasibility studies, budgeting, and scheduling before ground is broken.",
  },
  {
    icon: Zap,
    title: "Electrical & Plumbing",
    desc: "Licensed MEP installs and retrofits built to current safety codes.",
  },
  {
    icon: Landmark,
    title: "Civil Engineering",
    desc: "Site grading, foundations, and infrastructure engineered to last.",
  },
  {
    icon: Leaf,
    title: "Sustainable Building",
    desc: "Energy-efficient materials and methods for a lower environmental footprint.",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Full Catalogue
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Everything Your Project Needs
          </h2>
          <p className="mt-4 text-brand-900/60">
            Whatever stage your project is at, our in-house teams cover it —
            no subcontractor guesswork, no dropped handoffs.
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
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition group-hover:gap-2.5"
              >
                Get A Quote
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
