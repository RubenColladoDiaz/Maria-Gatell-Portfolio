import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
  tone?: "light" | "dark" | "pistachio";
};

const toneClass = {
  light: "bg-[linear-gradient(135deg,#f5f6ef_0%,#e8ffd1_54%,#f5f6ef_100%)] text-ink",
  dark: "bg-[linear-gradient(135deg,#10130d_0%,#213012_48%,#557f17_100%)] text-smoke",
  pistachio: "bg-[linear-gradient(135deg,#b8ff5e_0%,#e8ffd1_58%,#f5f6ef_100%)] text-ink",
};

export function PageTransition({ children, tone = "light" }: PageTransitionProps) {
  return (
    <motion.main
      className={`min-h-screen pt-24 ${toneClass[tone]}`}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.main>
  );
}
