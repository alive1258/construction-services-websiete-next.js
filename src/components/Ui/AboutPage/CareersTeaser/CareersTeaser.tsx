import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, HeartHandshake, TrendingUp } from "lucide-react";

const PERKS = [
  { icon: TrendingUp, title: "Real Growth", desc: "Clear paths from apprentice to project lead." },
  { icon: GraduationCap, title: "Ongoing Training", desc: "Safety and trade certifications, fully covered." },
  { icon: HeartHandshake, title: "Team Culture", desc: "Small-crew feel, even on our biggest sites." },
];

const CareersTeaser = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
          <Image
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80"
            alt="Construction crew collaborating on site"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Careers
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Join Our Team
          </h2>
          <p className="mt-4 max-w-lg text-brand-900/60">
            We&apos;re always looking for skilled tradespeople, engineers, and
            project managers who care about doing the job right.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PERKS.map(({ icon: Icon, title, desc }) => (
              <div key={title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-900 text-gold-400">
                  <Icon size={18} />
                </span>
                <p className="mt-3 font-bold text-brand-900">{title}</p>
                <p className="mt-1 text-sm text-brand-900/60">{desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-600"
          >
            View Open Roles
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersTeaser;
