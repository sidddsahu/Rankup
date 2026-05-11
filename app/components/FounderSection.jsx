
// "use client";

// import { motion } from "framer-motion";
// import {
//   FaMedal,
//   FaTrophy,
//   FaUserMd,
//   FaStar,
//   FaHeartbeat,
//   FaGratipay,
//   FaBookOpen,
//   FaArrowRight,
//   FaUniversity,
//   FaAward,
//   FaChartLine,
//   FaLightbulb
// } from "react-icons/fa";

// export default function FounderSection() {
//   // Schema.org data with complete organization and person schema
//   const founderSchema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Person",
//         "@id": "https://rankupp.in/#founder",
//         "name": "RankUp Founder",
//         "jobTitle": "Medical Educator & NEET PG Mentor",
//         "description": "MBBS Gold Medalist, NEET PG AIR 1731, UPSC CMS Qualified medical educator helping students achieve success in medical entrance exams.",
//         "image": "https://rankupp.in/founder.jpg",
//         "alumniOf": {
//           "@type": "CollegeOrUniversity",
//           "name": "Shyam Shah Medical College, Rewa",
//           "sameAs": "https://en.wikipedia.org/wiki/Shyam_Shah_Medical_College"
//         },
//         "award": [
//           "Class 12th Gold Medalist",
//           "MBBS Gold Medalist",
//           "NEET PG AIR 1731",
//           "UPSC CMS Qualified",
//           "Rank 41 in Madhya Pradesh NEET PG"
//         ],
//         "hasCredential": "MBBS, Gold Medalist",
//         "knowsAbout": [
//           "NEET PG Preparation",
//           "NEET UG Preparation",
//           "Medical Education",
//           "Competitive Exam Strategy",
//           "UPSC CMS Examination",
//           "Study Techniques",
//           "Time Management",
//           "Revision Strategies"
//         ],
//         "url": "https://rankupp.in/about",
//         "sameAs": [
//           "https://linkedin.com/in/rankup-founder",
//           "https://twitter.com/rankupfounder",
//           "https://facebook.com/rankupfounder"
//         ]
//       },
//       {
//         "@type": "Organization",
//         "@id": "https://rankupp.in/#organization",
//         "name": "RankUp NEET-UG Preparation Platform",
//         "description": "Premium NEET-UG and NEET PG preparation platform founded by medical toppers.",
//         "url": "https://rankupp.in",
//         "logo": "https://rankupp.in/logo.png",
//         "founder": {
//           "@id": "https://rankupp.in/#founder"
//         },
//         "foundingDate": "2023",
//         "address": {
//           "@type": "PostalAddress",
//           "addressLocality": "Chhatarpur",
//           "addressRegion": "Madhya Pradesh",
//           "addressCountry": "IN"
//         }
//       },
//       {
//         "@type": "WebPage",
//         "@id": "https://rankupp.in/founder",
//         "name": "Meet Our Founder - RankUp Medical Education",
//         "description": "Learn about our founder's journey from Gold Medalist to NEET PG AIR 1731 and how his proven strategies can help you succeed.",
//         "url": "https://rankupp.in/founder",
//         "primaryImageOfPage": {
//           "@type": "ImageObject",
//           "url": "https://rankupp.in/founder-hero.jpg",
//           "width": 1200,
//           "height": 630
//         },
//         "datePublished": "2024-01-01",
//         "dateModified": "2024-12-01"
//       }
//     ]
//   };

//   return (
//     <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-4 sm:px-6" itemScope itemType="https://schema.org/AboutPage">
//       {/* Schema.org Structured Data for SEO */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(founderSchema)
//         }}
//       />

//       <div className="max-w-6xl mx-auto">
//         {/* Main Content Grid */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* Left Side — Images and Additional Content */}
//           <div className="space-y-8">
//             {/* Images Grid with SEO optimized alt texts */}
//             <div className="block md:hidden">
//               <header>
//                 <h1 className="text-4xl font-bold text-gray-900 leading-tight" itemProp="headline">
//                   Meet Our Founders — <span className="text-4xl font-extrabold leading-snug drop-shadow-sm text-[#1E3A5F]">Your Guide to Medical Success</span>
//                 </h1>
//               </header>

//               <p className="text-gray-700 text-lg leading-relaxed" itemProp="description">
//                 My journeys started with a simple dream - to excel in medicine and help others do the same.
//                 After winning the <strong className="font-semibold" itemProp="award">Gold Medal in Class 12th</strong>, I pursued MBBS at
//                 <strong className="font-semibold" itemProp="alumniOf"> Shyam Shah Medical College, Rewa</strong> where I continued my
//                 academic excellence by earning another <strong className="font-semibold" itemProp="award">Gold Medal</strong>.
//                 Right after MBBS, I cracked <strong className="font-semibold" itemProp="award">NEET PG with All India Rank 1731</strong>
//                 and also qualified the <strong className="font-semibold" itemProp="award">UPSC Combined Medical Services</strong> exam.
//               </p>

