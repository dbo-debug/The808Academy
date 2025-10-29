// src/lib/courses.ts
export type Course = {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;   // path like "/images/production.jpg"
  price: number;       // numeric price in USD
  priceLabel?: string; // optional (e.g., "Early Bird $199")
  bullets?: string[];  // optional list of highlights
  description?: string;
};

export const COURSES: Course[] = [
  {
    slug: "production",
    title: "Music Production 101",
    tagline: "From beat-making to arrangement and pro DAW workflow.",
    heroImage: "/images/production.jpg",
    price: 199,
    priceLabel: "Intro rate $199",
    bullets: [
      "Build solid song foundations",
      "Arrangement and workflow",
      "Templates and checklists included",
    ],
  },
  {
    slug: "mixing",
    title: "Mixing Essentials",
    tagline: "Mix vocals, drums, and instruments like a pro.",
    heroImage: "/images/mixing.jpg",
    price: 399,
    bullets: [
      "Vocal chains that translate",
      "Drum bus + parallel tricks",
      "Loud, clean mixes",
    ],
  },
  {
    slug: "mastering",
    title: "Mastering Techniques",
    tagline: "Polish, loudness, and release-ready masters.",
    heroImage: "/images/mastering.jpg",
    price: 399,
    bullets: [
      "Modern loudness targets",
      "Limiting and clipping stacks",
      "Translation + metering",
    ],
  },
];

// Small helpers you can import if useful:
export const getCourseBySlug = (slug: string) =>
  COURSES.find((c) => c.slug === slug) ?? null;
