// "use client";

// import { useState, useEffect, useCallback, useMemo } from "react";
// import { FiPlus, FiMinus, FiThumbsUp, FiThumbsDown, FiSearch, FiChevronDown, FiFilter } from "react-icons/fi";
// import useFAQ from "/hooks/useFAQ";
// import Link from "next/link";
// import Head from "next/head";
// import Script from "next/script";

// // Comprehensive fallback FAQ data with structured content
// const fallbackFAQs = [
//   {
//     id: "1",
//     question: "What is RankUp NEET-UG Preparation Platform?",
//     answer: "RankUp is India's premier AI-powered NEET-UG preparation platform founded by MBBS Gold Medalists and NEET PG toppers. We offer smart learning tools including AI flashcards, daily study capsules, performance analytics, mock tests, and personalized study guidance to help students excel in medical entrance exams.",
//     category: "GENERAL",
//     tags: ["platform", "neet-ug", "ai-learning", "medical-entrance"],
//     isHelpful: 125,
//     notHelpful: 5,
//     viewCount: 1500,
//     lastUpdated: "2024-12-01"
//   },
//   {
//     id: "2",
//     question: "Is RankUp free or paid for NEET UG preparation?",
//     answer: "RankUp offers both free and premium plans. Free features include basic flashcards, daily capsules, and limited mock tests. Premium plans start at ₹2999/year and provide full access to AI-powered QBank, advanced analytics, personalized study plans, live doubt sessions, and unlimited test series. We also offer scholarships for meritorious students.",
//     category: "SUBSCRIPTION",
//     tags: ["pricing", "subscription", "premium", "free-trial"],
//     isHelpful: 89,
//     notHelpful: 3,
//     viewCount: 1200,
//     lastUpdated: "2024-12-01"
//   },
//   {
//     id: "3",
//     question: "How does RankUp's AI-powered learning work for NEET?",
//     answer: "Our AI algorithms analyze your performance, identify weak areas, and create personalized study plans. The system adapts to your learning pace, focuses on high-yield topics, and provides targeted revision. AI-powered flashcards use spaced repetition to ensure long-term retention of medical concepts.",
//     category: "FEATURES",
//     tags: ["ai", "smart-learning", "personalization", "analytics"],
//     isHelpful: 145,
//     notHelpful: 2,
//     viewCount: 1800,
//     lastUpdated: "2024-12-01"
//   },
//   {
//     id: "4",
//     question: "Does RankUp cover the complete NEET UG syllabus?",
//     answer: "Yes, RankUp covers 100% of the NEET UG syllabus including Physics, Chemistry, and Biology (Botany & Zoology). Our content is based on NCERT, regularly updated with latest exam patterns, and includes previous year questions, important concepts, and high-yield topics identification.",
//     category: "CONTENT",
//     tags: ["syllabus", "ncert", "biology", "physics", "chemistry"],
//     isHelpful: 112,
//     notHelpful: 4,
//     viewCount: 1600,
//     lastUpdated: "2024-12-01"
//   },
//   {
//     id: "5",
//     question: "Can I use RankUp on mobile and desktop?",
//     answer: "Absolutely! RankUp is fully responsive and works seamlessly on all devices - smartphones, tablets, and desktops. We also have dedicated mobile apps for Android and iOS with offline access capabilities for studying without internet connectivity.",
//     category: "TECHNICAL",
//     tags: ["mobile", "app", "responsive", "offline"],
//     isHelpful: 98,
//     notHelpful: 1,
//     viewCount: 1100,
//     lastUpdated: "2024-12-01"
//   },
//   {
//     id: "6",
//     question: "What is RankUp's success rate for NEET UG?",
//     answer: "Students following RankUp's methodology have shown average score improvements of 40%+ in mock tests. Our structured approach, founded by NEET PG AIR 1731 topper, focuses on smart preparation strategies that maximize efficiency and results. Many RankUp students have secured medical college admissions.",
//     category: "RESULTS",
//     tags: ["success-rate", "results", "improvement", "rankers"],
//     isHelpful: 167,
//     notHelpful: 6,
//     viewCount: 2100,
//     lastUpdated: "2024-12-01"
//   },
//   {
//     id: "7",
//     question: "How does RankUp's daily study capsule work?",
//     answer: "Our Daily Study Capsule delivers curated content including important concepts, high-yield questions, and revision notes directly to your dashboard. Each capsule is designed for 30-45 minutes of focused study and covers topics based on your progress and upcoming exams.",
//     category: "FEATURES",
//     tags: ["daily-capsule", "study-plan", "revision", "micro-learning"],
//     isHelpful: 134,
//     notHelpful: 3,
//     viewCount: 1400,
//     lastUpdated: "2024-12-01"
//   },
//   {
//     id: "8",
//     question: "What payment methods does RankUp accept?",
//     answer: "We accept all major payment methods: Credit/Debit Cards (Visa, MasterCard, RuPay), UPI (Google Pay, PhonePe, Paytm), Net Banking, and EMI options. All payments are secured with 256-bit SSL encryption and we are PCI-DSS compliant.",
//     category: "SUBSCRIPTION",
//     tags: ["payment", "security", "upi", "cards"],
//     isHelpful: 76,
//     notHelpful: 2,
//     viewCount: 950,
//     lastUpdated: "2024-12-01"
//   }
// ];

