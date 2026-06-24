import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations";
import { ExperienceCategories } from "@/components/sections/ExperienceCategories";
import { EssentialServices } from "@/components/sections/EssentialServices";
import { FounderSection } from "@/components/sections/FounderSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TripPlanner } from "@/components/sections/TripPlanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDestinations />
      <ExperienceCategories />
      <EssentialServices />
      <FounderSection />
      <WhyChooseUs />
      <div className="py-8 bg-[#F8F6F2]" />
      <TripPlanner />
    </>
  );
}
