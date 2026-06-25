"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Place = { name: string; desc: string };

type Destination = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  places: Place[];
  highlights: string[];
};

// Shared easing — Apple-style smooth spring feel
const ease = [0.21, 0.47, 0.32, 0.98] as const;

const imgVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.95, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
};

const imgVariantsReverse = {
  hidden: { opacity: 0, x: 60, scale: 0.95, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, delay: 0.2, ease },
  },
};

const contentVariantsReverse = {
  hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, delay: 0.2, ease },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.55, ease },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3, ease } },
};

const bodyVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease } },
};

export function DestinationSections({ destinations }: { destinations: Destination[] }) {
  return (
    <div className="container mt-16">
      <div className="space-y-28">
        {destinations.map((dest, i) => {
          const isReversed = i % 2 !== 0;
          const currentImgVariants = isReversed ? imgVariantsReverse : imgVariants;
          const currentContentVariants = isReversed ? contentVariantsReverse : contentVariants;

          return (
            <section key={dest.id} id={dest.id} className="scroll-mt-24">
              <div
                className={`flex flex-col lg:flex-row items-start gap-10 lg:gap-16 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* ── Image — enters from left (or right when reversed) ── */}
                <motion.div
                  className="w-full lg:w-1/2 flex-shrink-0"
                  variants={currentImgVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div className="relative h-[320px] md:h-[440px] rounded-3xl shadow-2xl overflow-hidden">
                    <Image
  src={dest.image}
  alt={dest.name}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover object-center"
  quality={90}
/>
                  </div>
                </motion.div>

                {/* ── Content — enters from right (or left when reversed) ── */}
                <motion.div
                  className="w-full lg:w-1/2"
                  variants={currentContentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {/* Tagline */}
                  <motion.span
                    variants={tagVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block"
                  >
                    {dest.tagline}
                  </motion.span>

                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{dest.name}</h2>

                  {/* Description */}
                  <motion.p
                    variants={bodyVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-gray-500 text-base leading-relaxed mb-6"
                  >
                    {dest.description}
                  </motion.p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {dest.highlights.map((h) => (
                      <span
                        key={h}
                        className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Places */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Places We Cover
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {dest.places.map((place) => (
                        <div
                          key={place.name}
                          className="flex items-start gap-2.5 bg-gray-50 rounded-xl p-3"
                        >
                          <span className="text-primary mt-0.5">📍</span>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{place.name}</p>
                            <p className="text-xs text-gray-500">{place.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs — animated last in sequence */}
                  <motion.div
                    variants={ctaVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <a
                      href={`https://wa.me/917892050273?text=${encodeURIComponent(
                        `Hi Krupa! I'm interested in visiting ${dest.name}. Can you help me plan a personalized trip?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487z" />
                      </svg>
                      Plan {dest.name} Trip
                    </a>
                    <Link
                      href="/#trip-planner"
                      className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-primary text-gray-700 hover:text-primary px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                    >
                      Use Trip Planner →
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
