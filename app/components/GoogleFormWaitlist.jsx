// components/GoogleFormWaitlist.jsx
"use client";

import { useState } from 'react';
import { FaRocket, FaGift, FaUsers, FaCheckCircle } from 'react-icons/fa';

const GoogleFormWaitlist = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content - Benefits */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">
                <FaRocket className="animate-pulse" />
                <span className="font-bold">LIMITED TIME OFFER</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  NEET-UG 2026
                </span> Early Access
              </h2>

              <p className="text-xl text-gray-700 mb-8">
                Be among the first to experience AI-powered NEET preparation with
                <span className="font-bold text-purple-600"> 20,000+ questions</span>,
                <span className="font-bold text-blue-600"> smart flashcards</span>, and
                <span className="font-bold text-green-600"> rank prediction</span>.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <FaGift className="text-2xl text-pink-500 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">First Month FREE</h4>
                  <p className="text-gray-600">For first 500 registrations (₹150/month value)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <FaUsers className="text-2xl text-blue-500 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Priority Access</h4>
                  <p className="text-gray-600">Get notified before everyone else when we launch</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <FaCheckCircle className="text-2xl text-green-500 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Exclusive Updates</h4>
                  <p className="text-gray-600">Behind-the-scenes features & early bird discounts</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="pt-6 border-t border-gray-300">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">347+</div>
                  <div className="text-gray-600">NEET Aspirants Joined</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">153</div>
                  <div className="text-gray-600">Free Spots Left</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">Dec 15</div>
                  <div className="text-gray-600">Launch Date</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Google Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                Secure Your Early Access
              </h3>
              <p className="text-white/90 text-center mt-2">
                Fill this form to join the waitlist
              </p>
            </div>

            <div className="p-2">
              {/* PASTE YOUR GOOGLE FORM EMBED CODE HERE */}
              <iframe
                src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                width="100%"
                height="600"
                className="border-0 rounded-lg"
                title="RankUp Waitlist Form"
              >
                Loading…
              </iframe>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm">
                <span className="font-bold">⚠️ Important:</span> Use the same email to download the app later.
                We'll send launch notification to this email only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleFormWaitlist;