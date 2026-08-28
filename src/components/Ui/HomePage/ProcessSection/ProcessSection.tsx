import { ClipboardCheck, HardHat, PencilRuler, Truck } from "lucide-react";

const STEPS = [
  { num: "01", icon: ClipboardCheck, title: "Consultation", desc: "We understand your needs" },
  { num: "02", icon: PencilRuler, title: "Planning", desc: "Design & estimates" },
  { num: "03", icon: HardHat, title: "Execution", desc: "We build your project" },
  { num: "04", icon: Truck, title: "Delivery", desc: "On-time project handover" },
];

const ProcessSection = () => {
  return (
    <section className="bg-forest-900 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Our Work Process
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map(({ num, icon: Icon, title, desc }, i) => (
            <div key={num} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-12%] top-7 hidden h-px w-[24%] bg-white/15 lg:block"
                />
              )}
              <span className="text-4xl font-bold text-white/10">{num}</span>
              <span className="-mt-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-gold-400 ring-1 ring-white/10 lg:-mt-7">
                <Icon size={24} />
              </span>
              <p className="mt-4 font-bold text-white">{title}</p>
              <p className="mt-1 text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
