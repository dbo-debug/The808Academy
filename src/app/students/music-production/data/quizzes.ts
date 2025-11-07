// src/app/students/music-production/data/quizzes.ts
export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
};

export type QuizBank = Record<string, QuizQuestion[]>;

export const quizzes: QuizBank = {
  "quiz-sound-hearing": [
    { id: "q1", prompt: "Amplitude primarily relates to…", options: ["Pitch", "Loudness", "Tempo", "Timbre"], answerIndex: 1 },
    { id: "q2", prompt: "Frequency is measured in…", options: ["ms", "dB", "Hz", "km/h"], answerIndex: 2 },
    { id: "q3", prompt: "Two waves 180° out of phase tend to…", options: ["Reinforce", "Cancel", "Speed up", "Add harmonics"], answerIndex: 1 },
    { id: "q4", prompt: "ADSR: the 'S' stands for…", options: ["Start", "Sustain", "Spread", "Spacing"], answerIndex: 1 },
    { id: "q5", prompt: "We’re most sensitive roughly around…", options: ["20–80 Hz", "200–800 Hz", "2–5 kHz", "15–20 kHz"], answerIndex: 2 },
  ],
  "quiz-daw-signal-flow": [
    { id: "q1", prompt: "A preamp’s main job is to…", options: ["Change pitch", "Boost mic level to line level", "Add reverb", "Reduce latency"], answerIndex: 1 },
    { id: "q2", prompt: "In Pro Tools, a Send routes signal to…", options: ["The master only", "Another track’s inserts", "An aux/bus destination", "The clip list"], answerIndex: 2 },
    { id: "q3", prompt: "Safe tracking peaks typically sit around…", options: ["0 dBFS", "-1 dBFS", "-6 to -12 dBFS", "-60 dBFS"], answerIndex: 2 },
    { id: "q4", prompt: "0 VU (analog) is commonly calibrated near…", options: ["0 dBFS", "-18 dBFS", "-48 dBFS", "+6 dBFS"], answerIndex: 1 },
    { id: "q5", prompt: "Folder Tracks in PT are useful for…", options: ["Tempo mapping", "Organizing/bussing groups", "Time-stretching", "Automation snapshots"], answerIndex: 1 },
  ],
};
