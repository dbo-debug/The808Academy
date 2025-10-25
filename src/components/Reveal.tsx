// src/components/Reveal.tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode, ReactElement } from "react";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  /** delay in seconds */
  delay?: number;
  /** starting Y offset in px */
  y?: number;
  once?: boolean;
  amount?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  amount = 0.3,
}: RevealProps): ReactElement {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