//               <section aria-labelledby="achievements-heading">
//                 <h2 id="achievements-heading" className="sr-only">Academic and Professional Achievements</h2>
//                 <div className="space-y-4" itemScope itemProp="hasCredential">
//                   <Achievement
//                     icon={<FaStar className="text-yellow-500 text-2xl" aria-hidden="true" />}
//                     title="Class 12th Gold Medalist"
//                     desc="Secured top position in school with outstanding scores in Science subjects"
//                     itemProp="award"
//                   />

//                   <Achievement
//                     icon={<FaMedal className="text-red-500 text-2xl" aria-hidden="true" />}
//                     title="MBBS Gold Medalist"
//                     desc="Awarded gold medal for academic excellence throughout medical college"
//                     itemProp="award"
//                   />

//                   <Achievement
//                     icon={<FaTrophy className="text-blue-600 text-2xl" aria-hidden="true" />}
//                     title="NEET PG AIR 1731"
//                     desc="Achieved excellent national rank right after completing MBBS"
//                     itemProp="award"
//                   />

//                   <Achievement
//                     icon={<FaGratipay className="text-pink-600 text-2xl" aria-hidden="true" />}
//                     title="UPSC CMS Qualified"
//                     desc="Cleared the prestigious Combined Medical Services examination"
//                     itemProp="award"
//                   />

//                   <Achievement
//                     icon={<FaHeartbeat className="text-indigo-600 text-2xl" aria-hidden="true" />}
//                     title="Rank 41 in Madhya Pradesh"
//                     desc="Among the top rankers from the state in NEET PG"
//                     itemProp="award"
//                   />
//                 </div>
//               </section>
//             </div>

//             {/* Images Section with Lazy Loading and SEO Optimization */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               className="relative"
//               itemScope
//               itemType="https://schema.org/ImageGallery"
//             >
//               <div className="grid grid-cols-2 gap-4">
//                 <figure itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
//                   <img
//                     src="/goldmedalce.webp"
//                     alt="NEET PG Rank 1731 Certificate - RankUp Medical Education Founder Achievement"
//                     className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full w-full"
//                     loading="lazy"
//                     width="400"
//                     height="300"
//                     itemProp="contentUrl"
//                   />
//                   <figcaption className="sr-only" itemProp="caption">NEET PG AIR 1731 Certificate - Founder's Achievement</figcaption>
//                   <meta itemProp="description" content="NEET PG AIR 1731 certificate of RankUp founder" />
//                 </figure>
//                 <figure itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
//                   <img
//                     src="/medal.webp"
//                     alt="MBBS Gold Medal Achievement - Medical College Excellence Award"
//                     className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full w-full"
//                     loading="lazy"
//                     width="400"
//                     height="300"
//                     itemProp="contentUrl"
//                   />
//                   <figcaption className="sr-only" itemProp="caption">MBBS Gold Medal - Academic Excellence</figcaption>
//                   <meta itemProp="description" content="MBBS Gold Medal earned by RankUp founder" />
//                 </figure>
//                 <figure itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
//                   <img
//                     src="mbbs.webp"
//                     alt="Medical College Founder Portrait - RankUp Medical Mentor Profile"
//                     className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full w-full"
//                     loading="lazy"
//                     width="400"
//                     height="300"
//                     itemProp="contentUrl"
//                   />
//                   <figcaption className="sr-only" itemProp="caption">Founder Profile - Medical Education Expert</figcaption>
//                   <meta itemProp="description" content="Portrait of RankUp founder during MBBS" />
//                 </figure>
//                 <figure itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
//                   <img
//                     src="upsc.webp"
//                     alt="Class 12th Gold Medal Certificate - Academic Excellence Proof"
//                     className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full w-full"
//                     loading="lazy"
//                     width="400"
//                     height="300"
//                     itemProp="contentUrl"
//                   />
//                   <figcaption className="sr-only" itemProp="caption">Class 12 Gold Medal Certificate</figcaption>
//                   <meta itemProp="description" content="Class 12 Gold Medal certificate of RankUp founder" />
//                 </figure>
//               </div>

//               {/* Floating Badge with semantic HTML */}
//               <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl px-6 py-3 flex items-center gap-3" role="complementary" aria-label="Founder Credentials" itemProp="jobTitle">
//                 <FaUserMd className="text-blue-600 text-2xl" aria-hidden="true" />
//                 <p className="font-semibold text-gray-700 text-lg">MBBS Gold Medalist | NEET PG AIR 1731</p>
//               </div>
//             </motion.div>

