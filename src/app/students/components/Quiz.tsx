// src/app/students/components/Quiz.tsx
"use client";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { quizzes } from "../music-production/data/quizzes";

type Props = {
  quizId: string;              // e.g., "quiz-sound-hearing"
  courseSlug?: string;         // default: "music-production"
  lessonId?: string;           // the current lesson id
};

export default function Quiz({ quizId, courseSlug = "music-production", lessonId = "" }: Props) {
  const questions = quizzes[quizId] || [];
  const [choices, setChoices] = useState<number[]>(Array(questions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [max, setMax] = useState<number>(questions.length);
  const [err, setErr] = useState<string | null>(null);
  const [latest, setLatest] = useState<{ score: number; max_score: number } | null>(null);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;
      const res = await fetch(`/students/api/quiz?course_slug=${courseSlug}&lesson_id=${lessonId}&quiz_id=${quizId}`, {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      const json = await res.json();
      if (res.ok && json?.latest) {
        setLatest({ score: json.latest.score, max_score: json.latest.max_score });
      }
    })();
  }, [courseSlug, lessonId, quizId]);

  const correctCount = useMemo(() => {
    return questions.reduce((acc, q, idx) => acc + (choices[idx] === q.answerIndex ? 1 : 0), 0);
  }, [choices, questions]);

  const submit = async () => {
    setErr(null);
    setSubmitted(true);
    setScore(correctCount);
    setMax(questions.length);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return setErr("Not signed in");
      const res = await fetch("/students/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          course_slug: courseSlug,
          lesson_id: lessonId,
          quiz_id: quizId,
          answers: questions.map((q, i) => ({ id: q.id, choiceIndex: choices[i] })),
          score: correctCount,
          max_score: questions.length,
        }),
      });
      const json = await res.json();
      if (!res.ok) setErr(json?.error || "Could not save quiz");
      else setLatest({ score: correctCount, max_score: questions.length });
    } catch (e: any) {
      setErr(e?.message || "Could not save quiz");
    }
  };

  if (!questions.length) {
    return <div className="text-white/60">Quiz coming soon.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Knowledge Check</h3>
        {latest ? (
          <div className="text-sm text-white/70">
            Last score: <span className="text-cyan-300">{latest.score}/{latest.max_score}</span>
          </div>
        ) : null}
      </div>

      <ol className="space-y-5">
        {questions.map((q, idx) => (
          <li key={q.id} className="rounded-xl border border-white/10 p-4 bg-white/[0.02]">
            <div className="mb-3 font-medium">{idx + 1}. {q.prompt}</div>
            <div className="grid gap-2">
              {q.options.map((opt, oi) => {
                const selected = choices[idx] === oi;
                const isCorrect = submitted && oi === q.answerIndex;
                const isWrong = submitted && selected && oi !== q.answerIndex;

                return (
                  <button
                    key={oi}
                    onClick={() => !submitted && setChoices(prev => prev.map((v, i) => i === idx ? oi : v))}
                    className={`text-left rounded-lg border px-3 py-2
                      ${selected ? "border-cyan-400/40 bg-cyan-400/10" : "border-white/10 bg-transparent"}
                      ${isCorrect ? "border-green-400/40 bg-green-400/10" : ""}
                      ${isWrong ? "border-rose-400/40 bg-rose-400/10" : ""}
                      ${submitted ? "cursor-default" : "hover:bg-white/[0.04]"}`}
                    disabled={submitted}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <div className="flex items-center gap-4">
        {!submitted ? (
          <button
            onClick={submit}
            className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-300 hover:bg-cyan-400/20"
          >
            Submit
          </button>
        ) : (
          <div className="text-white/80">
            Score: <span className="text-cyan-300">{score}/{max}</span>
          </div>
        )}
        {err && <div className="text-amber-300 text-sm">{err}</div>}
      </div>
    </div>
  );
}
