import Link from "next/link";

export const metadata = {
  title: "Music Production Course | 808 Academy",
  description:
    "Learn to produce, arrange, and finish professional songs from your home studio in 808 Academy’s 4-week live Music Production program.",
  openGraph: {
    title: "Music Production Course | 808 Academy",
    description:
      "Hands-on 4-week program teaching you how to produce, arrange, and finish pro-level music from home.",
    images: ["/MusicProduction.png"],
  },
};

export default function MusicProductionPage() {
  return (
    <main className="text-gray-100">
      <section
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/MusicProduction.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <h1 className="text-5xl font-bold mb-4">Music Production</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Learn to produce, arrange, and finish professional songs from your
            home studio. A hands-on 4-week program taught live by working
            engineers.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/apply?course=music-production"
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
            Mon & Wed · 10–11:30 AM PT · Office Hours Fri 2–6 PM
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-semibold">Curriculum Overview</h2>
          <div className="space-y-8">
            <Lesson
              n="1"
              title="DAW Signal Flow & Session Setup"
              desc="Session setup, file management, inserts vs sends, master faders, subgroups, and creating production templates."
            />
            <Lesson
              n="2"
              title="Setting Up to Work"
              desc="Creative vs technical mindset, organizing your studio, using samples effectively, and establishing song structure."
            />
            <Lesson
              n="3"
              title="Verse / Hook Development"
              desc="Capturing inspiration, building melody and lyrics, layering synths and vocals, and refining hooks."
            />
            <Lesson
              n="4"
              title="Drum Production"
              desc="Programming drums, routing and compression, groove swing, and 808 techniques."
            />
            <Lesson
              n="5"
              title="Low-End Theory"
              desc="Bass production, layering, sidechaining, EQ, stereo width, and shaping your mix foundation."
            />
            <Lesson
              n="6"
              title="Vocal Recording & Production"
              desc="Mic selection, signal chain, takes and comping, harmonies, editing, EQ, compression, and creative FX."
            />
            <Lesson
              n="7"
              title="Mixing Fundamentals"
              desc="Balance, EQ, panning, compression, space effects, automation, and workflow optimization."
            />
            <Lesson
              n="8"
              title="Mastering & Final Bounce"
              desc="Polish, loudness, exporting, versioning, and preparing for release or sync submission."
            />
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">
            You’ll Leave This Class With
          </h2>
          <ul className="space-y-2 text-gray-300 list-disc pl-5">
            <li>A completed, original song submitted for sync consideration</li>
            <li>Hands-on DAW mastery and routing confidence</li>
            <li>Templates, workflow tools, and repeatable processes</li>
            <li>Experience collaborating in live producer sessions</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function Lesson({ n, title, desc }: any) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-1">{`MP${n} — ${title}`}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
