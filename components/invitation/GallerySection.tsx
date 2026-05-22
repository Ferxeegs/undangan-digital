"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WEDDING } from "@/lib/wedding-data";

export function GallerySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  function handlePrev() {
    setActivePhotoIndex((prev) => 
      prev === null ? null : (prev - 1 + WEDDING.gallery.length) % WEDDING.gallery.length
    );
  }

  function handleNext() {
    setActivePhotoIndex((prev) => 
      prev === null ? null : (prev + 1) % WEDDING.gallery.length
    );
  }

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePhotoIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  return (
    <section
      id="gallery"
      className="scroll-mt-4 bg-gradient-to-b from-taupe to-brown-dark/95 px-3 py-16 pb-44 sm:px-6 sm:py-20"
    >
      <motion.h2
        className="font-script mb-2 text-center text-4xl text-white drop-shadow-md sm:text-5xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Gallery
      </motion.h2>
      
      <motion.p
        className="text-[10px] tracking-[0.2em] uppercase text-cream/70 text-center mb-10 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Momen Kebahagiaan Kami
      </motion.p>

      <motion.div
        className="gallery-grid mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.1 },
          },
        }}
      >
        {WEDDING.gallery.map((item, i) => {
          const spanClass =
            item.span === "col-span-full"
              ? "gallery-span-full"
              : item.span === "col-span-2"
                ? "gallery-span-2"
                : "";

          return (
            <motion.div
              key={i}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg border border-white/10 ${spanClass} ${item.aspect}`}
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              onClick={() => setActivePhotoIndex(i)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-400 group-hover:bg-black/30 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer p-2 z-[130]"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex(null);
              }}
              aria-label="Tutup Galeri"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Navigation Arrow */}
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white cursor-pointer p-3 z-[130] rounded-full bg-white/5 hover:bg-white/10 transition-colors hidden sm:block"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Foto Sebelumnya"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white cursor-pointer p-3 z-[130] rounded-full bg-white/5 hover:bg-white/10 transition-colors hidden sm:block"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Foto Selanjutnya"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Container */}
            <motion.div
              className="relative w-full max-w-4xl aspect-[4/3] max-h-[80vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={WEDDING.gallery[activePhotoIndex].src}
                alt={WEDDING.gallery[activePhotoIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Image Counter & Description on Mobile/Tablet */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <span className="text-white/60 text-xs tracking-widest font-semibold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                {activePhotoIndex + 1} / {WEDDING.gallery.length}
              </span>
              
              {/* Swipe/tap navigation hint for mobile */}
              <span className="text-white/40 text-[10px] tracking-wide sm:hidden">
                Ketuk di luar gambar untuk menutup
              </span>
            </div>
            
            {/* Tap handlers for mobile left/right areas */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1/4 z-[125] sm:hidden cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-1/4 z-[125] sm:hidden cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
