// src/app/students/music-production/data/lessons.ts

export type Lesson = {
  id: string;                // URL slug segment
  title: string;
  description?: string;
  videoUrl?: string;
  resources?: { label: string; href: string }[];
  quizId?: string;           // maps into quizzes.ts keys
  prev?: string | null;      // previous lesson id
  next?: string | null;      // next lesson id
};

// Ordered list controls course nav + progress total
export const lessons: Lesson[] = [
  {
    id: "sound-hearing",
    title: "Sound & Hearing Fundamentals",
    description: "Pre-class: the air around you, waveform basics, hearing protection.",
    quizId: "quiz-sound-hearing",
    prev: null,
    next: "daw-signal-flow",
  },
  {
    id: "daw-signal-flow",
    title: "DAW Signal Flow & Session Setup",
    description: "From console logic to Pro Tools Studio 2024 — build your first working session.",
    quizId: "quiz-daw-signal-flow",
    prev: "sound-hearing",
    next: "setup-to-work",
  },
  {
    id: "setup-to-work",
    title: "Setting Up to Work",
    description: "System prep, session templates, navigation, and habits that keep you creating.",
    prev: "daw-signal-flow",
    next: "verse-hook",
  },
  {
    id: "verse-hook",
    title: "Verse / Hook Development",
    description: "Motifs, hook shapes, and verse contrast that serves the big idea.",
    prev: "setup-to-work",
    next: "drum-production",
  },
  {
    id: "drum-production",
    title: "Drum Production",
    description: "Design, groove, and processing — make the beat feel human and hit hard.",
    prev: "verse-hook",
    next: "low-end-theory",
  },
  {
    id: "low-end-theory",
    title: "Low-End Theory",
    description: "Kick/sub roles, headroom management, mono compatibility, and translation.",
    prev: "drum-production",
    next: "vocal-production",
  },
  {
    id: "vocal-production",
    title: "Vocal Recording & Production",
    description: "Capture, comp, tune, and produce vocals that carry the record.",
    prev: "low-end-theory",
    next: "mixing-fundamentals",
  },
  {
    id: "mixing-fundamentals",
    title: "Mixing Fundamentals",
    description: "Balance, tone, dynamics, and space — checked across systems.",
    prev: "vocal-production",
    next: "mastering-bounce",
  },
  {
    id: "mastering-bounce",
    title: "Mastering & Final Bounce",
    description: "QC, gentle polish, loudness targets, and delivery formats.",
    prev: "mixing-fundamentals",
    next: null,
  },
];

// Helpers used by pages/components
export function lessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function indexOfLesson(id: string): number {
  return lessons.findIndex((l) => l.id === id);
}
