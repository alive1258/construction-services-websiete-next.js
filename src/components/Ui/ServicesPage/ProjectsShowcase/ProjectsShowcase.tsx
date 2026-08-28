import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Luxury Apartment Building",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Industrial Warehouse",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1565608087341-404b25492fee?auto=format&fit=crop&w=900&q=80",
  },
];

const ProjectsShowcase = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Our Work
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
              These Services, In Action
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-gold-500 px-5 py-2.5 text-sm font-semibold text-gold-600 transition hover:bg-gold-500 hover:text-white md:self-auto"
          >
            View Full Portfolio
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative h-64 overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-900/90 via-brand-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-400">
                  {project.category}
                </span>
                <p className="mt-1 text-lg font-bold text-white">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
