"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { BottomNav } from "@/components/invitation/BottomNav";
import { CoupleSection } from "@/components/invitation/CoupleSection";
import { EventSection } from "@/components/invitation/EventSection";
import { GallerySection } from "@/components/invitation/GallerySection";
import { HeroSection } from "@/components/invitation/HeroSection";
import { OpeningCover } from "@/components/invitation/OpeningCover";

interface SectionFlowersProps {
  isOpen: boolean;
}

function SectionFlowers({ isOpen }: SectionFlowersProps) {
  return (
    <>
      {isOpen && (
        <>
          {/* Outermost Decorative Luxury Floral Corners - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="pointer-events-none absolute -left-4 -top-4 z-50 h-60 w-60 sm:h-80 sm:w-80 sm:-left-16 sm:-top-16"
          >
            <Image
              src="/element/Bunga_Kiri_Atas.png"
              alt="Ornamen Kiri Atas"
              fill
              className="object-contain object-left-top"
              priority
            />
          </motion.div>

          {/* Outermost Decorative Luxury Floral Corners - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="pointer-events-none absolute -right-4 -top-4 z-50 h-60 w-60 sm:h-80 sm:w-80 sm:-right-16 sm:-top-16"
          >
            <Image
              src="/element/Bunga_Kanan_Atas.png"
              alt="Ornamen Kanan Atas"
              fill
              className="object-contain object-right-top"
              priority
            />
          </motion.div>

          {/* Outermost Decorative Luxury Floral Corners - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="pointer-events-none absolute -left-4 -bottom-4 z-50 h-60 w-60 sm:h-80 sm:w-80 sm:-left-16 sm:-bottom-16"
          >
            <Image
              src="/element/Bunga_kiri_bawah.png"
              alt="Ornamen Kiri Bawah"
              fill
              className="object-contain object-left-bottom"
            />
          </motion.div>

          {/* Outermost Decorative Luxury Floral Corners - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="pointer-events-none absolute -right-4 -bottom-4 z-50 h-60 w-60 sm:h-80 sm:w-80 sm:-right-16 sm:-bottom-16"
          >
            <Image
              src="/element/Bunga_Kanan_Bawah.png"
              alt="Ornamen Kanan Bawah"
              fill
              className="object-contain object-right-bottom"
            />
          </motion.div>
        </>
      )}
    </>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Lock body scroll when cover is closed
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsMusicPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked or failed:", err);
      });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      audioRef.current.play().catch((err) => console.log(err));
      setIsMusicPlaying(true);
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3"
        loop
        preload="auto"
      />

      <AnimatePresence mode="wait">
        {!isOpen && (
          <OpeningCover onOpen={handleOpen} />
        )}
      </AnimatePresence>

      <motion.div
        className="invitation-shell mx-auto min-h-screen w-full max-w-2xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <main>
          {/* Section 1: Hero */}
          <div className="relative">
            <SectionFlowers isOpen={isOpen} />
            <HeroSection />
          </div>

          {/* Section 2: Couple */}
          <div className="relative">
            <SectionFlowers isOpen={isOpen} />
            <CoupleSection />
          </div>

          {/* Section 3: Event */}
          <div className="relative">
            <SectionFlowers isOpen={isOpen} />
            <EventSection />
          </div>

          {/* Section 4: Gallery */}
          <div className="relative">
            <SectionFlowers isOpen={isOpen} />
            <GallerySection />
          </div>
        </main>
        <BottomNav isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} isOpen={isOpen} />
      </motion.div>
    </>
  );
}

