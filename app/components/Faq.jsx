"use client";

import { useState, useEffect } from "react";
import { FiPlus, FiMinus, FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import useFAQ from "/hooks/useFAQ";

// Simple FAQ data as fallback
const fallbackFAQs = [
  {
    id: "1",
    question: "What is RankUp?",
    answer: "RankUp is India's modern NEET-UG preparation platform offering AI-powered flashcards, smart revision, daily capsules, performance analytics, and personalized study guidance.",
    category: "GENERAL",
    tags: ["platform", "neet"],
    isHelpful: 0,
    notHelpful: 0,
    viewCount: 0
  },
  {
    id: "2",
    question: "Is RankUp free or paid?",
    answer: "RankUp offers both free features and premium plans. You can use basic features for free, and upgrade anytime for full access to tests, QBank, flashcards, and analytics.",
    category: "SUBSCRIPTION",
    tags: ["pricing", "subscription"],
    isHelpful: 0,
    notHelpful: 0,
    viewCount: 0
  }
];

export default function Faq() {
  const { faqs, loading, error, getFAQs, markHelpful, markNotHelpful } = useFAQ();
  const [openIndex, setOpenIndex] = useState(null);
  const [feedbackGiven, setFeedbackGiven] = useState(new Set());
  const [mounted, setMounted] = useState(false);

  // Use fallback data if API fails
  const displayFAQs = error ? fallbackFAQs : faqs;

  useEffect(() => {
    setMounted(true);
    if (faqs.length === 0 && !loading) {
      getFAQs();
    }
  }, []); // Empty dependency array to prevent infinite loops

  const handleFeedback = (faqId, isHelpful) => {
    if (feedbackGiven.has(faqId)) return;

    if (isHelpful) {
      markHelpful(faqId);
    } else {
      markNotHelpful(faqId);
    }

    setFeedbackGiven(prev => new Set(prev).add(faqId));
  };

  const formatCategory = (category) => {
    const categoryMap = {
      SUBSCRIPTION: "Subscription & Pricing",
      FEATURES: "Features & Functionality",
      TECHNICAL: "Technical Support",
      CONTENT: "Content & Syllabus",
      GENERAL: "General",
    };
    return categoryMap[category] || category.replace(/_/g, ' ');
  };

  if (!mounted) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-extrabold text-center text-[#1E3A5F]">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-gray-600 mt-3 mb-10">
            Get clear answers to all your RankUp-related NEET-UG preparation doubts.
          </p>
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1E3A5F] mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-[#1E3A5F]">
          Frequently Asked Questions
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-10 max-w-2xl mx-auto">
          Get clear answers to all your RankUp-related NEET-UG preparation doubts.
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
            <p className="text-yellow-700">
              Using demo data. API error: {error}
            </p>
            <button
              onClick={getFAQs}
              className="mt-2 px-4 py-2 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#2c4d75] text-sm"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center mb-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1E3A5F] mx-auto"></div>
            <p className="text-gray-600 mt-2">Loading FAQs...</p>
          </div>
        )}

        {/* FAQ List */}
        <div className="space-y-4">
          {displayFAQs.length > 0 ? (
            displayFAQs.map((faq, idx) => (
              <div
                key={faq.id}
                className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="flex justify-between items-center"
                >
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-[#1E3A5F] pr-4">
                      {faq.question}
                    </h2>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        {formatCategory(faq.category)}
                      </span>
                      {faq.tags?.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-[#FF8C5B] text-xl flex-shrink-0">
                    {openIndex === idx ? <FiMinus /> : <FiPlus />}
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`mt-3 text-gray-600 leading-relaxed transition-all duration-300 ${
                    openIndex === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="mb-4">{faq.answer}</p>

                  {/* Feedback */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Was this helpful?</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFeedback(faq.id, true);
                        }}
                        disabled={feedbackGiven.has(faq.id)}
                        className={`flex items-center gap-1 ${
                          feedbackGiven.has(faq.id)
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-green-600 hover:text-green-700'
                        }`}
                      >
                        <FiThumbsUp className="w-4 h-4" />
                        <span>Yes</span>
                        {(faq.isHelpful || 0) > 0 && (
                          <span className="text-xs">({faq.isHelpful})</span>
                        )}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFeedback(faq.id, false);
                        }}
                        disabled={feedbackGiven.has(faq.id)}
                        className={`flex items-center gap-1 ${
                          feedbackGiven.has(faq.id)
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-red-600 hover:text-red-700'
                        }`}
                      >
                        <FiThumbsDown className="w-4 h-4" />
                        <span>No</span>
                        {(faq.notHelpful || 0) > 0 && (
                          <span className="text-xs">({faq.notHelpful})</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No FAQs available.</p>
                <p className="text-gray-400 text-sm mt-2">Please check back later.</p>
              </div>
            )
          )}
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center p-6 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Contact our support team for more help.
          </p>
          <button className="px-6 py-3 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#2c4d75] transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}