import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Image from "next/image";

const courses = [
  {
    title: "Frontend Development",
    slug: "frontend",
    description:
      "Build modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and modern tools.",
    image:"/images/frontend.png",
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    description:
      "Learn cybersecurity fundamentals, ethical hacking basics, and system protection techniques.",
      image:"/images/cybersecurity.png",
  },
  {
    title: "Data Analysis",
    slug: "data-analysis",
    description:
      "Analyze and visualize data using Excel, SQL, Python, and modern analytics tools.",
    image:"/images/data-analysis.png",
  },
  {
    title: "Customer Service",
    slug: "customer-service",
    description:
      "Develop professional communication skills for remote and customer-facing roles.",
    image:"/images/customer-service.png",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="py-20 px-6 bg-white text-black">
        <div className="mb-6 flex flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-4xl font-bold">Our Online Courses</h1>
            <p className="max-w-2xl mb-12">
              Our programs are designed to meet current industry demands and prepare
              you for real-world opportunities in tech.
            </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="border rounded-xl p-6 hover:shadow-md transition hover:bg-[#FF4400]"
            >
            <Image src={course.image} alt={course.title} width={400} height={200} className="mb-4 rounded-md"/>
              <h1 className="mb-2 font-bold text-2xl">{course.title}</h1>
              <p>{course.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
