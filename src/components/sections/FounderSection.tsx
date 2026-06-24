"use client";

import { motion } from "framer-motion";

const trustHighlights = [
  {
    title: "Women Entrepreneur",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    title: "MSME Registered Business",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Founder-Led Travel Planning",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: "Direct WhatsApp Support",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  }
];

/* Staggered container + child variants for blur-to-clear reveal */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const fadeBlurUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8 }
  }
};

export function FounderSection() {
  return (
    <section className="py-20 md:py-24 relative bg-[#FAFAF9] overflow-hidden">

      {/* ── Animated Background: floating glass orbs + mesh gradients ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large primary orb — top right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="absolute -top-28 -right-28 w-[520px] h-[520px] rounded-full bg-primary/[0.045] blur-[90px]"
        />
        {/* Accent orb — mid left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-1/3 -left-36 w-[420px] h-[420px] rounded-full bg-accent/[0.05] blur-[90px]"
        />
        {/* Small primary orb — bottom centre-right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[110px]"
        />

        {/* Floating glass orb decorations - Static or one-time reveal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-[18%] right-[12%] w-16 h-16 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-[22%] left-[10%] w-10 h-10 rounded-full bg-white/25 backdrop-blur-xl border border-white/30 shadow-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute top-[55%] right-[8%] w-7 h-7 rounded-full bg-primary/[0.06] backdrop-blur-xl border border-primary/[0.08] shadow-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute top-[12%] left-[18%] w-12 h-12 rounded-full bg-accent/[0.06] backdrop-blur-xl border border-accent/[0.08] shadow-sm"
        />
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >

          {/* Label */}
          <motion.p
            variants={fadeBlurUp}
            className="text-primary text-[11px] font-bold tracking-[0.35em] uppercase mb-5"
          >
            Founder&apos;s Vision
          </motion.p>

          {/* Heading — reduced ~20 % from previous */}
          <motion.h2
            variants={fadeBlurUp}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-gray-900 leading-snug mb-6"
          >
            A Personal Commitment to{" "}
            <span className="italic font-light text-primary">Better Travel</span>
          </motion.h2>

          {/* Thin decorative divider */}
          <motion.div variants={fadeBlurUp} className="flex justify-center mb-7">
            <div className="w-12 h-px bg-primary/25" />
          </motion.div>

          {/* Quote — tighter, smaller text */}
          <motion.p
            variants={fadeBlurUp}
            className="text-gray-500 text-base md:text-[17px] font-light leading-[1.8] italic max-w-2xl mx-auto mb-8"
          >
            &ldquo;GK Journeys was born to disrupt generic travel. My mission is to offer completely tailored, transparent travel planning where your comfort, joy, and memories are the ultimate priority. When you travel with us, you speak directly with the founder — we don&apos;t just plan trips; we craft personal transformations.&rdquo;
          </motion.p>

          {/* Founder signature block */}
          <motion.div variants={fadeBlurUp} className="mb-10">
            <div className="font-serif text-xl md:text-2xl text-primary italic mb-0.5">
              Krupa P Murthy
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Founder &amp; Director
            </div>
          </motion.div>

          {/* Thin separator before trust pills */}
          <motion.div variants={fadeBlurUp} className="flex justify-center mb-7">
            <div className="w-8 h-px bg-gray-200" />
          </motion.div>

          {/* Trust highlight pills */}
          <motion.div
            variants={fadeBlurUp}
            className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3"
          >
            {trustHighlights.map((h) => (
              <div
                key={h.title}
                className="flex items-center gap-1.5 bg-white/50 backdrop-blur-md border border-white/70 px-3.5 py-2 rounded-full shadow-[0_1px_6px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_14px_rgb(0,0,0,0.06)] hover:-translate-y-px transition-all duration-300"
              >
                <span className="text-primary">{h.icon}</span>
                <span className="text-xs font-medium text-gray-700 tracking-wide">
                  {h.title}
                </span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
