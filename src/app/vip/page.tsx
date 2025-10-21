export default function VipPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
        <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
          <div>
            <h1 className="text-5xl font-bebas mb-3">VIP Accelerator</h1>
            <p className="text-gray-200 max-w-2xl">
              Private cohort + weekly 1:1 mentorship + exclusive templates & masterclasses. Designed for producers ready to go pro.
            </p>
            <a href="/apply" className="mt-6 inline-flex rounded-xl bg-[#00FFF7] text-black px-6 py-3 font-semibold hover:bg-white transition">
              Apply for VIP
            </a>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-2">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-3">What’s included</h3>
          <ul className="space-y-2 text-gray-200">
            <li>✔ 4-week private cohort (max 5)</li>
            <li>✔ Weekly 1:1 mentorship</li>
            <li>✔ Course replays + lifetime updates</li>
            <li>✔ Exclusive templates & sample packs</li>
            <li>✔ Monthly Pro Studio masterclasses</li>
            <li>✔ Custom progress roadmap</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-3">Perfect for</h3>
          <ul className="space-y-2 text-gray-200">
            <li>🎚 Artists prepping a single/EP</li>
            <li>🎧 Producers building client workflow</li>
            <li>💡 Engineers seeking pro polish & accountability</li>
            <li>🚀 Creators who want direct feedback weekly</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
