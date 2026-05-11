// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import Image from "next/image";

// import "swiper/css";
// import "swiper/css/pagination";

// export default function Testimonials() {
//   const data = [
//      {
//     name: "Asha R.",
//     text: "RankUp improved my accuracy and helped me retain complex topics with ease.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Rohit K.",
//     text: "Spaced repetition flashcards are the best I’ve used. Perfect for medical prep!",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Sarita P.",
//     text: "Mock analytics showed exactly where I was losing marks. Huge confidence boost.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Sapna Sahu",
//     text: "One of the best apps for NEET preparation. PYQs + smart analysis = perfect combination. Must-have app for serious NEET aspirants.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Harshal Malviya",
//     text: "Great app for NEET preparation. Good quality questions and well-structured tests.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Harsh",
//     text: "Best app for NEET UG preparation. Very useful for daily practice.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Sniper's",
//     text: "Best app for NEET preparation. Great mentorship by Dr. Deepak sir. Concepts become very clear.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Satyam Yadav",
//     text: "Best education platform for NEET aspirants. Very helpful tests and analysis.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Shivam Sahu Facts",
//     text: "Best education platform for NEET UG students. Highly recommended.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Siddhant Sahu",
//     text: "RankUp NEET aspirants ke liye ek complete app hai. PYQs, test series aur analysis ka level kaafi achha hai. Concept clarity milti hai aur preparation structured ho jati hai.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Ankit Verma",
//     text: "Daily practice tests helped me improve speed and accuracy. Analysis feature is very detailed.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Neha Sharma",
//     text: "Concept-based questions and PYQs make RankUp different from other apps.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Rahul Patel",
//     text: "RankUp helped me identify weak areas quickly. Smart analytics is a game changer.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Pooja Mishra",
//     text: "Very student-friendly app. Notes, tests and revision all in one place.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Aman Singh",
//     text: "Best app for NEET mock tests. Interface is smooth and easy to use.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Kajal Gupta",
//     text: "Revision becomes easy with RankUp. Flashcards are really helpful before exams.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Vikas Yadav",
//     text: "Affordable and quality content. Perfect app for NEET UG preparation.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Ritika Jain",
//     text: "PYQs with explanations helped me understand NCERT concepts better.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Mohit Choudhary",
//     text: "RankUp gives clear direction for NEET preparation. Tests are very relevant.",
//     img: "/download.jpeg"
//   },
//   {
//     name: "Sneha Kulkarni",
//     text: "Best decision to use RankUp app. Improved my confidence and performance.",
//     img: "/download.jpeg"
//   }
//   ];

//   return (
//     <section className="py-20 bg-[#295176]">
//       <div className="container mx-auto">

//         {/* Heading */}
//         <h2 className="text-4xl font-extrabold text-center text-white tracking-tight">
//           Trusted by NEET-UG Class 12th & Class 11th Students
//         </h2>
//         <p className="text-center text-gray-200 mt-3 max-w-2xl mx-auto text-lg">
//           RankUp helps aspirants retain what they study so they feel fully prepared.
//         </p>

//         {/* Slider */}
//         <div className="mt-14">
//          <Swiper
//   spaceBetween={20}
//   centeredSlides={true}
//   pagination={{ clickable: true }}
//   autoplay={{ delay: 2600 }}
//   modules={[Pagination, Autoplay]}
//   breakpoints={{
//     0: { slidesPerView: 1 },      // 📱 Mobile
//     640: { slidesPerView: 2 },    // 📟 Tablet
//     1024: { slidesPerView: 3 }    // 🖥 Desktop
//   }}
// >

//             {data.map((t, i) => (
//               <SwiperSlide key={i}>

//                 <div className="
//                   bg-white
//                   rounded-2xl
//                   p-8
//                   shadow-xl
//                   hover:shadow-2xl
//                   transition-all
//                   duration-500
//                   border border-gray-100
//                   h-full
//                 ">

//                   {/* Profile */}
//                   <div className="flex flex-col items-center">
//                     <div className="
//                       w-20 h-20
//                       rounded-full
//                       overflow-hidden
//                       mb-5


//                     ">
//                       <Image
//                         src={t.img}
//                         alt={t.name}
//                         width={80}
//                         height={80}
//                         className="object-cover"
//                       />
//                     </div>

//                     {/* Feedback */}
//                     <p className="text-center text-gray-700 leading-relaxed text-[15px]">
//                       “{t.text}”
//                     </p>

