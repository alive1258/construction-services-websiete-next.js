import { Building, Factory, Home, Wrench } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const CATEGORIES = [
  {
    icon: Home,
    title: "Residential",
    desc: "Custom homes and apartment communities built for comfortable living.",
    count: "320+ Homes Built",
  },
  {
    icon: Building,
    title: "Commercial",
    desc: "Offices, retail spaces, and mixed-use developments delivered on schedule.",
    count: "180+ Commercial Builds",
  },
  {
    icon: Factory,
    title: "Industrial",
    desc: "Warehouses and manufacturing facilities engineered for durability.",
    count: "95+ Industrial Projects",
  },
  {
    icon: Wrench,
    title: "Renovation",
    desc: "Upgrades and remodels that breathe new life into existing structures.",
    count: "255+ Renovations",
  },
];

const ProjectCategories = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            What We Build
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Projects Across Every Sector
          </h2>
        </SlideUp>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ icon: Icon, title, desc, count }) => (
            <ZoomIn
              key={title}
              className="rounded-2xl border border-brand-900/10 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-xl sm:text-left"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-gold-400 sm:mx-0">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/60">
                {desc}
              </p>
              <p className="mt-4 text-sm font-semibold text-gold-600">{count}</p>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;
