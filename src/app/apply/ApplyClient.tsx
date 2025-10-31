"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

/* -------------------- Types & Config -------------------- */

type CourseSlug = "music-production" | "mixing" | "remixing" | "mastering";

const COURSES: Record<
  CourseSlug,
  { title: string; image: string; days: string; time: string; ctaSlug: string }
> = {
  "music-production": {
    title: "Music Production",
    image: "/MusicProduction.png",
    days: "Mon & Wed",
    time: "10:00–11:30 AM PT",
    ctaSlug: "music-production",
  },
  mixing: {
    title: "Mixing",
    image: "/Mixing.png",
    days: "Mon & Wed",
    time: "11:30 AM–1:00 PM PT",
    ctaSlug: "mixing",
  },
  remixing: {
    title: "Remixing",
    image: "/Remixing.png",
    days: "Tue & Thu",
    time: "10:00–11:30 AM PT",
    ctaSlug: "remixing",
  },
  mastering: {
    title: "Mastering",
    image: "/Mastering.png",
    days: "Tue & Thu",
    time: "11:30 AM–1:00 PM PT",
    ctaSlug: "mastering",
  },
};

/** Replace with your real Stripe Payment Links */
const STRIPE_CHECKOUT: Record<CourseSlug, Record<string, string>> = {
  "music-production": {
    "Jan 2025": "https://checkout.stripe.com/pay/YOUR_LINK_MP_JAN",
    "Feb 2025": "https://checkout.stripe.com/pay/YOUR_LINK_MP_FEB",
    "Mar 2025": "https://checkout.stripe.com/pay/YOUR_LINK_MP_MAR",
  },
  mixing: {
    "Jan 2025": "https://checkout.stripe.com/pay/YOUR_LINK_MX_JAN",
    "Feb 2025": "https://checkout.stripe.com/pay/YOUR_LINK_MX_FEB",
    "Mar 2025": "https://checkout.stripe.com/pay/YOUR_LINK_MX_MAR",
  },
  remixing: {
    "Jan 2025": "https://checkout.stripe.com/pay/YOUR_LINK_RX_JAN",
    "Feb 2025": "https://checkout.stripe.com/pay/YOUR_LINK_RX_FEB",
    "Mar 2025": "https://checkout.stripe.com/pay/YOUR_LINK_RX_MAR",
  },
  mastering: {
    "Jan 2025": "https://checkout.stripe.com/pay/YOUR_LINK_MA_JAN",
    "Feb 2025": "https://checkout.stripe.com/pay/YOUR_LINK_MA_FEB",
    "Mar 2025": "https://checkout.stripe.com/pay/YOUR_LINK_MA_MAR",
  },
};

const SESSION_MONTHS = ["Jan 2025", "Feb 2025", "Mar 2025"] as const;
type SessionMonth = (typeof SESSION_MONTHS)[number];

const START_DATES: Record<SessionMonth, string> = {
  "Jan 2025": "Starts Monday, Jan 6, 2025",
  "Feb 2025": "Starts Monday, Feb 3, 2025",
  "Mar 2025": "Starts Monday, Mar 3, 2025",
};

const OFFICE_HOURS_NOTE =
  "Office Hours: Fridays (30-min 1:1). Missed a class? Free 55-min make-up tutoring.";

/* -------------------- Component -------------------- */

