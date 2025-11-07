// src/app/students/components/LessonNavigation.tsx
"use client";
import Link from "next/link";

export default function LessonNavigation({ prev, next }: { prev?: string | null; next?: string | null }) {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        {prev ? (
          <Link
            href={`/students/music-production/${prev}`}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-white/80 hover:bg-white/[0.06]"
          >
            ← Previous
          </Link>
        ) : <span className="text-white/30">← Previous</span>}
      </div>
      <div>
        {next ? (
          <Link
            href={`/students/music-production/${next}`}
            className="rounded-lg border border-cyan-400/40 px-3 py-1.5 text-cyan-300 hover:bg-cyan-400/10"
          >
            Next →
          </Link>
        ) : <span className="text-white/30">Next →</span>}
      </div>
    </div>
  );
}
