"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/wedding-data";
import { ProfilePhoto } from "./ProfilePhoto";
import { ScrollReveal, StaggerItem, StaggerReveal } from "./ScrollReveal";

export function CoupleSection() {
  return (
    <section
      id="couple"
      className="paper-texture relative scroll-mt-4 px-4 pb-40 pt-14 sm:px-6 sm:pt-20 overflow-hidden"
    >
      {/* Background Static Image */}
      <div className="absolute inset-0 -z-10 select-none pointer-events-none">
        <Image
          src="/element/9.jpg"
          alt="Latar Belakang Couple"
          fill
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-lg text-center">
        <ScrollReveal>
          <p
            className="font-arabic text-xl text-wedding-text sm:text-2xl"
            dir="rtl"
          >
            {WEDDING.greeting.arabic}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 px-3 text-xs leading-relaxed text-wedding-muted sm:text-sm">
            {WEDDING.greeting.intro}
          </p>
        </ScrollReveal>

        <div className="ornament-line mx-auto my-10 w-28" />

        <StaggerReveal className="flex flex-col gap-10 mt-8 w-full max-w-md mx-auto">
          <StaggerItem className="bg-white/85 border border-gold/20 shadow-[0_10px_25px_rgba(139,111,92,0.06)] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col items-center">
            {/* Elegant double-line border inside card */}
            <div className="absolute inset-3 border border-gold/10 rounded-2xl pointer-events-none" />

            {/* Background Accent Cipratan */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 z-0">
              <div className="relative w-[95%] h-[95%] sm:w-[200%] sm:h-[200%]">
                <Image
                  src="/element/Cipratan.png"
                  alt="Aksen Cipratan"
                  fill
                  className="object-contain filter saturate-200 contrast-125 brightness-85"
                />
              </div>
            </div>

            <ProfilePhoto
              src="/element/laki.jpeg"
              alt={WEDDING.groom.name}
              size="sm"
              from="left"
            />
            <h2 className="font-script mt-6 px-2 text-2xl leading-snug text-brown sm:text-[1.75rem] font-bold text-center relative z-10">
              {WEDDING.groom.name}
            </h2>
            <div className="mt-4 space-y-1.5 text-xs text-wedding-muted sm:text-sm text-center relative z-10 font-medium flex flex-col items-center">
              <p className="tracking-wide">{WEDDING.groom.order}</p>
              <p className="text-brown-dark font-semibold">{WEDDING.groom.parents}</p>
              <a
                href={`https://instagram.com/${WEDDING.groom.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brown hover:text-gold transition-colors mt-2.5 duration-300 relative z-25 group"
              >
                <svg
                  className="w-4.5 h-4.5 text-brown group-hover:text-gold transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="font-semibold tracking-wide italic">{WEDDING.groom.instagram}</span>
              </a>
            </div>
          </StaggerItem>

          <div className="relative flex justify-center items-center my-2">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            </div>
            <motion.div
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/70 border border-gold/30 shadow-md font-script text-4xl text-brown sm:text-5xl"
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              &
            </motion.div>
          </div>

          <StaggerItem className="bg-white/85 border border-gold/20 shadow-[0_10px_25px_rgba(139,111,92,0.06)] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col items-center">
            {/* Elegant double-line border inside card */}
            <div className="absolute inset-3 border border-gold/10 rounded-2xl pointer-events-none" />

            {/* Background Accent Cipratan */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 z-0">
              <div className="relative w-[95%] h-[95%] sm:w-[200%] sm:h-[200%]">
                <Image
                  src="/element/Cipratan.png"
                  alt="Aksen Cipratan"
                  fill
                  className="object-contain filter saturate-200 contrast-125 brightness-85"
                />
              </div>
            </div>

            <ProfilePhoto
              src="/element/wanita.jpeg"
              alt={WEDDING.bride.name}
              size="sm"
              from="right"
            />
            <h2 className="font-script mt-6 px-2 text-2xl leading-snug text-brown sm:text-[1.75rem] font-bold text-center relative z-10">
              {WEDDING.bride.name}
            </h2>
            <div className="mt-4 space-y-1.5 text-xs text-wedding-muted sm:text-sm text-center relative z-10 font-medium flex flex-col items-center">
              <p className="tracking-wide">{WEDDING.bride.order}</p>
              <p className="text-brown-dark font-semibold">{WEDDING.bride.parents}</p>
              <a
                href={`https://instagram.com/${WEDDING.bride.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brown hover:text-gold transition-colors mt-2.5 duration-300 relative z-25 group"
              >
                <svg
                  className="w-4.5 h-4.5 text-brown group-hover:text-gold transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="font-semibold tracking-wide italic">{WEDDING.bride.instagram}</span>
              </a>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>

      {/* <motion.div
        className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg
          viewBox="0 0 1440 120"
          className="w-full text-beige"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,64 C240,100 480,20 720,48 C960,76 1200,28 1440,56 L1440,120 L0,120 Z"
          />
        </svg>
        <svg
          viewBox="0 0 1440 80"
          className="-mt-8 w-full text-taupe/35"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,40 C360,80 720,0 1080,32 C1260,48 1380,56 1440,48 L1440,80 L0,80 Z"
          />
        </svg>
      </motion.div> */}
    </section>
  );
}