// export default function Faq() {
//   const { faqs, loading, error, getFAQs, markHelpful, markNotHelpful } = useFAQ();
//   const [openIndex, setOpenIndex] = useState(null);
//   const [feedbackGiven, setFeedbackGiven] = useState(new Set());
//   const [mounted, setMounted] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("ALL");
//   const [showCategories, setShowCategories] = useState(false);

//   // Use fallback data if API fails
//   const displayFAQs = useMemo(() => {
//     const data = error ? fallbackFAQs : faqs;

//     // Filter by search query
//     let filtered = data;
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       filtered = filtered.filter(faq =>
//         faq.question.toLowerCase().includes(query) ||
//         faq.answer.toLowerCase().includes(query) ||
//         faq.tags?.some(tag => tag.toLowerCase().includes(query))
//       );
//     }

//     // Filter by category
//     if (selectedCategory !== "ALL") {
//       filtered = filtered.filter(faq => faq.category === selectedCategory);
//     }

//     return filtered;
//   }, [error, faqs, searchQuery, selectedCategory]);

//   // Get unique categories
//   const categories = useMemo(() => {
//     const data = error ? fallbackFAQs : faqs;
//     const uniqueCats = [...new Set(data.map(faq => faq.category))];
//     return ["ALL", ...uniqueCats];
//   }, [error, faqs]);

//   // Initialize with useCallback to prevent infinite loops
//   const initialize = useCallback(() => {
//     setMounted(true);
//     if (faqs.length === 0 && !loading) {
//       getFAQs();
//     }
//   }, [faqs.length, loading, getFAQs]);

//   useEffect(() => {
//     initialize();
//   }, [initialize]);

//   const handleFeedback = useCallback((faqId, isHelpful) => {
//     if (feedbackGiven.has(faqId)) return;

//     if (isHelpful) {
//       markHelpful(faqId);
//     } else {
//       markNotHelpful(faqId);
//     }

//     setFeedbackGiven(prev => new Set(prev).add(faqId));
//   }, [feedbackGiven, markHelpful, markNotHelpful]);

//   const formatCategory = useCallback((category) => {
//     const categoryMap = {
//       SUBSCRIPTION: "Subscription & Pricing",
//       FEATURES: "Features & Functionality",
//       TECHNICAL: "Technical Support",
//       CONTENT: "Content & Syllabus",
//       GENERAL: "General Information",
//       RESULTS: "Results & Success",
//       PAYMENT: "Payment & Security"
//     };
//     return categoryMap[category] || category.replace(/_/g, ' ');
//   }, []);

//   // Generate FAQ schema dynamically
//   const generateFAQSchema = useMemo(() => {
//     const mainEntity = displayFAQs.slice(0, 10).map(faq => ({
//       "@type": "Question",
//       "name": faq.question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faq.answer
//       }
//     }));

//     return {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": mainEntity
//     };
//   }, [displayFAQs]);

//   if (!mounted) {
//     return (
//       <section className="py-20 bg-gradient-to-b from-white to-blue-50">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A5F] mx-auto"
//                  role="status"
//                  aria-label="Loading FAQs">
//               <span className="sr-only">Loading FAQs...</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       {/* SEO Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema) }}
//       />

//       {/* Breadcrumb Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "BreadcrumbList",
//             "itemListElement": [
//               {
//                 "@type": "ListItem",
//                 "position": 1,
//                 "name": "Home",
//                 "item": "https://rankupp.in"
//               },
//               {
//                 "@type": "ListItem",
//                 "position": 2,
//                 "name": "FAQs",
//                 "item": "https://rankupp.in/faqs"
//               }
//             ]
//           })
//         }}
//       />

//       <section className="py-20 bg-gradient-to-b from-white to-blue-50"
//                itemScope
//                itemType="https://schema.org/FAQPage">
//         <div className="container mx-auto px-4 max-w-6xl">
//           {/* SEO Structured Headings */}
//           <header className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F] mb-4"
//                 itemProp="headline">
//               Frequently Asked Questions
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
//               Get detailed answers to all your questions about RankUp NEET-UG preparation platform, features, pricing, and study methodology.
//             </p>
//             <div className="mt-4 text-sm text-gray-500">
//               <span>Updated: </span>
//               <time dateTime="2024-12-01">December 2024</time>
//               <span className="mx-2">•</span>
//               <span>{displayFAQs.length} Questions Answered</span>
//             </div>
//           </header>

//           {/* Search and Filter Section */}
//           <div className="mb-8 bg-white p-6 rounded-xl shadow-lg">
//             <div className="flex flex-col md:flex-row gap-4">
//               {/* Search Bar */}
//               <div className="flex-1">
//                 <div className="relative">
//                   <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//                            aria-hidden="true" />
//                   <input
//                     type="text"
//                     placeholder="Search questions about NEET UG preparation, pricing, features..."
//                     className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     aria-label="Search FAQs"
//                   />
//                 </div>
//               </div>

//               {/* Category Filter */}
//               <div className="relative">
//                 <button
//                   onClick={() => setShowCategories(!showCategories)}
//                   className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 w-full md:w-auto"
//                   aria-expanded={showCategories}
//                   aria-label="Filter by category"
//                 >
//                   <FiFilter aria-hidden="true" />
//                   <span>{formatCategory(selectedCategory)}</span>
//                   <FiChevronDown className={`transition-transform ${showCategories ? 'rotate-180' : ''}`}
//                                 aria-hidden="true" />
//                 </button>

//                 {showCategories && (
//                   <div className="absolute z-10 mt-2 w-full md:w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
//                     {categories.map(category => (
//                       <button
//                         key={category}
//                         onClick={() => {
//                           setSelectedCategory(category);
//                           setShowCategories(false);
//                         }}
//                         className={`block w-full text-left px-4 py-2 hover:bg-blue-50 ${
//                           selectedCategory === category ? 'bg-blue-50 text-[#1E3A5F] font-semibold' : ''
//                         }`}
//                       >
//                         {formatCategory(category)}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Search Results Info */}
//             {searchQuery && (
//               <div className="mt-4 text-sm text-gray-600">
//                 Found {displayFAQs.length} results for "<strong>{searchQuery}</strong>"
//               </div>
//             )}
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg" role="alert">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-yellow-700 font-medium">
//                     Using enhanced demo data. Live FAQ updates will resume shortly.
//                   </p>
//                   <p className="text-yellow-600 text-sm mt-1">
//                     All essential NEET UG preparation questions are answered below.
//                   </p>
//                 </div>
//                 <button
//                   onClick={getFAQs}
//                   className="px-4 py-2 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#2c4d75] text-sm whitespace-nowrap"
//                   aria-label="Retry loading FAQs"
//                 >
//                   Retry Connection
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Loading State */}
//           {loading && (
//             <div className="text-center mb-8 py-8">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A5F] mx-auto"
//                    role="status"
//                    aria-label="Loading FAQs">
//                 <span className="sr-only">Loading FAQs...</span>
//               </div>
//               <p className="text-gray-600 mt-4">Loading comprehensive NEET UG FAQs...</p>
//             </div>
//           )}

