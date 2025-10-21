// src/app/courses/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courses, getCourseBySlug } from "@/lib/courses";
import Link from "next/link";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};
  return {
    title: `${course.title} — The 808 Academy`,
    description: course.tagline,
    openGraph: {
      title: course.title,
      description: course.tagline,
      images: [{ url: course.heroImage }],
    },
  };
}

export default function CoursePage({ params }: Params) {
  const course = getCourseBySlug(params.slug);
  if (!course) return notFound();

  const s = course.schedule;

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative">
        <img
          src={course.heroImage}
          alt={course.title}
          className="h-[42vh] w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <img
            src="/808logo.png"
            alt="The 808 Academy"
            className="h-16 w-auto mb-4 opacity-90"
          />
          <h1 className="text-4xl md:text-5xl font-bebas text-white">
            {course.title}
          </h1>
          <p className="text-gray-200 max-w-3xl mt-3">{course.tagline}</p>
          <div className="mt-6 flex items-center gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-200">
              {s.weeks} weeks
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-200">
              {s.sessionsPerWeek}× {s.minutesPerSession}-min live sessions / wk
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-200">
              {s.officeMinutes}-min office hours / wk
            </span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        {/* Left: syllabus */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-white">Syllabus</h2>
          <div className="space-y-4">
            {course.syllabus.map((w) => (
              <details
                key={w.week}
                className="group rounded-xl border border-white/10 bg-white/5 open:bg-white/10 transition"
                open
              >
                <summary className="cursor-pointer select-none px-5 py-4 text-white/90 font-medium">
                  {w.week}
                </summary>
                <ul className="px-6 pb-5 list-disc text-gray-300 marker:text-teal-300">
                  {w.topics.map((t) => (
                    <li key={t} className="mb-1">
                      {t}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-3 text-white">
            What you'll learn
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {course.whatYouLearn.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: pricing & CTAs */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-gray-300 mb-2">Tuition</div>
            <div className="text-4xl font-semibold text-white">
              ${course.price}
            </div>
            <div className="text-gray-400 text-sm mt-1">
              4 weeks • Live online • Small group
            </div>

            <div className="h-px bg-white/10 my-6" />

            <ul className="space-y-2 text-gray-200">
              <li>• 2× {s.minutesPerSession}-min live sessions / week</li>
              <li>• {s.officeMinutes}-min office hours with your instructor</li>
              <li>• Templates, checklists & sample packs included</li>
              <li>• Session recordings available for review</li>
            </ul>

            <div className="mt-6 grid gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-teal-400 text-black font-semibold px-5 py-3 hover:bg-teal-300 transition"
              >
                Enroll Now
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition"
              >
                Book Free Call
              </Link>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              Looking for 1:1 tutoring?{" "}
              <Link href="/tutoring" className="text-teal-300 hover:underline">
                See tutoring →
              </Link>
            </div>
          </div>
        </aside>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-6 md:p-8 text-center">
          <h3 className="text-2xl font-semibold text-white">
            Ready to get started?
          </h3>
          <p className="text-gray-300 mt-2">
            Join a small group led by working engineers. Graduate with a
            release-ready project.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="/apply"
              className="rounded-full bg-teal-400 text-black font-semibold px-5 py-3 hover:bg-teal-300 transition"
            >
              Apply Now
            </Link>
            <Link
              href="/book"
              className="rounded-full border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition"
            >
              Book Free Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
