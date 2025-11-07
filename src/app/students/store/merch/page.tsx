// src/app/students/store/merch/page.tsx
import Link from "next/link";
import NotifyMeButton from "../../components/NotifyMeButton";

const ITEMS = ["808 Hoodie", "808 Tee", "808 Dad Hat", "Sticker Pack"];

export default function MerchStorePage() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h1 className="text-2xl font-semibold">Student Merch (Coming Soon)</h1>
        <p className="text-white/60">Hoodies, tees, hats, stickers — limited runs for enrolled students.</p>
        <div className="mt-4">
          <Link href="/students" className="rounded-lg border border-white/10 px-3 py-2 text-white/80 hover:bg-white/[0.06]">← Back to Lounge</Link>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((name) => (
          <div key={name} className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-5 space-y-2">
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-white/60">Photos and sizing chart coming soon.</div>
            <NotifyMeButton kind="merch" item={name} />
          </div>
        ))}
      </div>
    </div>
  );
}
