"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CoursesSection from "@/components/CoursesSection";

function BuyTestButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_TEST;

      if (!priceId) {
        alert("Missing NEXT_PUBLIC_STRIPE_PRICE_TEST in .env.local (must be a price_… ID)");
        return;
      }

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert(data?.error || "Could not start checkout");
      }
    } catch (err: any) {
      console.error(err);
      alert(err?.message || "Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black hover:bg-cyan-300 disabled:opacity-50"
    >
      {loading ? "Redirecting…" : "Buy Test ($1)"}
    </button>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen text-white">
     {/* HERO SECTION */}
<section className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-left">
  <div className="mb-8 w-full">
    <Image
      src="/logo-808-white.svg"
      alt="The 808 Academy"
      width={480}
      height={140}
      className="h-auto w-64 md:w-96"
      priority
    />
  </div>

  <h1 className="max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
    Master Production. <br /> From Your Studio.
  </h1>
  <p className="mt-5 max-w-xl text-lg text-gray-300">
    Learn music production, mixing, and mastering from working engineers —
    100% online, from the comfort of your home studio.
  </p>

  <div className="mt-8 flex flex-wrap items-center gap-4">
    <Link
      href="/courses"
      className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black hover:bg-cyan-300"
    >
      View Courses
    </Link>
    <Link
      href="/apply"
      className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/10"
    >
      Apply Now
    </Link>
    <BuyTestButton />
  </div>

  {/* BACKGROUND IMAGE (main.jpg) */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <Image
      src="/main.jpg"
      alt="Background"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>
</section>

      {/* OPTIONAL BACKGROUND IMAGE */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/main.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>

      {/* COURSES SECTION (renders its own title) */}
      <section id="courses" className="mx-auto max-w-6xl px-6 py-24">
        <CoursesSection />
      </section>
    </main>
  );
}
