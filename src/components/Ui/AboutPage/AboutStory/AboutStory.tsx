import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const HIGHLIGHTS = [
  "Licensed & Insured",
  "Modern Technology",
  "Sustainable Building",
  "Client Focused",
];

const AboutStory = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <SlideLeft className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
              alt="Engineer and site manager reviewing blueprints on a construction site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </SlideLeft>

        <SlideRight>
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            About Company
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Building With Passion Since 2000
          </h2>
          <p className="mt-4 text-brand-900/60 leading-relaxed">
            Founded in 2000, Constructa began as a small residential
            contracting crew and has grown into a full-service construction
            company trusted for landmark commercial, residential, and
            industrial projects. Our mission is simple: build every project
            as if it were our own, on schedule and without compromise.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((item, index) => (
              <li key={item}>
                <SlideUp delay={index + 1} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-gold-600" />
                  <span className="text-sm font-medium text-brand-900">
                    {item}
                  </span>
                </SlideUp>
              </li>
            ))}
          </ul>
        </SlideRight>
      </div>
    </section>
  );
};

export default AboutStory;
