import Image from "next/image";
import { BadgeCheck, FileCheck2, ShieldCheck, Wrench } from "lucide-react";

const CAPABILITIES = [
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed crews and comprehensive project insurance.",
  },
  {
    icon: Wrench,
    title: "In-House Engineers",
    desc: "No outsourced guesswork — our own structural and MEP experts.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-First Sites",
    desc: "OSHA-aligned protocols on every active job site.",
  },
  {
    icon: FileCheck2,
    title: "Warranty-Backed Work",
    desc: "Every project ships with a written workmanship warranty.",
  },
];

const ServiceCapabilities = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1 relative">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
              alt="Engineers reviewing blueprints on site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Why Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Capability You Can Verify
          </h2>
          <p className="mt-4 max-w-lg text-brand-900/60">
            Every service on our roster is backed by licensed trades,
            in-house engineering, and a written warranty — not a promise.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-900 text-gold-400">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-bold text-brand-900">{title}</p>
                  <p className="mt-1 text-sm text-brand-900/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;
