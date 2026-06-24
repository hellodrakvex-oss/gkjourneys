"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const heroImage = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=90&w=2400&auto=format&fit=crop";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center bg-black overflow-hidden pt-20">
      {/* Hero Image — subtle Ken Burns with soft fade-in */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.png"
          alt="GK Journeys - Premium Travel Experiences"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        {/* Gradient stack for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {/* Premium Pill Badge Label */}
            <motion.div
  variants={{
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  }}
  transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
  className="mb-8 inline-flex items-center justify-center px-7 py-3 rounded-full border border-amber-400/30 bg-black/40 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] relative overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-white/5 to-amber-500/10 animate-pulse" />

  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/15 to-transparent" />

  <span className="relative z-10 text-amber-300 font-bold text-sm md:text-base tracking-[0.35em] uppercase drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
     GK Journeys 
  </span>
</motion.div>

            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] text-white leading-[1.15] tracking-tight mb-6"
            >
              Every Journey <br />
              Tells A Story
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-white/80 text-base md:text-lg font-light max-w-2xl leading-relaxed mb-10 tracking-wide"
            >
              Discover unforgettable destinations, personalized travel experiences, and journeys crafted around you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 15 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <a
                href="#trip-planner"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                Plan My Journey
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a
                href="https://wa.me/917892050273"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487z"/></svg>
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-white/20 overflow-hidden relative">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
