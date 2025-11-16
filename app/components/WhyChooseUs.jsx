"use client";

import {
  FaBookOpen,
  FaBrain,
  FaChartLine,
  FaLayerGroup,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#295176] text-white">

      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-40 h-40 bg-white/10 rounded-xl rotate-12 top-10 left-10 blur-xl"></div>
        <div className="absolute w-56 h-56 bg-white/10 rounded-xl -rotate-6 bottom-16 right-16 blur-xl"></div>
        <div className="absolute w-24 h-24 bg-purple-300/20 rounded-xl rotate-12 bottom-10 left-1/4 blur-lg"></div>
        <div className="absolute w-32 h-32 bg-purple-500/30 rounded-xl rotate-45 top-24 right-1/4 blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Why Choose <span className="text-yellow-300">RankUp</span> for NEET-UG?
          </h2>
          <p className="mt-4 text-lg text-gray-100/90">
            Backed by research: spaced repetition + active recall boost memory retention
            and help NEET-UG aspirants remember concepts faster & longer.
          </p>
        </div>

        {/* 3 Big Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="glass-card group p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
            <div className="text-yellow-300 mb-4">
              <FaBrain size={42} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Smart Flashcards</h3>
            <p className="text-gray-100/90">
              Master all NEET-UG chapters using spaced-repetition flashcards with active recall technology.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card group p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
            <div className="text-yellow-300 mb-4">
              <FaBookOpen size={42} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Smart QBank</h3>
            <p className="text-gray-100/90">
              20,000+ curated questions with explanations. Improve accuracy & cover every high-yield topic.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card group p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
            <div className="text-yellow-300 mb-4">
              <FaChartLine size={42} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Test Score Tracking</h3>
            <p className="text-gray-100/90">
              Track minor/major tests, accuracy, weak topics & growth graph with AI-powered insights.
            </p>
          </div>

        </div>

        {/* Additional Explanation Box */}
        <div className="mt-16 p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-yellow-300 mb-4">
            Backed by Science
          </h3>
          <p className="text-gray-100 leading-relaxed">
            Research from early 20th-century cognitive science shows that
            <span className="font-semibold text-yellow-200"> spaced repetition </span>
            and
            <span className="font-semibold text-yellow-200"> active recall </span>
            dramatically improve memory retention.
            RankUp uses these proven frameworks so NEET-UG students learn smarter — not harder.
          </p>
        </div>

      </div>
    </section>
  );
}