//           {/* FAQ List */}
//           <div className="space-y-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
//             {displayFAQs.length > 0 ? (
//               displayFAQs.map((faq, idx) => (
//                 <article
//                   key={faq.id}
//                   className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
//                   itemScope
//                   itemProp="acceptedAnswer"
//                   itemType="https://schema.org/Answer"
//                 >
//                   <div
//                     onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//                     className="flex justify-between items-start cursor-pointer"
//                     role="button"
//                     aria-expanded={openIndex === idx}
//                     aria-controls={`faq-answer-${faq.id}`}
//                   >
//                     <div className="flex-1 pr-6">
//                       <h2 className="text-xl font-semibold text-[#1E3A5F] mb-2" itemProp="name">
//                         {faq.question}
//                       </h2>
//                       <div className="flex flex-wrap gap-2">
//                         <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
//                           {formatCategory(faq.category)}
//                         </span>
//                         {faq.tags?.map((tag, tagIdx) => (
//                           <span
//                             key={tagIdx}
//                             className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
//                             itemProp="keywords"
//                           >
//                             #{tag}
//                           </span>
//                         ))}
//                         {faq.lastUpdated && (
//                           <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
//                             Updated: {faq.lastUpdated}
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     <span className="text-[#FF8C5B] text-2xl flex-shrink-0" aria-hidden="true">
//                       {openIndex === idx ? <FiMinus /> : <FiPlus />}
//                     </span>
//                   </div>

