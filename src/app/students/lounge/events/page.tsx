// src/app/students/lounge/events/page.tsx
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h1 className="text-2xl font-semibold">Events & Postings</h1>
        <p className="text-white/60">Live workshops, guest producers, community meetups.</p>
        <div className="mt-4">
          <Link href="/students" className="rounded-lg border border-white/10 px-3 py-2 text-white/80 hover:bg-white/[0.06]">← Back to Lounge</Link>
        </div>
      </header>

      <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6">
        <div className="text-white/60">Events will appear here soon. We’ll integrate with a calendar + RSVP.</div>
      </div>
    </div>
  );
}
