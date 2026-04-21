// src/components/Impact.tsx
'use client';


import Counter from "./Counter";

export default function Impact() {
  return (
    <section className="bg-white py-20 px-6 flex flex-col items-center justify-center">
        <div className="flex flex-col sm:flex-row justify-center gap-8 py-12 px-8 bg-[#040440] text-white rounded-lg max-w-5xl mx-auto">
            <div className="text-center">
                <h3 className="text-4xl font-bold mb-2"><Counter target={4} /></h3>
                <p className="text-base">Professional Tech Courses</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold mb-2"><Counter target={96} suffix="%" /></h3>
                <p className="text-base">Student Satisfaction Rate</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold mb-2"><Counter target={3000} suffix="+" /></h3>
                <p className="text-base">Learners Trained Online</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold mb-2"><Counter target={93} suffix="%" /></h3>
                <p className="text-base">Course Completion Rate</p>
            </div>
        </div>
      
    </section>
  )
}
