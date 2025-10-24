import Link from "next/link";

/**
 * Home / Landing
 * - White logo, left-justified hero, dark overlay on /main.jpg
 * - Courses (4 cards)
 * - Choose Your Path (pricing: Courses / Tutoring / VIP)
 */
export default function HomePage() {
  return (
    <main className="text-gray-100">
      {/* ---------- HERO ---------- */}
      <section
        className="relative min-h-[88vh] flex items-center"
        style={{
          backgroundImage: "url('/main.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          {/* White logo */}
          <img
            src="/logo-808-white.svg"
            alt="The 808 Academy Logo"
            className="h-64 w-auto mb-8 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          />

          <h1 className="max-w-3xl text-left text-5xl md:text-6xl font-semibold leading-tight">
            Produce, mix &amp; release{" "}
            <span className="text-[#00FFF7]">radio-ready</span> music from
            anywhere.
          </h1>

          <p className="mt-6 max-w-2xl text-left text-lg text-gray-300">
            Structured courses, 1:1 tutoring, and VIP mentorship from working
            engineers — 100% online, with templates, checklists, and replays
            included.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/courses"
              className="rounded-xl bg-[#00FFF7] px-6 py-3 font-semibold text-black hover:opacity-90 transition"
            >
              View Courses
            </Link>
            <Link
              href="/apply"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- OUR COURSES ---------- */}
      <section id="courses" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-semibold text-center md:text-left">
            Our Courses
          </h2>
          <p className="mt-3 text-center md:text-left text-gray-300">
            Learn from working engineers with a polished, release-ready
            curriculum.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Card 1 */}
            <CourseCard
              title="Music Production in Logic / Pro Tools"
              tag="Production"
              blurb="From sketch to finished demo. Song structure, drums, synths, vocals, and arrangement inside Logic or Pro Tools."
              href="/courses/logic-production"
              image="/courses.jpg"
            />
            {/* Card 2 */}
            <CourseCard
              title="Remixing"
              tag="Creative"
              blurb="Creative remix techniques — tempo mapping, vocal chopping, re-harmonization, and dynamic reworks."
              href="/courses/remixing"
              image="/courses.jpg"
            />
            {/* Card 3 */}
            <CourseCard
              title="Mixing"
              tag="Engineering"
              blurb="Low-end glue, vocal priority, depth, and loudness. Workflows that translate on every system."
              href="/courses/mixing"
              image="/courses.jpg"
            />
            {/* Card 4 */}
            <CourseCard
              title="Mastering (Logic / Pro Tools)"
              tag="Finishing"
              blurb="Finalize your track for streaming or club — tone, dynamics, loudness targets, and deliverables."
              href="/courses/mastering"
              image="/courses.jpg"
            />
          </div>
        </div>
      </section>

      {/* ---------- CHOOSE YOUR PATH / PRICING ---------- */}
      <section id="pricing" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-semibold">Choose your path</h2>
              <p className="mt-3 max-w-2xl text-gray-300">
                Three ways to learn — join a cohort, book one-on-one time, or
                get the full VIP treatment with private sessions and priority
                support.
              </p>
            </div>
            <Link
              href="/apply"
              className="mt-6 md:mt-0 rounded-xl bg-[#00FFF7] px-6 py-3 font-semibold text-black hover:opacity-90 transition"
            >
              Apply Now
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Courses */}
            <PricingCard
              name="Courses"
              price="$399"
              cadence="per 4-week cohort"
              bullets={[
                "Streamer-style live classroom (2× / week, 90 min)",
                "Homework with feedback",
                "15–30 min office hours weekly",
                "Replays, templates & sample packs",
              ]}
              image="/courses.jpg"
              ctaLabel="View Cohorts"
              href="/apply"
            />

            {/* Tutoring */}
            <PricingCard
              name="Tutoring"
              price="$99"
              cadence="per 55-min session"
              bullets={[
                "Screen-share 1:1 with a working engineer",
                "Open-topic: production, mixing, mastering, workflow",
                "Add-on coaching for any course",
                "Custom 4-week crash courses available",
              ]}
              image="/tutoring.jpg"
              ctaLabel="Book Tutoring"
              href="/tutoring"
            />

            {/* VIP */}
            <PricingCard
              name="VIP"
              price="$1,499"
              cadence="complete package"
              bullets={[
                "Private ‘classroom’ + personalized tutoring",
                "Priority session scheduling",
                "Custom curriculum & accountability",
                "All templates, packs, & bonus assets",
              ]}
              image="/vip.png"
              ctaLabel="Apply for VIP"
              href="/apply"
            />
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-3xl font-semibold">
                Ready to make radio-ready records?
              </h3>
              <p className="mt-3 text-gray-300">
                Join a cohort, book 1:1 time, or go VIP. We’ll meet you where
                you are and get your music over the finish line.
              </p>
            </div>
            <div className="flex gap-4 md:justify-end">
              <Link
                href="/courses"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                Explore Courses
              </Link>
              <Link
                href="/apply"
                className="rounded-xl bg-[#00FFF7] px-6 py-3 font-semibold text-black hover:opacity-90 transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------- Small components -------------------- */

type CourseCardProps = {
  title: string;
  tag: string;
  blurb: string;
  href: string;
  image: string;
};

function CourseCard({ title, tag, blurb, href, image }: CourseCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
      />
      <div className="p-5">
        <div className="text-xs uppercase tracking-widest text-[#00FFF7]">
          {tag}
        </div>
        <h3 className="mt-1 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-300">{blurb}</p>
        <div className="mt-4 text-[#00FFF7] font-semibold">Learn More →</div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
    </Link>
  );
}

type PricingCardProps = {
  name: string;
  price: string;
  cadence: string;
  bullets: string[];
  image: string;
  ctaLabel: string;
  href: string;
};

function PricingCard({
  name,
  price,
  cadence,
  bullets,
  image,
  ctaLabel,
  href,
}: PricingCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
      <div
        className="h-40 w-full bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <div className="text-3xl font-bold">{price}</div>
          <div className="text-sm text-gray-300">{cadence}</div>
        </div>
        <ul className="mt-4 space-y-2 text-gray-300">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00FFF7]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="mt-6 inline-block rounded-xl bg-[#00FFF7] px-5 py-2.5 font-semibold text-black hover:opacity-90 transition"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
