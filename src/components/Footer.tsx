import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/60">
        <img src="/logo-808-cyan.svg" alt="808 Logo" className="h-10 w-auto mb-4" />
          © {new Date().getFullYear()} The 808 Academy. All rights reserved.
        </div>
        <div className="text-sm text-white/60 flex items-center gap-4">
          <Link href="/#courses" className="hover:text-white">Courses</Link>
          <Link href="/tutoring" className="hover:text-white">Tutoring</Link>
          <Link href="/vip" className="hover:text-white">VIP</Link>
          <Link href="/apply" className="hover:text-white">Apply</Link>
        </div>
      </div>
    </footer>
  );
}
