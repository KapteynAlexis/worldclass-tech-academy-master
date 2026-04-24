'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Animation variants
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface FormData {
  // Phase 1
  fullName: string;
  company: string;
  role: string;
  email: string;
  phone: string;

  // Phase 2
  projectTypes: string[];
  projectGoal: string;

  // Phase 3
  tierPreference: 'standard' | 'academy-assisted';
  techStack: string;

  // Phase 4
  budgetRange: string;
  completionDate: string;

  // Phase 5
  sessionType: 'discovery' | 'strategy';
  meetingDay: string;
  meetingTime: string;
  meetingPreference: 'google-meet' | 'whatsapp' | 'in-person';

  // Phase 6
  mustHaveFeatures: string;
  fileUpload: File | null;
}

export default function WebDevelopmentPage() {
  const [currentPhase, setCurrentPhase] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    projectTypes: [],
    projectGoal: '',
    tierPreference: 'standard',
    techStack: '',
    budgetRange: '',
    completionDate: '',
    sessionType: 'discovery',
    meetingDay: '',
    meetingTime: '',
    meetingPreference: 'google-meet',
    mustHaveFeatures: '',
    fileUpload: null,
  });

  const [showTooltip, setShowTooltip] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 7); // 7 images total
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const inquiryHeroImages = [
    '/images/inquiry-hero-bg (1).jpg',
    '/images/inquiry-hero-bg (2).jpg',
    '/images/inquiry-hero-bg (3).jpg',
    '/images/inquiry-hero-bg (4).jpg',
    '/images/inquiry-hero-bg (5).jpg',
    '/images/inquiry-hero-bg (6).jpg',
    '/images/inquiry-hero-bg (7).jpg',
  ];

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string | string[] | boolean | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle project type selection
  const toggleProjectType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }));
  };

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleInputChange('fileUpload', file);
    }
  };

  // Validate phase
  const isPhaseValid = () => {
    switch (currentPhase) {
      case 1:
        return (
          formData.fullName.trim() &&
          formData.company.trim() &&
          formData.role.trim() &&
          formData.email.trim() &&
          formData.phone.trim()
        );
      case 2:
        return formData.projectTypes.length > 0 && formData.projectGoal.trim();
      case 3:
        return true; // Optional fields
      case 4:
        return formData.budgetRange && formData.completionDate;
      case 5:
        return formData.meetingDay && formData.meetingTime;
      case 6:
        return formData.mustHaveFeatures.trim();
      default:
        return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPhase < 6) {
      setCurrentPhase(currentPhase + 1);
    } else {
      // Handle final submission
      console.log('Form submitted:', formData);
      // TODO: Send to backend or email service
    }
  };

  const handlePrevious = () => {
    if (currentPhase > 1) {
      setCurrentPhase(currentPhase - 1);
    }
  };

  return (
    <>
      {/* Header Section */}
      <section 
        className="pt-32 pb-12 px-6 bg-cover bg-center bg-no-repeat text-white relative min-h-[500px] flex items-center transition-all duration-1000"
        style={{
          backgroundImage: `url('${inquiryHeroImages[currentImageIndex]}')`
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-[#FF4400] opacity-40"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let&apos;s Build Something Meaningful</h1>
            <p className="text-lg text-gray-100 max-w-3xl">
              Whether you need a robust management system or a high-converting e-commerce store, our team of experts and emerging tech talent are ready to deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex justify-between mb-4">
                    {[1, 2, 3, 4, 5, 6].map((phase) => (
                      <div
                        key={phase}
                        className={`flex-1 h-2 mx-1 rounded-full transition-all ${
                          phase <= currentPhase
                            ? 'bg-[#FF4400]'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Phase {currentPhase} of 6
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Phase 1: Identification */}
                  {currentPhase === 1 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h2 className="text-3xl font-bold mb-8 text-gray-900">
                        Phase 1: Identification
                      </h2>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Full Name <span className="text-[#FF4400]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange('fullName', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition text-gray-900"
                          placeholder="John Doe"
                        />
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Company/Organization Name{' '}
                          <span className="text-[#FF4400]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange('company', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition text-gray-900"
                          placeholder="Your Company"
                        />
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Role/Title <span className="text-[#FF4400]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.role}
                          onChange={(e) =>
                            handleInputChange('role', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition text-gray-900"
                          placeholder="CEO, Project Manager, etc."
                        />
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address <span className="text-[#FF4400]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange('email', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition text-gray-900"
                          placeholder="your.email@company.com"
                        />
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          WhatsApp / Phone Number{' '}
                          <span className="text-[#FF4400]">*</span>
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          Crucial for quick follow-ups in Nigeria
                        </p>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange('phone', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition text-gray-900"
                          placeholder="+234 (WhatsApp or Phone)"
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Phase 2: Project Classification */}
                  {currentPhase === 2 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h2 className="text-3xl font-bold mb-8 text-gray-900">
                        Phase 2: Project Classification
                      </h2>

                      <motion.div className="mb-8" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-4">
                          What can we help you build?{' '}
                          <span className="text-[#FF4400]">*</span>
                          <span className="text-xs text-gray-500 ml-2">
                            (Select all that apply)
                          </span>
                        </label>
                        <div className="space-y-3">
                          {[
                            {
                              id: 'admin-system',
                              label: 'Custom Administrative/Management System',
                            },
                            {
                              id: 'ecommerce',
                              label: 'Full-Scale E-commerce Platform',
                            },
                            {
                              id: 'portfolio',
                              label: 'Creative Portfolio or Brand Website',
                            },
                            {
                              id: 'refactor',
                              label: 'Web Application Refactoring/Optimization',
                            },
                            {
                              id: 'training',
                              label: 'Corporate Digital Skills Training',
                            },
                          ].map((option) => (
                            <label
                              key={option.id}
                              className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition"
                            >
                              <input
                                type="checkbox"
                                checked={formData.projectTypes.includes(
                                  option.id
                                )}
                                onChange={() =>
                                  toggleProjectType(option.id)
                                }
                                className="w-5 h-5 accent-[#FF4400] rounded cursor-pointer"
                              />
                              <span className="ml-3 text-gray-700">
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          What is the primary goal of this project?{' '}
                          <span className="text-[#FF4400]">*</span>
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          e.g., &quot;Automating my student records,&quot; &quot;Selling products
                          online,&quot; or &quot;Establishing a professional online presence.&quot;
                        </p>
                        <textarea
                          value={formData.projectGoal}
                          onChange={(e) =>
                            handleInputChange('projectGoal', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition resize-none text-gray-900"
                          placeholder="Describe your project goal..."
                          rows={4}
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Phase 3: The Tech & Talent Dynamic */}
                  {currentPhase === 3 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h2 className="text-3xl font-bold mb-8 text-gray-900">
                        Phase 3: The Tech & Talent Dynamic
                      </h2>

                      <motion.div className="mb-8" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-4">
                          Project Tier Preference <span className="text-[#FF4400]">*</span>
                        </label>
                        <div className="space-y-3">
                          <label className="flex items-center cursor-pointer hover:bg-gray-50 p-4 border border-gray-200 rounded-lg transition">
                            <input
                              type="radio"
                              name="tier"
                              value="standard"
                              checked={formData.tierPreference === 'standard'}
                              onChange={() =>
                                handleInputChange('tierPreference', 'standard')
                              }
                              className="w-5 h-5 accent-[#FF4400] cursor-pointer"
                            />
                            <div className="ml-3">
                              <span className="text-sm font-semibold text-gray-900">
                                Standard
                              </span>
                              <p className="text-xs text-gray-600">
                                Managed by our core expert team.
                              </p>
                            </div>
                          </label>

                          <label className="flex items-center cursor-pointer hover:bg-gray-50 p-4 border border-gray-200 rounded-lg transition">
                            <input
                              type="radio"
                              name="tier"
                              value="academy-assisted"
                              checked={
                                formData.tierPreference === 'academy-assisted'
                              }
                              onChange={() =>
                                handleInputChange(
                                  'tierPreference',
                                  'academy-assisted'
                                )
                              }
                              className="w-5 h-5 accent-[#FF4400] cursor-pointer"
                            />
                            <div className="ml-3">
                              <span className="text-sm font-semibold text-gray-900">
                                Academy-Assisted
                              </span>
                              <p className="text-xs text-gray-600">
                                Developed by our top-tier students under strict
                                expert supervision (Ideal for startups/small
                                businesses).
                              </p>
                            </div>
                          </label>
                        </div>
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Do you have an existing Tech Stack preference?
                        </label>
                        <p className="text-xs text-gray-500 mb-2">Optional</p>
                        <input
                          type="text"
                          value={formData.techStack}
                          onChange={(e) =>
                            handleInputChange('techStack', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition text-gray-900"
                          placeholder="Examples: Next.js, React, Tailwind CSS, etc."
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Phase 4: Logistics & Budget */}
                  {currentPhase === 4 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h2 className="text-3xl font-bold mb-8 text-gray-900">
                        Phase 4: Logistics & Budget
                      </h2>

                      <motion.div className="mb-8" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-4">
                          Estimated Investment Range{' '}
                          <span className="text-[#FF4400]">*</span>
                        </label>
                        <div className="space-y-2">
                          {[
                            '₦500k – ₦1.5M',
                            '₦1.5M – ₦3M',
                            '₦3M+',
                            'I have a custom enterprise budget',
                          ].map((range) => (
                            <label
                              key={range}
                              className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition"
                            >
                              <input
                                type="checkbox"
                                checked={formData.budgetRange === range}
                                onChange={() =>
                                  handleInputChange('budgetRange', range)
                                }
                                className="w-5 h-5 accent-[#FF4400] rounded cursor-pointer"
                              />
                              <span className="ml-3 text-gray-700">{range}</span>
                            </label>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Desired Project Completion Date{' '}
                          <span className="text-[#FF4400]">*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.completionDate}
                          onChange={(e) =>
                            handleInputChange('completionDate', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition text-gray-900"
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Phase 5: Booking Your Hybrid Session */}
                  {currentPhase === 5 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h2 className="text-3xl font-bold mb-8 text-gray-900">
                        Phase 5: Booking Your Hybrid Session
                      </h2>

                      <motion.div className="mb-8" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-4">
                          Choose your initial session type{' '}
                          <span className="text-[#FF4400]">*</span>
                        </label>
                        <div className="space-y-3">
                          <label className="flex items-start cursor-pointer hover:bg-gray-50 p-4 border border-gray-200 rounded-lg transition relative">
                            <input
                              type="radio"
                              name="session"
                              value="discovery"
                              checked={formData.sessionType === 'discovery'}
                              onChange={() =>
                                handleInputChange('sessionType', 'discovery')
                              }
                              className="w-5 h-5 accent-[#FF4400] cursor-pointer mt-1"
                            />
                            <div className="ml-3 flex-1">
                              <span className="text-sm font-semibold text-gray-900">
                                Free 15-Minute Discovery Call
                              </span>
                              <p className="text-xs text-gray-600 mt-1">
                                A quick chat to see if we are the right fit for
                                your needs.
                              </p>
                            </div>
                          </label>

                          <label className="flex items-start cursor-pointer hover:bg-gray-50 p-4 border border-gray-200 rounded-lg transition relative group">
                            <input
                              type="radio"
                              name="session"
                              value="strategy"
                              checked={formData.sessionType === 'strategy'}
                              onChange={() =>
                                handleInputChange('sessionType', 'strategy')
                              }
                              className="w-5 h-5 accent-[#FF4400] cursor-pointer mt-1"
                            />
                            <div className="ml-3 flex-1">
                              <span className="text-sm font-semibold text-gray-900">
                                Paid Technical Strategy Session (1 Hour)
                              </span>
                              <p className="text-xs text-gray-600 mt-1">
                                A deep-dive architecture and roadmap session.
                              </p>
                              <button
                                type="button"
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                className="text-[#FF4400] font-semibold text-xs mt-2 hover:underline"
                              >
                                ℹ️ Why this session?
                              </button>
                              {showTooltip && (
                                <motion.div
                                  className="absolute top-full mt-2 left-0 bg-gray-900 text-white text-xs p-3 rounded-lg max-w-xs z-10 shadow-lg"
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                >
                                  This fee is 100% credited toward your project
                                  if you hire us.
                                </motion.div>
                              )}
                            </div>
                          </label>
                        </div>
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Preferred Meeting Day{' '}
                          <span className="text-[#FF4400]">*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.meetingDay}
                          onChange={(e) =>
                            handleInputChange('meetingDay', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition text-gray-900"
                        />
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Preferred Meeting Time{' '}
                          <span className="text-[#FF4400]">*</span>
                        </label>
                        <input
                          type="time"
                          value={formData.meetingTime}
                          onChange={(e) =>
                            handleInputChange('meetingTime', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition text-gray-900"
                        />
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-4">
                          How do you prefer to meet?{' '}
                          <span className="text-[#FF4400]">*</span>
                        </label>
                        <div className="space-y-2">
                          {[
                            { id: 'google-meet', label: 'Google Meet' },
                            { id: 'whatsapp', label: 'WhatsApp Video' },
                            { id: 'in-person', label: 'In-Person at the Academy' },
                          ].map((option) => (
                            <label
                              key={option.id}
                              className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition"
                            >
                              <input
                                type="radio"
                                name="meeting"
                                value={option.id}
                                checked={
                                  formData.meetingPreference === option.id
                                }
                                onChange={() =>
                                  handleInputChange('meetingPreference', option.id)
                                }
                                className="w-5 h-5 accent-[#FF4400] cursor-pointer"
                              />
                              <span className="ml-3 text-gray-700">
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Phase 6: Final Details */}
                  {currentPhase === 6 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h2 className="text-3xl font-bold mb-8 text-gray-900">
                        Phase 6: Final Details
                      </h2>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Briefly describe the &apos;must-have&apos; features for this project{' '}
                          <span className="text-[#FF4400]">*</span>
                        </label>
                        <textarea
                          value={formData.mustHaveFeatures}
                          onChange={(e) =>
                            handleInputChange('mustHaveFeatures', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] transition resize-none text-gray-900"
                          placeholder="List the essential features your project needs..."
                          rows={5}
                        />
                      </motion.div>

                      <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Upload Project Brief/Documents
                        </label>
                        <p className="text-xs text-gray-500 mb-3">Optional</p>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#FF4400] transition cursor-pointer">
                          <input
                            type="file"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="file-upload"
                            accept=".pdf,.doc,.docx,.txt"
                          />
                          <label
                            htmlFor="file-upload"
                            className="cursor-pointer block"
                          >
                            <p className="text-gray-600 font-semibold">
                              📁 Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              PDF, DOC, DOCX, or TXT (Max 10MB)
                            </p>
                            {formData.fileUpload && (
                              <p className="text-xs text-[#FF4400] font-semibold mt-2">
                                ✓ {formData.fileUpload.name}
                              </p>
                            )}
                          </label>
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                        variants={itemVariants}
                      >
                        <p className="text-sm text-blue-900">
                          <span className="font-semibold">Thank you!</span> We&apos;ll
                          review your information and reach out within 24 hours to
                          confirm your session.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      disabled={currentPhase === 1}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      ← Previous
                    </button>
                    <button
                      type="submit"
                      disabled={!isPhaseValid()}
                      className="flex-1 px-6 py-3 bg-[#FF4400] text-white font-semibold rounded-lg hover:bg-[#E63B00] disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      {currentPhase === 6 ? 'Submit Inquiry' : 'Next →'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Social Proof Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-32 space-y-6">
                {/* Main Proof Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#FF4400]">
                  <div className="mb-4">
                    <p className="text-lg font-bold text-gray-900">
                      Professional Oversight with Emerging Talent
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our projects are led by experienced full-stack developers and
                    e-commerce specialists, ensuring your solution is scalable,
                    secure, and world-class.
                  </p>
                </div>

                {/* Benefits */}
                <div className="bg-linear-to-br from-[#FF4400] to-[#E63B00] rounded-lg p-6 text-white">
                  <h3 className="font-bold mb-4">Why Work With Us</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-lg mr-2">✓</span>
                      <span className="text-sm">
                        Expert-led projects with emerging tech talent
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2">✓</span>
                      <span className="text-sm">
                        Cost-effective Academy-Assisted tier
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2">✓</span>
                      <span className="text-sm">
                        Quick turnaround for Nigeria market
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2">✓</span>
                      <span className="text-sm">
                        Dedicated support & technical strategy included
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Have questions about the form? Reach out to us directly.
                  </p>
                  <Link
                    href="https://wa.me/2349067441498"
                    className="block w-full text-center px-4 py-2 bg-[#FF4400] text-white font-semibold rounded-lg hover:bg-[#E63B00] transition"
                  >
                    WhatsApp Us
                  </Link>
                </div>

                {/* FAQ Accordion */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">FAQ</h3>
                  <div className="space-y-3">
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-sm text-gray-900 hover:text-[#FF4400] transition">
                        What&apos;s the difference between Standard and Academy-Assisted?
                      </summary>
                      <p className="text-xs text-gray-600 mt-2 group-open:block hidden">
                        Standard is managed by our expert team. Academy-Assisted
                        leverages our top students under expert supervision, ideal
                        for cost-conscious projects.
                      </p>
                    </details>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-sm text-gray-900 hover:text-[#FF4400] transition">
                        Do I get to keep the technical blueprint?
                      </summary>
                      <p className="text-xs text-gray-600 mt-2 group-open:block hidden">
                        Yes! The Strategy Session provides you with a technical
                        blueprint you can keep, regardless of whether you hire us.
                      </p>
                    </details>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-sm text-gray-900 hover:text-[#FF4400] transition">
                        What&apos;s the typical turnaround?
                      </summary>
                      <p className="text-xs text-gray-600 mt-2 group-open:block hidden">
                        Most projects take 4-12 weeks depending on complexity.
                        We&apos;ll discuss timelines in your session.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
