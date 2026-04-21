"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Worldclass Tech Academy fully online?",
    answer:
      "Yes. All our courses are 100% online, including live sessions, learning materials, and projects.",
  },
  {
    question: "Do I need prior tech experience?",
    answer:
      "No. We offer beginner-friendly courses as well as advanced programs.",
  },
  {
    question: "Will I have access to instructors?",
    answer:
      "Yes. Students receive instructor guidance, mentorship, and support throughout the program.",
  },
  {
    question: "Are classes live or recorded?",
    answer:
      "We offer live sessions, recordings, and learning resources for flexible study.",
  },
  {
    question: "Do I receive a certificate?",
    answer:
      "Yes. Upon successful completion, students receive a certificate of completion.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. Our online structure allows you to balance learning with other commitments.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gray-50 text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg "
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-4 text-left font-medium bg-[#040440] text-white rounded-lg hover:opacity-90 transition hover:bg-[#FF4400] hover:text-white"
              >
                {faq.question}
                <span className="text-xl  ">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 pt-4 pb-4 text-gray-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
