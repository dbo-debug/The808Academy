import CoursesSection from "../components/CoursesSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 text-center space-y-16">
      {/* Hero Section */}
      <section className="max-w-3xl">
        <img
          src="/808logo.png"
          alt="808 Academy Logo"
          className="mx-auto w-64 md:w-96 mb-8"
        />

        <h1 className="text-4xl md:text-6xl font-bebas mb-4 text-white">
          Master Production. From Your Studio.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Learn music production, mixing, and mastering from working engineers —{" "}
          100% online, from the comfort of your home studio.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="#courses"
            className="bg-[#00FFF7] text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            View Courses
          </a>
          <a
            href="#contact"
            className="border border-[#00FFF7] text-[#00FFF7] font-semibold px-6 py-3 rounded-lg hover:bg-[#00FFF7] hover:text-black transition"
          >
            Book Free Call
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <CoursesSection />
    </main>
  );
}
