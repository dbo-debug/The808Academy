// src/app/students/lounge/board/page.tsx
import Link from "next/link";

export default function MessageBoardPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h1 className="text-2xl font-semibold">Open Message Board (AI-Monitored)</h1>
        <p className="text-white/60">Share wins, ask questions, find collaborators. Code of conduct applies.</p>
        <div className="mt-4">
          <Link href="/students" className="rounded-lg border border-white/10 px-3 py-2 text-white/80 hover:bg-white/[0.06]">← Back to Lounge</Link>
        </div>
      </header>

      <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6">
        <div className="text-white/60">Board coming soon. We’ll add threads, replies, reactions, and AI moderation.</div>
      </div>
    </div>
  );
}
