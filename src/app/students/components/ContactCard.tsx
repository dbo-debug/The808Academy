// src/app/students/components/ContactCard.tsx
"use client";
import Link from "next/link";

export default function ContactCard({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-2">
        {items.map((it) => (
          <Link
            key={it.label}
            href={it.href}
            className="rounded-lg border border-white/10 px-3 py-2 text-white/80 hover:bg-white/[0.06]"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
