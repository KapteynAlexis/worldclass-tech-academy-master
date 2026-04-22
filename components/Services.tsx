import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    title: "Web Development",
    slug: "web-development",
    description:
      "Build modern, responsive, and user-friendly websites and web apps using modern tools.",
    image:"/images/frontend.png",
    tutorPortfolio: "https://my-portfolio-f51rv5qqo-akosile-alexanders-projects.vercel.app/",
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    description:
      "Learn cybersecurity fundamentals, ethical hacking basics, and system protection techniques.",
      image:"/images/cybersecurity.png",
      tutorPortfolio: "/tutors/cybersecurity",
  },
  {
    title: "Data Analysis",
    slug: "data-analysis",
    description:
      "Analyze and visualize data using Excel, SQL, Python, and modern analytics tools.",
    image:"/images/data-analysis.png",
    tutorPortfolio: "/tutors/data-analysis",
  },
  {
    title: "Customer Service",
    slug: "customer-service",
    description:
      "Develop professional communication skills for remote and customer-facing roles.",
    image:"/images/customer-service.png",
    tutorPortfolio: "/tutors/customer-service",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="py-20 px-6 bg-white text-black">
        <div className="mb-12 flex flex-col max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold">Services we Offer</h1>
        
        </div>
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.slug}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 flex flex-col h-full bg-white"
            >
              <Image src={course.image} alt={course.title} width={400} height={200} className="mb-4 rounded-lg object-cover w-full h-48"/>
              <h1 className="mb-3 font-bold text-xl text-gray-900">{course.title}</h1>
              <p className="text-gray-600 mb-6 grow text-sm leading-relaxed">{course.description}</p>
              <Link href={course.tutorPortfolio} className="w-full px-4 py-3 rounded-md bg-[#FF4400] text-white font-semibold hover:bg-[#e63d00] transition duration-200 text-center">
                View Tutor Portfolio
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
