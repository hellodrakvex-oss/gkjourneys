"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BadgeCheck, Star, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    title: "Women Entrepreneur Led",
    desc: "A passionate travel company founded and managed by a dedicated woman entrepreneur.",
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-primary" />,
    title: "MSME Registered Business",
    desc: "A verified and registered travel business you can trust with complete confidence.",
  },
  {
    icon: <Star className="w-5 h-5 text-primary" />,
    title: "Personalized Service",
    desc: "Every traveler receives individual attention and customized travel recommendations.",
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-primary" />,
    title: "Direct WhatsApp Assistance",
    desc: "Quick communication and support whenever you need help planning your trip.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-16 pb-24 overflow-hidden">
      {/* Background Image replicating EssentialServices.tsx behavior */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2000&q=80"
            alt="Why Choose Us Background"
            fill
            quality={80}
            className="object-cover object-center"
          />
        </motion.div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        {/* Bottom fade — smooth transition into footer */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />
      </div>
      

      
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Top Label */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
              visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-white/80 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-1"
          >
            Why Choose
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
              visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-2"
          >
            <span className="italic text-primary">GK Journeys</span>
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-base md:text-lg text-white/90 max-w-xl mx-auto leading-snug"
          >
            Premium, trusted travel experiences crafted just for you.
          </motion.p>
        </motion.div>

        {/* Cards Grid: 2x2 layout on desktop, single column on mobile */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
          }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
              className="h-full flex flex-col items-center justify-center bg-[rgba(255,255,255,0.08)] backdrop-blur-[12px] border border-white/20 rounded-2xl p-4 md:p-5 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] hover:border-white/40 hover:bg-[rgba(255,255,255,0.12)] group shadow-lg"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500 shadow-sm">
                  {b.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg md:text-xl mb-1.5 tracking-wide">
                {b.title}
              </h3>
              <p className="text-white/80 text-sm leading-snug">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
