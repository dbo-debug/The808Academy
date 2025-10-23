"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number; // stagger animation
  className?: string;
};

export default function Reveal({ children, as = "div", delayMs = 0, className = "" }: Props) {
  const Tag = as as any;
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
