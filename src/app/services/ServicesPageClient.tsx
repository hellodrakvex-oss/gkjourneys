"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Map,
  Globe,
  Heart,
  Users,
  UsersRound,
  Briefcase,
  Hotel,
  Plane,
  Car,
  ArrowRight,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────
type Service = {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  accent: string;
};

// ── Service Data ──────────────────────────────────────────────────
const services: Service[] = [
  {
    icon: Map,
    title: "Domestic Tours",
    tagline: "Discover India's soul",
    description:
      "Expertly curated journeys across India's most breathtaking landscapes — from the lush backwaters of Kerala to the royal deserts of Rajasthan.",
    features: ["Kerala", "Karnataka", "Tamil Nadu", "Goa", "North India", "Custom Routes"],
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    accent: "from-emerald-600/80 to-teal-900/90",
  },
  {
    icon: Globe,
    title: "International Tours",
    tagline: "The world, your playground",
    description:
      "Seamless international travel planning — from visas to itineraries — crafted for unforgettable global experiences.",
    features: ["Southeast Asia", "Europe", "Middle East", "Maldives", "Sri Lanka", "Dubai"],
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    accent: "from-blue-700/80 to-slate-900/90",
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    tagline: "Romance, perfected",
    description:
      "Romantic escapes crafted for couples — every detail thoughtfully planned so you can simply enjoy each other.",
    features: ["Private Beach Stays", "Candlelit Dinners", "Couple Spa", "Scenic Drives", "Surprise Elements"],
    image:
      "https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?auto=format&fit=crop&w=900&q=80",
    accent: "from-rose-700/80 to-pink-900/90",
  },
  {
    icon: Users,
    title: "Family Tours",
    tagline: "Memories for everyone",
    description:
      "Carefully balanced itineraries that keep every family member — from grandparents to children — engaged, comfortable, and thrilled.",
    features: ["Kid-Friendly Activities", "Comfortable Stays", "Flexible Pace", "Safety First", "Local Experiences"],
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=900&q=80",
    accent: "from-amber-700/80 to-orange-900/90",
  },
  {
    icon: UsersRound,
    title: "Group Tours",
    tagline: "Together is better",
    description:
      "Energizing group travel experiences with coordinated logistics, group accommodations, and shared adventures.",
    features: ["Group Discounts", "Dedicated Coordinator", "Shared Transport", "Team Activities", "Flexible Group Size"],
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07bf10?auto=format&fit=crop&w=900&q=80",
    accent: "from-violet-700/80 to-purple-900/90",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    tagline: "Business, elevated",
    description:
      "End-to-end corporate travel management — conferences, team outings, and executive retreats handled with precision.",
    features: ["MICE Events", "Team Retreats", "Conference Tours", "Business Stays", "24/7 Support"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    accent: "from-slate-700/80 to-gray-900/90",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    tagline: "Rest where you deserve",
    description:
      "Handpicked accommodations across every budget — from boutique stays to luxury resorts — always at the best rates.",
    features: ["Budget to Luxury", "Best Rate Guarantee", "Verified Properties", "Instant Confirmation"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    accent: "from-teal-700/80 to-cyan-900/90",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    tagline: "Fly smart, fly better",
    description:
      "Domestic and international flight bookings optimised for the best fares, layovers, and travel comfort.",
    features: ["Domestic Flights", "International Flights", "Lowest Fares", "Flexible Dates", "Multi-City"],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    accent: "from-sky-700/80 to-blue-900/90",
  },
  {
    icon: Car,
    title: "Vehicle Rental",
    tagline: "Travel on your terms",
    description:
      "Reliable, comfortable vehicles for every group size — from compact sedans to spacious mini buses.",
    features: ["Sedan / SUV", "Tempo Traveller", "Mini Bus", "Driver Included", "Outstation Trips"],
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80",
    accent: "from-stone-700/80 to-neutral-900/90",
  },
];

// ── Animation Variants ────────────────────────────────────────────
const headingVariants: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(10px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.94, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Service Card ──────────────────────────────────────────────────
function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, title, tagline, description, features, image, accent } = service;

  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-[1.75rem] overflow-hidden cursor-default"
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
        </div>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-90 group-hover:opacity-95 transition-opacity duration-500`} />
      </div>

      {/* Shimmer top line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

      {/* Content */}
      <div className="relative z-10 p-7 lg:p-8 flex flex-col min-h-[340px]">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center mb-5 group-hover:bg-white/25 transition-colors duration-400">
          <Icon className="w-6 h-6 text-white transition-transform duration-500 group-hover:scale-110" />
        </div>

        {/* Tagline */}
        <span className="text-white/60 text-[10px] font-bold tracking-[0.22em] uppercase mb-2">
          {tagline}
        </span>

        {/* Title */}
        <h3 className="font-serif text-xl lg:text-2xl text-white font-semibold mb-3 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/75 text-sm leading-relaxed font-light mb-6 flex-grow">
          {description}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {features.slice(0, 4).map((f) => (
            <span
              key={f}
              className="text-[10px] font-semibold text-white/80 bg-white/10 border border-white/15 px-2.5 py-1 rounded-full"
            >
              {f}
            </span>
          ))}
          {features.length > 4 && (
            <span className="text-[10px] font-semibold text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
              +{features.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 text-white font-semibold text-xs tracking-wide uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400"
        >
          Enquire Now <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────
export default function ServicesPageClient() {
  return (
    <div className="bg-[#F8F6F2] min-h-screen">
      {/* ── Hero ── */}
      <div className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[3s] ease-out scale-105">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=85"
            alt="Services Hero Background"
            fill
            priority
            quality={85}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <motion.div
          className="relative z-10 container pb-14"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.span
            variants={headingVariants}
            className="text-white/70 font-bold text-[10px] tracking-[0.25em] uppercase block mb-3"
          >
            GK Journeys · Services
          </motion.span>
          <motion.h1
            variants={headingVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 leading-[1.1]"
          >
            Our Travel Services
          </motion.h1>
          <motion.p
            variants={headingVariants}
            className="text-white/75 text-base md:text-lg font-light max-w-xl leading-relaxed"
          >
            Personalized travel solutions designed for unforgettable journeys — from your first adventure to your grandest escape.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Services Grid ── */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headingVariants}
          className="mb-12"
        >
          <span className="text-primary font-bold text-[10px] tracking-[0.22em] uppercase mb-2.5 block">
            Everything We Offer
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 tracking-tight">
            Crafted for Every Kind of Traveler
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="container mx-auto px-4 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80"
              alt="Ready to Travel Banner"
              fill
              quality={80}
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B5D4D]/95 via-[#0B5D4D]/85 to-transparent" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-white/60 font-bold text-[10px] tracking-[0.22em] uppercase block mb-3">
                Ready to Travel?
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">
                Let&apos;s Plan Your Perfect Journey
              </h2>
              <p className="text-white/70 text-sm font-light max-w-md leading-relaxed">
                Tell us where you want to go. Krupa will craft a personalized itinerary just for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0B5D4D] font-bold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                Send an Inquiry <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917892050273"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
