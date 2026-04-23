'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
    transition: { duration: 0.5 },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white text-[#040440]">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content with Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInVariants}
            >
              <motion.p
                className="text-[#FF4400] font-semibold mb-4"
                variants={itemVariants}
              >
                OUR SOLUTIONS
              </motion.p>
              <motion.h1
                className="text-6xl font-bold mb-6"
                variants={itemVariants}
              >
                World Class Tech Solutions
              </motion.h1>
              <motion.p
                className="text-[#040440] text-lg mb-12"
                variants={itemVariants}
              >
                We deliver innovative, scalable and future-ready digital solutions that help businesses build a strong online presence, engage users and accelerate growth.
              </motion.p>

              {/* Icon Features */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Modern & Scalable */}
                <motion.div
                  className="flex flex-col items-center text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-20 h-20 mb-4">
                    <Image
                      src="/images/modern.PNG"
                      alt="Modern & Scalable"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold mb-2">Modern & Scalable</h3>
                  <p className="text-sm text-[#040440]">Future-ready solutions built for performance and growth.</p>
                </motion.div>

                {/* Results Driven */}
                <motion.div
                  className="flex flex-col items-center text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-20 h-20 mb-4">
                    <Image
                      src="/images/results-driven.jpeg"
                      alt="Results Driven"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold mb-2">Results Driven</h3>
                  <p className="text-sm text-[#040440]">Focused on outcomes that drive engagement and business success.</p>
                </motion.div>

                {/* User-Centric */}
                <motion.div
                  className="flex flex-col items-center text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-20 h-20 mb-4">
                    <Image
                      src="/images/user-centric.jpeg"
                      alt="User-Centric"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold mb-2">User-Centric</h3>
                  <p className="text-sm text-[#040440]">Designed with the user experience at the center to maximize satisfaction and engagement.</p>
                </motion.div>

                {/* Secure & Reliable */}
                <motion.div
                  className="flex flex-col items-center text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-20 h-20 mb-4">
                    <Image
                      src="/images/secure.PNG"
                      alt="Secure & Reliable"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold mb-2">Secure & Reliable</h3>
                  <p className="text-sm text-[#040440]">Robust, secure and reliable products you can trust.</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRightVariants}
            >
              <div className="relative h-96">
                <Image
                  src="/images/hero-solution.PNG"
                  alt="Services Hero"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Website Development */}
            <motion.div
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-64 bg-gray-100">
                <Image
                  src="/images/Webdevelopment-solution.PNG"
                  alt="Website Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Development</h3>
                <p className="text-gray-600 mb-4">Custom, responsive and SEO-friendly websites that represent your brand and deliver results.</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="text-[#FF4400] mr-2">✓</span>
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FF4400] mr-2">✓</span>
                    SEO Optimized
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FF4400] mr-2">✓</span>
                    Performance Focused
                  </li>
                </ul>
                <Link href="https://wa.me/2349067441498" className="text-[#FF4400] font-bold hover:underline">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            {/* E-commerce Solutions */}
            <motion.div
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-64 bg-gray-100">
                <Image
                  src="/images/e-commerce-solution.PNG"
                  alt="E-commerce Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Solutions</h3>
                <p className="text-gray-600 mb-4">High-converting, secure and scalable platforms that transform your business online.</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="text-[#FF4400] mr-2">✓</span>
                    Secure Payments
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FF4400] mr-2">✓</span>
                    Product Management
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FF4400] mr-2">✓</span>
                    Seamless Checkout
                  </li>
                </ul>
                <Link href="https://wa.me/2349067441498" className="text-[#FF4400] font-bold hover:underline">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-64 bg-gray-100">
                <Image
                  src="/images/uiux-solution.PNG"
                  alt="UI/UX Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
                <p className="text-gray-600 mb-4">Intuitive and engaging designs that create exceptional user experiences and strong brand presence.</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="text-[#FF4400] mr-2">✓</span>
                    User Research
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FF4400] mr-2">✓</span>
                    Wireframing
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FF4400] mr-2">✓</span>
                    Visual Design
                  </li>
                </ul>
                <Link href="https://wa.me/2349067441498" className="text-[#FF4400] font-bold hover:underline">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex gap-4"
              variants={itemVariants}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#FF4400] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">→</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Future-ready Solutions</h3>
                <p className="text-gray-600">
                  Built for performance and built for the future. Future-ready solutions that stand the test of time.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              variants={itemVariants}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#FF4400] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">→</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Team</h3>
                <p className="text-gray-600">
                  Our experienced team brings industry expertise and proven methodologies to every project.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              variants={itemVariants}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#FF4400] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">→</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Affordable Pricing</h3>
                <p className="text-gray-600">
                  Premium quality solutions at competitive prices that deliver exceptional value.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              variants={itemVariants}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#FF4400] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">→</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Dedicated Support</h3>
                <p className="text-gray-600">
                  24/7 customer support and ongoing maintenance ensure your solutions always run smoothly.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
