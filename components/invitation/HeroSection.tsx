"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WEDDING, getCalendarUrl } from "@/lib/wedding-data";
import { easeOut, easeSpring } from "@/lib/motion-presets";
import { Countdown } from "./Countdown";
import { ScrollChevron } from "./ScrollChevron";

export function HeroSection() {
  return (
    <section
      id="home"
      className="paper-texture relative flex min-h-screen scroll-mt-4 flex-col items-center justify-center px-4 pb-32 pt-12 sm:px-6 sm:pt-16 overflow-hidden"
    >
      {/* Background Static Image */}
      <div className="absolute inset-0 -z-10 select-none pointer-events-none">
        <Image
          src="/element/3.jpeg"
          alt="Latar Belakang Hero"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <motion.div
          className="relative mb-10 h-44 w-44 sm:h-52 sm:w-52"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...easeSpring, delay: 0.1 }}
        >
          {/* Custom Decorative Photo Frame Overlay (Bingkai_Foto) */}
          <div className="absolute -inset-5 pointer-events-none z-10">
            <Image
              src="/element/Bingkai_Foto.png"
              alt="Bingkai Foto Pernikahan"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 216px, 248px"
            />
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-full shadow-lg">
            <Image
              src="/element/main_img.jpeg"
              alt={`Foto ${WEDDING.coupleShort}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 176px, 208px"
            />
          </div>
        </motion.div>

        <motion.p
          className="font-script text-3xl text-brown sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...easeOut, delay: 0.35 }}
        >
          Ngunduh Mantu
        </motion.p>
        <motion.h1
          className="font-script mt-1 bg-gradient-to-b from-brown-dark via-brown to-gold bg-clip-text text-4xl leading-normal text-transparent sm:text-5xl md:text-6xl drop-shadow-sm font-bold px-6 py-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...easeOut, delay: 0.5 }}
        >
          {WEDDING.coupleShort}
        </motion.h1>

        <motion.div
          className="ornament-line my-8 w-32 sm:w-40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="my-8 w-full max-w-md rounded-2xl border border-gold/20 bg-white/80 p-6 shadow-xl backdrop-blur-md flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, ...easeOut }}
        >
          <p
            className="font-arabic text-lg leading-loose text-brown-dark sm:text-xl text-center"
            dir="rtl"
          >
            {WEDDING.verse.arabic}
          </p>
          <div className="my-4 h-px w-20 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <p className="max-w-sm px-2 text-center text-xs leading-relaxed text-wedding-muted sm:text-sm">
            {WEDDING.verse.translation}
          </p>
          <p className="mt-4 text-center text-xs font-bold tracking-widest text-brown sm:text-sm">
            — {WEDDING.verse.reference} —
          </p>
        </motion.div>

        <div className="mt-12 w-full flex justify-center">
          <Countdown />
        </div>

        <motion.a
          href={getCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-12 inline-block rounded-xl px-10 py-3.5 text-sm font-semibold tracking-wide text-white shadow-xl bg-gradient-to-r from-taupe via-brown to-taupe"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={easeOut}
        >
          Save To Calendar
        </motion.a>

        <ScrollChevron />
      </div>
    </section>
  );
}
