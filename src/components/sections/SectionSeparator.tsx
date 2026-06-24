"use client";

import { motion } from "framer-motion";

const orbs = [
  { size: 80,  top: "10%",  left: "5%",   color: "from-[#0f2044] to-[#1a3a6e]",  duration: 12, delay: 0 },
  { size: 120, top: "60%",  left: "10%",  color: "from-[#1a3a6e] to-[#1e5fa3]",  duration: 16, delay: 1 },
  { size: 50,  top: "20%",  left: "30%",  color: "from-[#1e5fa3] to-[#3b82d6]",  duration: 10, delay: 2 },
  { size: 200, top: "40%",  left: "50%",  color: "from-[#0f2044] to-[#1a3a6e]",  duration: 20, delay: 0.5 },
  { size: 90,  top: "70%",  left: "70%",  color: "from-[#3b82d6] to-[#60aef8]",  duration: 14, delay: 1.5 },
  { size: 60,  top: "15%",  left: "80%",  color: "from-[#1e5fa3] to-[#3b82d6]",  duration: 11, delay: 3 },
  { size: 140, top: "55%",  left: "88%",  color: "from-[#0f2044] to-[#1a3a6e]",  duration: 18, delay: 0.8 },
  { size: 70,  top: "80%",  left: "35%",  color: "from-[#1a3a6e] to-[#1e5fa3]",  duration: 13, delay: 2.5 },
];

export function SectionSeparator() {
  return (
    <div className="relative h-48 md:h-64 bg-[#050e1f] overflow-hidden flex items-center justify-center" aria-hidden="true">
      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} opacity-60 blur-2xl`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
          }}
          animate={{
            y: [0, -24, 8, -16, 0],
            x: [0, 10, -6, 12, 0],
            scale: [1, 1.08, 0.97, 1.04, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Small crisp orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            width: 10 + i * 4,
            height: 10 + i * 4,
            top: `${15 + i * 14}%`,
            left: `${8 + i * 16}%`,
          }}
          animate={{
            y: [0, -18, 6, -12, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Fade edges into surrounding sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
    </div>
  );
}
