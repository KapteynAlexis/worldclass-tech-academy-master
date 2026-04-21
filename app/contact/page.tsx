// src/components/Hero.tsx
import Link from "next/link";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          WorldClass Tech Academy
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Building world-class digital solutions for the modern world.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/courses" className="bg-[#FF4400] text-black px-6 py-3 rounded-md font-medium">
            Get Started
          </Link>
          
          <button className="border border-white px-6 py-3 rounded-md">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  )
}
