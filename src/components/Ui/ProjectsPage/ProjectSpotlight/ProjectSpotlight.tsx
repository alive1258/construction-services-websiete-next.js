import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CalendarClock, MapPin, Ruler } from "lucide-react";

const FACTS = [
  { icon: Building2, label: "Sector", value: "Commercial" },
  { icon: Ruler, label: "Size", value: "82,000 sq ft" },
  { icon: CalendarClock, label: "Duration", value: "14 Months" },
  { icon: MapPin, label: "Location", value: "Downtown Metro" },
];

const ProjectSpotlight = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
            alt="Flagship commercial construction project underway"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Project Spotlight
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Downtown Metro Office Tower
          </h2>
          <p className="mt-4 max-w-lg text-brand-900/60">
            A ground-up 82,000 sq ft commercial office build delivered on a
            tight 14-month schedule — from site excavation to final
            occupancy, coordinated across structural, MEP, and finishing
            crews without a single missed milestone.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            {FACTS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-900 text-gold-400">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/50">
                    {label}
                  </p>
                  <p className="font-bold text-brand-900">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-600"
          >
            Start a Project Like This
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