export default function ApplyClient() {
  const sp = useSearchParams();
  const courseFromQuery = (sp.get("course") || "") as CourseSlug;

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1 fields
  const [course, setCourse] = useState<CourseSlug | "">("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timezone, setTimezone] = useState("America/Los_Angeles");
  const [experience, setExperience] = useState<
    "Beginner" | "Intermediate" | "Advanced" | ""
  >("");
  const [daw, setDaw] = useState("Ableton");
  const [goals, setGoals] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [access, setAccess] = useState("");
  const [referral, setReferral] = useState("");

  // Step 2 fields
  const [sessionMonth, setSessionMonth] = useState<SessionMonth | "">("");

  useEffect(() => {
    if (courseFromQuery && COURSES[courseFromQuery]) {
      setCourse(courseFromQuery);
    }
  }, [courseFromQuery]);

  const isStep1Valid = useMemo(
    () =>
      !!course &&
      first.trim().length > 0 &&
      last.trim().length > 0 &&
      /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email),
    [course, first, last, email]
  );

  const isStep2Valid = useMemo(
    () => !!sessionMonth && !!course,
    [sessionMonth, course]
  );

  const selectedCourse = course ? COURSES[course] : null;
  const stripeUrl =
    (course && sessionMonth && STRIPE_CHECKOUT[course]?.[sessionMonth]) || "";

  return (
    <main className="text-gray-100">
      {/* HERO */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center brightness-[0.35]" />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl font-bold">Apply Now</h1>
          <p className="mt-3 text-gray-300">
            4-week live classes · Two sessions/week · {OFFICE_HOURS_NOTE}
          </p>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="py-6 border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6">
          <ol className="flex items-center justify-between text-sm text-gray-300">
            <li className={`flex-1 ${step >= 1 ? "text-[#00FFF7]" : ""}`}>
              1 · Application
            </li>
            <li className="mx-2 h-px w-full bg-white/10" />
            <li className={`flex-1 text-center ${step >= 2 ? "text-[#00FFF7]" : ""}`}>
              2 · Schedule
            </li>
            <li className="mx-2 h-px w-full bg-white/10" />
            <li className={`flex-1 text-right ${step >= 3 ? "text-[#00FFF7]" : ""}`}>
              3 · Payment
            </li>
          </ol>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="grid gap-6">
              <Header
                title="Step 1 — Tell us about you"
                subtitle="Select a course and share a few details so we can tailor your experience."
              />
              {/* Course picker */}
              <Card>
                <label className="block text-sm mb-2">Course</label>
                <div className="grid gap-4 sm:grid-cols-2">
                  {(Object.keys(COURSES) as CourseSlug[]).map((slug) => {
                    const c = COURSES[slug];
                    const active = course === slug;
                    return (
                      <button
                        key={slug}
                        type="button"
                        onClick={() => setCourse(slug)}
                        className={`text-left rounded-xl border p-4 transition ${
                          active
                            ? "border-[#00FFF7] bg-white/10"
                            : "border-white/10 hover:bg-white/5"
                        }`}
                      >
                        <div className="text-xs uppercase tracking-widest text-[#00FFF7]">
                          {c.days} · {c.time}
                        </div>
                        <div className="mt-1 text-lg font-semibold">{c.title}</div>
                      </button>
                    );
                  })}
                </div>
              </Card>

              {/* Applicant info */}
              <Card>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" value={first} onChange={setFirst} required />
                  <Field label="Last name" value={last} onChange={setLast} required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <Field type="email" label="Email" value={email} onChange={setEmail} required />
                  <Field label="Phone" value={phone} onChange={setPhone} />
                </div>
                <div className="grid gap-4 sm:grid-cols-3 mt-4">
                  <Select
                    label="Experience level"
                    value={experience}
                    onChange={(v) => setExperience(v as any)}
                    options={["Beginner", "Intermediate", "Advanced"]}
                    placeholder="Choose level"
                  />
                  <Select
                    label="Primary DAW"
                    value={daw}
                    onChange={setDaw}
                    options={["Ableton", "FL Studio", "Logic Pro", "Pro Tools", "Studio One", "Other"]}
                  />
                  <Field label="Timezone" value={timezone} onChange={setTimezone} />
                </div>
                <div className="mt-4">
                  <Field
                    label="Goals (what do you want from this class?)"
                    value={goals}
                    onChange={setGoals}
                    textarea
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <Field
                    label="Portfolio / Links (SoundCloud, Spotify, etc.)"
                    value={portfolio}
                    onChange={setPortfolio}
                  />
                  <Field
                    label="Accessibility / accommodations"
                    value={access}
                    onChange={setAccess}
                  />
                </div>
                <div className="mt-4">
                  <Field label="How did you hear about us?" value={referral} onChange={setReferral} />
                </div>
              </Card>

              <div className="flex items-center justify-between">
                <Link href="/courses" className="text-sm text-gray-300 hover:underline">
                  ← Back to Courses
                </Link>
                <button
                  onClick={() => isStep1Valid && setStep(2)}
                  disabled={!isStep1Valid}
                  className={`rounded-xl px-6 py-3 font-semibold transition ${
                    isStep1Valid
                      ? "bg-[#00FFF7] text-black hover:opacity-90"
                      : "bg-white/10 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Continue to Schedule
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && selectedCourse && (
            <div className="grid gap-6">
              <Header
                title="Step 2 — Choose your session"
                subtitle="Pick your month. Time and days are set per curriculum."
              />
              <Card>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#00FFF7]">Selected Course</div>
                    <div className="mt-1 text-2xl font-semibold">{selectedCourse.title}</div>
                    <div className="mt-2 text-sm text-gray-300">
                      {selectedCourse.days} · {selectedCourse.time}
                    </div>
                    <p className="mt-4 text-sm text-gray-400">{OFFICE_HOURS_NOTE}</p>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Session month</label>
                    <div className="grid gap-3">
                      {SESSION_MONTHS.map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setSessionMonth(m)}
                          className={`text-left rounded-xl border p-4 transition ${
                            sessionMonth === m
                              ? "border-[#00FFF7] bg-white/10"
                              : "border-white/10 hover:bg-white/5"
                          }`}
                        >
                          <div className="text-lg font-semibold">{m}</div>
                          <div className="text-sm text-gray-300">{START_DATES[m]}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/5 transition"
                >
                  Back
                </button>
                <button
                  onClick={() => isStep2Valid && setStep(3)}
                  disabled={!isStep2Valid}
                  className={`rounded-xl px-6 py-3 font-semibold transition ${
                    isStep2Valid
                      ? "bg-[#00FFF7] text-black hover:opacity-90"
                      : "bg-white/10 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && selectedCourse && sessionMonth && (
            <div className="grid gap-6">
              <Header
                title="Step 3 — Secure Payment"
                subtitle="You’ll complete enrollment on our payment processor."
              />
              <Card>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#00FFF7]">Course</div>
                    <div className="text-xl font-semibold">{selectedCourse.title}</div>
                    <div className="mt-1 text-sm text-gray-300">
                      {selectedCourse.days} · {selectedCourse.time}
                    </div>
                    <div className="mt-2 text-sm text-gray-400">{START_DATES[sessionMonth]}</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    <p><strong>What happens next?</strong></p>
                    <ol className="list-decimal ml-5 space-y-1 mt-2">
                      <li>Complete payment on Stripe.</li>
                      <li>Receive a confirmation email with your class calendar and Zoom links.</li>
                      <li>Book optional office hour slots for Fridays.</li>
                    </ol>
                  </div>
                </div>
              </Card>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/5 transition"
                >
                  Back
                </button>

                {stripeUrl ? (
                  <a
                    href={stripeUrl}
                    className="rounded-xl bg-[#00FFF7] px-6 py-3 font-semibold text-black hover:opacity-90 transition"
                  >
                    Proceed to Payment
                  </a>
                ) : (
                  <button
                    disabled
                    className="rounded-xl bg-white/10 px-6 py-3 font-semibold text-gray-400 cursor-not-allowed"
                    title="Add your Stripe Checkout URL for this course/month."
                  >
                    Stripe Link Missing
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* -------------------- UI Bits -------------------- */

function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-1 text-gray-300">{subtitle}</p>}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">{children}</div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm mb-1">
        {label} {required ? <span className="text-[#00FFF7]">*</span> : null}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-[#00FFF7] transition"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-[#00FFF7] transition"
        />
      )}
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm mb-1">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-[#00FFF7] transition"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
