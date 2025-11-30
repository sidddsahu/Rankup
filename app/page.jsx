import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Cta from './components/Cta';
import WhyChooseUs from './components/WhyChooseUs';
import FounderSection from './components/FounderSection';

export const dynamic = 'force-dynamic';

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "RankUp — NEET-UG Preparation",
    description: "RankUp provides smart flashcards, daily plans and analytics for NEET-UG aspirants.",
    url: "https://www.rankupp.in"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <Hero/>


        <section className="container py-16"><Features/></section>
         <Cta className="" />

         <section className=" text-white"><WhyChooseUs/></section>
         <FounderSection/>
          <section className="text-white"><Testimonials/></section>
        <section className="container py-16 "><Faq /></section>

        {/* <Footer /> */}
      </main>
    </>
  );
}
