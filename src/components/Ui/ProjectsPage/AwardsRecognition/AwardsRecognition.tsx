import { Award, Medal, ShieldCheck, Star, Trophy } from "lucide-react";

const AWARDS = [
  { icon: Trophy, title: "Best Commercial Build 2025", org: "Regional Builders Assoc." },
  { icon: Award, title: "Excellence in Safety", org: "National Contractors Council" },
  { icon: Medal, title: "Sustainable Project of the Year", org: "GreenBuild Awards" },
  { icon: Star, title: "Top-Rated Contractor", org: "HomeAdvisor" },
  { icon: ShieldCheck, title: "ISO 9001 Certified", org: "Quality Management" },
];

const AwardsRecognition = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Recognition
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Awards &amp; Recognition
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {AWARDS.map(({ icon: Icon, title, org }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-900/10 bg-white p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-gold-400">
                <Icon size={22} />
              </span>
              <p className="font-bold text-brand-900 leading-snug">{title}</p>
              <p className="text-xs text-brand-900/50">{org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
