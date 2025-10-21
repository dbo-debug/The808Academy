// src/lib/courses.ts
export type Course = {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  whatYouLearn: string[];
  syllabus: { week: string; topics: string[] }[];
  schedule: {
    weeks: number;
    sessionsPerWeek: number;
    minutesPerSession: number;
    officeMinutes: number;
  };
  price: number;
};

export const courses: Course[] = [
  {
    slug: "music-production",
    title: "Music Production in Logic / Pro Tools",
    tagline:
      "From sketch to finished demo. Song structure, drums, synths, vocals, and arrangement inside Logic or Pro Tools.",
    heroImage:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop",
    whatYouLearn: [
      "Idea → arrangement workflow that actually finishes songs",
      "Drums, bass, synths, and vocal production inside Logic or Pro Tools",
      "Creative templates to move fast",
      "Bounce stems, organize sessions, deliver to mixers/mastering",
    ],
    syllabus: [
      {
        week: "Week 1 — Foundations & Templates",
        topics: [
          "Session setup, I/O, gain staging",
          "Creative templates for rapid sketching",
          "Loop → section → song method",
        ],
      },
      {
        week: "Week 2 — Drums & Low-End",
        topics: [
          "Programming grooves that move",
          "Kick/bass relationship, sidechain & saturation",
          "808s vs live bass",
        ],
      },
      {
        week: "Week 3 — Melodic Layers & Vocals",
        topics: [
          "Synths/pads/hooks that support the song",
          "Vocal recording/editing comps, light tuning",
          "Arrangement momentum",
        ],
      },
      {
        week: "Week 4 — Finishing & Deliverables",
        topics: [
          "Rough mix polish, references",
          "Printing alt versions, stems",
          "Release checklist",
        ],
      },
    ],
    schedule: {
      weeks: 4,
      sessionsPerWeek: 2,
      minutesPerSession: 90,
      officeMinutes: 30,
    },
    price: 399,
  },
  {
    slug: "remixing",
    title: "Remixing",
    tagline:
      "Learn creative remix techniques — tempo mapping, vocal chopping, and re-harmonization for dynamic reworks.",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    whatYouLearn: [
      "Stems prep & tempo mapping",
      "Chord reharmonization & bass movement",
      "Vocal chops, FX chains, build/impact design",
      "Club/stream-ready arrangement",
    ],
    syllabus: [
      {
        week: "Week 1 — Stems & Tempo",
        topics: [
          "Importing stems, warping/tempo mapping",
          "Identifying hooks & re-contextualizing",
        ],
      },
      {
        week: "Week 2 — Harmony & Groove",
        topics: [
          "Re-harm with new chords/bass",
          "Creating a new pocket & push/pull",
        ],
      },
      {
        week: "Week 3 — Sound Design & Chops",
        topics: [
          "Vocal chops & fx chains",
          "Build/impact design, risers, turnarounds",
        ],
      },
      {
        week: "Week 4 — Arrangement & Polish",
        topics: [
          "DJ-friendly intros/outros",
          "Final polish & loudness targets",
        ],
      },
    ],
    schedule: {
      weeks: 4,
      sessionsPerWeek: 2,
      minutesPerSession: 90,
      officeMinutes: 30,
    },
    price: 399,
  },
  {
    slug: "mixing",
    title: "Mixing",
    tagline:
      "Low-end glue, vocal priority, depth, and loudness. Workflows that translate on every system.",
    heroImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
    whatYouLearn: [
      "Translation on earbuds → club",
      "Vocal priority: EQ, compression, de-ess, space",
      "Low-end management & glue",
      "Efficient revisions workflow",
    ],
    syllabus: [
      {
        week: "Week 1 — Setup & Translation",
        topics: [
          "Gain staging & monitoring",
          "Reference track matching",
          "Session organization",
        ],
      },
      {
        week: "Week 2 — Vocals First",
        topics: [
          "EQ/comp/de-ess chains",
          "Parallel tricks & space management",
        ],
      },
      {
        week: "Week 3 — Drums & Bass Glue",
        topics: [
          "Kick/bass balance",
          "Bus compression & saturation",
          "Sub management",
        ],
      },
      {
        week: "Week 4 — Polish & Print",
        topics: [
          "Automation & final checks",
          "Print mix/alt/inst/a cappella",
        ],
      },
    ],
    schedule: {
      weeks: 4,
      sessionsPerWeek: 2,
      minutesPerSession: 90,
      officeMinutes: 30,
    },
    price: 399,
  },
  {
    slug: "mastering",
    title: "Mastering in Logic / Pro Tools",
    tagline:
      "Finalize your track for streaming or club — tone, dynamics, loudness targets, and deliverables.",
    heroImage:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1600&auto=format&fit=crop",
    whatYouLearn: [
      "Critical listening & referencing",
      "Broadband EQ shaping, M/S, gentle comp",
      "Loudness targets for streaming/club",
      "DDP/ISRC/alt versions & delivery",
    ],
    syllabus: [
      {
        week: "Week 1 — Mastering Mindset",
        topics: [
          "Room/listening & refs",
          "Tonal balance overview",
        ],
      },
      {
        week: "Week 2 — Tone & Dynamics",
        topics: [
          "EQ strategy & M/S concepts",
          "Gentle comp/limiting approach",
        ],
      },
      {
        week: "Week 3 — Loudness & QC",
        topics: [
          "Targets for streaming/club",
          "Inter-sample peaks & QC",
        ],
      },
      {
        week: "Week 4 — Deliverables",
        topics: [
          "DDP/ISRC/alt versions",
          "Client notes & archive",
        ],
      },
    ],
    schedule: {
      weeks: 4,
      sessionsPerWeek: 2,
      minutesPerSession: 90,
      officeMinutes: 30,
    },
    price: 399,
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}

