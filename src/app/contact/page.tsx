"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * CONTACT / SCHEDULE A CALL
 * - Basic info form for questions
 * - Calendly embed for booking
 * Replace the CALENDLY_URL with your live link.
 */

const CALENDLY_URL = "https://calendly.com/admin-the808academy/30min"; // TODO: put your real Calendly link here

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main className="text-gray-100">
      {/* HERO */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center brightness-[0.35]" />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl font-bold">Speak with an Advisor</h1>
          <p className="mt-3 text-gray-300">
            Have questions about fit, scheduling, or payment? Send us a note or grab a time below.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-2">
          {/* Basic info form (client-side only: pipe to your email service / forms endpoint later) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Send a Message</h2>
            <p className="text-gray-300 text-sm mt-1">We typically respond within one business day.</p>
            <div className="mt-6 grid gap-4">
              <Field label="Name" value={name} onChange={setName} />
              <Field type="email" label="Email" value={email} onChange={setEmail} />
              <Field label="Message" value={message} onChange={setMessage} textarea />
              <button
                disabled={!name.trim() || !/[^@\s]+@[^@\s]+\.[^@\s]+/.test(email)}
                className="rounded-xl bg-[#00FFF7] px-6 py-3 font-semibold text-black hover:opacity-90 transition disabled:opacity-50"
                onClick={() => alert("Thanks! We received your message. (Wire this to your email handler.)")}
              >
                Send
              </button>
              <p className="text-xs text-gray-400">
                Prefer to talk live? Book a time at right. No SSN or sensitive info requested.
              </p>
            </div>
          </div>

          {/* Calendly embed */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <iframe
              title="Calendly Scheduling"
              src={CALENDLY_URL}
              className="w-full h-[720px] rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-gray-300">
            Ready to enroll?{" "}
            <Link href="/apply" className="text-[#00FFF7] font-semibold hover:underline">
              Start the official application →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm mb-1">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={6}
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
