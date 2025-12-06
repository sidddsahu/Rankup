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
} from "react-icons/fa";

export default function FounderSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Schema.org Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "RankUp Mentor",
              "jobTitle": "Medical Educator & NEET PG Mentor",
              "alumniOf": "Shyam Shah Medical College, Rewa",
              "award": [
                "Gold Medalist in Class 12th",
                "MBBS Gold Medalist",
                "NEET PG AIR 1731",
                "UPSC CMS Qualified"
              ],
              "hasCredential": "MBBS, Gold Medalist",
              "knowsAbout": [
                "NEET PG Preparation",
                "Medical Education",
                "Competitive Exam Strategy",
                "UPSC CMS Examination"
              ]
            })
          }}
        />

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side — Images and Additional Content */}
          <div className="space-y-8">
            {/* Images Grid with SEO optimized alt texts */}
            <div className="block md:hidden">

  <header>
    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
      Meet Our Founder — <span className="text-4xl font-extrabold leading-snug drop-shadow-sm text-[#1E3A5F]">Your Guide to Success</span>
    </h1>
  </header>

  <p className="text-gray-700 text-lg leading-relaxed">
    My journey started with a simple dream - to excel in medicine and help others do the same.
    After winning the <strong className="font-semibold">Gold Medal in Class 12th</strong>, I pursued MBBS at
    <strong className="font-semibold"> Shyam Shah Medical College, Rewa</strong> where I continued my
    academic excellence by earning another <strong className="font-semibold">Gold Medal</strong>.
    Right after MBBS, I cracked <strong className="font-semibold">NEET PG with All India Rank 1731</strong>
    and also qualified the <strong className="font-semibold">UPSC Combined Medical Services</strong> exam.
  </p>


    <section aria-labelledby="achievements-heading">
              <h2 id="achievements-heading" className="sr-only">Academic and Professional Achievements</h2>
              <div className="space-y-4">
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

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/goldmedalce.jpg"
                  alt="NEET PG Rank 1731 Certificate - RankUp Medical Education"
                  className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full"
                  loading="lazy"
                />
                <img
                  src="/medal.jpg"
                  alt="MBBS Gold Medal Achievement - Medical College Excellence"
                  className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full"
                  loading="lazy"
                />
                <img
                  src="mbbs.jpg"
                  alt="Medical College Founder Portrait - RankUp Medical Mentor"
                  className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full"
                  loading="lazy"
                />
                <img
                  src="upsc.jpg"
                  alt="Class 12th Gold Medal Certificate - Academic Excellence"
                  className="rounded-3xl shadow-xl border-4 border-white object-cover md:h-56 md:w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge with semantic HTML */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl px-6 py-3 flex items-center gap-3" role="complementary" aria-label="Founder Credentials">
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
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">My Learning Philosophy</h2>
              <p className="text-gray-700 mb-4">
                Success isn't about being the smartest - it's about being the most consistent.
                Through my journey, I discovered that the right strategy, daily discipline,
                and smart revision can help any dedicated student achieve their dreams.
              </p>
              <ul className="text-gray-700 list-disc pl-5 space-y-2" role="list">
                <li><strong>Concept Clarity:</strong> Building strong fundamentals that last</li>
                <li><strong>Smart Revision:</strong> Quality over quantity in study hours</li>
                <li><strong>Exam Strategy:</strong> Learning what to study and what to skip</li>
                <li><strong>Consistency:</strong> Small daily steps lead to big results</li>
              </ul>
            </motion.div>

            {/* Step-by-step guide box with ordered list semantics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white p-6 shadow-lg rounded-2xl border-l-4 border-[#1E3A5F]"
              role="article"
              aria-label="Success Roadmap"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">The Roadmap That Worked For Me</h2>
              <div className="grid gap-3" role="list" aria-label="Success steps">
                <RoadmapStep number={1} title="Strong Foundation" desc="Focus on understanding concepts deeply rather than memorizing" />
                <RoadmapStep number={2} title="Consistent Learning" desc="Regular study schedule with proper breaks and revisions" />
                <RoadmapStep number={3} title="Smart Preparation" desc="Identifying high-yield topics and mastering them thoroughly" />
                <RoadmapStep number={4} title="Practice & Tests" desc="Regular mock tests to build speed and accuracy" />
                <RoadmapStep number={5} title="Revision Strategy" desc="Systematic revision plan to retain what you've learned" />
              </div>
            </motion.div>
          </div>

          {/* Right Side — Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Main Heading with proper hierarchy */}
