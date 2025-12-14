"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setOpen(false);

    // Add event listener for route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Handle link click for mobile
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#295176] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo Section with proper SEO */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            aria-label="Rankup Home"
            onClick={handleLinkClick}
          >
            <img
              src="/logoss.webp"
              alt="Rankup Logo - Professional Ranking Platform"
              className="h-10 object-contain"
              width={200}
              height={60}
            />
          </Link>
        </div>

        {/* Desktop Navigation with semantic structure */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Main Navigation"
        >
          <Link
            href="/blog"
            className="text-white text-base font-medium hover:text-purple-200 transition focus:outline-none focus:ring-2 focus:ring-purple-300 rounded"
            aria-label="Read our latest blogs"
          >
            Blogs
          </Link>

          <Link
            href="/faqs"
            className="text-white text-base font-medium hover:text-purple-200 transition focus:outline-none focus:ring-2 focus:ring-purple-300 rounded"
            aria-label="Frequently asked questions"
          >
            FAQs
          </Link>

          <Link
            href="/download"
            className="px-6 py-2 border border-white text-white rounded-full text-base font-medium hover:bg-white hover:text-[#624A76] transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label="Download Rankup application"
          >
            Download Now
            <span aria-hidden="true">➜</span>
          </Link>
        </nav>

        {/* Mobile Menu Button with proper accessibility */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-3xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded"
          aria-label="Open mobile menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <HiMenu aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Drawer with enhanced accessibility */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div
            id="mobile-menu"
            className="bg-[#295176] w-64 h-full p-6 shadow-2xl transform transition-all"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="text-white text-3xl mb-8 p-2 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded"
              aria-label="Close mobile menu"
            >
              <HiX aria-hidden="true" />
            </button>

            {/* Mobile Navigation */}
            <nav
              className="flex flex-col gap-6"
              aria-label="Mobile Navigation"
            >
              <Link
                href="/blog"
                className="text-white text-lg font-medium hover:text-purple-200 transition py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded"
                onClick={handleLinkClick}
                aria-label="Read our latest blogs"
              >
                Blogs
              </Link>

              <Link
                href="/faqs"
                className="text-white text-lg font-medium hover:text-purple-200 transition py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded"
                onClick={handleLinkClick}
                aria-label="Frequently asked questions"
              >
                FAQs
              </Link>

                <Link
                href="/about"
                className="text-white text-lg font-medium hover:text-purple-200 transition py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded"
                onClick={handleLinkClick}
                aria-label="Frequently asked questions"
              >
                About
              </Link>

                <Link
                href="/contact"
                className="text-white text-lg font-medium hover:text-purple-200 transition py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded"
                onClick={handleLinkClick}
                aria-label="Frequently asked questions"
              >
                Contact Us
              </Link>

              <Link
                href="/download"
                className="px-4 py-3 border border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-[#624A76] transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={handleLinkClick}
                aria-label="Download Rankup application"
              >
                Download Now
                <span aria-hidden="true">➜</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}