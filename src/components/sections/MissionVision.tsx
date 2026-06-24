"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { Target, Globe2, HeartHandshake, LucideIcon } from "lucide-react";

// ── Animation Variants ───────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.05 },
  },
};

// Cinematic entry: blur + depth-scale + soft rise, expo-out easing
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.93,
    filter: "blur(14px)",
    transformOrigin: "bottom center",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Data ─────────────────────────────────────────────────────────
const data: { Icon: LucideIcon; title: string; content: string }[] = [
  {
    Icon: Target,
    title: "Our Mission",
    content:
      "To plan trips across India with complete transparency. You get direct founder support, verified hotels & drivers in every city, and clear costs upfront so you travel with confidence, not confusion.",
  },
  {
    Icon: Globe2,
    title: "Our Vision",
    content:
      "To become India's most trusted travel brand — known not for scale, but for the depth of care and quality we bring to every single journey.",
  },
  {
    Icon: HeartHandshake,
    title: "Our Values",
    content:
      "Honesty in pricing, authenticity in planning, and warmth in every interaction. We treat every traveler like a guest in our own home.",
  },
];

// ── Premium Card with cursor-tracking spotlight ───────────────────
function PremiumCard({
  Icon,
  title,
  content,
}: {
  Icon: LucideIcon;
  title: string;
  content: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Raw mouse position inside card (0–1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Springy follow — feels physically grounded
  const springConfig = { stiffness: 180, damping: 28, mass: 0.5 };
  const spotX = useSpring(mouseX, springConfig);
  const spotY = useSpring(mouseY, springConfig);

  // Translate to % strings for the radial gradient position
  const bgX = useTransform(spotX, (v) => `${v * 100}%`);
  const bgY = useTransform(spotY, (v) => `${v * 100}%`);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex flex-col bg-white border border-gray-100/90 rounded-[1.5rem] p-6 lg:p-8 overflow-hidden cursor-default select-none"
      style={{
        boxShadow: "0 2px 12px -4px rgba(0,0,0,0.06), 0 1px 3px -1px rgba(0,0,0,0.04)",
      }}
    >
      {/* ── Cursor-tracking spotlight ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle 200px at var(--spot-x, 50%) var(--spot-y, 50%), rgba(15,139,115,0.07), transparent 80%)",
          // We inject CSS variables via a style hack via the motion value
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle 180px at calc(${bgX} * 1) calc(${bgY} * 1), rgba(15,139,115,0.07) 0%, transparent 80%)`,
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* ── Border glow on hover ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
        style={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        // Inset ring instead of box-shadow so it's inside
      >
        <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-primary/25 shadow-[inset_0_0_0_1px_rgba(15,139,115,0.15)]" />
      </motion.div>

      {/* ── Top shimmer line ── */}
      <motion.div
        className="pointer-events-none absolute top-0 left-8 right-8 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(15,139,115,0.4), transparent)",
          opacity: 0,
          scaleX: 0,
        }}
        whileHover={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ── Bottom depth shadow ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
        style={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 rounded-[1.5rem] shadow-[0_20px_50px_-12px_rgba(15,139,115,0.18)]" />
      </motion.div>

      {/* ── Icon ── */}
      <motion.div
        className="relative z-10 w-11 h-11 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center mb-6 flex-shrink-0"
        whileHover={{ scale: 1.08, rotate: 4 }}
        transition={{ type: "spring", stiffness: 340, damping: 20 }}
      >
        <Icon className="w-5 h-5 text-primary" />
      </motion.div>

      {/* ── Text ── */}
      <motion.h3
        className="relative z-10 text-base lg:text-[1.05rem] font-bold text-gray-900 mb-3"
        whileHover={{ color: "rgba(15,139,115,1)" }}
        transition={{ duration: 0.25 }}
      >
        {title}
      </motion.h3>
      <p className="relative z-10 text-gray-500 text-sm leading-relaxed font-light flex-grow">
        {content}
      </p>
    </motion.div>
  );
}

// ── Section ──────────────────────────────────────────────────────
export function MissionVision() {
  return (
    <section className="relative py-20 bg-[#F8F6F2] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Heading — slides from left */}
        <motion.div
          initial={{ opacity: 0, x: -36, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-2.5 block">
            Our Core Principles
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 tracking-tight">
            Mission, Vision &amp; Values
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {data.map((item) => (
            <PremiumCard key={item.title} {...item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
