import FounderSection from "../components/FounderSection";

const baseUrl = "https://www.rankupp.in";
const canonicalUrl = `${baseUrl}/founder`;

export const metadata = {
  title: "Meet Our Founder – RankUp NEET-UG",
  description:
    "Meet the founder of RankUp NEET-UG – MBBS Gold Medalist, NEET PG AIR 1731, UPSC CMS qualified medical educator guiding students to success.",
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Meet Our Founder – RankUp NEET-UG",
    description:
      "Learn about the journey and achievements of RankUp founder – MBBS Gold Medalist and NEET PG AIR 1731.",
    url: canonicalUrl,
    siteName: "RankUp NEET-UG",
    type: "profile",
    images: [
      {
        url: `${baseUrl}/og-founder.jpg`,
        width: 1200,
        height: 630,
        alt: "Founder of RankUp NEET-UG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Founder – RankUp NEET-UG",
    description:
      "MBBS Gold Medalist | NEET PG AIR 1731 | Founder of RankUp NEET-UG",
    images: [`${baseUrl}/og-founder.jpg`],
  },
};

export default function FounderPage() {
  return (
    <>
      {/* Person + WebPage Schema (ONLY what Google needs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "RankUp Founder",
              "description":
                "MBBS Gold Medalist, NEET PG AIR 1731, UPSC CMS qualified medical educator and founder of RankUp NEET-UG.",
              "jobTitle": "Medical Educator & Founder, RankUp",
              "worksFor": {
                "@type": "Organization",
                "name": "RankUp Education",
                "url": baseUrl,
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Shyam Shah Medical College, Rewa",
              },
            },
            "url": canonicalUrl,
          }),
        }}
      />

      {/* MAIN CONTENT (must be visible, not lazy) */}
      <FounderSection />
    </>
  );
}
