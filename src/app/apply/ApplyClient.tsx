"use client";

import * as React from "react";

type Program = "Course" | "VIP" | "Tutoring";
type SubmitState =
  | { ok: false; message: string }
  | { ok: true; message: string }
  | null;

function Stepper({ current }: { current: 1 | 2 | 3 }) {
  const steps = [
    { id: 1, label: "Application" },
    { id: 2, label: "Schedule" },
    { id: 3, label: "Payment" },
  ] as const;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        {steps.map((s, i) => {
          const active = s.id === current;
          const done = s.id < current;
          return (
            <div key={s.id} className="flex items-center gap-3">
              <div
                className={[
                  "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold",
                  active
                    ? "bg-teal-400 text-black border-teal-400"
                    : done
                    ? "bg-white/15 text-white border-white/20"
                    : "bg-white/5 text-white/60 border-white/10",
                ].join(" ")}
              >
                {s.id}
              </div>
              <div
                className={[
                  "text-sm",
                  active ? "text-teal-300" : done ? "text-white" : "text-white/60",
                ].join(" ")}
              >
                {s.label}
              </div>
              {i < steps.length - 1 && (
                <div className="mx-2 h-px w-10 bg-white/10" aria-hidden />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-2 text-xs uppercase tracking-wide text-white/50">
        Step {current} of 3
      </div>
    </div>
  );
}

export default function ApplyClient() {
  // contact
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  // address
  const [street, setStreet] = React.useState("");
  const [city, setCity] = React.useState("");
  const [stateRegion, setStateRegion] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [country, setCountry] = React.useState("United States");

  // program details
  const [program, setProgram] = React.useState<Program>("Course");
  const [course, setCourse] = React.useState("Music Production");
  const [tutoringSubject, setTutoringSubject] = React.useState("");
  const [daw, setDaw] = React.useState("Ableton Live");

  // background
  const [experience, setExperience] = React.useState("Beginner");
  const [goals, setGoals] = React.useState("");

  // consents
  const [consentEmail, setConsentEmail] = React.useState(true);
  const [consentSMS, setConsentSMS] = React.useState(false);

  // ui
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState<SubmitState>(null);

  function validate(): string | null {
    if (!firstName.trim()) return "Please enter your first name.";
    if (!lastName.trim()) return "Please enter your last name.";
    if (!email.trim()) return "Please enter your email.";
    if (!phone.trim()) return "Please enter your phone number.";

    if (!street.trim() || !city.trim() || !stateRegion.trim() || !postalCode.trim())
      return "Please complete your address.";

    if (program === "Course" && !course) return "Please select a course.";
    if (program === "Tutoring" && !tutoringSubject.trim())
      return "Please describe what you’d like help with.";

    return null;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(null);

    const errMsg = validate();
    if (errMsg) {
      setSubmitted({ ok: false, message: errMsg });
      return;
    }

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      street,
      city,
      state: stateRegion,
      postalCode,
      country,
      program,
      course: program !== "Tutoring" ? course : undefined,
      tutoringSubject: program === "Tutoring" ? tutoringSubject : undefined,
      daw,
      experience,
      goals,
      consentEmail,
      consentSMS,
    };

    setLoading(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && (data?.ok ?? true)) {
        // Go to Step 2
        const next = new URL("/apply/schedule", window.location.origin);
        next.searchParams.set("program", program);
        window.location.href = next.toString();
      } else {
        throw new Error(data?.error || "Something went wrong.");
      }
    } catch (err: any) {
      setSubmitted({ ok: false, message: err?.message || "Application failed." });
    } finally {
      setLoading(false);
    }
  }

  const label = (text: string) => (
    <span className="block text-sm font-medium text-gray-200 mb-1">{text}</span>
  );
  const inputClass =
    "w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400";

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 text-white">
      {/* Step header */}
      <Stepper current={1} />

      <h1 className="text-4xl font-bebas tracking-wide mb-2">Apply Now</h1>
      <p className="text-gray-300 mb-8">
        Step 1: Tell us about you and your goals. Next you’ll pick a start date,
        then complete secure payment.
      </p>

      {submitted && !submitted.ok && (
        <div className="mb-6 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-200">
          {submitted.message}
        </div>
      )}

      <form onSubmit={onSubmit} className="grid gap-8">
        {/* Personal */}
        <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>{label("First name")}<input className={inputClass} value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
            <div>{label("Last name")}<input className={inputClass} value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
            <div>{label("Email")}<input type="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            <div>{label("Phone")}<input className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
          </div>
        </section>

        {/* Address */}
        <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Address</h2>
          <div className="grid gap-4">
            <div>{label("Street")}<input className={inputClass} value={street} onChange={(e) => setStreet(e.target.value)} /></div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>{label("City")}<input className={inputClass} value={city} onChange={(e) => setCity(e.target.value)} /></div>
              <div>{label("State / Region")}<input className={inputClass} value={stateRegion} onChange={(e) => setStateRegion(e.target.value)} /></div>
              <div>{label("Postal code")}<input className={inputClass} value={postalCode} onChange={(e) => setPostalCode(e.target.value)} /></div>
            </div>
            <div className="max-w-md">{label("Country")}<input className={inputClass} value={country} onChange={(e) => setCountry(e.target.value)} /></div>
          </div>
        </section>

        {/* Program */}
        <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Program</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              {label("Choose a program")}
              <select className={inputClass} value={program} onChange={(e) => setProgram(e.target.value as Program)}>
                <option value="Course">Course (4-week)</option>
                <option value="VIP">VIP (6-week)</option>
                <option value="Tutoring">Tutoring (55-min 1:1)</option>
              </select>
            </div>

            {program !== "Tutoring" ? (
              <div className="md:col-span-2">
                {label("Course")}
                <select className={inputClass} value={course} onChange={(e) => setCourse(e.target.value)}>
                  <option>Music Production</option>
                  <option>Mixing</option>
                  <option>Remixing</option>
                  <option>Mastering</option>
                </select>
              </div>
            ) : (
              <div className="md:col-span-2">
                {label("Tutoring subject / goals")}
                <input
                  className={inputClass}
                  placeholder="e.g., Vocal tuning, arrangement, mixing, etc."
                  value={tutoringSubject}
                  onChange={(e) => setTutoringSubject(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              {label("DAW")}
              <select className={inputClass} value={daw} onChange={(e) => setDaw(e.target.value)}>
                <option>Ableton Live</option>
                <option>FL Studio</option>
                <option>Logic Pro</option>
                <option>Pro Tools</option>
                <option>Studio One</option>
                <option>Reason</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              {label("Experience level")}
              <select className={inputClass} value={experience} onChange={(e) => setExperience(e.target.value)}>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div>
              {label("Goals")}
              <input className={inputClass} placeholder="What do you want to achieve?" value={goals} onChange={(e) => setGoals(e.target.value)} />
            </div>
          </div>
        </section>

        {/* Consents */}
        <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Stay in the loop</h2>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="size-4 accent-teal-400" checked={consentEmail} onChange={(e) => setConsentEmail(e.target.checked)} />
            <span className="text-sm text-gray-300">
              I agree to receive emails about my application and course updates.
            </span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="size-4 accent-teal-400" checked={consentSMS} onChange={(e) => setConsentSMS(e.target.checked)} />
            <span className="text-sm text-gray-300">
              I agree to receive SMS reminders about sessions and schedules.
            </span>
          </label>
        </section>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-teal-400 px-6 py-3 font-semibold text-black hover:bg-teal-300 disabled:opacity-60"
          >
            {loading ? "Submitting…" : "Submit Application"}
          </button>

          {submitted && submitted.ok && (
            <span className="text-teal-300">{submitted.message}</span>
          )}
        </div>
      </form>
    </div>
  );
}
