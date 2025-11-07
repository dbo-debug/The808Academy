// src/app/students/components/BookShell.tsx
// Book-like chrome: centered readable column, subtle sidebar TOC on lg+,
// soft rules, comfortable line-length & leading.

type TocItem = { id: string; label: string };

export default function BookShell({
  title,
  subtitle,
  toc = [],
  children,
}: {
  title: string;
  subtitle?: string;
  toc?: TocItem[];
  children: React.ReactNode;
}) {
  return (
    <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
      {/* Sidebar TOC (desktop) */}
      <aside className="hidden lg:block sticky top-24 h-fit">
        <div className="text-xs uppercase tracking-wider text-white/50 mb-3">On this page</div>
        <nav className="space-y-2">
          {toc.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="block text-sm text-white/70 hover:text-cyan-300"
            >
              {t.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main reading column */}
      <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-cyan-300">{title}</h1>
          {subtitle ? <p className="text-white/60 mt-1">{subtitle}</p> : null}
          <hr className="border-white/10 mt-6" />
        </header>

        <div className="mx-auto max-w-3xl leading-7 md:leading-8 text-[15.5px] md:text-base">
          {children}
        </div>
      </article>
    </div>
  );
}
