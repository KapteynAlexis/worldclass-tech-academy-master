// src/components/WhyChooseUs.tsx

const reasons = [
  {
    title: 'Fully Online Learning',
    description:
      'Access all classes, materials, and sessions remotely — no physical attendance required.',
  },
  {
    title: 'Practical & Project-Based',
    description:
      'Learn by building real projects that strengthen your portfolio and confidence.',
  },
  {
    title: 'Industry-Experienced Instructors',
    description:
      'Get trained by professionals with real-world tech experience.',
  },
  {
    title: 'Flexible Learning Schedule',
    description:
      'Learn at your pace with live sessions, recordings, and guided support.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose WorldClass Tech Academy
          </h2>
          <p className="text-gray-600">
            We combine technical expertise with a structured approach to deliver
            solutions you can trust.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-700">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
