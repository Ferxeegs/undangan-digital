"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type NavId = "home" | "couple" | "event" | "gallery";

const NAV_ITEMS: { id: NavId; label: string; icon: React.ReactNode }[] = [
  {
    id: "home",
    label: "Beranda",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
  {
    id: "couple",
    label: "Mempelai",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    id: "event",
    label: "Acara",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    ),
  },
  {
    id: "gallery",
    label: "Galeri",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
];

const SECTION_IDS: NavId[] = ["home", "couple", "event", "gallery"];

function scrollToSection(id: NavId) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function useActiveSection(): NavId {
  const [active, setActive] = useState<NavId>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

type BottomNavProps = {
  isMusicPlaying: boolean;
  toggleMusic: () => void;
  isOpen: boolean;
};

export function BottomNav({ isMusicPlaying, toggleMusic, isOpen }: BottomNavProps) {
  const active = useActiveSection();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-3 pb-3 sm:pb-5"
          aria-label="Navigasi undangan"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 20, delay: 0.1 }}
        >
          <div className="flex w-full max-w-lg items-center justify-between gap-1 rounded-2xl border border-white/10 bg-taupe/95 px-3 py-2.5 shadow-2xl backdrop-blur-md sm:gap-2 sm:px-5 sm:py-3">
            {NAV_ITEMS.map(({ id, label, icon }) => {
              const isActive = active === id;
              return (
                <motion.button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="relative flex flex-1 flex-col items-center gap-0.5 py-1"
                  aria-label={label}
                  aria-current={isActive ? "true" : undefined}
                  whileTap={{ scale: 0.88 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-cream/20"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 28,
                      }}
                    />
                  )}
                  <svg
                    className={`relative h-5 w-5 transition-colors sm:h-6 sm:w-6 ${
                      isActive ? "text-cream" : "text-cream/60 hover:text-cream/90"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {icon}
                  </svg>
                </motion.button>
              );
            })}
            
            <motion.button
              type="button"
              onClick={toggleMusic}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:h-11 sm:w-11 cursor-pointer shadow-lg"
              aria-label={isMusicPlaying ? "Matikan musik" : "Putar musik"}
              aria-pressed={isMusicPlaying}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              animate={{
                backgroundColor: isMusicPlaying ? "#c9a86c" : "#8b6f5c",
              }}
              transition={{ duration: 0.3 }}
            >
              {isMusicPlaying ? (
                <div className="flex items-end justify-center gap-[3px] h-5 w-5">
                  {[1, 2, 3, 4].map((bar) => (
                    <motion.span
                      key={bar}
                      className="w-[3px] bg-white rounded-full"
                      animate={{
                        height: ["20%", "95%", "20%"]
                      }}
                      transition={{
                        duration: bar === 1 ? 0.65 : bar === 2 ? 0.45 : bar === 3 ? 0.75 : 0.55,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: bar * 0.1
                      }}
                    />
                  ))}
                </div>
              ) : (
                <svg
                  className="h-5 w-5 text-white/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              )}
            </motion.button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

