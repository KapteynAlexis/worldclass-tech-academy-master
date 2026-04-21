'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#040440] border-b border-gray-700">
      <div className="max-w-full flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-full.png"
            alt="Worldclass Tech Academy"
            width={80}
            height={20}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-[#FF4400] hover:bg-white p-4 rounded-md font-bold">Home</Link>
          <Link href="/courses" className="hover:text-[#FF4400] hover:bg-white p-4 rounded-md font-bold">Courses</Link>
          <Link href="https://wa.me/2349067441498" className="hover:text-[#FF4400] hover:bg-white p-4 rounded-md font-bold">Contact</Link>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden px-4 py-1 text-white rounded-md border m-4 border-white"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#040440] border-t border-gray-700">
          <div className="flex flex-col gap-4 p-6">
            <Link href="/" className="text-white hover:text-[#FF4400] font-bold py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/courses" className="text-white hover:text-[#FF4400] font-bold py-2" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link href="#contact" className="text-white hover:text-[#FF4400] font-bold py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
