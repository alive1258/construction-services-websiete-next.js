"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
];

const FeaturedProjects = () => {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Featured Projects
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
              Our Recent Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-gold-500 px-5 py-2.5 text-sm font-semibold text-gold-600 transition hover:bg-gold-500 hover:text-white md:self-auto"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </SlideUp>

        <div className="mt-8 flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                active === cat
                  ? "bg-gold-500 text-white"
                  : "bg-brand-50 text-brand-900/70 hover:bg-brand-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* CTA BANNER */}
      <div className="container mt-16">
        <SlideUp className="relative overflow-hidden rounded-2xl bg-gold-500 px-8 py-10 sm:px-12">
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Have a Project in Mind?
              </h3>
              <p className="mt-2 text-white/90">
                Let&apos;s build something great together.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 md:w-auto"
            >
              Get Free Estimate
              <ArrowRight size={16} />
            </Link>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default FeaturedProjects;
