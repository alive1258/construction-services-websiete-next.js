import { Building2, Percent, Smile, Timer } from "lucide-react";

const STATS = [
  { icon: Building2, value: "850+", label: "Projects Done" },
  { icon: Smile, value: "320+", label: "Happy Clients" },
  { icon: Timer, value: "25+", label: "Years Experience" },
  { icon: Percent, value: "95%", label: "Success Rate" },
];

const StatsBand = () => {
  return (
    <section className="bg-forest-800 py-10">
      <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 text-center md:justify-start md:text-left">
            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-400 sm:flex">
              <Icon size={20} />
            </span>
            <div>
              <p className="text-2xl font-bold text-white md:text-3xl">{value}</p>
              <p className="text-xs text-white/60 md:text-sm">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBand;
