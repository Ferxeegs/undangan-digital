"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/wedding-data";
import { ScrollReveal } from "./ScrollReveal";

function EventCard({
  title,
  date,
  time,
  location,
  mapsUrl,
  index,
}: {
  title: string;
  date: string;
  time: string;
  location: string;
  mapsUrl: string;
  index: number;
}) {
  return (
    <motion.article
      className="relative bg-white/85 border border-gold/20 shadow-[0_12px_24px_rgba(107,83,68,0.06)] overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      whileHover={{ y: -4, boxShadow: "0 18px 36px rgba(107,83,68,0.12)" }}
    >
      {/* Inner elegant gold thin border */}
      <div className="absolute inset-3 border border-gold/10 rounded-2xl pointer-events-none" />

      <h3 className="font-script text-center text-3xl text-brown sm:text-4xl font-bold relative z-10">
        {title}
      </h3>
      <div className="ornament-line mx-auto my-5 w-20 relative z-10" />

      <div className="flex flex-col items-center gap-2 relative z-10 text-center">
        {/* Date Badge */}
        <div className="rounded-full bg-cream border border-gold/15 px-5 py-1.5 text-xs font-bold text-brown-dark tracking-wide shadow-sm">
          {date}
        </div>

        <p className="mt-3 text-xs font-bold text-wedding-muted tracking-wide sm:text-sm">
          {time}
        </p>

        {/* Map pin icon */}
        <svg className="w-5 h-5 text-gold mt-4 animate-float-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

        <p className="mt-1.5 text-xs leading-relaxed text-wedding-text max-w-xs font-semibold sm:text-sm whitespace-pre-line">
          {location}
        </p>
      </div>

      <motion.a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mx-auto mt-6 flex w-fit items-center gap-2 rounded-xl px-7 py-3 text-xs font-semibold text-white sm:text-sm relative z-10 shadow-lg cursor-pointer bg-gradient-to-r from-taupe to-brown"
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.96 }}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Maps Lokasi Acara
      </motion.a>
    </motion.article>
  );
}

export function EventSection() {
  const { akad } = WEDDING.events;

  return (
    <section id="event" className="relative scroll-mt-4 pb-40">
      <div className="relative h-52 w-full overflow-hidden sm:h-60 md:h-72">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/element/bg_event.jpeg"
            alt="Venue"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/55" />
        {/* <svg
          className="absolute top-0 z-10 w-full text-cream"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,0 C360,60 720,0 1080,30 C1260,45 1380,50 1440,40 L1440,0 Z"
          />
        </svg> */}
        <motion.h2
          className="font-script absolute inset-0 z-10 flex items-center justify-center text-4xl text-white drop-shadow-lg sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Save The Date
        </motion.h2>
      </div>

      <div className="paper-texture relative px-4 pt-12 sm:px-6">
        <div className="relative z-10 mx-auto flex max-w-lg flex-col gap-8">
          <EventCard {...akad} index={0} />
          <ScrollReveal>
            <p className="rounded-2xl bg-white/60 px-4 py-8 text-center text-xs leading-relaxed text-wedding-muted backdrop-blur-sm sm:text-sm">
              {WEDDING.closingMessage}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
