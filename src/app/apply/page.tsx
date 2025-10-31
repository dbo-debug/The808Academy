import { Suspense } from "react";
import ApplyClient from "./ApplyClient";

export const metadata = {
  title: "Apply Now | 808 Academy",
  description:
    "Apply to 808 Academy’s live online programs. Choose your course, pick a session month, and complete secure payment.",
  openGraph: {
    title: "Apply Now | 808 Academy",
    description:
      "Three-step enrollment: application, schedule, and secure payment for 808 Academy’s live online classes.",
    images: ["/main.jpg"],
  },
};

// Prevent static prerender + satisfy useSearchParams in client
export const dynamic = "force-dynamic"; // or: export const revalidate = 0;

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[40vh]" />}>
      <ApplyClient />
    </Suspense>
  );
}
