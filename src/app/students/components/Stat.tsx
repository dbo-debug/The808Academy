// src/app/students/components/Stat.tsx
"use client";

export default function Stat({
  label,
  value,
  sub,
}: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-xs uppercase tracking-wider text-white/50">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {sub && <div className="text-white/50 text-sm mt-1">{sub}</div>}
    </div>
  );
}
