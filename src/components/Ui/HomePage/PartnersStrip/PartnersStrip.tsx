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

const PartnersStrip = () => {
  return (
    <section className="bg-white py-14 md:py-16 border-y border-brand-900/10">
      <div className="container">
        <SlideUp>
          <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-900/40">
            Trusted By Leading Brands
          </p>
        </SlideUp>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 grayscale opacity-60">
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

export default PartnersStrip;
