'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-[#040440] text-gray-300 px-6 py-20">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Brand */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white text-xl font-bold mb-4">
            WorldClass Tech Academy
          </h3>
          <p className="text-sm leading-relaxed">
            We help individuals and businesses build real-world tech skills
            and digital solutions that scale.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/"className="hover:text-[#FF4400] transition">Home</Link></li>
            <li><Link href="/courses" className="hover:text-[#FF4400] transition">Courses</Link></li>
            <li><Link href="/services" className="hover:text-[#FF4400] transition">Services</Link></li>
            <li><Link href="/" className="hover:text-[#FF4400] transition">About Us</Link></li>
            <li><Link href="https://wa.me/2349067441498" className="hover:text-[#FF4400] transition">Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Frontend Development</li>
            <li>Cybersecurity</li>
            <li>Data Analysis</li>
            <li>Customer Service</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: info@worldclasstech.academy</li>
            <li>Phone: +2349067441498</li>
            <li>Location: Nigeria</li>
          </ul>
        </motion.div>

      </motion.div>

      {/* Bottom */}
      <motion.div
        className="border-t border-gray-600 mt-12 pt-8 text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        © {new Date().getFullYear()} WorldClass Tech Academy. All rights reserved.
      </motion.div>
    </footer>
  )
}
