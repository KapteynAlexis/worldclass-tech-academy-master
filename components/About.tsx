// src/components/About.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="flex flex-col sm:flex-row gap-8 max-w-6xl mx-auto items-center">
        <motion.div
          className="w-full sm:w-1/2 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <Image 
            src="/images/about-img2.png" 
            alt="Worldclass Tech Academy" 
            width={500} 
            height={500} 
            className="w-full max-w-md h-auto"
          />
        </motion.div>
        <motion.div
          className="w-full sm:w-1/2"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About World Class Tech Academy</h2>
          <p className="text-gray-600 leading-relaxed">World Class Tech Academy is an online technology education platform committed to training individuals for success in today&apos;s digital economy. We provide structured, practical, and career-focused tech education that equips learners with skills they can immediately apply.
            Our online learning model is designed for flexibility and effectiveness allowing students to learn from anywhere while still receiving expert instruction, mentorship, and hands-on project experience.
            Whether you are starting a tech career, upgrading your skills, or transitioning into a new field, Worldclass Tech Academy provides the tools and support you need to grow confidently in tech.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
