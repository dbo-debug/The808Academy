/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
export default function CoursePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-start justify-center">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Welcome to The 808 Academy</h1>
        <p className="text-lg text-gray-300 mb-6">
          Learn the fundamentals of music production, mixing, and mastering from real engineers.
          You&apos;ll get hands-on experience, pro-level techniques, and mentorship designed to
          accelerate your growth as an artist or producer.
        </p>
        <Link
          href="/apply"
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Apply Now
        </Link>
      </div>

      {/* Courses Section */}
      <section className="mt-24 max-w-5xl w-full">
        <h2 className="text-3xl font-semibold mb-8">Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Course 1 */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
            <Image
              src="/images/production.jpg"
              alt="Production Course"
              width={600}
              height={400}
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Music Production 101</h3>
            <p className="text-gray-400 mb-4">
              Build your foundation — from beat making to songwriting and DAW workflow.
            </p>
            <Link href="/checkout?course=production" className="text-blue-400 hover:underline">
              Enroll Now
            </Link>
          </div>

          {/* Course 2 */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
            <Image
              src="/images/mixing.jpg"
              alt="Mixing Course"
              width={600}
              height={400}
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Mixing Essentials</h3>
            <p className="text-gray-400 mb-4">
              Learn to mix vocals, drums, and instruments like a pro using modern techniques.
            </p>
            <Link href="/checkout?course=mixing" className="text-blue-400 hover:underline">
              Enroll Now
            </Link>
          </div>

          {/* Course 3 */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
            <Image
              src="/images/mastering.jpg"
              alt="Mastering Course"
              width={600}
              height={400}
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Mastering Techniques</h3>
            <p className="text-gray-400 mb-4">
              Bring polish and loudness to your final mix with industry-standard mastering chains.
            </p>
            <Link href="/checkout?course=mastering" className="text-blue-400 hover:underline">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mt-24 max-w-5xl w-full">
        <h2 className="text-3xl font-semibold mb-8">Pricing</h2>
        <ul className="space-y-4 text-gray-300">
          <li>🎧 Basic Course – $199</li>
          <li>🎚 Mixing & Mastering Course – $399</li>
          <li>🏆 VIP Mentorship (1-on-1) – $999</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="mt-24 w-full flex flex-col items-start">
        <h2 className="text-3xl font-semibold mb-4">Ready to Level Up?</h2>
        <p className="text-gray-300 mb-8">
          Join The 808 Academy and learn from real-world engineers. Whether you’re just starting or
          refining your sound — we’ve got you covered.
        </p>
        <Link
          href="/apply"
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Apply Today
        </Link>
      </section>
    </main>
  );
}
