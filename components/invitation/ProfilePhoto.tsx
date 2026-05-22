"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProfilePhotoProps = {
  src: string;
  alt: string;
  size?: "sm" | "lg";
  from?: "left" | "right";
};

export function ProfilePhoto({
  src,
  alt,
  size = "lg",
  from = "left",
}: ProfilePhotoProps) {
  const dim =
    size === "lg" ? "h-36 w-36 sm:h-44 sm:w-44" : "h-32 w-32 sm:h-40 sm:w-40";

  return (
    <motion.div
      className={`relative z-10 mx-auto ${dim}`}
      initial={{ opacity: 0, x: from === "left" ? -40 : 40, scale: 0.92 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 90, damping: 16 }}
    >
      {/* Custom Decorative Photo Frame Overlay (Bingkai_Foto_2) */}
      <div className="absolute -inset-4 pointer-events-none z-10">
        <Image
          src="/element/Bingkai_Foto_2.png"
          alt="Bingkai Profil"
          fill
          className="object-contain"
          priority
        />
      </div>

      <motion.div
        className="relative h-full w-full overflow-hidden rounded-full shadow-md"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes="176px" />
      </motion.div>
    </motion.div>
  );
}