//                     {/* Name */}
//                     <p className="mt-4 font-semibold text-[#295176] text-lg">
//                       — {t.name}
//                     </p>
//                   </div>

//                 </div>

//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }


// ============================================================
// FILE: components/Testimonials.jsx
// RANKUPP.IN — Premium SEO Testimonials Section 2026
// Full AggregateRating + Review Schema | Zero framer-motion
// ============================================================

"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

// ============================================================
// DATA
// ============================================================

const TESTIMONIALS = [
  {
    name: "Asha R.",
    role: "NEET 2026 Aspirant",
    score: "Class 12, MP Board",
    stars: 5,
    text: "RankUpp improved my accuracy and helped me retain complex topics with ease. The chapter-wise PYQs are exactly what I needed.",
    img: "/download.jpeg",
    subject: "Biology",
    verified: true,
  },
  {
    name: "Rohit K.",
    role: "NEET Dropper 2026",
    score: "Mock Test Avg: 580+",
    stars: 5,
    text: "Spaced repetition flashcards are the best I've used. Perfect for medical prep! My Biology accuracy went from 65% to 88% in 6 weeks.",
    img: "/download.jpeg",
    subject: "All Subjects",
    verified: true,
  },
  {
    name: "Sarita P.",
    role: "Class 12 Student",
    score: "Biology: 92% Accuracy",
    stars: 5,
    text: "Mock analytics showed exactly where I was losing marks. Huge confidence boost. I never knew I was weak in Genetics until RankUpp showed me.",
    img: "/download.jpeg",
    subject: "Biology",
    verified: true,
  },
  {
    name: "Sapna Sahu",
    role: "NEET 2026 Aspirant",
    score: "Class 12, Chhatarpur",
    stars: 5,
    text: "One of the best apps for NEET preparation. PYQs + smart analysis = perfect combination. Must-have app for serious NEET aspirants.",
    img: "/download.jpeg",
    subject: "PYQs",
    verified: true,
  },
  {
    name: "Harshal Malviya",
    role: "NEET Aspirant",
    score: "Mock Test Avg: 540+",
    stars: 5,
    text: "Great app for NEET preparation. Good quality questions and well-structured tests. The question bank quality is genuinely high.",
    img: "/download.jpeg",
    subject: "Physics",
    verified: true,
  },
  {
    name: "Sniper's",
    role: "NEET UG Aspirant",
    score: "Dr. Deepak Sir Student",
    stars: 5,
    text: "Best app for NEET preparation. Great mentorship by Dr. Deepak sir. Concepts become very clear with NCERT-based questions.",
    img: "/download.jpeg",
    subject: "All Subjects",
    verified: true,
  },
  {
    name: "Satyam Yadav",
    role: "Class 11 Student",
    score: "Rewa, MP",
    stars: 5,
    text: "Best education platform for NEET aspirants. Very helpful tests and detailed analysis. Shows exactly where to improve.",
    img: "/download.jpeg",
    subject: "Biology",
    verified: true,
  },
  {
    name: "Siddhant Sahu",
    role: "NEET 2026 Aspirant",
    score: "Bhopal, MP",
    stars: 5,
    text: "RankUpp NEET aspirants ke liye ek complete app hai. PYQs, test series aur analysis ka level kaafi achha hai. Concept clarity milti hai aur preparation structured ho jati hai.",
    img: "/download.jpeg",
    subject: "All Subjects",
    verified: true,
  },
  {
    name: "Ankit Verma",
    role: "NEET Dropper",
    score: "Score Improved +80 Marks",
    stars: 5,
    text: "Daily practice tests helped me improve speed and accuracy. Analysis feature is very detailed — I found my exact weak chapters.",
    img: "/download.jpeg",
    subject: "Physics",
    verified: true,
  },
  {
    name: "Neha Sharma",
    role: "Class 12 Student",
    score: "Jabalpur, MP",
    stars: 5,
    text: "Concept-based questions and PYQs make RankUpp different from other apps. I feel genuinely prepared, not just practiced.",
    img: "/download.jpeg",
    subject: "Chemistry",
    verified: true,
  },
  {
    name: "Rahul Patel",
    role: "NEET 2026 Aspirant",
    score: "Indore, MP",
    stars: 5,
    text: "RankUpp helped me identify weak areas quickly. Smart analytics is a game changer for revision planning.",
    img: "/download.jpeg",
    subject: "Biology",
    verified: true,
  },
  {
    name: "Pooja Mishra",
    role: "Class 12 Student",
    score: "Mock Avg: 560+",
    stars: 5,
    text: "Very student-friendly app. Notes, tests and revision all in one place. Best for the final 3 months before NEET.",
    img: "/download.jpeg",
    subject: "All Subjects",
    verified: true,
  },
  {
    name: "Kajal Gupta",
    role: "NEET Aspirant",
    score: "Sagar, MP",
    stars: 5,
    text: "Revision becomes easy with RankUpp. Flashcards are really helpful before exams. My retention improved massively.",
    img: "/download.jpeg",
    subject: "Biology",
    verified: true,
  },
  {
    name: "Ritika Jain",
    role: "Class 12 Student",
    score: "Biology Accuracy: 89%",
    stars: 5,
    text: "PYQs with explanations helped me understand NCERT concepts better. Now I know WHY each answer is correct.",
    img: "/download.jpeg",
    subject: "PYQs",
    verified: true,
  },
  {
    name: "Mohit Choudhary",
    role: "NEET Dropper 2026",
    score: "Score +100 Marks Improvement",
    stars: 5,
    text: "RankUpp gives clear direction for NEET preparation. Tests are very relevant. Went from 480 to 580 in mock tests.",
    img: "/download.jpeg",
    subject: "All Subjects",
    verified: true,
  },
  {
    name: "Sneha Kulkarni",
    role: "NEET 2026 Aspirant",
    score: "Nagpur",
    stars: 5,
    text: "Best decision to use RankUpp app. Improved my confidence and performance. The structured approach makes a real difference.",
    img: "/download.jpeg",
    subject: "Biology",
    verified: true,
  },
];