//                   {/* Answer */}
//                   <div
//                     id={`faq-answer-${faq.id}`}
//                     className={`overflow-hidden transition-all duration-300 ${
//                       openIndex === idx
//                         ? "max-h-[500px] opacity-100 mt-4"
//                         : "max-h-0 opacity-0"
//                     }`}
//                     itemProp="text"
//                   >
//                     <div className="pt-4 border-t border-gray-100">
//                       <p className="text-gray-700 leading-relaxed mb-6">{faq.answer}</p>

//                       {/* Feedback and Stats */}
//                       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
//                         <div className="flex items-center gap-6 text-sm text-gray-500">
//                           <div className="flex items-center gap-2">
//                             <span>Helpful:</span>
//                             <span className="font-semibold text-green-600">
//                               {(faq.isHelpful || 0).toLocaleString()}
//                               <span className="text-gray-400 text-xs ml-1">
//                                 ({Math.round(((faq.isHelpful || 0) / ((faq.isHelpful || 0) + (faq.notHelpful || 1))) * 100)}%)
//                               </span>
//                             </span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <span>Views:</span>
//                             <span className="font-semibold text-blue-600">
//                               {(faq.viewCount || 0).toLocaleString()}
//                             </span>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-4">
//                           <span className="text-sm text-gray-500">Was this helpful?</span>
//                           <div className="flex items-center gap-2">
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleFeedback(faq.id, true);
//                               }}
//                               disabled={feedbackGiven.has(faq.id)}
//                               className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
//                                 feedbackGiven.has(faq.id)
//                                   ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                                   : 'bg-green-50 text-green-600 hover:bg-green-100'
//                               }`}
//                               aria-label={`Mark "${faq.question}" as helpful`}
//                             >
//                               <FiThumbsUp className="w-4 h-4" aria-hidden="true" />
//                               <span>Yes</span>
//                               {(faq.isHelpful || 0) > 0 && (
//                                 <span className="text-xs font-semibold">({faq.isHelpful})</span>
//                               )}
//                             </button>
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleFeedback(faq.id, false);
//                               }}
//                               disabled={feedbackGiven.has(faq.id)}
//                               className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
//                                 feedbackGiven.has(faq.id)
//                                   ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                                   : 'bg-red-50 text-red-600 hover:bg-red-100'
//                               }`}
//                               aria-label={`Mark "${faq.question}" as not helpful`}
//                             >
//                               <FiThumbsDown className="w-4 h-4" aria-hidden="true" />
//                               <span>No</span>
//                               {(faq.notHelpful || 0) > 0 && (
//                                 <span className="text-xs font-semibold">({faq.notHelpful})</span>
//                               )}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))
//             ) : (
//               !loading && (
//                 <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
//                   <p className="text-gray-500 text-lg mb-2">No FAQs match your search</p>
//                   <p className="text-gray-400 mb-4">Try different keywords or browse all categories</p>
//                   <button
//                     onClick={() => {
//                       setSearchQuery("");
//                       setSelectedCategory("ALL");
//                     }}
//                     className="px-4 py-2 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#2c4d75]"
//                   >
//                     Show All FAQs
//                   </button>
//                 </div>
//               )
//             )}
//           </div>

//           {/* FAQ Statistics */}
//           <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="bg-white p-4 rounded-lg border text-center">
//               <div className="text-2xl font-bold text-[#1E3A5F]">{displayFAQs.length}</div>
//               <div className="text-sm text-gray-600">Questions Answered</div>
//             </div>
//             <div className="bg-white p-4 rounded-lg border text-center">
//               <div className="text-2xl font-bold text-green-600">
//                 {Math.round((fallbackFAQs.reduce((sum, faq) => sum + (faq.isHelpful || 0), 0) /
//                   fallbackFAQs.reduce((sum, faq) => sum + (faq.isHelpful || 0) + (faq.notHelpful || 1), 1)) * 100)}%
//               </div>
//               <div className="text-sm text-gray-600">Helpful Rate</div>
//             </div>
//             <div className="bg-white p-4 rounded-lg border text-center">
//               <div className="text-2xl font-bold text-blue-600">
//                 {fallbackFAQs.reduce((sum, faq) => sum + (faq.viewCount || 0), 0).toLocaleString()}
//               </div>
//               <div className="text-sm text-gray-600">Total Views</div>
//             </div>
//             <div className="bg-white p-4 rounded-lg border text-center">
//               <div className="text-2xl font-bold text-purple-600">{categories.length - 1}</div>
//               <div className="text-sm text-gray-600">Categories</div>
//             </div>
//           </div>

//           {/* Help Section */}
//           <div className="mt-12 p-8 bg-gradient-to-r from-[#1E3A5F] to-[#2c4d75] rounded-xl text-white">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//               <div>
//                 <h3 className="text-2xl font-bold mb-2">Still have questions about NEET UG preparation?</h3>
//                 <p className="text-blue-100">
//                   Our support team is here to help you with specific queries about RankUp platform, study plans, or NEET preparation strategies.
//                 </p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <Link
//                   href="/contact"
//                   className="px-6 py-3 bg-white text-[#1E3A5F] font-semibold rounded-lg hover:bg-blue-50 text-center transition-colors"
//                   aria-label="Contact RankUp support team"
//                 >
//                   Contact Support Team
//                 </Link>
//                 <Link
//                   href="#feature"
//                   className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 text-center transition-colors"
//                   aria-label="Explore RankUp features"
//                 >
//                   Explore Features
//                 </Link>
//               </div>
//             </div>
//             <div className="mt-6 pt-6 border-t border-white/20 text-sm text-blue-100">
//               <p>Average response time: <strong>Within 24 hours</strong> • Available: <strong>Monday-Saturday, 9AM-6PM IST</strong></p>
//             </div>
//           </div>

//           {/* Additional Resources */}
//           <div className="mt-8">
//             <h4 className="text-xl font-semibold text-[#1E3A5F] mb-4">Related Resources</h4>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <Link
//                 href="/privacy"
//                 className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow"
//                 aria-label="Read RankUp Privacy Policy"
//               >
//                 <h5 className="font-semibold text-[#1E3A5F]">Privacy Policy</h5>
//                 <p className="text-sm text-gray-600 mt-1">Learn how we protect your data</p>
//               </Link>
//               <Link
//                 href="/refund"
//                 className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow"
//                 aria-label="Read RankUp Refund Policy"
//               >
//                 <h5 className="font-semibold text-[#1E3A5F]">Refund Policy</h5>
//                 <p className="text-sm text-gray-600 mt-1">Understand our refund process</p>
//               </Link>
//               <Link
//                 href="/about"
//                 className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow"
//                 aria-label="Learn about RankUp"
//               >
//                 <h5 className="font-semibold text-[#1E3A5F]">About RankUp</h5>
//                 <p className="text-sm text-gray-600 mt-1">Our mission and methodology</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// ============================================================
// FILE: components/Faq.jsx
// RANKUPP.IN — Premium SEO FAQ Section 2026
// Zero external icon deps · Native details/summary · Full schema
// ============================================================

"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";

// ============================================================
// FAQ DATA — NEET-specific, detailed answers for featured snippets
// ============================================================

const FAQ_DATA = [
  {
    id: "1",
    question: "What is RankUpp NEET-UG Preparation Platform?",
    answer: "RankUpp is India's NEET-UG preparation platform founded by an MBBS Gold Medalist and NEET PG AIR 1731 holder. We provide NCERT line-by-line Biology questions, chapter-wise PYQs from 1988–2026, full-length mock tests with real NTA exam pattern, and a spaced repetition revision system. Every question on RankUpp traces back to its exact NCERT source — ensuring students build the kind of concept-level mastery that NEET actually tests. Trusted by 2 lakh+ NEET aspirants across India.",
    category: "General",
    tags: ["platform", "neet-ug", "ncert", "medical-entrance"],
    helpful: 125,
  },
  {
    id: "2",
    question: "Is RankUpp free for NEET UG preparation?",
    answer: "Yes — RankUpp offers free access to a substantial portion of its NEET preparation resources. Free users can practice chapter-wise NCERT questions, attempt select full-length mock tests, access NEET PYQs with solutions, and use the chapter-wise revision tools. Premium plans unlock the complete question bank, unlimited mock tests, detailed AI-powered performance analytics, weak chapter identification reports, and national leaderboard comparison. Free access is genuine — not a limited demo.",
    category: "Pricing",
    tags: ["free", "pricing", "premium", "subscription"],
    helpful: 89,
  },
  {
    id: "3",
    question: "Does RankUpp cover the complete NEET 2026 syllabus?",
    answer: "Yes, RankUpp covers 100% of the NEET 2026 syllabus — Biology (Botany + Zoology), Physics, and Chemistry — for both Class 11 and Class 12. All content is directly based on NCERT textbooks, updated to the current NTA syllabus. Biology coverage includes all 38 chapters with NCERT-source-tagged questions. Physics includes formula-based questions for all 15 high-weightage chapters. Chemistry covers Organic, Inorganic, and Physical Chemistry chapter-wise.",
    category: "Content",
    tags: ["syllabus", "ncert", "biology", "physics", "chemistry", "2026"],
    helpful: 112,
  },
  {
    id: "4",
    question: "How is RankUpp different from other NEET apps?",
    answer: "RankUpp's core difference is NCERT-source tagging — every question links to its exact NCERT chapter, section, and paragraph. Most NEET apps provide generic MCQ banks with no connection to the textbook. When you get a question wrong on RankUpp, you immediately know which NCERT line to revise. The platform was built by a practising doctor (MBBS Gold Medalist, NEET PG AIR 1731) who teaches NEET — not a general edtech company. This means the question selection, explanation quality, and study strategy all reflect real exam experience.",
    category: "General",
    tags: ["ncert", "difference", "quality", "doctor-founded"],
    helpful: 145,
  },
  {
    id: "5",
    question: "How many NEET PYQs are available on RankUpp?",
    answer: "RankUpp provides 20,000+ NEET previous year questions (PYQs) from 1988 to 2025, organized both chapter-wise and year-wise for Biology, Physics, and Chemistry. Chapter-wise PYQs are the most valuable — they reveal which concepts NTA tests repeatedly for each topic. Each PYQ includes a detailed solution with NCERT reference for Biology questions and step-by-step calculation for Physics and Chemistry. A free PDF download of the complete chapter-wise PYQ bank is available without signup.",
    category: "Content",
    tags: ["pyq", "previous-year-questions", "pdf", "1988-2026"],
    helpful: 167,
  },
  {
    id: "6",
    question: "What is RankUpp's NEET mock test format?",
    answer: "RankUpp's full-length major mock tests match the current NTA NEET 2026 format exactly — 180 questions, 720 marks, 3-hour timer, with Physics (45+5), Chemistry (45+5), Botany (45+5), and Zoology (45+5) sections using the +4/–1 marking scheme. Instant results include subject-wise accuracy, time-per-question analysis, weak chapter report, and national leaderboard rank among all RankUpp students. Chapter-wise minor tests (20–45 questions) are also available for targeted topic practice.",
    category: "Features",
    tags: ["mock-test", "nta-pattern", "720-marks", "leaderboard"],
    helpful: 134,
  },
  {
    id: "7",
    question: "Can I use RankUpp on mobile?",
    answer: "Yes. RankUpp works on all devices — Android, iOS, and desktop browsers. The mobile experience is fully optimized for NEET practice, including timed mock tests, chapter-wise question banks, and performance analytics. The platform is designed mobile-first since most NEET students study primarily on their phones. Android and iOS apps are available for download with offline access to revision materials.",
    category: "Technical",
    tags: ["mobile", "android", "ios", "app", "offline"],
    helpful: 98,
  },
  {
    id: "8",
    question: "Who founded RankUpp and what are their credentials?",
    answer: "RankUpp was founded by an MBBS Gold Medalist from Shyam Shah Medical College, Rewa — who also holds NEET PG AIR 1731, MP State Rank 41, and cleared the UPSC Combined Medical Services examination. After 4+ years of teaching NEET aspirants at coaching institutes, the founder built RankUpp to solve the problems he consistently observed: generic question banks with no NCERT connection, no performance analytics, and coaching-quality preparation locked behind high fees. RankUpp exists to democratize that preparation.",
    category: "General",
    tags: ["founder", "mbbs-gold-medalist", "neet-pg", "upsc-cms", "credibility"],
    helpful: 167,
  },
  {
    id: "9",
    question: "How does RankUpp's spaced repetition revision work?",
    answer: "RankUpp's revision planner uses the Ebbinghaus Forgetting Curve to schedule chapter revisits at scientifically optimal intervals — Day 1, Day 7, Day 21, and Day 45 after first study. Each day, the planner shows you exactly which chapters are due for revision based on your study history. This system prevents forgetting by reinforcing memories at the precise moment before they fade. Students using the spaced repetition system consistently report better retention in mock tests compared to random self-study revision.",
    category: "Features",
    tags: ["spaced-repetition", "revision", "forgetting-curve", "retention"],
    helpful: 134,
  },
  {
    id: "10",
    question: "What score improvement can I expect with RankUpp?",
    answer: "Students who consistently use RankUpp's structured preparation — NCERT questions + chapter PYQs + full mock tests + revision planner — report mock test score improvements of 80–120 marks over a 3–4 month period. The improvement is most significant in Biology, where NCERT-source practice directly translates to exam marks. Physics improvements depend on formula practice consistency. Results vary by individual effort, but students who complete the recommended daily practice targets consistently show upward score trends across consecutive mock tests.",
    category: "Results",
    tags: ["score-improvement", "results", "marks", "mock-test-progress"],
    helpful: 145,
  },
];

const CATEGORIES = ["All", "General", "Content", "Features", "Pricing", "Technical", "Results"];

const CATEGORY_COLORS = {
  General:   { bg: "bg-blue-50",    text: "text-blue-700",   border: "border-blue-100" },
  Pricing:   { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
  Content:   { bg: "bg-violet-50",  text: "text-violet-700", border: "border-violet-100" },
  Features:  { bg: "bg-amber-50",   text: "text-amber-700",  border: "border-amber-100" },
  Technical: { bg: "bg-cyan-50",    text: "text-cyan-700",   border: "border-cyan-100" },
  Results:   { bg: "bg-rose-50",    text: "text-rose-700",   border: "border-rose-100" },
};

// ============================================================
// FAQ SCHEMA (server-safe, generated from static data)
// ============================================================

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// ============================================================
// SUB-COMPONENTS
// ============================================================

function CategoryPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap border ${
        active
          ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md scale-105"
          : "bg-white text-gray-600 border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
      }`}
      aria-pressed={active}
      aria-label={`Filter FAQs by ${label}`}
    >
      {label}
    </button>
  );
}

function FAQItem({ faq, index }) {
  const color = CATEGORY_COLORS[faq.category] || CATEGORY_COLORS.General;

  return (
    <article
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
      itemScope
      itemType="https://schema.org/Question"
    >
      <details className="w-full">
        <summary
          className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none select-none"
          aria-label={faq.question}
        >
          {/* Left: category + question */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${color.bg} ${color.text} ${color.border}`}>
                {faq.category}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {faq.helpful}+ found helpful
              </span>
            </div>
            <h3
              className="font-bold text-gray-900 text-base md:text-lg leading-snug group-open:text-[var(--color-primary)] transition-colors"
              itemProp="name"
            >
              {faq.question}
            </h3>
          </div>

          {/* Toggle icon */}
          <div className="w-8 h-8 rounded-xl bg-gray-50 group-open:bg-[var(--color-primary)] border border-gray-100 group-open:border-[var(--color-primary)] flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5">
            <svg className="w-4 h-4 text-gray-400 group-open:text-white transition-all duration-200 group-open:rotate-45"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </summary>

        {/* Answer */}
        <div
          className="px-6 pb-6"
          itemProp="acceptedAnswer"
          itemScope
          itemType="https://schema.org/Answer"
        >
          <div className="pt-4 border-t border-gray-50">
            <p
              className="text-gray-600 leading-relaxed text-sm md:text-base"
              itemProp="text"
            >
              {faq.answer}
            </p>

            {/* Tags */}
            {faq.tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Related topics">
                {faq.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </details>
    </article>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Faq() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Schema injected once on mount
  const filteredFAQs = useMemo(() => {
    let data = FAQ_DATA;
    if (activeCategory !== "All") {
      data = data.filter((f) => f.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q) ||
          f.tags?.some((t) => t.includes(q))
      );
    }
    return data;
  }, [search, activeCategory]);

  const handleClearSearch = useCallback(() => {
    setSearch("");
    setActiveCategory("All");
  }, []);

  return (
    <>
      {/* ── FAQ SCHEMA — renders in initial HTML, always visible to Googlebot ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <section
        className="py-20 bg-gradient-to-b from-white to-blue-50/40 relative overflow-hidden"
        aria-labelledby="faq-section-heading"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {/* Subtle bg decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">

          {/* ── HEADER ── */}
          <header className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-[var(--color-primary)]/15">
              <span aria-hidden="true">❓</span>
              <span>10 Questions Answered · Updated January 2026</span>
            </div>

            <h2
              id="faq-section-heading"
              className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            >
              Frequently Asked{" "}
              <span className="text-[var(--color-primary)]">Questions</span>
            </h2>

            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Everything NEET 2026 aspirants ask about RankUpp — from content
              quality to how the platform was built.
            </p>

            {/* Trust badge row */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                { icon: "✅", text: "Doctor-Founded Platform" },
                { icon: "📚", text: "NCERT-Source Tagged" },
                { icon: "🏆", text: "2L+ Students Answered" },
              ].map((b) => (
                <span key={b.text}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-gray-100 text-gray-600 px-4 py-2 rounded-full shadow-sm">
                  <span aria-hidden="true">{b.icon}</span>{b.text}
                </span>
              ))}
            </div>
          </header>

          {/* ── SEARCH BAR ── */}
          <div className="mb-8 relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none" aria-hidden="true">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search — e.g. 'mock test', 'free', 'biology questions'..."
              className="w-full pl-11 pr-12 py-4 bg-white border border-gray-200 rounded-2xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-sm transition-all"
              aria-label="Search frequently asked questions"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* ── CATEGORY FILTER ── */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide -mx-1 px-1"
            role="group" aria-label="Filter FAQs by category">
            {CATEGORIES.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          {/* ── RESULTS COUNT ── */}
          {(search || activeCategory !== "All") && (
            <div className="flex items-center justify-between mb-5 text-sm">
              <span className="text-gray-500">
                {filteredFAQs.length === 0
                  ? "No results found"
                  : `Showing ${filteredFAQs.length} of ${FAQ_DATA.length} questions`}
                {search && (
                  <> for <strong className="text-gray-700">"{search}"</strong></>
                )}
              </span>
              <button
                onClick={handleClearSearch}
                className="text-[var(--color-primary)] font-semibold hover:underline text-xs"
              >
                Show all →
              </button>
            </div>
          )}

          {/* ── FAQ LIST ── */}
          {filteredFAQs.length > 0 ? (
            <div className="space-y-3" role="list">
              {filteredFAQs.map((faq, i) => (
                <div key={faq.id} role="listitem">
                  <FAQItem faq={faq} index={i} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-5xl mb-4" aria-hidden="true">🔍</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">No matching questions</h3>
              <p className="text-gray-500 text-sm mb-5">Try different keywords or browse all categories</p>
              <button
                onClick={handleClearSearch}
                className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Show All FAQs
              </button>
            </div>
          )}

          {/* ── STATS ROW ── */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: "10", label: "Questions Answered" },
              { value: "97%", label: "Helpful Rate" },
              { value: "10K+", label: "Monthly Readers" },
              { value: "Jan 2026", label: "Last Updated" },
            ].map((s) => (
              <div key={s.label}
                className="bg-white rounded-2xl border border-gray-100 p-4 text-center shadow-sm">
                <p className="text-xl font-extrabold text-[var(--color-primary)]">{s.value}</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* ── STILL HAVE QUESTIONS CTA ── */}
          <div className="mt-10 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[#0d2340] p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">
                    Still have questions about NEET 2026?
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed max-w-md">
                    Our support team responds within 24 hours — Monday to Saturday, 9AM–6PM IST.
                    Or start practicing free right now.
                  </p>
                  <p className="text-blue-300/70 text-xs mt-2">
                    Average response time: <strong className="text-blue-200">under 4 hours</strong>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                  <Link href="/contact"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors shadow-sm"
                    aria-label="Contact RankUpp support team">
                    💬 Contact Support
                  </Link>
                  <Link href="/neet-mock-test-online"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-sm"
                    aria-label="Start free NEET practice on RankUpp">
                    🚀 Start Practicing Free
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── RELATED RESOURCES ── */}
          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
              Related Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { href: "/privacy", icon: "🔒", title: "Privacy Policy", desc: "How we protect your data" },
                { href: "/refund",  icon: "↩️", title: "Refund Policy",  desc: "Our refund process" },
                { href: "/about",   icon: "🏥", title: "About RankUpp",  desc: "Our mission and methodology" },
              ].map((r) => (
                <Link key={r.href} href={r.href}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md hover:border-blue-100 transition-all group"
                  aria-label={r.title}>
                  <span className="text-2xl shrink-0" aria-hidden="true">{r.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm group-hover:text-[var(--color-primary)] transition-colors">{r.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{r.desc}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 ml-auto shrink-0 group-hover:text-[var(--color-primary)] transition-colors"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}