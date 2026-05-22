"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WEDDING } from "@/lib/wedding-data";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calcTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "DAY" },
  { key: "hours", label: "HOURS" },
  { key: "minutes", label: "MINUTES" },
  { key: "seconds", label: "SECONDS" },
];

function AnimatedDigit({ value }: { value: number }) {
  return (
    <div className="relative h-8 overflow-hidden sm:h-10 w-full">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-brown-dark sm:text-3xl"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calcTimeLeft(WEDDING.countdownTarget),
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    const id = setInterval(() => {
      setTimeLeft(calcTimeLeft(WEDDING.countdownTarget));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="grid w-full max-w-md grid-cols-4 gap-2 px-2 sm:gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.15 },
        },
      }}
    >
      {UNITS.map(({ key, label }) => (
        <motion.div
          key={key}
          className="bg-white/70 backdrop-blur-md border border-gold/25 shadow-[0_8px_20px_rgba(107,83,68,0.08)] flex flex-col items-center justify-center rounded-2xl px-1 py-3.5 sm:py-4.5"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.9 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 120, damping: 14 },
            },
          }}
          whileHover={{ y: -3, boxShadow: "0 12px 28px rgba(107,83,68,0.15)", transition: { duration: 0.2 } }}
        >
          {mounted ? (
            <AnimatedDigit value={timeLeft[key]} />
          ) : (
            <span className="text-2xl font-bold text-brown-dark sm:text-3xl">
              0
            </span>
          )}
          <span className="mt-1.5 text-[9px] font-bold tracking-widest text-wedding-muted/80 sm:text-[10px]">
            {label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
