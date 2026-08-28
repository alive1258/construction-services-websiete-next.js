import type { Metadata } from "next";
import ProjectsHero from "@/src/components/Ui/ProjectsPage/ProjectsHero/ProjectsHero";
import ProjectCategories from "@/src/components/Ui/ProjectsPage/ProjectCategories/ProjectCategories";
import StatsBand from "@/src/components/Ui/ProjectsPage/StatsBand/StatsBand";
import ProjectsGrid from "@/src/components/Ui/ProjectsPage/ProjectsGrid/ProjectsGrid";
import ProjectSpotlight from "@/src/components/Ui/ProjectsPage/ProjectSpotlight/ProjectSpotlight";
import DeliveryProcess from "@/src/components/Ui/ProjectsPage/DeliveryProcess/DeliveryProcess";
import AwardsRecognition from "@/src/components/Ui/ProjectsPage/AwardsRecognition/AwardsRecognition";
import ClientTestimonials from "@/src/components/Ui/ProjectsPage/ClientTestimonials/ClientTestimonials";
import ProjectsFaq from "@/src/components/Ui/ProjectsPage/ProjectsFaq/ProjectsFaq";
import CTABanner from "@/src/components/Ui/ProjectsPage/CTABanner/CTABanner";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Constructa's portfolio of residential, commercial, and industrial construction projects delivered on time and on budget.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectCategories />
      <StatsBand />
      <ProjectsGrid />
      <ProjectSpotlight />
      <DeliveryProcess />
      <AwardsRecognition />
      <ClientTestimonials />
      <ProjectsFaq />
      <CTABanner />
    </>
  );
}
