"use client";

import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/admin-the808academy/30min"; // ← replace

export default function ContactClient() {
  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(l);

    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.head.removeChild(l);
      document.body.removeChild(s);
    };
  }, []);

  return (
    <main className="min-h-screen text-gray-100">
      <section className="py-16 mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold">Contact & Book a Call</h1>
        <p className="mt-2 text-gray-300">
          Pick a time that works. Your booking will auto-sync to our Google Calendar.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL + "?hide_event_type_details=1&hide_gdpr_banner=1"}
            style={{ minWidth: "320px", height: "760px" }}
          />
        </div>
      </section>
    </main>
  );
}
