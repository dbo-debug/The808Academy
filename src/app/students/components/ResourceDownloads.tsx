// src/app/students/components/ResourceDownloads.tsx
"use client";

type Resource = { name: string; url: string };

export default function ResourceDownloads({ resources }: { resources: Resource[] }) {
  if (!resources?.length) return null;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <h3 className="text-lg font-semibold mb-3">Download Resources</h3>
      <ul className="space-y-2">
        {resources.map((r) => (
          <li key={r.url}>
            <a className="text-cyan-300 underline hover:text-cyan-200" href={r.url} target="_blank" rel="noreferrer">
              {r.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
