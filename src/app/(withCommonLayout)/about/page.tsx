import type { Metadata } from "next";
import AboutHero from "@/src/components/Ui/AboutPage/AboutHero/AboutHero";
import AboutStory from "@/src/components/Ui/AboutPage/AboutStory/AboutStory";
import AboutStats from "@/src/components/Ui/AboutPage/AboutStats/AboutStats";
import CoreValues from "@/src/components/Ui/AboutPage/CoreValues/CoreValues";
import LeadershipTeam from "@/src/components/Ui/AboutPage/LeadershipTeam/LeadershipTeam";
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
      <CoreValues />
      <LeadershipTeam />
      <TrustedPartners />
      <CTABanner />
    </>
  );
}
