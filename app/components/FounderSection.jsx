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
//                   Meet Our Founder — <span className="text-4xl font-extrabold leading-snug drop-shadow-sm text-[#1E3A5F]">Your Guide to Medical Success</span>
//                 </h1>
//               </header>

//               <p className="text-gray-700 text-lg leading-relaxed" itemProp="description">
//                 My journey started with a simple dream - to excel in medicine and help others do the same.
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
//               <h2 className="text-2xl font-bold text-gray-900 mb-3" itemProp="headline">My Learning Philosophy</h2>
//               <p className="text-gray-700 mb-4" itemProp="description">
//                 Success isn't about being the smartest - it's about being the most consistent.
//                 Through my journey, I discovered that the right strategy, daily discipline,
//                 and smart revision can help any dedicated student achieve their dreams.
//               </p>
//               <ul className="text-gray-700 list-disc pl-5 space-y-2" role="list" itemProp="about">
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
//               <h2 className="text-2xl font-bold text-gray-900 mb-3" itemProp="name">The Roadmap That Worked For Me</h2>
//               <p className="text-gray-600 mb-4" itemProp="description">Follow these 5 proven steps to medical exam success</p>
//               <div className="grid gap-3" role="list" aria-label="Success steps" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
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


//              {/* Expertise Section */}
//             <section aria-labelledby="expertise-heading">
//               <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border-t">
//                 <div className="flex items-center mb-4">
//                   <FaLightbulb className="text-yellow-500 text-2xl mr-3" aria-hidden="true" />
//                   <h2 id="expertise-heading" className="text-xl font-bold text-gray-900">Areas of Expertise</h2>
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
//                 <h2 id="trust-heading" className="text-2xl font-bold text-gray-900 mb-2" itemProp="headline">Why Trust My Guidance?</h2>
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
//                   <h2 id="timeline-heading" className="text-2xl font-bold text-gray-900">Educational Journey</h2>
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
//             <section aria-labelledby="certificates-heading">
//               <div className="max-w-6xl mx-auto mt-12">
//                 <div className="flex items-center mb-4">
//                   <FaAward className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
//                   <h2 id="certificates-heading" className="text-xl font-bold text-gray-900">My Achievements & Certificates</h2>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" itemScope itemType="https://schema.org/AchieveAction">
//                   <CertificateCard
//                     img="/cert-mbbs.jpg"
//                     title="MBBS Gold Medal"
//                     subtitle="Top Performer — SSMC Rewa"
//                     itemProp="object"
//                   />
//                   <CertificateCard
//                     img="/cert-neetpg.jpg"
//                     title="NEET PG — AIR 1731"
//                     subtitle="National Rank"
//                     itemProp="object"
//                   />
//                   <CertificateCard
//                     img="/cert-cms.jpg"
//                     title="UPSC CMS Qualified"
//                     subtitle="Combined Medical Services"
//                     itemProp="object"
//                   />
//                   <CertificateCard
//                     img="/cert-quiz.jpg"
//                     title="Quick Quiz Champion"
//                     subtitle="Inter-school Competition"
//                     itemProp="object"
//                   />
//                 </div>
//               </div>
//             </section>


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
//         <h3 className="font-semibold text-gray-900 mb-1" itemProp="name">{title}</h3>
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
//         <h3 className="font-semibold text-gray-900 mb-1" itemProp="name">{title}</h3>
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

"use client";

import { motion } from "framer-motion";
import {
  FaMedal,
  FaTrophy,
  FaUserMd,
  FaStar,
  FaHeartbeat,
  FaGratipay,
  FaBookOpen,
  FaArrowRight,
  FaUniversity,
  FaAward,
  FaChartLine,
  FaLightbulb
} from "react-icons/fa";

