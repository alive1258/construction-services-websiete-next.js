import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const MILESTONES = [
  { year: "2001", title: "Company Founded", desc: "Started as a small residential contracting crew of 5." },
  { year: "2008", title: "First Commercial Contract", desc: "Delivered our first ground-up commercial office building." },
  { year: "2014", title: "150+ Team Members", desc: "Grew into a full in-house team of engineers and tradespeople." },
  { year: "2019", title: "Industrial Division Launched", desc: "Expanded into large-scale industrial and warehouse builds." },
  { year: "2026", title: "850+ Projects Delivered", desc: "Crossed 850 completed projects across three sectors." },
];

const Milestones = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Our Journey
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Milestones Along the Way
          </h2>
        </SlideUp>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-4 top-0 bottom-0 w-px bg-brand-900/10 md:left-1/2"
          />

          <div className="space-y-10">
            {MILESTONES.map((m, i) => (
              <SlideUp
                key={m.year}
                delay={i + 1}
                className={`relative flex flex-col gap-4 pl-12 md:pl-0 md:flex-row md:items-center md:gap-0 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-500 ring-4 ring-gold-500/20 md:left-1/2"
                />
                <div className={`md:w-1/2 ${i % 2 === 1 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
                  <p className="text-2xl font-bold text-gold-600">{m.year}</p>
                  <p className="mt-1 font-bold text-brand-900">{m.title}</p>
                  <p className="mt-1 text-sm text-brand-900/60">{m.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
