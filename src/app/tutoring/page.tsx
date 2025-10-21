export default function TutoringPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
          <div>
            <h1 className="text-5xl font-bebas mb-3">1:1 Tutoring</h1>
            <p className="text-gray-200 max-w-2xl">
              Personalized coaching. Share your screen, fix your mix, finish your track. Your mentor meets you where you are.
            </p>
            <a href="/apply" className="mt-6 inline-flex rounded-xl bg-[#00FFF7] text-black px-6 py-3 font-semibold hover:bg-white transition">
              Book a Session — $99
            </a>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-2">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-3">What you get</h3>
          <ul className="space-y-2 text-gray-200">
            <li>✔ 55-minute live session via Zoom</li>
            <li>✔ Screenshare & real-time coaching</li>
            <li>✔ Session recording included</li>
            <li>✔ Follow-up resources & templates</li>
            <li>✔ Optional 4-week focused plan</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-3">Popular topics</h3>
          <ul className="space-y-2 text-gray-200">
            <li>🎚 Vocal chain & mix translation</li>
            <li>🎛 Mastering walkthrough (Logic/Pro Tools)</li>
            <li>🎵 Remix workflow & arrangement</li>
            <li>🧰 DAW templates & organization</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
