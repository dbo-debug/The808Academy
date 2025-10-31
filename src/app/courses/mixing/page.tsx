import Link from "next/link";

export const metadata = {
  title: "Mixing Course | 808 Academy",
  description:
    "Master balance, EQ, compression, and automation. 808 Academy’s Mixing course teaches modern techniques used by professional engineers to create powerful, clear mixes that translate everywhere.",
  openGraph: {
    title: "Mixing Course | 808 Academy",
    description:
      "Learn the art and science of mixing — balance, EQ, compression, and effects — in a live, instructor-led environment.",
    images: ["/Mixing.png"],
  },
};

export default function MixingPage() {
  return (
    <main className="text-gray-100">
      <section
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/Mixing.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <h1 className="text-5xl font-bold mb-4">Mixing</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Learn to craft clear, balanced, and emotionally powerful mixes that
            translate on every system. This 4-week live course focuses on
            workflow, depth, and modern tools like Auto-Tune and Melodyne for
            natural and creative vocal processing.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/apply?course=mixing"
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
            Mon & Wed · 11:30 AM–1 PM PT · Office Hours Fri 2–6 PM
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-semibold">Curriculum Overview</h2>
          {[
            ["1", "Intro to Mixing", "Gain staging, organization, and the fundamentals of balance, EQ, and levels."],
            ["2", "Frequency Management", "EQ techniques to separate instruments and eliminate masking."],
            ["3", "Compression & Dynamics", "Controlling dynamics, parallel compression, and bus routing."],
            ["4", "Space & Depth", "Using reverb, delay, and panning to create 3D soundscapes."],
            ["5", "Vocal Mixing", "Advanced vocal chains, tuning with Auto-Tune and Melodyne — natural vs. effect."],
            ["6", "Creative FX", "Automation, modulation, saturation, and effects for vibe and energy."],
            ["7", "Mix Translation", "Reference tracks, monitoring environments, and listening across systems."],
            ["8", "Final Mix", "Print your final mix, export stems, and prepare for mastering."],
          ].map(([n, t, d]) => (
            <Lesson key={n} n={n} title={t} desc={d} />
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">You’ll Leave This Class With</h2>
          <ul className="space-y-2 text-gray-300 list-disc pl-5">
            <li>A complete, radio-ready mix of your own production</li>
            <li>Full understanding of EQ, compression, and vocal tuning</li>
            <li>Templates and workflows used by professional engineers</li>
            <li>Confidence mixing in any environment</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function Lesson({ n, title, desc }: any) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-1">{`MI${n} — ${title}`}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
