"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WEDDING } from "@/lib/wedding-data";

type OpeningCoverProps = {
  onOpen: () => void;
};

export function OpeningCover({ onOpen }: OpeningCoverProps) {
  const [guestName, setGuestName] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to");
      if (to) {
        setTimeout(() => setGuestName(to), 0);
      }
    }
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cream px-6"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div
        className="paper-texture absolute inset-0"
        aria-hidden
      />

      {/* Decorative luxury corners inside cover */}
      <div className="absolute inset-4 pointer-events-none border border-gold/15 rounded-2xl" />
      <div className="absolute inset-6 pointer-events-none border border-gold/5 rounded-xl" />

      {/* Floating elegant light particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <motion.div 
          className="absolute h-44 w-44 rounded-full bg-gold/10 blur-[80px]"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div 
          className="absolute h-44 w-44 rounded-full bg-taupe/10 blur-[80px]"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      <motion.div
        className="relative z-10 flex max-w-sm w-full flex-col items-center text-center bg-white/40 border border-white/50 shadow-2xl rounded-3xl p-8 backdrop-blur-md"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="font-arabic text-2xl text-wedding-text drop-shadow-sm leading-relaxed"
          dir="rtl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </motion.p>
        <motion.p
          className="mt-5 text-[10px] tracking-[0.25em] uppercase text-wedding-muted font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Undangan Pernikahan
        </motion.p>
        <motion.h1
          className="font-script mt-2 text-5xl text-brown-dark sm:text-6xl drop-shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, type: "spring", stiffness: 100 }}
        >
          {WEDDING.coupleShort}
        </motion.h1>
        <motion.div
          className="my-6 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        />

        {/* Personalized Guest Box */}
        {guestName && (
          <motion.div
            className="mb-8 w-full rounded-2xl bg-cream/80 border border-gold/15 p-4 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <p className="text-[10px] tracking-widest uppercase text-wedding-muted/80 font-semibold">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
            <p className="mt-2 text-base font-semibold text-brown-dark leading-tight">{guestName}</p>
          </motion.div>
        )}

        <div className="relative mt-2">
          {/* Animated Pulsing Ring */}
          <motion.span
            className="absolute -inset-1.5 rounded-full border-2 border-gold/30"
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.button
            type="button"
            onClick={onOpen}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-taupe to-brown px-10 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Buka Undangan
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
