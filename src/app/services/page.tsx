import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Travel Services | GK Journeys",
  description: "Explore our complete range of travel services including domestic tours, international packages, honeymoon planning, corporate travel, and more.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Travel Services | GK Journeys",
    description: "Explore our complete range of travel services.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
