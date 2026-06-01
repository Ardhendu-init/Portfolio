"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Vertical travel distance; set to 0 for a pure fade. */
  y?: number;
};

/**
 * Self-contained scroll reveal. Each instance owns its own IntersectionObserver
 * (via whileInView) with a forgiving viewport, so content reveals slightly
 * before it fully enters and can never get stuck at opacity:0 on fast scrolls,
 * anchor jumps, or Safari — unlike deep parent→child variant propagation.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
