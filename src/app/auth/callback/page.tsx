// src/app/auth/callback/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // When this page loads, supabase-js sees the #access_token in the URL
    // and sets the session. We then send the user into /students.
    (async () => {
      // First check immediately
      let { data: { session } } = await supabase.auth.getSession();
      if (session) return router.replace("/students");

      // Give the client a beat to process the hash, then check again
      setTimeout(async () => {
        const { data: { session: s2 } } = await supabase.auth.getSession();
        router.replace(s2 ? "/students" : "/auth/signin");
      }, 400);
    })();
  }, [router]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white/80 flex items-center justify-center">
      Signing you in…
    </div>
  );
}
