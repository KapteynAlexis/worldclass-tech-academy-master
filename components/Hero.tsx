'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center px-6">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Worldclass Tech Academy"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#040440]/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-white max-w-3xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          variants={itemVariants}
        >
          World Class Tech Academy
        </motion.h1>

        <motion.p
          className="mb-8 text-lg text-gray-200"
          variants={itemVariants}
        >
          Build future-ready tech skills online with a fully online tech learning platform designed to help you gain practical, in-demand digital skills from anywhere in the world. Learn at your pace with expert guidance, real projects, and a supportive learning community.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-12 justify-center"
          variants={itemVariants}
        >
          <Link href="/courses" className="px-8 py-4 rounded-md bg-[#FF4400] text-white font-semibold hover:opacity-90 transition  hover:bg-white hover:text-[#FF4400]">
                   Explore Courses
                  </Link>
          <Link href="https://world-class-tech.vercel.app/" className="px-8 py-4 rounded-md bg-[#FF4400] text-white font-semibold hover:opacity-90 transition  hover:bg-white hover:text-[#FF4400]">
                   Enroll Now
                  </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
