// src/components/CoursesSection.tsx
"use client";
import Link from "next/link";

const courses = [
  {
    slug: "music-production",
    title: "Music Production in Logic / Pro Tools",
    tagline:
      "From sketch to finished demo. Song structure, drums, synths, vocals, and arrangement inside Logic or Pro Tools.",
    heroImage:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "remixing",
    title: "Remixing",
    tagline:
      "Learn creative remix techniques — tempo mapping, vocal chopping, and re-harmonization for dynamic reworks.",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "mixing",
    title: "Mixing",
    tagline:
      "Low-end glue, vocal priority, depth, and loudness. Workflows that translate on every system.",
    heroImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "mastering",
    title: "Mastering in Logic / Pro Tools",
    tagline:
      "Finalize your track for streaming or club — tone, dynamics, loudness targets, and deliverables.",
    heroImage:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function CoursesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-5xl font-bebas text-center mb-4 text-white">
        Our Courses
      </h2>
      <p className="text-center text-gray-300 mb-8">
        Learn from working engineers with a polished, release-ready curriculum.
      </p>

      {/* 808 LOGO */}
      <div className="flex justify-center mb-12">
        <img
          src="/808logo.png" // or /logo-808-white.svg if that’s your preferred file
          alt="The 808 Academy Logo"
          className="h-24 w-auto drop-shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* COURSE CARDS */}
      <div className="grid sm:grid-cols-2 gap-8">
        {courses.map((c) => (
          <Link
            key={c.slug}
            href={`/courses/${c.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <img
              src={c.heroImage}
              alt={c.title}
              className="h-52 w-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <div className="text-xl font-semibold text-white mb-1">
                {c.title}
              </div>
              <div className="text-sm text-gray-300">{c.tagline}</div>
              <button className="mt-4 px-4 py-2 bg-teal-400 text-black font-semibold rounded-full shadow-md hover:bg-teal-300 transition">
                Learn More →
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
