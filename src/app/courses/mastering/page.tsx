import Link from "next/link";

export const metadata = {
  title: "Mastering Course | 808 Academy",
  description:
    "Finalize your mix for streaming, radio, and club. Learn mastering techniques, loudness optimization, and versioning in this live, 4-week course for modern producers.",
  openGraph: {
    title: "Mastering Course | 808 Academy",
    description:
      "Learn mastering from professional engineers — polish, loudness, and preparation for every platform.",
    images: ["/Mastering.png"],
  },
};

export default function MasteringPage() {
  return (
    <main className="text-gray-100">
      <section
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/Mastering.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <h1 className="text-5xl font-bold mb-4">Mastering</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Learn to give your tracks final polish and loudness balance. This
            4-week live course covers EQ, limiting, stereo width, and delivery
            prep so your music sounds amazing on every platform.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/apply?course=mastering"
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
            Tues & Thurs · 11:30 AM–1 PM PT · Office Hours Fri 2–6 PM
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-semibold">Curriculum Overview</h2>
          {[
            ["1", "Intro to Mastering", "What mastering is, how it differs from mixing, and the key goals of translation and consistency."],
            ["2", "Critical Listening", "Frequency analysis, dynamic range awareness, and identifying problem areas."],
            ["3", "EQ & Tonal Balance", "Broad-stroke EQ moves, mid/side processing, and spectral balance correction."],
            ["4", "Compression & Limiting", "Glue compression, loudness standards, and transparent limiting."],
            ["5", "Stereo Imaging", "Width control, mono compatibility, and spatial clarity."],
            ["6", "Audio Restoration", "Noise removal, de-clicking, and polishing before final render."],
            ["7", "Final Bounce", "Export settings, headroom, file formats, and playback verification."],
            ["8", "Versioning & Delivery", "Creating alternate versions (instrumental, acapella, radio edit) and metadata embedding."],
          ].map(([n, t, d]) => (
            <Lesson key={n} n={n} title={t} desc={d} />
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">You’ll Leave This Class With</h2>
          <ul className="space-y-2 text-gray-300 list-disc pl-5">
            <li>A fully mastered track ready for release</li>
            <li>Understanding of loudness, EQ, and stereo imaging</li>
            <li>Professional mastering templates and workflow</li>
            <li>Confidence preparing tracks for every platform</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function Lesson({ n, title, desc }: any) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-1">{`MA${n} — ${title}`}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
