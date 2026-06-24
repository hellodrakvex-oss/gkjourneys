import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact GK Journeys | Book Your Next Trip",
  description:
    "Get in touch with GK Journeys, Mysore for personalized tour packages, hotel bookings, and travel inquiries. Contact Krupa P Murthy via WhatsApp, Email, or Phone.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact GK Journeys",
    description: "Get in touch with GK Journeys, Mysore for personalized tour packages.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
