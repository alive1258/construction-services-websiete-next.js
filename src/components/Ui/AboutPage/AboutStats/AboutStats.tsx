import { Building2, Smile, Timer, Users } from "lucide-react";

const STATS = [
  { icon: Building2, value: "850+", label: "Projects Completed" },
  { icon: Smile, value: "320+", label: "Happy Clients" },
  { icon: Timer, value: "25+", label: "Years Experience" },
  { icon: Users, value: "150+", label: "Team Members" },
];

const AboutStats = () => {
  return (
    <section className="bg-forest-900 py-14 md:py-16">
      <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gold-400 ring-1 ring-white/10">
              <Icon size={22} />
            </span>
            <div>
              <p className="text-2xl font-bold text-white md:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-xs text-white/60 md:text-sm">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStats;
