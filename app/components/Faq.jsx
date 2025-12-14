"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { FiPlus, FiMinus, FiThumbsUp, FiThumbsDown, FiSearch, FiChevronDown, FiFilter } from "react-icons/fi";
import useFAQ from "/hooks/useFAQ";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

// Comprehensive fallback FAQ data with structured content
const fallbackFAQs = [
  {
    id: "1",
    question: "What is RankUp NEET-UG Preparation Platform?",
    answer: "RankUp is India's premier AI-powered NEET-UG preparation platform founded by MBBS Gold Medalists and NEET PG toppers. We offer smart learning tools including AI flashcards, daily study capsules, performance analytics, mock tests, and personalized study guidance to help students excel in medical entrance exams.",
    category: "GENERAL",
    tags: ["platform", "neet-ug", "ai-learning", "medical-entrance"],
    isHelpful: 125,
    notHelpful: 5,
    viewCount: 1500,
    lastUpdated: "2024-12-01"
  },
  {
    id: "2",
    question: "Is RankUp free or paid for NEET UG preparation?",
    answer: "RankUp offers both free and premium plans. Free features include basic flashcards, daily capsules, and limited mock tests. Premium plans start at ₹2999/year and provide full access to AI-powered QBank, advanced analytics, personalized study plans, live doubt sessions, and unlimited test series. We also offer scholarships for meritorious students.",
    category: "SUBSCRIPTION",
    tags: ["pricing", "subscription", "premium", "free-trial"],
    isHelpful: 89,
    notHelpful: 3,
    viewCount: 1200,
    lastUpdated: "2024-12-01"
  },
  {
    id: "3",
    question: "How does RankUp's AI-powered learning work for NEET?",
    answer: "Our AI algorithms analyze your performance, identify weak areas, and create personalized study plans. The system adapts to your learning pace, focuses on high-yield topics, and provides targeted revision. AI-powered flashcards use spaced repetition to ensure long-term retention of medical concepts.",
    category: "FEATURES",
    tags: ["ai", "smart-learning", "personalization", "analytics"],
    isHelpful: 145,
    notHelpful: 2,
    viewCount: 1800,
    lastUpdated: "2024-12-01"
  },
  {
    id: "4",
    question: "Does RankUp cover the complete NEET UG syllabus?",
    answer: "Yes, RankUp covers 100% of the NEET UG syllabus including Physics, Chemistry, and Biology (Botany & Zoology). Our content is based on NCERT, regularly updated with latest exam patterns, and includes previous year questions, important concepts, and high-yield topics identification.",
    category: "CONTENT",
    tags: ["syllabus", "ncert", "biology", "physics", "chemistry"],
    isHelpful: 112,
    notHelpful: 4,
    viewCount: 1600,
    lastUpdated: "2024-12-01"
  },
  {
    id: "5",
    question: "Can I use RankUp on mobile and desktop?",
    answer: "Absolutely! RankUp is fully responsive and works seamlessly on all devices - smartphones, tablets, and desktops. We also have dedicated mobile apps for Android and iOS with offline access capabilities for studying without internet connectivity.",
    category: "TECHNICAL",
    tags: ["mobile", "app", "responsive", "offline"],
    isHelpful: 98,
    notHelpful: 1,
    viewCount: 1100,
    lastUpdated: "2024-12-01"
  },
  {
    id: "6",
    question: "What is RankUp's success rate for NEET UG?",
    answer: "Students following RankUp's methodology have shown average score improvements of 40%+ in mock tests. Our structured approach, founded by NEET PG AIR 1731 topper, focuses on smart preparation strategies that maximize efficiency and results. Many RankUp students have secured medical college admissions.",
    category: "RESULTS",
    tags: ["success-rate", "results", "improvement", "rankers"],
    isHelpful: 167,
    notHelpful: 6,
    viewCount: 2100,
    lastUpdated: "2024-12-01"
  },
  {
    id: "7",
    question: "How does RankUp's daily study capsule work?",
    answer: "Our Daily Study Capsule delivers curated content including important concepts, high-yield questions, and revision notes directly to your dashboard. Each capsule is designed for 30-45 minutes of focused study and covers topics based on your progress and upcoming exams.",
    category: "FEATURES",
    tags: ["daily-capsule", "study-plan", "revision", "micro-learning"],
    isHelpful: 134,
    notHelpful: 3,
    viewCount: 1400,
    lastUpdated: "2024-12-01"
  },
  {
    id: "8",
    question: "What payment methods does RankUp accept?",
    answer: "We accept all major payment methods: Credit/Debit Cards (Visa, MasterCard, RuPay), UPI (Google Pay, PhonePe, Paytm), Net Banking, and EMI options. All payments are secured with 256-bit SSL encryption and we are PCI-DSS compliant.",
    category: "SUBSCRIPTION",
    tags: ["payment", "security", "upi", "cards"],
    isHelpful: 76,
    notHelpful: 2,
    viewCount: 950,
    lastUpdated: "2024-12-01"
  }
];

