import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gkjourneys.com"),
  title: "GK Journeys | Travel Agency in Mysore",
  description: "Domestic Tours, International Tours, Honeymoon Packages, Family Trips and Customized Travel Experiences.",
  keywords: "travel agency Mysore, Kerala tour packages, Karnataka tourism, GK Journeys, Krupa Murthy travel, honeymoon packages, family tours India",
  openGraph: {
    title: "GK Journeys – Every Journey Tells A Story",
    description: "Personalized travel experiences across India and beyond. Curated by Krupa P Murthy.",
    url: "/",
    siteName: "GK Journeys",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GK Journeys | Premium Travel Agency",
    description: "Domestic Tours, International Tours, Honeymoon Packages, Family Trips and Customized Travel Experiences.",
  },
  alternates: {
    canonical: "/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "GK Journeys",
  "url": "https://www.gkjourneys.com",
  "telephone": "+917892050273",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#544, 5th Cross, Bogadi 2nd Stage North",
    "addressLocality": "Mysore",
    "addressRegion": "Karnataka",
    "postalCode": "570026",
    "addressCountry": "IN"
  },
  "founder": {
    "@type": "Person",
    "name": "Krupa P Murthy"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
