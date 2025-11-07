// src/app/students/components/Callout.tsx
"use client";

export default function Callout({
  title,
  children,
  tone = "info",
}: {
  title?: string;
  children: React.ReactNode;
  tone?: "info" | "warn" | "success";
}) {
  const tones = {
    info: "border-cyan-400/40 bg-cyan-400/5",
    warn: "border-amber-400/40 bg-amber-400/5",
    success: "border-emerald-400/40 bg-emerald-400/5",
  } as const;

  return (
    <div className={`my-6 rounded-xl border p-4 ${tones[tone]}`}>
      {title ? <div className="mb-1 text-sm font-semibold opacity-80">{title}</div> : null}
      <div className="text-white/90">{children}</div>
    </div>
  );
}
