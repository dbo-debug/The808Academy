export default function ApplyPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1510026547072-0a5edb27c0ea?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
          <div>
            <h1 className="text-5xl font-bebas mb-3">Apply to Join</h1>
            <p className="text-gray-200 max-w-2xl">
              Tell us your goals. We&apos;ll match you to the right course or mentor and reply within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <form className="grid gap-4 text-left">
          <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00FFF7]" placeholder="Name" required />
          <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00FFF7]" placeholder="Email" required />
          <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00FFF7]">
            <option>Interested in...</option>
            <option>Courses ($399)</option>
            <option>Tutoring ($99/session)</option>
            <option>VIP Accelerator ($1,499)</option>
          </select>
          <textarea className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00FFF7]" rows={5} placeholder="Tell us your goals, DAW, and any links..."></textarea>
          <button className="bg-[#00FFF7] text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition">
            Submit Application
          </button>
        </form>
      </section>
    </main>
  );
}
