"use client";
import React from "react";

export default function PricingSection() {
  const tiers = [
    {
      name: "Courses",
      price: "$399",
      tag: "4-week live cohort",
      blurb:
        "Structured, mentored, and project-based. Two 90-min sessions/week + weekly office hours.",
      bullets: [
        "Live classes + replays",
        "Weekly homework & feedback",
        "15–30m office hours / week",
        "Templates for Logic & Pro Tools",
        "Private student Discord",
      ],
      cta: { label: "View Upcoming Cohorts", href: "/apply" },
      highlight: false,
    },
    {
      name: "VIP Accelerator",
      price: "$1,499",
      tag: "Private mentorship",
      blurb:
        "Small private cohort + 1:1 tutoring + full resource library. A direct path to release-ready results.",
      bullets: [
        "Everything in Courses +",
        "Weekly 1:1 mentorship",
        "Max 5 students / cohort",
        "Lifetime replay access",
        "Exclusive templates & packs",
        "Monthly pro masterclasses",
        "Custom progress roadmap",
      ],
      cta: { label: "Apply for VIP", href: "/vip" },
      highlight: true, // cyan glow
    },
    {
      name: "Tutoring",
      price: "$99",
      tag: "55-min session",
      blurb:
        "Open-topic, screenshare coaching. Mix/Master help, DAW workflow, or a tailored 4-week crash course.",
      bullets: [
        "You set the topic",
        "Project/mix/master reviews",
        "Session recording included",
        "Follow-up resources",
        "Optional 4-week plan",
      ],
      cta: { label: "Book a Session", href: "/tutoring" },
      highlight: false,
      suffix: "/session",
    },
  ];

  return (
    <section id="pricing" className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bebas text-white">Ways to Learn</h2>
        <p className="mt-3 text-gray-300/90">
          Pick the path that fits your workflow—structured cohort, private mentorship, or on-demand tutoring.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-3">
        {tiers.map((t, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col
              transition-all duration-500 hover:-translate-y-2 ${
                t.highlight ? "shadow-[0_0_35px_#00FFF7]/30" : "hover:shadow-[0_0_20px_#00FFF7]/20"
              }`}
          >
            {t.highlight && (
              <div className="absolute -inset-[1px] rounded-2xl pointer-events-none ring-1 ring-[#00FFF7]/30" />
            )}
            <div className="text-sm uppercase tracking-wide text-[#00FFF7]/90">{t.tag}</div>
            <h3 className="mt-2 text-2xl font-semibold text-white">{t.name}</h3>
            <div className="mt-3 flex items-end gap-1">
              <div className="text-3xl font-bold text-white">{t.price}</div>
              {t.suffix && <div className="text-sm text-gray-400">{t.suffix}</div>}
            </div>
            <p className="mt-3 text-sm text-gray-300/90">{t.blurb}</p>

            <ul className="mt-5 space-y-2 text-sm text-gray-200/90">
              {t.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00FFF7]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href={t.cta.href}
              className={`mt-6 inline-flex justify-center rounded-xl px-5 py-3 font-semibold transition 
              ${
                t.highlight
                  ? "bg-[#00FFF7] text-black hover:bg-white"
                  : "border border-white/20 hover:bg-white/10"
              }`}
            >
              {t.cta.label}
            </a>
          </div>
        ))}
      </div>

      {/* Included with all plans */}
      <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#00FFF7]/10 to-transparent p-6">
        <div className="text-center">
          <div className="font-semibold text-white">Included with Every Option</div>
          <p className="mt-2 text-sm text-gray-300/90">
            Pro templates (Logic/Pro Tools), curated sample packs, private Discord access, industry checklists
            (gain staging, plugin chains, loudness targets, export & metadata), and course replays where applicable.
          </p>
        </div>
      </div>
    </section>
  );
}
