import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function DataAnalysisCoursePage() {
  return (
    <>
      <section className="py-20 px-6 bg-gray-50 text-black">
        <Link href="/courses" className="px-8 py-4 rounded-md bg-[#FF4400] text-white font-semibold hover:opacity-90 transition  hover:bg-white hover:text-[#FF4400]">← Back
        </Link>

        <h1 className="mt-6 mb-4 text-4xl pt-6 font-bold max-w-4xl">Data Analysis Masterclass</h1>
        <p className="mb-8 text-gray-600">
          Beginner to Advanced · 100% Online
        </p>

        <p className="mb-10">
          Turn data into actionable insights with Worldclass Tech Academy’s Data
          Analysis Masterclass — a structured online training program designed to
          take you from beginner level to job-ready in just 12 weeks.
        </p>

        <h2 className="mb-4">Program Highlights</h2>
        <ul className="list-disc pl-6 mb-10 space-y-2">
          <li>Duration: 12 Weeks</li>
          <li>Schedule: Weekdays & Weekends</li>
          <li>Format: 100% Online</li>
          <li>Learning Mode: Live Classes + Recorded Sessions</li>
          <li>
            Outcome: Portfolio-ready projects, dashboards & analytical skills
          </li>
        </ul>

         <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 rounded-md bg-[#FF4400] text-white font-semibold hover:opacity-90 transition  hover:bg-white hover:text-[#FF4400]">Download Brochure</button>
          <a
            href="https://wa.me/2349067441498"
            target="_blank"
            className="px-8 py-4 rounded-md bg-[#FF4400] text-white font-semibold hover:opacity-90 transition  hover:bg-white hover:text-[#FF4400] text-center"
            rel="noopener noreferrer"
          >
            Talk to a Program Advisor
          </a>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
