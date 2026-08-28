import HeroSection from "../HeroSection/HeroSection";
import ServicesOverview from "../ServicesOverview/ServicesOverview";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import ProcessSection from "../ProcessSection/ProcessSection";
import StatsBand from "../StatsBand/StatsBand";
import PartnersStrip from "../PartnersStrip/PartnersStrip";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import BlogInsights from "../BlogInsights/BlogInsights";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import FaqSection from "../FaqSection/FaqSection";
import FinalCta from "../FinalCta/FinalCta";

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

      <PartnersStrip />

      <div id="projects" className="scroll-mt-[100px]">
        <FeaturedProjects />
      </div>

      <BlogInsights />

      <TestimonialsSection />

      <FaqSection />

      <FinalCta />
    </>
  );
};

export default RootHomePage;
