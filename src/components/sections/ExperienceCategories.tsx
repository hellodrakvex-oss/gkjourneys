"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    title: "Family Getaways",
    desc: "Create beautiful memories",
    img: "https://plus.unsplash.com/premium_photo-1726866161832-3bf6b11d4cc1?q=85&w=800&auto=format&fit=crop",
  },
  {
    title: "Honeymoon Escapes",
    desc: "Romantic journeys crafted",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=85&w=800&auto=format&fit=crop",
  },
  {
    title: "Group Holidays",
    desc: "Travel together, bond forever",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=800&auto=format&fit=crop",
  },
  {
    title: "Adventure Trips",
    desc: "Thrill, explore, experience",
    img: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=85&w=800&auto=format&fit=crop",
  },
  {
    title: "Cultural & Heritage",
    desc: "Explore the soul of India",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=85&w=800&auto=format&fit=crop",
  },
];

export function ExperienceCategories() {
  return (
    <section id="experiences" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-4"
          >
            Curated <span className="text-primary italic">Experiences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-500 text-sm md:text-base"
          >
            Handpicked journeys designed around what matters most to you.
          </motion.p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {experiences.map((exp, i) => (
            <motion.a
              key={exp.title}
              href={`https://wa.me/917892050273?text=${encodeURIComponent(`Hi Krupa! I'm interested in ${exp.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl block shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image */}
              <div
                className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110"
              >
                <Image src={exp.img} alt={exp.title} fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover" />
              </div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-white font-serif text-xl mb-1 leading-tight">{exp.title}</h3>
                  <p className="text-white/80 text-xs font-light tracking-wide mb-4 opacity-90">{exp.desc}</p>
                  
                  {/* Arrow Icon Button */}
                  <div className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 shadow-md">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
