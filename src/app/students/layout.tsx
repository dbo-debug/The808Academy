// src/app/students/layout.tsx
"use client";

import { useEffect, useState } from "react";
import AuthGuard from "./components/AuthGuard";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

function SignOut() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      router.push("/auth/signin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handle}
      disabled={loading}
      className="rounded-lg border border-white/10 px-3 py-1.5 text-white/70 hover:bg-white/[0.06] disabled:opacity-60"
    >
      {loading ? "Signing out…" : "Sign out"}
    </button>
  );
}

export default function StudentsLayout({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (mounted) setEmail(session?.user?.email ?? null);
    })();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setEmail(session?.user?.email ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <AuthGuard>
      {/* isolate = clean stacking context so nothing from the public site blocks clicks */}
      <div className="min-h-screen bg-neutral-950 text-gray-100 isolate">
        <header className="border-b border-white/10 relative z-20">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-semibold tracking-wide">
              <span className="text-cyan-400">808</span> Academy — <span className="text-purple-400">Students</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              {email ? <span className="text-white/50 hidden sm:inline">{email}</span> : null}
              <SignOut />
            </div>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-6xl px-6 py-8 pointer-events-auto">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
