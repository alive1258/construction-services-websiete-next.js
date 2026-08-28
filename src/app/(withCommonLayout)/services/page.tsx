import type { Metadata } from "next";
import ServicesHero from "@/src/components/Ui/ServicesPage/ServicesHero/ServicesHero";
import ServicesGrid from "@/src/components/Ui/ServicesPage/ServicesGrid/ServicesGrid";
import HowWeWork from "@/src/components/Ui/ServicesPage/HowWeWork/HowWeWork";
import ServiceCapabilities from "@/src/components/Ui/ServicesPage/ServiceCapabilities/ServiceCapabilities";
import StatsBand from "@/src/components/Ui/ServicesPage/StatsBand/StatsBand";
import PricingPlans from "@/src/components/Ui/ServicesPage/PricingPlans/PricingPlans";
import ServiceAreas from "@/src/components/Ui/ServicesPage/ServiceAreas/ServiceAreas";
import ProjectsShowcase from "@/src/components/Ui/ServicesPage/ProjectsShowcase/ProjectsShowcase";
import ServicesTestimonials from "@/src/components/Ui/ServicesPage/ServicesTestimonials/ServicesTestimonials";
import ServicesFaq from "@/src/components/Ui/ServicesPage/ServicesFaq/ServicesFaq";
import CTABanner from "@/src/components/Ui/ServicesPage/CTABanner/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive construction services — building, design, renovation, project management, and more — delivered by licensed, in-house teams.",
};

export default function ServicesPage() {
  return (
    <>
      <div id="services-hero">
        <ServicesHero />
      </div>
      <ServicesGrid />
      <HowWeWork />
      <ServiceCapabilities />
      <StatsBand />
      <PricingPlans />
      <ServiceAreas />
      <ProjectsShowcase />
      <ServicesTestimonials />
      <ServicesFaq />
      <CTABanner />
    </>
  );
}
