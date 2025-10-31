// src/lib/courses.ts
export type Course = {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;   // e.g. "/MusicProduction.png"
  price: number;
  priceLabel?: string; // e.g. "$399 / 4-week online class"
  bullets?: string[];
  description?: string;
};

export const COURSES: Course[] = [
  {
    slug: "music-production",
    title: "Music Production",
    tagline:
      "From sketch to finished demo: drums, synths, vocals, arrangement, and a repeatable workflow.",
    heroImage: "/MusicProduction.png",
    price: 399,
    priceLabel: "$399 / 4-week online class",
    bullets: [
      "Song structure & arrangement",
      "Drums: groove, swing, layering",
      "Synths & sound selection",
      "Vocal recording basics",
      "Templates & session organization",
    ],
    description:
      "Learn a workflow that gets you from idea to complete demo fast—without getting lost in plugins.",
  },
  {
    slug: "remixing",
    title: "Remixing",
    tagline:
      "Tempo mapping, vocal chopping, re-harmonization, and dynamic reworks that keep the dancefloor moving.",
    heroImage: "/Remixing.png",
    price: 399,
    priceLabel: "$399 / 4-week online class",
    bullets: [
      "Stems & acapella workflow",
      "Tempo/key detection + mapping",
      "Re-harmonization ideas",
      "Drops, builds, and transitions",
      "Club-ready arrangements",
    ],
    description:
      "Build creative remixes using modern techniques and DJ-friendly structures.",
  },
  {
    slug: "mixing",
    title: "Mixing",
    tagline:
      "Low-end glue, vocal priority, depth, and loudness—workflows that translate on every system.",
    heroImage: "/Mixing.png",
    price: 399,
    priceLabel: "$399 / 4-week online class",
    bullets: [
      "Gain staging & headroom",
      "808/low-end management",
      "Vocal chain fundamentals",
      "Space: EQ, compression, time-based FX",
      "Mix bus strategy & references",
    ],
    description:
      "Dial in punchy drums, powerful 808s, and front-and-center vocals with proven chains.",
  },
  {
    slug: "mastering",
    title: "Mastering",
    tagline:
      "Finalize your track for streaming or club—tone, dynamics, LUFS targets, and deliverables.",
    heroImage: "/Mastering.png",
    price: 399,
    priceLabel: "$399 / 4-week online class",
    bullets: [
      "Tone shaping & translation",
      "Limiter setup & loudness",
      "Streaming targets & QC",
      "Metadata & delivery formats",
      "Mastering references",
    ],
    description:
      "Hit modern loudness without killing punch or vibe.",
  },
];

// Helper (unchanged)
export const getCourseBySlug = (slug: string) =>
  COURSES.find((c) => c.slug === slug) ?? null;