export default function FounderSection() {
  // Schema.org data with complete organization and person schema
  const founderSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rankupp.in/#founder",
        "name": "RankUp Founder",
        "jobTitle": "Medical Educator & NEET PG Mentor",
        "description": "MBBS Gold Medalist, NEET PG AIR 1731, UPSC CMS Qualified medical educator helping students achieve success in medical entrance exams.",
        "image": "https://rankupp.in/founder.jpg",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Shyam Shah Medical College, Rewa",
          "sameAs": "https://en.wikipedia.org/wiki/Shyam_Shah_Medical_College"
        },
        "award": [
          "Class 12th Gold Medalist",
          "MBBS Gold Medalist",
          "NEET PG AIR 1731",
          "UPSC CMS Qualified",
          "Rank 41 in Madhya Pradesh NEET PG"
        ],
        "hasCredential": "MBBS, Gold Medalist",
        "knowsAbout": [
          "NEET PG Preparation",
          "NEET UG Preparation",
          "Medical Education",
          "Competitive Exam Strategy",
          "UPSC CMS Examination",
          "Study Techniques",
          "Time Management",
          "Revision Strategies"
        ],
        "url": "https://rankupp.in/about",
        "sameAs": [
          "https://linkedin.com/in/rankup-founder",
          "https://twitter.com/rankupfounder",
          "https://facebook.com/rankupfounder"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://rankupp.in/#organization",
        "name": "RankUp NEET-UG Preparation Platform",
        "description": "Premium NEET-UG and NEET PG preparation platform founded by medical toppers.",
        "url": "https://rankupp.in",
        "logo": "https://rankupp.in/logo.png",
        "founder": {
          "@id": "https://rankupp.in/#founder"
        },
        "foundingDate": "2023",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chhatarpur",
          "addressRegion": "Madhya Pradesh",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://rankupp.in/founder",
        "name": "Meet Our Founder - RankUp Medical Education",
        "description": "Learn about our founder's journey from Gold Medalist to NEET PG AIR 1731 and how his proven strategies can help you succeed.",
        "url": "https://rankupp.in/founder",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://rankupp.in/founder-hero.jpg",
          "width": 1200,
          "height": 630
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-01"
      }
    ]
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-4 sm:px-6" itemScope itemType="https://schema.org/AboutPage">
      {/* Schema.org Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(founderSchema)
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side — Images and Additional Content */}
          <div className="space-y-8">
            {/* Images Grid with SEO optimized alt texts */}
            <div className="block md:hidden">
              <header>
                <h1 className="text-4xl font-bold text-gray-900 leading-tight" itemProp="headline">
                  Meet Our Founder — <span className="text-4xl font-extrabold leading-snug drop-shadow-sm text-[#1E3A5F]">Your Guide to Medical Success</span>
                </h1>
              </header>

              <p className="text-gray-700 text-lg leading-relaxed" itemProp="description">
                My journey started with a simple dream - to excel in medicine and help others do the same.
                After winning the <strong className="font-semibold" itemProp="award">Gold Medal in Class 12th</strong>, I pursued MBBS at
                <strong className="font-semibold" itemProp="alumniOf"> Shyam Shah Medical College, Rewa</strong> where I continued my
                academic excellence by earning another <strong className="font-semibold" itemProp="award">Gold Medal</strong>.
                Right after MBBS, I cracked <strong className="font-semibold" itemProp="award">NEET PG with All India Rank 1731</strong>
                and also qualified the <strong className="font-semibold" itemProp="award">UPSC Combined Medical Services</strong> exam.
              </p>

              <section aria-labelledby="achievements-heading">
                <h2 id="achievements-heading" className="sr-only">Academic and Professional Achievements</h2>
                <div className="space-y-4" itemScope itemProp="hasCredential">
                  <Achievement
                    icon={<FaStar className="text-yellow-500 text-2xl" aria-hidden="true" />}
                    title="Class 12th Gold Medalist"
                    desc="Secured top position in school with outstanding scores in Science subjects"
                    itemProp="award"
                  />

                  <Achievement
                    icon={<FaMedal className="text-red-500 text-2xl" aria-hidden="true" />}
                    title="MBBS Gold Medalist"
                    desc="Awarded gold medal for academic excellence throughout medical college"
                    itemProp="award"
                  />

                  <Achievement
                    icon={<FaTrophy className="text-blue-600 text-2xl" aria-hidden="true" />}
                    title="NEET PG AIR 1731"
                    desc="Achieved excellent national rank right after completing MBBS"
                    itemProp="award"
                  />

                  <Achievement
                    icon={<FaGratipay className="text-pink-600 text-2xl" aria-hidden="true" />}
                    title="UPSC CMS Qualified"
                    desc="Cleared the prestigious Combined Medical Services examination"
                    itemProp="award"
                  />

                  <Achievement
                    icon={<FaHeartbeat className="text-indigo-600 text-2xl" aria-hidden="true" />}
                    title="Rank 41 in Madhya Pradesh"
                    desc="Among the top rankers from the state in NEET PG"
                    itemProp="award"
                  />
                </div>
              </section>
            </div>

            {/* Images Section with Lazy Loading and SEO Optimization */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
              itemScope
              itemType="https://schema.org/ImageGallery"
            >
              <div className="grid grid-cols-2 gap-4">
                <figure itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
                  <img
                    src="/goldmedalce.webp"
                    alt="NEET PG Rank 1731 Certificate - RankUp Medical Education Founder Achievement"
                    className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full w-full"
                    loading="lazy"
                    width="400"
                    height="300"
                    itemProp="contentUrl"
                  />
                  <figcaption className="sr-only" itemProp="caption">NEET PG AIR 1731 Certificate - Founder's Achievement</figcaption>
                  <meta itemProp="description" content="NEET PG AIR 1731 certificate of RankUp founder" />
                </figure>
                <figure itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
                  <img
                    src="/medal.webp"
                    alt="MBBS Gold Medal Achievement - Medical College Excellence Award"
                    className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full w-full"
                    loading="lazy"
                    width="400"
                    height="300"
                    itemProp="contentUrl"
                  />
                  <figcaption className="sr-only" itemProp="caption">MBBS Gold Medal - Academic Excellence</figcaption>
                  <meta itemProp="description" content="MBBS Gold Medal earned by RankUp founder" />
                </figure>
                <figure itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
                  <img
                    src="mbbs.webp"
                    alt="Medical College Founder Portrait - RankUp Medical Mentor Profile"
                    className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full w-full"
                    loading="lazy"
                    width="400"
                    height="300"
                    itemProp="contentUrl"
                  />
                  <figcaption className="sr-only" itemProp="caption">Founder Profile - Medical Education Expert</figcaption>
                  <meta itemProp="description" content="Portrait of RankUp founder during MBBS" />
                </figure>
                <figure itemProp="associatedMedia" itemScope itemType="https://schema.org/ImageObject">
                  <img
                    src="upsc.webp"
                    alt="Class 12th Gold Medal Certificate - Academic Excellence Proof"
                    className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full w-full"
                    loading="lazy"
                    width="400"
                    height="300"
                    itemProp="contentUrl"
                  />
                  <figcaption className="sr-only" itemProp="caption">Class 12 Gold Medal Certificate</figcaption>
                  <meta itemProp="description" content="Class 12 Gold Medal certificate of RankUp founder" />
                </figure>
              </div>

              {/* Floating Badge with semantic HTML */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl px-6 py-3 flex items-center gap-3" role="complementary" aria-label="Founder Credentials" itemProp="jobTitle">
                <FaUserMd className="text-blue-600 text-2xl" aria-hidden="true" />
                <p className="font-semibold text-gray-700 text-lg">MBBS Gold Medalist | NEET PG AIR 1731</p>
              </div>
            </motion.div>

            {/* My Approach Box with semantic structure */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-12 bg-white p-6 shadow-lg rounded-2xl border-l-4 border-[#1E3A5F]"
              role="article"
              aria-label="Learning Philosophy"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3" itemProp="headline">My Learning Philosophy</h3>
              <p className="text-gray-700 mb-4" itemProp="description">
                Success isn't about being the smartest - it's about being the most consistent.
                Through my journey, I discovered that the right strategy, daily discipline,
                and smart revision can help any dedicated student achieve their dreams.
              </p>
              <ul className="text-gray-700 list-disc pl-5 space-y-2" role="list" itemProp="about">
                <li role="listitem"><strong className="font-semibold">Concept Clarity:</strong> Building strong fundamentals that last</li>
                <li role="listitem"><strong className="font-semibold">Smart Revision:</strong> Quality over quantity in study hours</li>
                <li role="listitem"><strong className="font-semibold">Exam Strategy:</strong> Learning what to study and what to skip</li>
                <li role="listitem"><strong className="font-semibold">Consistency:</strong> Small daily steps lead to big results</li>
              </ul>
              <meta itemProp="keywords" content="medical education, study techniques, exam strategy, revision methods" />
            </motion.div>

            {/* Step-by-step guide box with ordered list semantics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white p-6 shadow-lg rounded-2xl border-l-4 border-[#1E3A5F]"
              role="article"
              aria-label="Success Roadmap"
              itemScope
              itemType="https://schema.org/HowTo"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3" itemProp="name">The Roadmap That Worked For Me</h3>
              <p className="text-gray-600 mb-4" itemProp="description">Follow these 5 proven steps to medical exam success</p>
              <div className="grid gap-3" role="list" aria-label="Success steps" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                <RoadmapStep number={1} title="Strong Foundation" desc="Focus on understanding concepts deeply rather than memorizing" />
                <RoadmapStep number={2} title="Consistent Learning" desc="Regular study schedule with proper breaks and revisions" />
                <RoadmapStep number={3} title="Smart Preparation" desc="Identifying high-yield topics and mastering them thoroughly" />
                <RoadmapStep number={4} title="Practice & Tests" desc="Regular mock tests to build speed and accuracy" />
                <RoadmapStep number={5} title="Revision Strategy" desc="Systematic revision plan to retain what you've learned" />
              </div>
              <meta itemProp="totalTime" content="P12M" />
              <meta itemProp="estimatedCost" content="Free guidance" />
            </motion.div>

            {/* Testimonial Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center mb-4">
                <FaChartLine className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
                <h3 className="text-xl font-bold text-gray-900" itemProp="name">Success Rate</h3>
              </div>
              <p className="text-gray-700 mb-3" itemProp="reviewBody">
                "Using the same strategies I developed, hundreds of students have improved their NEET UG scores by 40%+"
              </p>
              <div className="flex justify-between text-sm text-gray-600">
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">RankUp Founder</span>
                </span>
                <span itemProp="datePublished">December 2024</span>
              </div>
              <div className="mt-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="bestRating" content="5" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" aria-hidden="true" />
                  ))}
                </div>
              </div>
            </motion.div>


             {/* Expertise Section */}
            <section aria-labelledby="expertise-heading">
              <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border-t">
                <div className="flex items-center mb-4">
                  <FaLightbulb className="text-yellow-500 text-2xl mr-3" aria-hidden="true" />
                  <h3 id="expertise-heading" className="text-xl font-bold text-gray-900">Areas of Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ExpertiseBadge title="NEET UG Strategy" />
                  <ExpertiseBadge title="Medical Concepts" />
                  <ExpertiseBadge title="Time Management" />
                  <ExpertiseBadge title="Revision Techniques" />
                  <ExpertiseBadge title="Mock Test Analysis" />
                  <ExpertiseBadge title="Stress Management" />
                </div>
              </div>
            </section>
          </div>

          {/* Right Side — Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
            itemScope
            itemType="https://schema.org/Person"
            itemID="https://rankupp.in/#founder"
          >
            {/* Main Heading with proper hierarchy - Desktop */}
            <div className="hidden md:block">
              <header>
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6" itemProp="headline">
                  Meet Our Founder — <span className="text-4xl font-extrabold leading-snug drop-shadow-sm text-[#1E3A5F]">Your Guide to Medical Success</span>
                </h1>
              </header>

              <p className="text-gray-700 text-lg leading-relaxed mb-8" itemProp="description">
                My journey started with a simple dream - to excel in medicine and help others do the same.
                After winning the <strong className="font-semibold" itemProp="award">Gold Medal in Class 12th</strong>, I pursued MBBS at
                <strong className="font-semibold" itemProp="alumniOf"> Shyam Shah Medical College, Rewa</strong> where I continued my
                academic excellence by earning another <strong className="font-semibold" itemProp="award">Gold Medal</strong>.
                Right after MBBS, I cracked <strong className="font-semibold" itemProp="award">NEET PG with All India Rank 1731</strong>
                and also qualified the <strong className="font-semibold" itemProp="award">UPSC Combined Medical Services</strong> exam.
              </p>

              <section aria-labelledby="achievements-heading">
                <h2 id="achievements-heading" className="sr-only">Academic and Professional Achievements</h2>
                <div className="space-y-4" itemProp="award">
                  <Achievement
                    icon={<FaStar className="text-yellow-500 text-2xl" aria-hidden="true" />}
                    title="Class 12th Gold Medalist"
                    desc="Secured top position in school with outstanding scores in Science subjects"
                  />

                  <Achievement
                    icon={<FaMedal className="text-red-500 text-2xl" aria-hidden="true" />}
                    title="MBBS Gold Medalist"
                    desc="Awarded gold medal for academic excellence throughout medical college"
                  />

                  <Achievement
                    icon={<FaTrophy className="text-blue-600 text-2xl" aria-hidden="true" />}
                    title="NEET PG AIR 1731"
                    desc="Achieved excellent national rank right after completing MBBS"
                  />

                  <Achievement
                    icon={<FaGratipay className="text-pink-600 text-2xl" aria-hidden="true" />}
                    title="UPSC CMS Qualified"
                    desc="Cleared the prestigious Combined Medical Services examination"
                  />

                  <Achievement
                    icon={<FaHeartbeat className="text-indigo-600 text-2xl" aria-hidden="true" />}
                    title="Rank 41 in Madhya Pradesh"
                    desc="Among the top rankers from the state in NEET PG"
                  />
                </div>
              </section>
            </div>

            {/* CTA Section with proper button semantics */}
            <section aria-labelledby="cta-heading">
              <h2 id="cta-heading" className="sr-only">Join RankUp Program</h2>
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="/join"
                  className="inline-flex items-center gap-3 bg-[#1E3A5F] text-white font-semibold px-5 py-3 rounded-xl shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-1"
                  aria-label="Start your medical success journey with RankUp NEET UG coaching - Join now"
                  itemProp="url"
                >
                  <FaBookOpen aria-hidden="true" />
                  Start Your Medical Success Journey
                  <FaArrowRight aria-hidden="true" />
                </a>

                <p className="text-gray-600 text-sm">
                  Ready to follow the same proven path? Join RankUp to get my exact study plans,
                  revision strategies, and mentorship for NEET UG success.
                </p>
              </div>
            </section>

            {/* Trust Section */}
            <section aria-labelledby="trust-heading">
              <div className="mt-8 bg-white p-6 shadow-xl rounded-2xl border-l-4 border-[#1E3A5F]" itemScope itemType="https://schema.org/CreativeWork">
                <h3 id="trust-heading" className="text-2xl font-bold text-gray-900 mb-2" itemProp="headline">Why Trust My Guidance?</h3>
                <p className="text-gray-700 leading-relaxed text-base" itemProp="description">
                  I've walked the path you're on right now. From classroom learning to competitive exams,
                  I understand the challenges and know what it takes to succeed. At RankUp, I've distilled
                  everything I learned into a clear, practical program that can help you achieve your medical
                  career dreams too. It's not about working harder - it's about working smarter.
                </p>
                <meta itemProp="keywords" content="medical mentor, exam guidance, NEET preparation, medical career" />
              </div>
            </section>

            {/* Experience Timeline */}
            <section aria-labelledby="timeline-heading">
              <div className="mt-8 bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <FaUniversity className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
                  <h3 id="timeline-heading" className="text-2xl font-bold text-gray-900">Educational Journey</h3>
                </div>
                <div className="space-y-4" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
                  <TimelineItem year="2017-2018" title="Class 12th Gold Medal" institution="Senior Secondary School" />
                  <TimelineItem year="2019-2024" title="MBBS Gold Medalist" institution="Shyam Shah Medical College, Rewa" />
                  <TimelineItem year="2025" title="NEET PG AIR 1731" institution="National Eligibility cum Entrance Test" />
                  <TimelineItem year="2025" title="UPSC CMS Qualified" institution="Union Public Service Commission" />
                </div>
              </div>
            </section>

            {/* Certificates Section */}
            <section aria-labelledby="certificates-heading">
              <div className="max-w-6xl mx-auto mt-12">
                <div className="flex items-center mb-4">
                  <FaAward className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
                  <h3 id="certificates-heading" className="text-xl font-bold text-gray-900">My Achievements & Certificates</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" itemScope itemType="https://schema.org/AchieveAction">
                  <CertificateCard
                    img="/cert-mbbs.jpg"
                    title="MBBS Gold Medal"
                    subtitle="Top Performer — SSMC Rewa"
                    itemProp="object"
                  />
                  <CertificateCard
                    img="/cert-neetpg.jpg"
                    title="NEET PG — AIR 1731"
                    subtitle="National Rank"
                    itemProp="object"
                  />
                  <CertificateCard
                    img="/cert-cms.jpg"
                    title="UPSC CMS Qualified"
                    subtitle="Combined Medical Services"
                    itemProp="object"
                  />
                  <CertificateCard
                    img="/cert-quiz.jpg"
                    title="Quick Quiz Champion"
                    subtitle="Inter-school Competition"
                    itemProp="object"
                  />
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Achievement({ icon, title, desc, ...props }) {
  return (
    <article className="flex gap-4 items-start p-3 hover:bg-blue-50 rounded-lg transition-colors" role="listitem" {...props}>
      <div className="p-3 bg-white rounded-xl shadow-md flex-shrink-0" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-900 mb-1" itemProp="name">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">{desc}</p>
      </div>
    </article>
  );
}

function RoadmapStep({ number, title, desc }) {
  return (
    <article className="flex gap-4 items-start bg-gray-50 p-3 rounded-lg hover:bg-blue-50 transition-colors" role="listitem" itemScope itemProp="itemListElement">
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E3A5F] text-white font-bold flex-shrink-0"
        aria-hidden="true"
        itemProp="position"
      >
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1" itemProp="name">{title}</h4>
        <p className="text-sm text-gray-600" itemProp="description">{desc}</p>
      </div>
    </article>
  );
}

function CertificateCard({ img, title, subtitle, ...props }) {
  return (
    <article className="bg-white p-4 rounded-2xl shadow-md flex gap-4 items-center hover:shadow-lg transition-shadow" {...props}>
      <img
        src={img}
        alt={`${title} certificate - ${subtitle} - RankUp Founder Achievement`}
        className="w-20 h-20 object-cover rounded-lg border flex-shrink-0"
        loading="lazy"
        width="80"
        height="80"
        itemProp="image"
      />
      <div>
        <h4 className="font-semibold text-gray-900 mb-1" itemProp="name">{title}</h4>
        <p className="text-sm text-gray-600" itemProp="description">{subtitle}</p>
      </div>
    </article>
  );
}

function TimelineItem({ year, title, institution }) {
  return (
    <div className="flex items-start border-l-2 border-blue-500 pl-4">
      <div className="flex-shrink-0 w-20">
        <span className="text-blue-600 font-semibold">{year}</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{institution}</p>
      </div>
    </div>
  );
}

function ExpertiseBadge({ title }) {
  return (
    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors">
      {title}
    </span>
  );
}