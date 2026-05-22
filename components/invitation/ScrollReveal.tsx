"use client";

import { motion, type Variants } from "framer-motion";
import { easeOut, fadeUp, viewportOnce } from "@/lib/motion-presets";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "article" | "p" | "h1" | "h2" | "h3";
};

export function ScrollReveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ ...easeOut, delay }}
    >
      {children}
    </Component>
  );
}

export function StaggerReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.14, delayChildren: 0.06 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp} transition={easeOut}>
      {children}
    </motion.div>
  );
}
