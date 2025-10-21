"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const link = (href: string, label: string) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg text-sm transition ${
        pathname === href ? "text-[#00FFF7]" : "text-white/80 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
  <img
    src="/logo-808-cyan.svg"
    alt="The 808 Academy"
    className="h-10 w-auto sm:h-12 hover:scale-105 transition-transform duration-300"
  />
</Link>
        <div className="hidden sm:flex items-center gap-2">
          {link("/", "Home")}
          {link("/#courses", "Courses")}
          {link("/tutoring", "Tutoring")}
          {link("/vip", "VIP")}
          {link("/apply", "Apply")}
        </div>
        <Link
          href="/apply"
          className="inline-flex items-center rounded-xl bg-[#00FFF7] text-black px-4 py-2 text-sm font-semibold hover:bg-white transition"
        >
          Apply Now
        </Link>
      </nav>
    </header>
  );
}
