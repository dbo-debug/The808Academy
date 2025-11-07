/* eslint-disable react/no-unescaped-entities */

type Search = { [key: string]: string | string[] | undefined };

export const metadata = {
  title: "Schedule | 808 Academy",
  description: "Step 2 of 3 — Pick your start date, then complete payment.",
};

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

const ALL_MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

function defaultMonth() {
  const now = new Date();
  // default to next month (or December if at year-end)
  const idx = Math.min(now.getMonth() + 1, 11);
  return ALL_MONTHS[idx];
}

export default function SchedulePage({
  searchParams,
}: {
  searchParams: Search;
}) {
  const program =
    (typeof searchParams.program === "string" ? searchParams.program : "Course") as
      | "Course"
      | "VIP"
      | "Tutoring";

  // Calendly links via env so you can change them without code changes
  const COURSE_CAL =
    process.env.NEXT_PUBLIC_CALENDLY_COURSE_4WK ||
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "";
  const VIP_CAL =
    process.env.NEXT_PUBLIC_CALENDLY_VIP_6WK ||
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "";

  const url = program === "VIP" ? VIP_CAL : COURSE_CAL;

  // We’ll render a simple (server-rendered) select for month
  // and carry it to the Payment page via query string.
  const chosenMonth = defaultMonth();

  return (
    <main className="min-h-screen px-6 py-16 text-white">
      <section className="mx-auto w-full max-w-5xl">
        <Stepper current={2} />

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          {/* Left: calendar + details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-2">
              Schedule your start date
            </h1>
            <p className="text-gray-300 mb-6">
              {program === "VIP"
                ? "Pick your kickoff for the 6-week VIP program."
                : "Pick your kickoff for the 4-week course."}{" "}
              You’ll receive a confirmation email with meeting details.
            </p>

            {!url ? (
              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-red-200">
                  Calendly URL isn’t configured yet. Set{" "}
                  <code className="text-teal-300">NEXT_PUBLIC_CALENDLY_COURSE_4WK</code>{" "}
                  and/or{" "}
                  <code className="text-teal-300">NEXT_PUBLIC_CALENDLY_VIP_6WK</code>.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
                <iframe
                  title="Schedule"
                  src={`${url}?hide_gdpr_banner=1`}
                  className="w-full"
                  style={{ height: "760px" }}
                />
              </div>
            )}
          </div>

          {/* Right: month + continue */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 h-fit">
            <div className="text-sm text-gray-300 mb-2">Step 2 of 3</div>
            <div className="text-xl font-semibold mb-4">Lock your session</div>

            <div className="mb-4">
              <label className="block text-sm text-gray-300 mb-1">
                Session month
              </label>
              {/* Basic select that defaults to next month.
                  It posts forward via the Continue button's link. */}
              <select
                id="session-month"
                defaultValue={chosenMonth}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                {ALL_MONTHS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => {
                const sel = (document.getElementById("session-month") as HTMLSelectElement)
                  ?.value;
                const u = new URL("/apply/pay", window.location.origin);
                u.searchParams.set("program", program);
                if (sel) u.searchParams.set("month", sel);
                window.location.href = u.toString();
              }}
              className="w-full rounded-full bg-teal-400 px-5 py-3 font-semibold text-black hover:bg-teal-300 transition"
            >
              Continue to Payment
            </button>

            <p className="text-xs text-gray-400 mt-4">
              You can adjust your slot later through the Calendly confirmation
              email.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
