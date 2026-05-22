"use client";

import { motion } from "framer-motion";

const cornerVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function BotanicalCorners() {
  return (
    <>
      <motion.svg
        custom={0}
        variants={cornerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pointer-events-none absolute left-0 top-0 h-32 w-32 text-brown/45 sm:h-40 sm:w-40"
        viewBox="0 0 120 120"
        fill="currentColor"
        aria-hidden
      >
        <path d="M10 90 Q30 50 60 30 Q40 60 50 90 Z" opacity="0.65" />
        <path d="M5 70 Q25 40 45 20 Q35 45 25 75 Z" opacity="0.45" />
        <circle cx="35" cy="25" r="4" opacity="0.55" />
        <circle cx="50" cy="18" r="3" opacity="0.45" />
        <ellipse cx="20" cy="55" rx="8" ry="14" opacity="0.4" />
        <path
          d="M8 40 Q20 25 35 15"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.35"
        />
      </motion.svg>
      <motion.svg
        custom={1}
        variants={cornerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pointer-events-none absolute right-0 top-0 h-32 w-32 scale-x-[-1] text-brown/45 sm:h-40 sm:w-40"
        viewBox="0 0 120 120"
        fill="currentColor"
        aria-hidden
      >
        <path d="M10 90 Q30 50 60 30 Q40 60 50 90 Z" opacity="0.65" />
        <path d="M5 70 Q25 40 45 20 Q35 45 25 75 Z" opacity="0.45" />
        <circle cx="35" cy="25" r="4" opacity="0.55" />
        <circle cx="50" cy="18" r="3" opacity="0.45" />
        <ellipse cx="20" cy="55" rx="8" ry="14" opacity="0.4" />
      </motion.svg>
      <motion.svg
        custom={2}
        variants={cornerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pointer-events-none absolute bottom-24 left-0 h-28 w-28 text-brown/38 sm:bottom-28 sm:h-36 sm:w-36"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden
      >
        <path d="M15 80 Q40 55 70 75 Q50 50 30 60 Z" opacity="0.55" />
        <circle cx="25" cy="70" r="5" opacity="0.45" />
        <circle cx="55" cy="78" r="3" opacity="0.35" />
      </motion.svg>
      <motion.svg
        custom={3}
        variants={cornerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pointer-events-none absolute bottom-24 right-0 h-28 w-28 scale-x-[-1] text-brown/38 sm:bottom-28 sm:h-36 sm:w-36"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden
      >
        <path d="M15 80 Q40 55 70 75 Q50 50 30 60 Z" opacity="0.55" />
        <circle cx="25" cy="70" r="5" opacity="0.45" />
        <circle cx="55" cy="78" r="3" opacity="0.35" />
      </motion.svg>
    </>
  );
}

export function FloralAccent({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden
      initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.2 }}
    >
      <path
        d="M40 70 Q55 45 65 25 Q50 40 40 55 Q30 40 15 25 Q25 45 40 70Z"
        fill="#a8896e"
        opacity="0.9"
      />
      <path
        d="M55 35 Q70 20 75 10 Q60 22 50 30Z"
        fill="#c4a882"
        opacity="0.75"
      />
      <circle cx="62" cy="18" r="4" fill="#e5d3b3" />
      <circle cx="48" cy="28" r="3" fill="#d4bc9a" />
    </motion.svg>
  );
}
