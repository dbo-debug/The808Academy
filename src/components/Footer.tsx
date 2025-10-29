import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left side: Logo and copyright */}
        <div className="flex flex-col items-center sm:items-start">
          <Image
            src="/logo-808-cyan.svg"
            alt="808 Logo"
            width={160}
            height={40}
            className="h-10 w-auto mb-4"
            priority
          />
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} The 808 Academy. All rights reserved.
          </p>
        </div>

        {/* Right side: Navigation links */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm text-white/70">
          <Link href="/courses" className="hover:text-white transition">
            Courses
          </Link>
          <Link href="/vip" className="hover:text-white transition">
            VIP
          </Link>
          <Link href="/tutoring" className="hover:text-white transition">
            Tutoring
          </Link>
          <Link href="/apply" className="hover:text-white transition">
            Apply
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