//             {/* My Approach Box with semantic structure */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="mt-12 bg-white p-6 shadow-lg rounded-2xl border-l-4 border-[#1E3A5F]"
//               role="article"
//               aria-label="Learning Philosophy"
//               itemScope
//               itemType="https://schema.org/CreativeWork"
//             >
//               <h3 className="text-2xl font-bold text-gray-900 mb-3" itemProp="headline">My Learning Philosophy</h3>
//               <p className="text-gray-700 mb-4" itemProp="description">
//                 Success isn't about being the smartest - it's about being the most consistent.
//                 Through my journey, I discovered that the right strategy, daily discipline,
//                 and smart revision can help any dedicated student achieve their dreams.
//               </p>
//               <ul className="text-gray-700 list-disc pl-5 space-y-2" itemProp="about" aria-label="Learning philosophy points">
//                 <li><strong className="font-semibold">Concept Clarity:</strong> Building strong fundamentals that last</li>
//                 <li><strong className="font-semibold">Smart Revision:</strong> Quality over quantity in study hours</li>
//                 <li><strong className="font-semibold">Exam Strategy:</strong> Learning what to study and what to skip</li>
//                 <li><strong className="font-semibold">Consistency:</strong> Small daily steps lead to big results</li>
//               </ul>
//               <meta itemProp="keywords" content="medical education, study techniques, exam strategy, revision methods" />
//             </motion.div>

//             {/* Step-by-step guide box with ordered list semantics */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="bg-white p-6 shadow-lg rounded-2xl border-l-4 border-[#1E3A5F]"
//               role="article"
//               aria-label="Success Roadmap"
//               itemScope
//               itemType="https://schema.org/HowTo"
//             >
//               <h3 className="text-2xl font-bold text-gray-900 mb-3" itemProp="name">The Roadmap That Worked For Me</h3>
//               <p className="text-gray-600 mb-4" itemProp="description">Follow these 5 proven steps to medical exam success</p>
//               <div className="grid gap-3" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
//                 <RoadmapStep number={1} title="Strong Foundation" desc="Focus on understanding concepts deeply rather than memorizing" />
//                 <RoadmapStep number={2} title="Consistent Learning" desc="Regular study schedule with proper breaks and revisions" />
//                 <RoadmapStep number={3} title="Smart Preparation" desc="Identifying high-yield topics and mastering them thoroughly" />
//                 <RoadmapStep number={4} title="Practice & Tests" desc="Regular mock tests to build speed and accuracy" />
//                 <RoadmapStep number={5} title="Revision Strategy" desc="Systematic revision plan to retain what you've learned" />
//               </div>
//               <meta itemProp="totalTime" content="P12M" />
//               <meta itemProp="estimatedCost" content="Free guidance" />
//             </motion.div>

//             {/* Testimonial Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg"
//               itemScope
//               itemType="https://schema.org/Review"
//             >
//               <div className="flex items-center mb-4">
//                 <FaChartLine className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
//                 <h3 className="text-xl font-bold text-gray-900" itemProp="name">Success Rate</h3>
//               </div>
//               <p className="text-gray-700 mb-3" itemProp="reviewBody">
//                 "Using the same strategies I developed, hundreds of students have improved their NEET UG scores by 40%+"
//               </p>
//               <div className="flex justify-between text-sm text-gray-600">
//                 <span itemProp="author" itemScope itemType="https://schema.org/Person">
//                   <span itemProp="name">RankUp Founder</span>
//                 </span>
//                 <span itemProp="datePublished">December 2024</span>
//               </div>
//               <div className="mt-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
//                 <meta itemProp="ratingValue" content="5" />
//                 <meta itemProp="bestRating" content="5" />
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} className="text-yellow-500" aria-hidden="true" />
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Expertise Section */}
//             <section aria-labelledby="expertise-heading">
//               <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border-t">
//                 <div className="flex items-center mb-4">
//                   <FaLightbulb className="text-yellow-500 text-2xl mr-3" aria-hidden="true" />
//                   <h3 id="expertise-heading" className="text-xl font-bold text-gray-900">Areas of Expertise</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-3">
//                   <ExpertiseBadge title="NEET UG Strategy" />
//                   <ExpertiseBadge title="Medical Concepts" />
//                   <ExpertiseBadge title="Time Management" />
//                   <ExpertiseBadge title="Revision Techniques" />
//                   <ExpertiseBadge title="Mock Test Analysis" />
//                   <ExpertiseBadge title="Stress Management" />
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Right Side — Main Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="space-y-6"
//             itemScope
//             itemType="https://schema.org/Person"
//             itemID="https://rankupp.in/#founder"
//           >
//             {/* Main Heading with proper hierarchy - Desktop */}
//             <div className="hidden md:block">
//               <header>
//                 <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6" itemProp="headline">
//                   Meet Our Founder — <span className="text-4xl font-extrabold leading-snug drop-shadow-sm text-[#1E3A5F]">Your Guide to Medical Success</span>
//                 </h1>
//               </header>