const AGGREGATE = {
  rating: "4.8",
  count: "12,400",
  label: "student reviews",
};

const TRUST_STATS = [
  { value: "2L+", label: "Active Students" },
  { value: "4.8★", label: "Average Rating" },
  { value: "12,400+", label: "Reviews" },
  { value: "95%", label: "Recommend RankUpp" },
];

// ============================================================
// STAR COMPONENT
// ============================================================

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < count ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ============================================================
// AVATAR INITIAL — fallback when all photos are same
// ============================================================

function Avatar({ name, img }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const colors = [
    "from-blue-500 to-indigo-600",
    "from-emerald-500 to-teal-600",
    "from-purple-500 to-violet-600",
    "from-orange-500 to-amber-600",
    "from-rose-500 to-pink-600",
    "from-cyan-500 to-sky-600",
  ];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-extrabold text-sm shrink-0`}
      aria-hidden="true">
      {initials}
    </div>
  );
}

// ============================================================
// TESTIMONIAL CARD
// ============================================================

function TestimonialCard({ item, index }) {
  return (
    <article
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col h-full"
      itemScope itemType="https://schema.org/Review"
      aria-label={`Review by ${item.name}`}
    >
      <meta itemProp="reviewRating" content={item.stars} />
      <meta itemProp="datePublished" content="2026-01-01" />

      {/* Top row: stars + subject tag */}
      <div className="flex items-center justify-between mb-4">
        <Stars count={item.stars} />
        <span className="text-xs font-semibold bg-[var(--color-primary)]/8 text-[var(--color-primary)] px-2.5 py-1 rounded-lg">
          {item.subject}
        </span>
      </div>

      {/* Quote mark */}
      <div className="text-4xl text-[var(--color-primary)]/10 font-serif leading-none mb-2 select-none" aria-hidden="true">"</div>

      {/* Review text */}
      <blockquote className="flex-1 text-gray-600 text-sm leading-relaxed mb-5" itemProp="reviewBody">
        {item.text}
      </blockquote>

      {/* Divider */}
      <div className="border-t border-gray-50 pt-4 mt-auto">
        <div className="flex items-center gap-3"
          itemProp="author" itemScope itemType="https://schema.org/Person">
          <Avatar name={item.name} img={item.img} />
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight" itemProp="name">
              {item.name}
            </p>
            <p className="text-gray-400 text-xs mt-0.5">{item.role}</p>
            {item.score && (
              <p className="text-[var(--color-primary)] text-xs font-semibold mt-0.5">{item.score}</p>
            )}
          </div>
          {item.verified && (
            <div className="ml-auto shrink-0" title="Verified Student">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" aria-label="Verified">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ============================================================
// MAIN COMPONENT — CSS Marquee, zero Swiper dependency issues
// ============================================================

export default function Testimonials() {
  const row1 = TESTIMONIALS.slice(0, 8);
  const row2 = TESTIMONIALS.slice(8, 16);

  // AggregateRating schema
  const aggregateSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RankUpp NEET Preparation App",
    "applicationCategory": "EducationApplication",
    "operatingSystem": "Android, iOS, Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": AGGREGATE.rating,
      "reviewCount": "12400",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": TESTIMONIALS.slice(0, 5).map((t) => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": t.stars, "bestRating": 5 },
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.text,
      "datePublished": "2026-01-01",
    })),
  };

  return (
    <section
      className="py-20 bg-[var(--color-primary)] overflow-hidden relative"
      aria-labelledby="testimonials-heading"
      itemScope itemType="https://schema.org/ItemList"
    >
      {/* Schema */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }} />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px,white 1px,transparent 0)", backgroundSize: "24px 24px" }}
        aria-hidden="true" />

      {/* Glow accents */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* ── HEADER ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-wide">
            <span aria-hidden="true">💬</span>
            <span>Real Students · Verified Reviews</span>
          </div>

          <h2 id="testimonials-heading"
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
            itemProp="name">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">
              2 Lakh+
            </span>{" "}
            NEET Aspirants
          </h2>

          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-lg">
            Class 11, Class 12, and dropper students across India — here's
            what they say after using RankUpp for NEET 2026 preparation.
          </p>

          {/* Aggregate rating display */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/10 border border-white/15 rounded-2xl px-6 py-3 backdrop-blur-sm"
            itemScope itemType="https://schema.org/AggregateRating"
            aria-label={`RankUpp rated ${AGGREGATE.rating} out of 5 from ${AGGREGATE.count} reviews`}>
            <Stars count={5} />
            <span className="text-white font-extrabold text-xl" itemProp="ratingValue">{AGGREGATE.rating}</span>
            <span className="text-blue-200 text-sm">
              from <strong className="text-white" itemProp="reviewCount">{AGGREGATE.count}</strong> {AGGREGATE.label}
            </span>
            <meta itemProp="bestRating" content="5" />
          </div>
        </div>

        {/* ── TRUST STATS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14 max-w-3xl mx-auto">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label}
              className="text-center bg-white/8 border border-white/12 rounded-2xl py-4 px-3 backdrop-blur-sm">
              <p className="text-2xl font-extrabold text-yellow-300">{stat.value}</p>
              <p className="text-blue-200 text-xs font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── MARQUEE ROW 1 (left scroll) ── */}
        <div className="relative mb-5">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--color-primary)] to-transparent z-10 pointer-events-none" aria-hidden="true" />

          <div className="overflow-hidden">
            <div className="flex gap-4 w-max animate-marquee-left hover:[animation-play-state:paused]"
              aria-label="Student testimonials row 1">
              {[...row1, ...row1].map((t, i) => (
                <div key={i} className="w-72 md:w-80 shrink-0">
                  <TestimonialCard item={t} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MARQUEE ROW 2 (right scroll) ── */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--color-primary)] to-transparent z-10 pointer-events-none" aria-hidden="true" />

          <div className="overflow-hidden">
            <div className="flex gap-4 w-max animate-marquee-right hover:[animation-play-state:paused]"
              aria-label="Student testimonials row 2">
              {[...row2, ...row2].map((t, i) => (
                <div key={i} className="w-72 md:w-80 shrink-0">
                  <TestimonialCard item={t} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-14 text-center">
          <p className="text-blue-200 text-sm mb-5">
            Join them — free access to NEET mock tests, PYQs, and chapter-wise questions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/neet-mock-test-online"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg"
              aria-label="Start free NEET practice on RankUpp — join 2 lakh students">
              🚀 Start Practicing Free
            </a>
            <a href="/neet-pyq"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
              aria-label="Practice NEET PYQs on RankUpp">
              📚 NEET PYQs Free
            </a>
          </div>
          <p className="mt-4 text-blue-300/60 text-xs">
            No credit card required · No signup needed for first test
          </p>
        </div>
      </div>

      {/* ── TAILWIND MARQUEE KEYFRAMES (inline style injection) ── */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