export default function Faq() {
  const { faqs, loading, error, getFAQs, markHelpful, markNotHelpful } = useFAQ();
  const [openIndex, setOpenIndex] = useState(null);
  const [feedbackGiven, setFeedbackGiven] = useState(new Set());
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showCategories, setShowCategories] = useState(false);

  // Use fallback data if API fails
  const displayFAQs = useMemo(() => {
    const data = error ? fallbackFAQs : faqs;

    // Filter by search query
    let filtered = data;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== "ALL") {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    return filtered;
  }, [error, faqs, searchQuery, selectedCategory]);

  // Get unique categories
  const categories = useMemo(() => {
    const data = error ? fallbackFAQs : faqs;
    const uniqueCats = [...new Set(data.map(faq => faq.category))];
    return ["ALL", ...uniqueCats];
  }, [error, faqs]);

  // Initialize with useCallback to prevent infinite loops
  const initialize = useCallback(() => {
    setMounted(true);
    if (faqs.length === 0 && !loading) {
      getFAQs();
    }
  }, [faqs.length, loading, getFAQs]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const handleFeedback = useCallback((faqId, isHelpful) => {
    if (feedbackGiven.has(faqId)) return;

    if (isHelpful) {
      markHelpful(faqId);
    } else {
      markNotHelpful(faqId);
    }

    setFeedbackGiven(prev => new Set(prev).add(faqId));
  }, [feedbackGiven, markHelpful, markNotHelpful]);

  const formatCategory = useCallback((category) => {
    const categoryMap = {
      SUBSCRIPTION: "Subscription & Pricing",
      FEATURES: "Features & Functionality",
      TECHNICAL: "Technical Support",
      CONTENT: "Content & Syllabus",
      GENERAL: "General Information",
      RESULTS: "Results & Success",
      PAYMENT: "Payment & Security"
    };
    return categoryMap[category] || category.replace(/_/g, ' ');
  }, []);

  // Generate FAQ schema dynamically
  const generateFAQSchema = useMemo(() => {
    const mainEntity = displayFAQs.slice(0, 10).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }));

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntity
    };
  }, [displayFAQs]);

  if (!mounted) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A5F] mx-auto"
                 role="status"
                 aria-label="Loading FAQs">
              <span className="sr-only">Loading FAQs...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rankupp.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "FAQs",
                "item": "https://rankupp.in/faqs"
              }
            ]
          })
        }}
      />

      <section className="py-20 bg-gradient-to-b from-white to-blue-50"
               itemScope
               itemType="https://schema.org/FAQPage">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* SEO Structured Headings */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] mb-4"
                itemProp="headline">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
              Get detailed answers to all your questions about RankUp NEET-UG preparation platform, features, pricing, and study methodology.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              <span>Updated: </span>
              <time dateTime="2024-12-01">December 2024</time>
              <span className="mx-2">•</span>
              <span>{displayFAQs.length} Questions Answered</span>
            </div>
          </header>

          {/* Search and Filter Section */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                           aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Search questions about NEET UG preparation, pricing, features..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search FAQs"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="relative">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 w-full md:w-auto"
                  aria-expanded={showCategories}
                  aria-label="Filter by category"
                >
                  <FiFilter aria-hidden="true" />
                  <span>{formatCategory(selectedCategory)}</span>
                  <FiChevronDown className={`transition-transform ${showCategories ? 'rotate-180' : ''}`}
                                aria-hidden="true" />
                </button>

                {showCategories && (
                  <div className="absolute z-10 mt-2 w-full md:w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowCategories(false);
                        }}
                        className={`block w-full text-left px-4 py-2 hover:bg-blue-50 ${
                          selectedCategory === category ? 'bg-blue-50 text-[#1E3A5F] font-semibold' : ''
                        }`}
                      >
                        {formatCategory(category)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Search Results Info */}
            {searchQuery && (
              <div className="mt-4 text-sm text-gray-600">
                Found {displayFAQs.length} results for "<strong>{searchQuery}</strong>"
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg" role="alert">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-700 font-medium">
                    Using enhanced demo data. Live FAQ updates will resume shortly.
                  </p>
                  <p className="text-yellow-600 text-sm mt-1">
                    All essential NEET UG preparation questions are answered below.
                  </p>
                </div>
                <button
                  onClick={getFAQs}
                  className="px-4 py-2 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#2c4d75] text-sm whitespace-nowrap"
                  aria-label="Retry loading FAQs"
                >
                  Retry Connection
                </button>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center mb-8 py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A5F] mx-auto"
                   role="status"
                   aria-label="Loading FAQs">
                <span className="sr-only">Loading FAQs...</span>
              </div>
              <p className="text-gray-600 mt-4">Loading comprehensive NEET UG FAQs...</p>
            </div>
          )}

          {/* FAQ List */}
          <div className="space-y-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            {displayFAQs.length > 0 ? (
              displayFAQs.map((faq, idx) => (
                <article
                  key={faq.id}
                  className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="flex justify-between items-start cursor-pointer"
                    role="button"
                    aria-expanded={openIndex === idx}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="flex-1 pr-6">
                      <h2 className="text-xl font-semibold text-[#1E3A5F] mb-2" itemProp="name">
                        {faq.question}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                          {formatCategory(faq.category)}
                        </span>
                        {faq.tags?.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                            itemProp="keywords"
                          >
                            #{tag}
                          </span>
                        ))}
                        {faq.lastUpdated && (
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                            Updated: {faq.lastUpdated}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-[#FF8C5B] text-2xl flex-shrink-0" aria-hidden="true">
                      {openIndex === idx ? <FiMinus /> : <FiPlus />}
                    </span>
                  </div>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === idx
                        ? "max-h-[500px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                    itemProp="text"
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed mb-6">{faq.answer}</p>

                      {/* Feedback and Stats */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <span>Helpful:</span>
                            <span className="font-semibold text-green-600">
                              {(faq.isHelpful || 0).toLocaleString()}
                              <span className="text-gray-400 text-xs ml-1">
                                ({Math.round(((faq.isHelpful || 0) / ((faq.isHelpful || 0) + (faq.notHelpful || 1))) * 100)}%)
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>Views:</span>
                            <span className="font-semibold text-blue-600">
                              {(faq.viewCount || 0).toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500">Was this helpful?</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFeedback(faq.id, true);
                              }}
                              disabled={feedbackGiven.has(faq.id)}
                              className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                                feedbackGiven.has(faq.id)
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                  : 'bg-green-50 text-green-600 hover:bg-green-100'
                              }`}
                              aria-label={`Mark "${faq.question}" as helpful`}
                            >
                              <FiThumbsUp className="w-4 h-4" aria-hidden="true" />
                              <span>Yes</span>
                              {(faq.isHelpful || 0) > 0 && (
                                <span className="text-xs font-semibold">({faq.isHelpful})</span>
                              )}
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFeedback(faq.id, false);
                              }}
                              disabled={feedbackGiven.has(faq.id)}
                              className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                                feedbackGiven.has(faq.id)
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                  : 'bg-red-50 text-red-600 hover:bg-red-100'
                              }`}
                              aria-label={`Mark "${faq.question}" as not helpful`}
                            >
                              <FiThumbsDown className="w-4 h-4" aria-hidden="true" />
                              <span>No</span>
                              {(faq.notHelpful || 0) > 0 && (
                                <span className="text-xs font-semibold">({faq.notHelpful})</span>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              !loading && (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                  <p className="text-gray-500 text-lg mb-2">No FAQs match your search</p>
                  <p className="text-gray-400 mb-4">Try different keywords or browse all categories</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("ALL");
                    }}
                    className="px-4 py-2 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#2c4d75]"
                  >
                    Show All FAQs
                  </button>
                </div>
              )
            )}
          </div>

          {/* FAQ Statistics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="text-2xl font-bold text-[#1E3A5F]">{displayFAQs.length}</div>
              <div className="text-sm text-gray-600">Questions Answered</div>
            </div>
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="text-2xl font-bold text-green-600">
                {Math.round((fallbackFAQs.reduce((sum, faq) => sum + (faq.isHelpful || 0), 0) /
                  fallbackFAQs.reduce((sum, faq) => sum + (faq.isHelpful || 0) + (faq.notHelpful || 1), 1)) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Helpful Rate</div>
            </div>
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="text-2xl font-bold text-blue-600">
                {fallbackFAQs.reduce((sum, faq) => sum + (faq.viewCount || 0), 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="text-2xl font-bold text-purple-600">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#1E3A5F] to-[#2c4d75] rounded-xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Still have questions about NEET UG preparation?</h3>
                <p className="text-blue-100">
                  Our support team is here to help you with specific queries about RankUp platform, study plans, or NEET preparation strategies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-[#1E3A5F] font-semibold rounded-lg hover:bg-blue-50 text-center transition-colors"
                  aria-label="Contact RankUp support team"
                >
                  Contact Support Team
                </Link>
                <Link
                  href="#feature"
                  className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 text-center transition-colors"
                  aria-label="Explore RankUp features"
                >
                  Explore Features
                </Link>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 text-sm text-blue-100">
              <p>Average response time: <strong>Within 24 hours</strong> • Available: <strong>Monday-Saturday, 9AM-6PM IST</strong></p>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-[#1E3A5F] mb-4">Related Resources</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/privacy"
                className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow"
                aria-label="Read RankUp Privacy Policy"
              >
                <h5 className="font-semibold text-[#1E3A5F]">Privacy Policy</h5>
                <p className="text-sm text-gray-600 mt-1">Learn how we protect your data</p>
              </Link>
              <Link
                href="/refund"
                className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow"
                aria-label="Read RankUp Refund Policy"
              >
                <h5 className="font-semibold text-[#1E3A5F]">Refund Policy</h5>
                <p className="text-sm text-gray-600 mt-1">Understand our refund process</p>
              </Link>
              <Link
                href="/about"
                className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow"
                aria-label="Learn about RankUp"
              >
                <h5 className="font-semibold text-[#1E3A5F]">About RankUp</h5>
                <p className="text-sm text-gray-600 mt-1">Our mission and methodology</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}