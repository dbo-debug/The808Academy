import Link from "next/link";

export const metadata = {
  title: "Remixing Course | 808 Academy",
  description:
    "Transform existing songs into new creative works. Learn remix techniques, tempo mapping, vocal chopping, and arrangement redesign in this hands-on, 4-week course.",
  openGraph: {
    title: "Remixing Course | 808 Academy",
    description:
      "Learn creative remixing — arrangement, vocal chops, re-harmonization, and energy design.",
    images: ["/Remixing.png"],
  },
};

export default function RemixingPage() {
  return (
    <main className="text-gray-100">
      <section
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/Remixing.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <h1 className="text-5xl font-bold mb-4">Remixing</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Explore creative remix production — reimagining songs with new
            rhythms, harmonies, and energy. Learn arrangement transformation,
            tempo mapping, vocal chops, and sound design techniques that make
            remixes shine.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/apply?course=remixing"
              className="rounded-xl bg-[#00FFF7] px-6 py-3 font-semibold text-black hover:opacity-90"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Schedule Call
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-3">January 2025 Schedule</h2>
          <p className="text-gray-300">
            Tues & Thurs · 10–11:30 AM PT · Office Hours Fri 2–6 PM
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-semibold">Curriculum Overview</h2>
          {[
            ["1", "Remix Fundamentals", "Understanding stems, tempo mapping, and creative direction."],
            ["2", "Deconstruction", "Study five professional remixes to understand structure and style."],
            ["3", "Drum Replacement", "Designing new rhythm and energy with fresh percussion layers."],
            ["4", "Re-Harmonization", "Creating new chord progressions that redefine emotion."],
            ["5", "Vocal Editing", "Chopping, pitching, and time-stretching vocals for new hooks."],
            ["6", "Arrangement Flow", "Building tension and release in new remix forms."],
            ["7", "Creative FX", "Sound design and transitions that make remixes stand out."],
            ["8", "Rough Mastering", "Loudness, polish, and final preparation for release."],
          ].map(([n, t, d]) => (
            <Lesson key={n} n={n} title={t} desc={d} />
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">You’ll Leave This Class With</h2>
          <ul className="space-y-2 text-gray-300 list-disc pl-5">
            <li>One completed remix ready for release</li>
            <li>Full remix workflow and creative toolkit</li>
            <li>Advanced vocal and arrangement skills</li>
            <li>Experience listening and analyzing remix styles</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function Lesson({ n, title, desc }: any) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-1">{`RX${n} — ${title}`}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
