import type { Metadata } from "next";
import ProjectsHero from "@/src/components/Ui/ProjectsPage/ProjectsHero/ProjectsHero";
import ProjectCategories from "@/src/components/Ui/ProjectsPage/ProjectCategories/ProjectCategories";
import StatsBand from "@/src/components/Ui/ProjectsPage/StatsBand/StatsBand";
import ProjectsGrid from "@/src/components/Ui/ProjectsPage/ProjectsGrid/ProjectsGrid";
import DeliveryProcess from "@/src/components/Ui/ProjectsPage/DeliveryProcess/DeliveryProcess";
import ClientTestimonials from "@/src/components/Ui/ProjectsPage/ClientTestimonials/ClientTestimonials";
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
      <DeliveryProcess />
      <ClientTestimonials />
      <CTABanner />
    </>
  );
}
