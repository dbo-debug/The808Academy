// src/app/students/components/Announcements.tsx
"use client";

export default function Announcements({
  items,
}: { items: { id: string; title: string; body: string; date: string }[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <h3 className="text-lg font-semibold mb-3">School Announcements</h3>
      <div className="space-y-3">
        {items.map((a) => (
          <div key={a.id} className="rounded-lg border border-white/10 p-3">
            <div className="text-sm text-white/60">{new Date(a.date).toLocaleDateString()}</div>
            <div className="font-medium">{a.title}</div>
            <div className="text-white/70">{a.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
