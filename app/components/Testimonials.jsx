"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const data = [
     {
    name: "Asha R.",
    text: "RankUp improved my accuracy and helped me retain complex topics with ease.",
    img: "/download.jpeg"
  },
  {
    name: "Rohit K.",
    text: "Spaced repetition flashcards are the best I’ve used. Perfect for medical prep!",
    img: "/download.jpeg"
  },
  {
    name: "Sarita P.",
    text: "Mock analytics showed exactly where I was losing marks. Huge confidence boost.",
    img: "/download.jpeg"
  },
  {
    name: "Sapna Sahu",
    text: "One of the best apps for NEET preparation. PYQs + smart analysis = perfect combination. Must-have app for serious NEET aspirants.",
    img: "/download.jpeg"
  },
  {
    name: "Harshal Malviya",
    text: "Great app for NEET preparation. Good quality questions and well-structured tests.",
    img: "/download.jpeg"
  },
  {
    name: "Harsh",
    text: "Best app for NEET UG preparation. Very useful for daily practice.",
    img: "/download.jpeg"
  },
  {
    name: "Sniper's",
    text: "Best app for NEET preparation. Great mentorship by Dr. Deepak sir. Concepts become very clear.",
    img: "/download.jpeg"
  },
  {
    name: "Satyam Yadav",
    text: "Best education platform for NEET aspirants. Very helpful tests and analysis.",
    img: "/download.jpeg"
  },
  {
    name: "Shivam Sahu Facts",
    text: "Best education platform for NEET UG students. Highly recommended.",
    img: "/download.jpeg"
  },
  {
    name: "Siddhant Sahu",
    text: "RankUp NEET aspirants ke liye ek complete app hai. PYQs, test series aur analysis ka level kaafi achha hai. Concept clarity milti hai aur preparation structured ho jati hai.",
    img: "/download.jpeg"
  },
  {
    name: "Ankit Verma",
    text: "Daily practice tests helped me improve speed and accuracy. Analysis feature is very detailed.",
    img: "/download.jpeg"
  },
  {
    name: "Neha Sharma",
    text: "Concept-based questions and PYQs make RankUp different from other apps.",
    img: "/download.jpeg"
  },
  {
    name: "Rahul Patel",
    text: "RankUp helped me identify weak areas quickly. Smart analytics is a game changer.",
    img: "/download.jpeg"
  },
  {
    name: "Pooja Mishra",
    text: "Very student-friendly app. Notes, tests and revision all in one place.",
    img: "/download.jpeg"
  },
  {
    name: "Aman Singh",
    text: "Best app for NEET mock tests. Interface is smooth and easy to use.",
    img: "/download.jpeg"
  },
  {
    name: "Kajal Gupta",
    text: "Revision becomes easy with RankUp. Flashcards are really helpful before exams.",
    img: "/download.jpeg"
  },
  {
    name: "Vikas Yadav",
    text: "Affordable and quality content. Perfect app for NEET UG preparation.",
    img: "/download.jpeg"
  },
  {
    name: "Ritika Jain",
    text: "PYQs with explanations helped me understand NCERT concepts better.",
    img: "/download.jpeg"
  },
  {
    name: "Mohit Choudhary",
    text: "RankUp gives clear direction for NEET preparation. Tests are very relevant.",
    img: "/download.jpeg"
  },
  {
    name: "Sneha Kulkarni",
    text: "Best decision to use RankUp app. Improved my confidence and performance.",
    img: "/download.jpeg"
  }
  ];

  return (
    <section className="py-20 bg-[#295176]">
      <div className="container mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-white tracking-tight">
          Trusted by NEET-UG Class 12th & Class 11th Students
        </h2>
        <p className="text-center text-gray-200 mt-3 max-w-2xl mx-auto text-lg">
          RankUp helps aspirants retain what they study so they feel fully prepared.
        </p>

        {/* Slider */}
        <div className="mt-14">
         <Swiper
  spaceBetween={20}
  centeredSlides={true}
  pagination={{ clickable: true }}
  autoplay={{ delay: 2600 }}
  modules={[Pagination, Autoplay]}
  breakpoints={{
    0: { slidesPerView: 1 },      // 📱 Mobile
    640: { slidesPerView: 2 },    // 📟 Tablet
    1024: { slidesPerView: 3 }    // 🖥 Desktop
  }}
>

            {data.map((t, i) => (
              <SwiperSlide key={i}>

                <div className="
                  bg-white
                  rounded-2xl
                  p-8
                  shadow-xl
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  border border-gray-100
                  h-full
                ">

                  {/* Profile */}
                  <div className="flex flex-col items-center">
                    <div className="
                      w-20 h-20
                      rounded-full
                      overflow-hidden
                      mb-5


                    ">
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>

                    {/* Feedback */}
                    <p className="text-center text-gray-700 leading-relaxed text-[15px]">
                      “{t.text}”
                    </p>

                    {/* Name */}
                    <p className="mt-4 font-semibold text-[#295176] text-lg">
                      — {t.name}
                    </p>
                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
