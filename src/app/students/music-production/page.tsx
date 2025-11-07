// src/app/students/music-production/page.tsx
import Link from "next/link";
import { lessons } from "./data/lessons";

export default function MPCourseHome() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl font-semibold mb-2">Start Here</h2>
        <p className="text-white/70">
          Work through each lesson in order. Your progress is saved as you mark lessons complete.
        </p>
      </section>

      <ol className="grid gap-4 md:grid-cols-2">
        {lessons.map((l, i) => (
          <li key={l.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition">
            <div className="text-sm text-white/50 mb-1">Lesson {i}</div>
            <h3 className="text-lg font-medium mb-2">{l.title}</h3>
            <p className="text-white/60 mb-4">{l.description}</p>
            <Link
              className="inline-flex items-center rounded-lg border border-cyan-400/40 px-3 py-1.5 text-cyan-300 hover:bg-cyan-400/10"
              href={`/students/music-production/${l.id}`}
            >
              Open lesson
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
