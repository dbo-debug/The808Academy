// src/components/Reveal.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type RevealProps = {
  children: React.ReactNode;
  /** Extra classes applied to the wrapper */
  className?: string;
  /** Pixels to translate on Y before reveal (positive = move up on show) */
  offsetY?: number; // default 16
  /** CSS transition duration in ms */
  durationMs?: number; // default 500
  /** CSS transition delay in ms */
  delayMs?: number; // default 0
  /** Intersection threshold (0..1) to trigger the reveal */
  threshold?: number; // default 0.2
  /** If false, the element will hide again when scrolled away */
  once?: boolean; // default true
};

export default function Reveal({
  children,
  className,
  offsetY = 16,
  durationMs = 500,
  delayMs = 0,
  threshold = 0.2,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Start hidden; when `visible` -> fade in + slide up
  const style: React.CSSProperties = {
    transition: `opacity ${durationMs}ms ease, transform ${durationMs}ms ease`,
    transitionDelay: `${delayMs}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : `translateY(${offsetY}px)`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={clsx(className)} style={style}>
      {children}
    </div>
  );
}
