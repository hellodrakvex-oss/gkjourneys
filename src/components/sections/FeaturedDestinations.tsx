"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const destinations = [
  {
    name: "Kerala",
    id: "kerala",
    tagline: "God's Own Country",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=85&w=800&auto=format&fit=crop",
    icon: "🚣", // Or an SVG icon
  },
  {
    name: "Karnataka",
    id: "karnataka",
    tagline: "One State. Many Worlds.",
    img: "https://plus.unsplash.com/premium_photo-1697730494992-7d5a0c46ea52?q=85&w=800&auto=format&fit=crop",
    icon: "🛕",
  },
  {
    name: "Tamil Nadu",
    id: "tamil-nadu",
    tagline: "Where Stories Never End",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=85&w=800&auto=format&fit=crop",
    icon: "🏛️",
  },
  {
    name: "Goa",
    id: "goa",
    tagline: "Sun. Sand. Serenity.",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=85&w=800&auto=format&fit=crop",
    icon: "🏖️",
  },
  {
    name: "North India",
    id: "north-india",
    tagline: "Majestic. Timeless. Divine.",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=85&w=800&auto=format&fit=crop",
    icon: "🏔️",
  },
];

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-24 relative overflow-hidden bg-white">
      {/* Premium Background Patterns & Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center font-bold tracking-[0.2em] uppercase text-xs text-gray-500 mb-4"
          >
            Explore India
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight"
          >
            Beautiful <span className="text-primary italic">Destinations</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-6"
          >
            <div className="h-[1px] w-12 bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-primary/40"></div>
            <div className="h-[1px] w-12 bg-gray-300"></div>
          </motion.div>
        </div>

        {/* Equal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
            >
              <Link
                href={`/destinations#${dest.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] block shadow-md hover:shadow-xl transition-shadow duration-500"
              >
              {/* Image */}
              <div
                className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110"
              >
                <Image src={dest.img} alt={dest.name} fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover" />
              </div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Icon Badge */}
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-primary/80 group-hover:border-primary transition-colors duration-500">
                   <span className="text-sm">{dest.icon}</span>
                </div>

                {/* Bottom info */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-serif text-white mb-1 leading-tight">{dest.name}</h3>
                  <p className="text-white/80 text-xs font-medium tracking-wide mb-4 opacity-90">{dest.tagline}</p>
                  
                  {/* CTA Button */}
                  <div className="inline-flex items-center gap-2 border border-white/40 rounded-full px-4 py-1.5 text-white text-[10px] uppercase tracking-widest font-bold group-hover:bg-white group-hover:text-gray-900 group-hover:border-white transition-colors duration-300">
                    Explore
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
