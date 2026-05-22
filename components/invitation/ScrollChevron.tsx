"use client";

import { motion } from "framer-motion";

export function ScrollChevron() {
  return (
    <motion.div
      className="mt-10 flex flex-col items-center gap-1 text-taupe/60"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="text-sm font-light"
          animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          ›
        </motion.span>
      ))}
      <span className="mt-1 text-[10px] tracking-widest uppercase text-wedding-muted">
        scroll
      </span>
    </motion.div>
  );
}
