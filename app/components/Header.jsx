"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#295176] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
<Link href="/">
          <img
            src="/logoss.png"
            alt="Rankup Logo"
            className="h-10  object-contain"
          />
         </Link>

        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
         <Link
            href="/blog"
            className="text-white text-base font-medium hover:text-purple-200 transition"
          >
            Blogs
         </Link>

         <Link
            href="/faqs"
            className="text-white text-base font-medium hover:text-purple-200 transition"
          >
            FAQs
         </Link>

         <Link
            href="/download"
            className="px-6 py-2 border border-white text-white rounded-full text-base font-medium
            hover:bg-white hover:text-[#624A76] transition flex items-center gap-2"
          >
            Download Now
            <span>➜</span>
         </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-3xl"
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm md:hidden">
          <div className="bg-[#624A76] w-64 h-full p-6 shadow-2xl transform transition-all">
            <button
              onClick={() => setOpen(false)}
              className="text-white text-3xl mb-8"
            >
              <HiX />
            </button>

            <nav className="flex flex-col gap-6">
              <Link
                href="/blog"
                className="text-white text-lg font-medium hover:text-purple-200 transition"
              >
                Blogs
              </Link>
             <Link
                href="/faqs"
                className="text-white text-lg font-medium hover:text-purple-200 transition"
              >
                FAQs
             </Link>
             <Link
                href="/download"
                className="px-4 py-3 border border-white text-white rounded-full text-lg font-medium
                hover:bg-white hover:text-[#624A76] transition flex items-center gap-2"
              >
                Download Now ➜
             </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
