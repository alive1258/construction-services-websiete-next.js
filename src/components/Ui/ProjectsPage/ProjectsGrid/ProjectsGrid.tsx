"use client";

import { useState } from "react";
import Image from "next/image";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const CATEGORIES = ["All", "Residential", "Commercial", "Industrial"] as const;

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
  {
    title: "Suburban Family Home",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Retail & Mixed-Use Center",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Manufacturing Facility",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Downtown Condominiums",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Corporate Headquarters",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Logistics Distribution Hub",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
  },
];

const ProjectsGrid = () => {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Browse The Full Gallery
          </h2>
        </SlideUp>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                active === cat
                  ? "bg-gold-500 text-white"
                  : "bg-white text-brand-900/70 hover:bg-brand-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ZoomIn
              key={project.title}
              className="group relative h-72 overflow-hidden rounded-2xl"
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
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
