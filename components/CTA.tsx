// src/components/CTA.tsx

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-[#040440] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let’s Build Something Great Together
        </h2>

        <p className="text-gray-300 mb-8 mt-6">
          Whether you’re starting from scratch or improving an existing idea,
          we’re ready to help you move forward.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/courses"
            className="px-8 py-4 rounded-md bg-[#FF4400] text-white font-semibold hover:opacity-90 transition  hover:bg-white hover:text-[#FF4400]"
          >
            Get Started
          </a>

          <a
            href="https://wa.me/2349067441498"
            className="px-8 py-4 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-[#040440] transition"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  )
}