//               <p className="text-gray-700 text-lg leading-relaxed mb-8" itemProp="description">
//                 My journey started with a simple dream - to excel in medicine and help others do the same.
//                 After winning the <strong className="font-semibold" itemProp="award">Gold Medal in Class 12th</strong>, I pursued MBBS at
//                 <strong className="font-semibold" itemProp="alumniOf"> Shyam Shah Medical College, Rewa</strong> where I continued my
//                 academic excellence by earning another <strong className="font-semibold" itemProp="award">Gold Medal</strong>.
//                 Right after MBBS, I cracked <strong className="font-semibold" itemProp="award">NEET PG with All India Rank 1731</strong>
//                 and also qualified the <strong className="font-semibold" itemProp="award">UPSC Combined Medical Services</strong> exam.
//               </p>

//               <section aria-labelledby="achievements-heading">
//                 <h2 id="achievements-heading" className="sr-only">Academic and Professional Achievements</h2>
//                 <div className="space-y-4" itemProp="award">
//                   <Achievement
//                     icon={<FaStar className="text-yellow-500 text-2xl" aria-hidden="true" />}
//                     title="Class 12th Gold Medalist"
//                     desc="Secured top position in school with outstanding scores in Science subjects"
//                   />

//                   <Achievement
//                     icon={<FaMedal className="text-red-500 text-2xl" aria-hidden="true" />}
//                     title="MBBS Gold Medalist"
//                     desc="Awarded gold medal for academic excellence throughout medical college"
//                   />

//                   <Achievement
//                     icon={<FaTrophy className="text-blue-600 text-2xl" aria-hidden="true" />}
//                     title="NEET PG AIR 1731"
//                     desc="Achieved excellent national rank right after completing MBBS"
//                   />

//                   <Achievement
//                     icon={<FaGratipay className="text-pink-600 text-2xl" aria-hidden="true" />}
//                     title="UPSC CMS Qualified"
//                     desc="Cleared the prestigious Combined Medical Services examination"
//                   />

//                   <Achievement
//                     icon={<FaHeartbeat className="text-indigo-600 text-2xl" aria-hidden="true" />}
//                     title="Rank 41 in Madhya Pradesh"
//                     desc="Among the top rankers from the state in NEET PG"
//                   />
//                 </div>
//               </section>
//             </div>

//             {/* CTA Section with proper button semantics */}
//             <section aria-labelledby="cta-heading">
//               <h2 id="cta-heading" className="sr-only">Join RankUp Program</h2>
//               <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
//                 <a
//                   href="/join"
//                   className="inline-flex items-center gap-3 bg-[#1E3A5F] text-white font-semibold px-5 py-3 rounded-xl shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-1"
//                   aria-label="Start your medical success journey with RankUp NEET UG coaching - Join now"
//                   itemProp="url"
//                 >
//                   <FaBookOpen aria-hidden="true" />
//                   Start Your Medical Success Journey
//                   <FaArrowRight aria-hidden="true" />
//                 </a>

//                 <p className="text-gray-600 text-sm">
//                   Ready to follow the same proven path? Join RankUp to get my exact study plans,
//                   revision strategies, and mentorship for NEET UG success.
//                 </p>
//               </div>
//             </section>

//             {/* Trust Section */}
//             <section aria-labelledby="trust-heading">
//               <div className="mt-8 bg-white p-6 shadow-xl rounded-2xl border-l-4 border-[#1E3A5F]" itemScope itemType="https://schema.org/CreativeWork">
//                 <h3 id="trust-heading" className="text-2xl font-bold text-gray-900 mb-2" itemProp="headline">Why Trust My Guidance?</h3>
//                 <p className="text-gray-700 leading-relaxed text-base" itemProp="description">
//                   I've walked the path you're on right now. From classroom learning to competitive exams,
//                   I understand the challenges and know what it takes to succeed. At RankUp, I've distilled
//                   everything I learned into a clear, practical program that can help you achieve your medical
//                   career dreams too. It's not about working harder - it's about working smarter.
//                 </p>
//                 <meta itemProp="keywords" content="medical mentor, exam guidance, NEET preparation, medical career" />
//               </div>
//             </section>

