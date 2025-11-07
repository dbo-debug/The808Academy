// src/app/students/components/Figure.tsx
export default function Figure({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption?: string;
}) {
  return (
    <figure className="my-6">
      <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">{children}</div>
      {caption ? (
        <figcaption className="mt-2 text-sm text-white/60">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
