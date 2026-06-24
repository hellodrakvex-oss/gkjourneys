"use client";

import { motion } from "framer-motion";

// High-quality, clearly visible travel landscape (Kerala backwaters)
const bgImage = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=85&w=2400&auto=format&fit=crop";

const services = [
  { 
    id: "domestic", 
    title: "Domestic Tours", 
    desc: "Explore incredible India",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ) 
  },
  { 
    id: "international", 
    title: "International Tours", 
    desc: "Dream. Plan. Discover.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ) 
  },
  { 
    id: "honeymoon", 
    title: "Honeymoon Packages", 
    desc: "Romance made special",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ) 
  },
  { 
    id: "family", 
    title: "Family Tours", 
    desc: "Memories for a lifetime",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ) 
  },
  { 
    id: "group", 
    title: "Group Tours", 
    desc: "Together is better",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ) 
  },
  { 
    id: "corporate", 
    title: "Corporate Tours", 
    desc: "Travel for business",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ) 
  },
  { 
    id: "hotel", 
    title: "Hotel Booking", 
    desc: "Comfort stays",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ) 
  },
  { 
    id: "flight", 
    title: "Flight Booking", 
    desc: "Best options, best fares",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ) 
  },
  { 
    id: "vehicle", 
    title: "Vehicle Rental", 
    desc: "Ride with comfort",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ) 
  },
];

export function EssentialServices() {
  return (
    <section id="essential-services" className="py-24 md:py-32 relative overflow-hidden bg-gray-900 text-white">
      {/* Background Image - Keeping it highly visible */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        {/* Subtle dark overlay only enough to make white text readable, keeping image the hero */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* --- Header (Blur-to-Clear Animated) --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-white/80 text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            Comprehensive Support
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-6"
          >
            Essential <span className="italic font-light">Travel Services</span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-white/80 text-base md:text-lg tracking-wide font-light max-w-xl mx-auto"
          >
            Beyond itineraries — we manage every logistical detail so you can travel with complete peace of mind.
          </motion.p>
        </motion.div>

        {/* --- Premium Glassmorphism Grid --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((svc) => (
            <motion.a
              key={svc.id}
              href={`https://wa.me/917892050273?text=${encodeURIComponent(`Hi Krupa! I'm interested in ${svc.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
              }}
              className="group relative p-8 md:p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 ease-out"
            >
              {/* Subtle hover glow effect behind the card */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
              
              {/* Animated Top Border Line */}
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-white/80 group-hover:w-full transition-all duration-700 ease-out" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-900 group-hover:scale-110 transition-all duration-500 mb-6 shadow-sm">
                  {svc.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl md:text-2xl font-serif text-white mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm md:text-base text-white/70 font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {svc.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