//             {/* Experience Timeline */}
//             <section aria-labelledby="timeline-heading">
//               <div className="mt-8 bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg">
//                 <div className="flex items-center mb-4">
//                   <FaUniversity className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
//                   <h3 id="timeline-heading" className="text-2xl font-bold text-gray-900">Educational Journey</h3>
//                 </div>
//                 <div className="space-y-4" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
//                   <TimelineItem year="2017-2018" title="Class 12th Gold Medal" institution="Senior Secondary School" />
//                   <TimelineItem year="2019-2024" title="MBBS Gold Medalist" institution="Shyam Shah Medical College, Rewa" />
//                   <TimelineItem year="2025" title="NEET PG AIR 1731" institution="National Eligibility cum Entrance Test" />
//                   <TimelineItem year="2025" title="UPSC CMS Qualified" institution="Union Public Service Commission" />
//                 </div>
//               </div>
//             </section>

//             {/* Certificates Section */}

//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Achievement({ icon, title, desc, ...props }) {
//   return (
//     <article className="flex gap-4 items-start p-3 hover:bg-blue-50 rounded-lg transition-colors" {...props}>
//       <div className="p-3 bg-white rounded-xl shadow-md flex-shrink-0" aria-hidden="true">
//         {icon}
//       </div>
//       <div>
//         <h3 className="font-semibold text-lg text-gray-900 mb-1" itemProp="name">{title}</h3>
//         <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">{desc}</p>
//       </div>
//     </article>
//   );
// }

// function RoadmapStep({ number, title, desc }) {
//   return (
//     <article className="flex gap-4 items-start bg-gray-50 p-3 rounded-lg hover:bg-blue-50 transition-colors" itemScope itemProp="itemListElement">
//       <div
//         className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E3A5F] text-white font-bold flex-shrink-0"
//         aria-hidden="true"
//         itemProp="position"
//       >
//         {number}
//       </div>
//       <div>
//         <h4 className="font-semibold text-gray-900 mb-1" itemProp="name">{title}</h4>
//         <p className="text-sm text-gray-600" itemProp="description">{desc}</p>
//       </div>
//     </article>
//   );
// }

// function CertificateCard({ img, title, subtitle, ...props }) {
//   return (
//     <article className="bg-white p-4 rounded-2xl shadow-md flex gap-4 items-center hover:shadow-lg transition-shadow" {...props}>
//       <img
//         src={img}
//         alt={`${title} certificate - ${subtitle} - RankUp Founder Achievement`}
//         className="w-20 h-20 object-cover rounded-lg border flex-shrink-0"
//         loading="lazy"
//         width="80"
//         height="80"
//         itemProp="image"
//       />
//       <div>
//         <h4 className="font-semibold text-gray-900 mb-1" itemProp="name">{title}</h4>
//         <p className="text-sm text-gray-600" itemProp="description">{subtitle}</p>
//       </div>
//     </article>
//   );
// }

// function TimelineItem({ year, title, institution }) {
//   return (
//     <div className="flex items-start border-l-2 border-blue-500 pl-4">
//       <div className="flex-shrink-0 w-20">
//         <span className="text-blue-600 font-semibold">{year}</span>
//       </div>
//       <div>
//         <h4 className="font-semibold text-gray-900">{title}</h4>
//         <p className="text-sm text-gray-600">{institution}</p>
//       </div>
//     </div>
//   );
// }

// function ExpertiseBadge({ title }) {
//   return (
//     <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors">
//       {title}
//     </span>
//   );
// }

// ============================================================
// FILE: components/FounderSection.jsx
// RANKUPP.IN — Premium Minimalist Founder Section 2026
// Pure CSS animations — zero framer-motion dependency
// ============================================================

"use client";

import Image from "next/image";
import Link from "next/link";

// ============================================================
// SUB-COMPONENTS
// ============================================================

function AchievementCard({ icon, title, desc, accent }) {
  return (
    <article className={`flex items-start gap-4 p-5 rounded-2xl border ${accent.border} ${accent.bg} hover:shadow-md transition-all duration-300`}>
      <div className={`w-11 h-11 rounded-xl ${accent.iconBg} flex items-center justify-center text-xl shrink-0`}
        aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-1">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </article>
  );
}

function TimelineItem({ year, title, institution, isLast }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#1E3A5F] mt-1.5 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-gray-200 mt-2 min-h-[2rem]" />}
      </div>
      <div className="pb-6">
        <span className="text-xs font-bold text-[#1E3A5F] uppercase tracking-wider">{year}</span>
        <h4 className="font-bold text-gray-900 mt-0.5 text-sm">{title}</h4>
        <p className="text-gray-500 text-xs mt-0.5">{institution}</p>
      </div>
    </div>
  );
}

