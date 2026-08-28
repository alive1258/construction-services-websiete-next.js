import type { Metadata } from "next";
import AboutHero from "@/src/components/Ui/AboutPage/AboutHero/AboutHero";
import AboutStory from "@/src/components/Ui/AboutPage/AboutStory/AboutStory";
import AboutStats from "@/src/components/Ui/AboutPage/AboutStats/AboutStats";
import Milestones from "@/src/components/Ui/AboutPage/Milestones/Milestones";
import CoreValues from "@/src/components/Ui/AboutPage/CoreValues/CoreValues";
import Certifications from "@/src/components/Ui/AboutPage/Certifications/Certifications";
import LeadershipTeam from "@/src/components/Ui/AboutPage/LeadershipTeam/LeadershipTeam";
import CareersTeaser from "@/src/components/Ui/AboutPage/CareersTeaser/CareersTeaser";
import AboutTestimonials from "@/src/components/Ui/AboutPage/AboutTestimonials/AboutTestimonials";
import TrustedPartners from "@/src/components/Ui/AboutPage/TrustedPartners/TrustedPartners";
import CTABanner from "@/src/components/Ui/AboutPage/CTABanner/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Constructa — our story, our values, our leadership team, and our 25-year record of delivering quality construction projects.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <Milestones />
      <CoreValues />
      <Certifications />
      <LeadershipTeam />
      <CareersTeaser />
      <AboutTestimonials />
      <TrustedPartners />
      <CTABanner />
    </>
  );
}