<div className="hidden md:block">

  <header>
    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
      Meet Our Founder — <span className="text-4xl font-extrabold leading-snug drop-shadow-sm text-[#1E3A5F]">Your Guide to Success</span>
    </h1>
  </header>

  <p className="text-gray-700 text-lg leading-relaxed">
    My journey started with a simple dream - to excel in medicine and help others do the same.
    After winning the <strong className="font-semibold">Gold Medal in Class 12th</strong>, I pursued MBBS at
    <strong className="font-semibold"> Shyam Shah Medical College, Rewa</strong> where I continued my
    academic excellence by earning another <strong className="font-semibold">Gold Medal</strong>.
    Right after MBBS, I cracked <strong className="font-semibold">NEET PG with All India Rank 1731</strong>
    and also qualified the <strong className="font-semibold">UPSC Combined Medical Services</strong> exam.
  </p>

    <section aria-labelledby="achievements-heading">
              <h2 id="achievements-heading" className="sr-only">Academic and Professional Achievements</h2>
              <div className="space-y-4">
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

            {/* Achievements List with semantic structure */}


            {/* CTA Section with proper button semantics */}
            <section aria-labelledby="cta-heading">
              <h2 id="cta-heading" className="sr-only">Join RankUp Program</h2>
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#join"
                  className="inline-flex items-center gap-3 bg-[#1E3A5F] text-white font-semibold px-5 py-3 rounded-xl shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Start your success journey with RankUp medical coaching"
                >
                  <FaBookOpen aria-hidden="true" />
                  Start Your Success Journey
                  <FaArrowRight aria-hidden="true" />
                </a>

                <p className="text-gray-600 text-sm">
                  Ready to follow the same proven path? Join RankUp to get my exact study plans,
                  revision strategies, and mentorship.
                </p>
              </div>
            </section>

            {/* Trust Section */}
            <section aria-labelledby="trust-heading">
              <div className="mt-8 bg-white p-6 shadow-xl rounded-2xl border-l-4 border-[#1E3A5F]">
                <h2 id="trust-heading" className="text-2xl font-bold text-gray-900 mb-2">Why Trust My Guidance?</h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  I've walked the path you're on right now. From classroom learning to competitive exams,
                  I understand the challenges and know what it takes to succeed. At RankUp, I've distilled
                  everything I learned into a clear, practical program that can help you achieve your medical
                  career dreams too. It's not about working harder - it's about working smarter.
                </p>
              </div>
            </section>

            {/* Certificates Section */}
            <section aria-labelledby="certificates-heading">
              <div className="max-w-6xl mx-auto mt-12">
                <h2 id="certificates-heading" className="text-xl font-bold text-gray-900 mb-4">My Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <CertificateCard
                    img="/cert-mbbs.jpg"
                    title="MBBS Gold Medal"
                    subtitle="Top Performer — SSMC Rewa"
                  />
                  <CertificateCard
                    img="/cert-neetpg.jpg"
                    title="NEET PG — AIR 1731"
                    subtitle="National Rank"
                  />
                  <CertificateCard
                    img="/cert-cms.jpg"
                    title="UPSC CMS Qualified"
                    subtitle="Combined Medical Services"
                  />
                  <CertificateCard
                    img="/cert-quiz.jpg"
                    title="Quick Quiz Champion"
                    subtitle="Inter-school Competition"
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

function Achievement({ icon, title, desc }) {
  return (
    <article className="flex gap-4 items-start">
      <div className="p-3 bg-white rounded-xl shadow-md" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </article>
  );
}

function RoadmapStep({ number, title, desc }) {
  return (
    <article className="flex gap-4 items-start bg-gray-50 p-3 rounded-lg">
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E3A5F] text-white font-bold"
        aria-hidden="true"
      >
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </article>
  );
}

function CertificateCard({ img, title, subtitle }) {
  return (
    <article className="bg-white p-4 rounded-2xl shadow-md flex gap-4 items-center">
      <img
        src={img}
        alt={`${title} certificate - ${subtitle}`}
        className="w-20 h-20 object-cover rounded-lg border"
        loading="lazy"
      />
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </article>
  );
}