function PhilosophyPill({ icon, text }) {
  return (
    <div className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all hover:border-blue-200 group">
      <span className="text-lg group-hover:scale-110 transition-transform" aria-hidden="true">{icon}</span>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}

function StatPill({ value, label }) {
  return (
    <div className="text-center px-6 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <p className="text-2xl font-extrabold text-[#1E3A5F]">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5 font-medium">{label}</p>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function FounderSection() {

  const achievements = [
    {
      icon: "⭐",
      title: "Class 12th Gold Medalist",
      desc: "Top rank in Science — the foundation that shaped a gold-standard study approach.",
      accent: { bg: "bg-yellow-50", border: "border-yellow-100", iconBg: "bg-yellow-100" },
    },
    {
      icon: "🏅",
      title: "MBBS Gold Medalist",
      desc: "Shyam Shah Medical College, Rewa — top of the batch across all 5 years of MBBS.",
      accent: { bg: "bg-orange-50", border: "border-orange-100", iconBg: "bg-orange-100" },
    },
    {
      icon: "🩺",
      title: "NEET PG AIR 1731",
      desc: "All India Rank 1731 in NEET PG — secured immediately after MBBS graduation.",
      accent: { bg: "bg-blue-50", border: "border-blue-100", iconBg: "bg-blue-100" },
    },
    {
      icon: "🏛️",
      title: "UPSC CMS Qualified",
      desc: "Union Public Service Commission Combined Medical Services — one of India's toughest.",
      accent: { bg: "bg-emerald-50", border: "border-emerald-100", iconBg: "bg-emerald-100" },
    },
    {
      icon: "📍",
      title: "MP NEET PG Rank 41",
      desc: "Among the top 41 rankers from Madhya Pradesh in NEET PG state-wise standings.",
      accent: { bg: "bg-purple-50", border: "border-purple-100", iconBg: "bg-purple-100" },
    },
  ];

  const timeline = [
    { year: "2017–18", title: "Class 12th Gold Medal", institution: "Senior Secondary School" },
    { year: "2019–24", title: "MBBS Gold Medalist", institution: "Shyam Shah Medical College, Rewa" },
    { year: "2025", title: "NEET PG AIR 1731 · MP Rank 41", institution: "National Eligibility cum Entrance Test PG" },
    { year: "2025", title: "UPSC CMS Qualified", institution: "Union Public Service Commission" },
    { year: "2023–Now", title: "Founded RankUpp", institution: "Chhatarpur, Madhya Pradesh · 2L+ Students" },
  ];

  const philosophy = [
    { icon: "📖", text: "NCERT is the only source that matters" },
    { icon: "🔁", text: "Revision quality beats revision quantity" },
    { icon: "📊", text: "Data reveals what feeling cannot" },
    { icon: "🎯", text: "Pattern recognition beats memorization" },
    { icon: "⚡", text: "Consistency compounds over intensity" },
    { icon: "🧠", text: "Concept clarity before question practice" },
  ];

  const expertise = [
    "NEET UG Strategy", "NEET Biology", "Revision Planning",
    "Mock Test Analysis", "PYQ Pattern Recognition", "NCERT Mastery",
    "Time Management", "Exam Temperament",
  ];

  const certImages = [
    { src: "/goldmedalce.webp", alt: "NEET PG AIR 1731 certificate of RankUpp founder — All India Rank proof", caption: "NEET PG AIR 1731" },
    { src: "/medal.webp", alt: "MBBS Gold Medal certificate from Shyam Shah Medical College Rewa", caption: "MBBS Gold Medal" },
    { src: "/mbbs.webp", alt: "RankUpp founder during MBBS at Shyam Shah Medical College", caption: "MBBS, SSMC Rewa" },
    { src: "/upsc.webp", alt: "UPSC Combined Medical Services qualification certificate of RankUpp founder", caption: "UPSC CMS Qualified" },
  ];

  return (
    <section
      className="w-full bg-white py-0"
      itemScope
      itemType="https://schema.org/AboutPage"
      aria-label="About the Founder of RankUpp"
    >

      {/* ══════════════════════════════════════════
          HERO — MINIMAL SPLIT
      ══════════════════════════════════════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1E3A5F] to-[#0d2340] relative overflow-hidden">
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
          aria-hidden="true" />
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">

          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 bg-white/8 border border-white/12 px-4 py-2 rounded-full mb-7 tracking-wide">
              <span aria-hidden="true">🏅</span> MBBS Gold Medalist · NEET PG AIR 1731 · UPSC CMS
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
              itemProp="headline">
              The Doctor Who<br />Built{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                RankUpp
              </span>{" "}
              For You
            </h1>

            <p className="mt-6 text-blue-100/80 text-lg leading-relaxed max-w-md"
              itemProp="description">
              A Gold Medalist MBBS doctor who cleared NEET PG and UPSC CMS —
              then built the preparation platform every NEET aspirant deserves,
              regardless of their coaching budget.
            </p>

            {/* Credential badges */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { t: "🏅 MBBS Gold Medal", c: "bg-yellow-400/15 border-yellow-400/25 text-yellow-200" },
                { t: "🩺 NEET PG AIR 1731", c: "bg-blue-400/15 border-blue-400/25 text-blue-200" },
                { t: "🏛️ UPSC CMS", c: "bg-emerald-400/15 border-emerald-400/25 text-emerald-200" },
                { t: "📍 MP Rank 41", c: "bg-purple-400/15 border-purple-400/25 text-purple-200" },
              ].map((b) => (
                <span key={b.t} className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${b.c}`}>{b.t}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/neet-mock-test-online"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg"
                aria-label="Start free NEET practice on RankUpp">
                🚀 Start Practicing Free
              </Link>
              <Link href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white/8 border border-white/15 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/15 transition-all"
                aria-label="Learn more about RankUpp">
                About RankUpp →
              </Link>
            </div>
          </div>

          {/* Right: Photo + floating badge */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-yellow-400/20 to-blue-600/20 rounded-3xl blur-xl" aria-hidden="true" />
              <div className="relative bg-white/6 border border-white/10 rounded-3xl p-2 shadow-2xl">
                <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-white/10">
                  <Image
                    src="/medal.webp"
                    alt="RankUpp founder — MBBS Gold Medalist and NEET PG AIR 1731 holder — medical educator and platform builder"
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-extrabold px-4 py-2 rounded-xl shadow-lg whitespace-nowrap">
                  🏆 MBBS Gold Medalist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          STATS ROW
      ══════════════════════════════════════════ */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatPill value="2L+" label="Students Guided" />
          <StatPill value="700+" label="Top Scorers Mentored" />
          <StatPill value="AIR 1731" label="NEET PG Rank" />
          <StatPill value="4.8★" label="Platform Rating" />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN TWO-COLUMN BODY
      ══════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-10 grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT COLUMN */}
        <div className="space-y-4">

          {/* Certificate photo grid */}
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Verified Credentials
            </h2>
            <div className="grid grid-cols-2 gap-3"
              itemScope itemType="https://schema.org/ImageGallery"
              aria-label="Founder credential certificates">
              {certImages.map((img) => (
                <figure key={img.src}
                  className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 group"
                  itemScope itemType="https://schema.org/ImageObject">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="280"
                    height="280"
                    itemProp="contentUrl"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                    <span className="text-white text-xs font-semibold">{img.caption}</span>
                  </figcaption>
                  <meta itemProp="description" content={img.alt} />
                </figure>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              Educational Journey
            </h2>
            <div itemScope itemType="https://schema.org/EducationalOccupationalCredential">
              {timeline.map((item, i) => (
                <TimelineItem
                  key={item.year}
                  {...item}
                  isLast={i === timeline.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Philosophy pills */}
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Core Beliefs
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {philosophy.map((p) => (
                <PhilosophyPill key={p.text} {...p} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">

          {/* Bio */}
          <div>
            <span className="text-xs font-bold text-[#1E3A5F] uppercase tracking-widest">Meet the Founder</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-tight"
              itemProp="name">
              Your Guide to<br />Medical Success
            </h2>

            <div className="mt-5 space-y-4 text-gray-600 leading-relaxed text-base"
              itemProp="description">
              <p>
                My journey started with a simple dream — to excel in medicine and
                help others do the same. After winning the{" "}
                <strong className="font-semibold text-gray-900">Gold Medal in Class 12th</strong>,
                I pursued MBBS at{" "}
                <strong className="font-semibold text-gray-900">Shyam Shah Medical College, Rewa</strong>{" "}
                — and earned another{" "}
                <strong className="font-semibold text-gray-900">Gold Medal</strong> there too.
              </p>
              <p>
                Right after MBBS, I cracked{" "}
                <strong className="font-semibold text-gray-900">NEET PG with AIR 1731</strong>{" "}
                and <strong className="font-semibold text-gray-900">MP State Rank 41</strong>,
                and qualified the{" "}
                <strong className="font-semibold text-gray-900">UPSC Combined Medical Services</strong> exam.
              </p>
              <p>
                After years of teaching NEET aspirants, I kept seeing the same gap:
                students working incredibly hard, but without the right system. So I
                built RankUpp — to give every NEET aspirant quality practice that
                coaches charge lakhs for, completely free.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4"
              id="achievements-heading">
              Achievements
            </h2>
            <div className="space-y-3" aria-labelledby="achievements-heading">
              {achievements.map((a) => (
                <AchievementCard key={a.title} {...a} />
              ))}
            </div>
          </div>

          {/* Founder's letter */}
          {/* <div className="bg-gradient-to-br from-[#f8faff] to-white rounded-2xl border border-gray-100 p-6 shadow-sm"
            role="article" aria-label="Message from the Founder"
            itemScope itemType="https://schema.org/CreativeWork">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] text-white font-bold text-lg flex items-center justify-center shrink-0">R</div>
              <div>
                <p className="font-bold text-gray-900 text-sm" itemProp="headline">A Word from the Founder</p>
                <p className="text-gray-400 text-xs">MBBS Gold Medalist · NEET PG AIR 1731</p>
              </div>
            </div>
            <div className="text-3xl text-[#1E3A5F]/10 font-serif leading-none mb-1 select-none" aria-hidden="true">"</div>
            <blockquote className="text-gray-600 text-sm leading-relaxed italic pl-2" itemProp="description">
              I built RankUpp so that geography and budget would never be the reason
              a determined student misses their medical dream. If you're willing to work
              with the right system — NCERT-first, PYQ-driven, data-guided revision —
              the rank will follow. That's not motivation. That's a method. And this platform
              is that method, built from everything I learned the hard way.
            </blockquote>
            <footer className="mt-4 text-xs font-bold text-[#1E3A5F]">— RankUpp Founder</footer>
          </div> */}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3"
            aria-label="Get started with RankUpp NEET preparation">
            <Link href="/neet-mock-test-online"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#162d4a] hover:scale-105 transition-all shadow-md"
              aria-label="Start free NEET practice on RankUpp"
              itemProp="url">
              🚀 Start Practicing — Free
            </Link>
            <Link href="/neet-pyq"
              className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-6 py-3.5 rounded-xl font-semibold text-sm hover:border-[#1E3A5F] hover:text-[#1E3A5F] transition-all"
              aria-label="Practice NEET PYQs on RankUpp">
              📋 NEET PYQ Practice
            </Link>
          </div>

          {/* Expertise badges */}
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3"
              id="expertise-heading">
              Areas of Expertise
            </h2>
            <div className="flex flex-wrap gap-2" aria-labelledby="expertise-heading">
              {expertise.map((e) => (
                <span key={e}
                  className="px-3 py-1.5 bg-blue-50 text-blue-800 text-xs font-semibold rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors cursor-default">
                  {e}
                </span>
              ))}
            </div>
          </div>

          {/* Trust disclaimer */}
          <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-4">
            RankUpp is an independent educational platform — not affiliated with NTA or any government body.
            All preparation content is based on NCERT textbooks. Credential details shown have been self-disclosed
            by the founder and are displayed for transparency.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HowTo ROADMAP — FULL WIDTH
      ══════════════════════════════════════════ */}
      <div className="bg-gray-50 border-t border-gray-100 py-16 px-4 md:px-8"
        itemScope itemType="https://schema.org/HowTo">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Proven Method</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2" itemProp="name">
              The Roadmap That Worked For the Founder
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm" itemProp="description">
              5 sequential steps — from conceptual clarity to exam execution — that produced AIR 1731 in NEET PG.
            </p>
            <meta itemProp="totalTime" content="P12M" />
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { n: "01", icon: "📖", title: "NCERT Mastery", desc: "Read every line. Every diagram. Every example. NCERT is the only primary source NEET tests from." },
              { n: "02", icon: "📂", title: "Chapter PYQs", desc: "After each chapter, solve all PYQs for that topic. Reveals what NTA actually tests vs what seems important." },
              { n: "03", icon: "🔁", title: "Spaced Revision", desc: "Revisit chapters at 1 day, 7 days, 21 days intervals. Prevents forgetting under the Ebbinghaus curve." },
              { n: "04", icon: "🧪", title: "Full Mock Tests", desc: "Timed full-length tests build the execution discipline that pure studying never can." },
              { n: "05", icon: "📊", title: "Data-Guided Fix", desc: "After each test, let accuracy data — not feeling — decide where you revise next." },
            ].map((step) => (
              <article key={step.n}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all text-center group"
                itemScope itemProp="step" itemType="https://schema.org/HowToStep">
                <span className="text-3xl font-black text-gray-100 block group-hover:text-blue-50 transition-colors">{step.n}</span>
                <span className="text-2xl block my-2" role="img" aria-label={step.title}>{step.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-2" itemProp="name">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed" itemProp="description">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}