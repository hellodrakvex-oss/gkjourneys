import type { Metadata } from "next";
import Image from "next/image";
import { FounderSection } from "@/components/sections/FounderSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { MissionVision } from "@/components/sections/MissionVision";

export const metadata: Metadata = {
  title: "About GK Journeys | Krupa P Murthy – Mysore Travel Agency",
  description:
    "Learn about GK Journeys, an MSME registered travel company from Mysore, Karnataka. Founded by Krupa P Murthy with a mission to deliver personalized, memorable travel experiences.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About GK Journeys",
    description: "Learn about GK Journeys, an MSME registered travel company from Mysore.",
    url: "/about",
  }
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[360px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop"
            alt="About Us Background"
            fill
            priority
            quality={80}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 container pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Story</h1>
          <p className="text-white/70 text-lg max-w-xl">
            "Every journey should tell a unique story." That's the belief I built GK Journeys on. As a young entrepreneur from Mysore, I saw a gap between the generic travel packages tourists were getting and the deeply personal, memorable experiences they deserved.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Founder Section */}
      <FounderSection />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </>
  );
}
