// src/app/students/components/CourseCard.tsx
"use client";
import Link from "next/link";

export type CourseSummary = {
  slug: string;
  title: string;
  total: number;
  completed: number;
  percent: number;
};

export default function CourseCard({ c }: { c: CourseSummary }) {
  const href =
    c.slug === "music-production"
      ? "/students/music-production"
      : `/students/${c.slug}`;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{c.title}</h3>
          <p className="text-sm text-white/60 mt-1">
            {c.completed}/{c.total} lessons • {c.percent}%
          </p>
        </div>
        <Link
          href={href}
          className="rounded-lg border border-cyan-400/40 px-3 py-1.5 text-cyan-300 hover:bg-cyan-400/10"
        >
          Open
        </Link>
      </div>

      <div className="mt-4 h-2 w-full rounded bg-white/10 overflow-hidden">
        <div className="h-full bg-cyan-400" style={{ width: `${c.percent}%` }} />
      </div>
    </div>
  );
}
