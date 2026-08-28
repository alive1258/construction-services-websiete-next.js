import { MapPin } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const AREAS = [
  "Downtown Metro",
  "Riverside County",
  "North Hills",
  "Lakeside District",
  "Harbor Point",
  "Westfield",
  "Greenwood",
  "Old Town",
];

const ServiceAreas = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Coverage
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 md:text-4xl">
            Areas We Serve
          </h2>
          <p className="mt-4 text-brand-900/60">
            Based in Building City, our crews work across the metro area and
            surrounding regions. Not sure if we cover your site? Just ask.
          </p>
        </SlideUp>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {AREAS.map((area) => (
            <ZoomIn
              key={area}
              className="flex items-center gap-2.5 rounded-xl border border-brand-900/10 bg-brand-50/40 px-4 py-3"
            >
              <MapPin size={16} className="shrink-0 text-gold-600" />
              <span className="text-sm font-semibold text-brand-900">
                {area}
              </span>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
