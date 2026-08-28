import HeroSection from "../HeroSection/HeroSection";
import ServicesOverview from "../ServicesOverview/ServicesOverview";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import ProcessSection from "../ProcessSection/ProcessSection";
import StatsBand from "../StatsBand/StatsBand";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";

const RootHomePage = () => {
  return (
    <>
      <div id="home" className="scroll-mt-[100px]">
        <HeroSection />
      </div>

      <div id="services" className="scroll-mt-[100px]">
        <ServicesOverview />
      </div>

      <WhyChooseUs />

      <ProcessSection />

      <StatsBand />

      <div id="projects" className="scroll-mt-[100px]">
        <FeaturedProjects />
      </div>

      <TestimonialsSection />
    </>
  );
};

export default RootHomePage;
