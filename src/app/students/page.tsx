// src/app/students/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Stat from "./components/Stat";
import ContactCard from "./components/ContactCard";
import Announcements from "./components/Announcements";
import PromoBar from "./components/PromoBar";
import Link from "next/link";

type LoungeData = {
  course: { slug: string; title: string };
  progress: { done: number; total: number; percent: number };
  gpa: { percent: number };
  links: {
    contactTeacher: string;
    contactTech: string;
    contactAdmin: string;
    discordDownload: string;
    discordServer: string;
    tutoringBooking: string;
  };
  announcements: { id: string; title: string; body: string; date: string }[];
};

export default function StudentLounge() {
  const [data, setData] = useState<LoungeData | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return;
        const res = await fetch("/students/api/lounge", {
          headers: { Authorization: `Bearer ${session.access_token}` },
        });
        const json = await res.json();
        if (!res.ok) setErr(json?.error || "Failed to load lounge");
        else setData(json);
      } catch (e: any) {
        setErr(e?.message || "Failed to load lounge");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="text-white/60">Loading your lounge…</div>;
  if (err) return <div className="text-amber-300">{err}</div>;
  if (!data) return <div className="text-white/60">No data.</div>;

  const { course, progress, gpa, links, announcements } = data;

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <div className="text-xs uppercase tracking-wider text-white/50">Student Lounge</div>
        <h1 className="text-2xl font-semibold mt-1">Welcome back 👋</h1>
        <p className="text-white/60">
          Your active course is <span className="text-cyan-300">{course.title}</span>.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={course.slug === "music-production" ? "/students/music-production" : `/students/${course.slug}`}
            className="rounded-lg border border-cyan-400/40 px-3 py-2 text-cyan-300 hover:bg-cyan-400/10"
          >
            Go to Course
          </Link>
          <Link
            href="/students/music-production" // quick shortcut; replace once multiple courses are live
            className="rounded-lg border border-white/10 px-3 py-2 text-white/80 hover:bg-white/[0.06]"
          >
            Resume Lesson
          </Link>
        </div>
      </header>

      {/* Promo / Ad bar */}
      <PromoBar />

      {/* Top stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Course Tracker" value={`${progress.percent}%`} sub={`${progress.done}/${progress.total} lessons`} />
        <Stat label="Current Course GPA" value={`${gpa.percent}%`} sub="Avg of latest quiz attempts" />
        <Stat label="Enrollments" value="1 active" sub="Switching coming soon" />
        <Stat label="Status" value="In good standing" sub="Keep going ✨" />
      </div>

      {/* Contacts & tools */}
      <div className="grid gap-4 lg:grid-cols-3">
        <ContactCard
          title="Contact"
          items={[
            { label: "Contact Teacher", href: links.contactTeacher },
            { label: "Tech Support", href: links.contactTech },
            { label: "Contact Admin", href: links.contactAdmin },
            { label: "Book Tutoring", href: links.tutoringBooking },
          ]}
        />
        <ContactCard
          title="Community & Events"
          items={[
            { label: "Download Discord", href: links.discordDownload },
            { label: "Join Student Discord", href: links.discordServer },
            { label: "Open Message Board (AI-monitored)", href: "/students/lounge/board" },
            { label: "Events & Postings", href: "/students/lounge/events" },
          ]}
        />
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <h3 className="text-lg font-semibold mb-3">Marketplace</h3>
          <div className="grid gap-2">
            <Link className="rounded-lg border border-white/10 px-3 py-2 text-white/80 hover:bg-white/[0.06]" href="/students/store/plugins">
              Plugin Store (discounts soon)
            </Link>
            <Link className="rounded-lg border border-white/10 px-3 py-2 text-white/80 hover:bg-white/[0.06]" href="/students/store/merch">
              Student Merch
            </Link>
          </div>
        </div>
      </div>

      {/* Announcements */}
      <Announcements items={announcements} />
    </div>
  );
}
