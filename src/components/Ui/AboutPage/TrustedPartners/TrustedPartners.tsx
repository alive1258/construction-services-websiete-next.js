import { Building, Landmark, Layers, PenTool, Shapes } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const PARTNERS = [
  { name: "ArchiteQ", icon: PenTool },
  { name: "BuildPro", icon: Building },
  { name: "Construx", icon: Layers },
  { name: "UrbanX", icon: Landmark },
  { name: "Structure Co.", icon: Shapes },
];

const TrustedPartners = () => {
  return (
    <section className="bg-brand-50/40 py-14 md:py-16">
      <div className="container">
        <SlideUp className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Our Partners
          </span>
          <h2 className="mt-3 text-2xl font-bold text-brand-900 md:text-3xl">
            Trusted By Leading Brands
          </h2>
        </SlideUp>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 grayscale opacity-60">
          {PARTNERS.map(({ name, icon: Icon }) => (
            <ZoomIn
              key={name}
              className="inline-flex items-center gap-2 text-lg font-bold text-brand-900"
            >
              <Icon size={20} />
              {name}
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
