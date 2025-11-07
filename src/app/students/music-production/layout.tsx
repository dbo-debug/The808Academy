// src/app/students/music-production/layout.tsx
import ProgressTracker from "../components/ProgressTracker";

export default function MPCourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">
              Music Production <span className="text-sm text-white/60">/ student portal</span>
            </h1>
            <p className="text-white/60">8 core lessons + pre-class: Sound &amp; Hearing</p>
          </div>
          <div className="w-full md:w-80">
            <ProgressTracker course="music-production" />
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
