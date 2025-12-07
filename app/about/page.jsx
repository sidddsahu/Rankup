import StaticPageLayout from '../components/StaticPageLayout';

// Generate canonical URL for SEO
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rankupp.in';
const canonicalUrl = `${baseUrl}/about`;

export const metadata = {
  // Primary Meta Tags
  title: {
    absolute: 'About RankUp - Leading NEET-UG Preparation Platform | Medical Entrance Coaching',
    template: '%s | RankUp NEET-UG'
  },
  description: 'Discover RankUp - India\'s premier NEET-UG preparation platform founded by medical toppers. Learn about our mission, proven methodology, and success stories.',

  // Keywords (modern approach - still beneficial for some search engines)
  keywords: [
    'NEET UG preparation',
    'medical entrance coaching',
    'MBBS coaching online',
    'NEET online classes',
    'medical exam preparation',
    'RankUp about us',
    'NEET study platform',
    'medical college admission',
    'AIIMS MBBS preparation',
    'JIPMER coaching'
  ],

  // Canonical URL
  alternates: {
    canonical: canonicalUrl,
    languages: {
      'en-US': canonicalUrl,
    },
  },

  // Open Graph for Social Media
  openGraph: {
    title: 'About RankUp - Premier NEET-UG Preparation Platform',
    description: 'Learn how RankUp is revolutionizing medical entrance preparation with proven strategies from MBBS Gold Medalists and NEET PG toppers.',
    url: canonicalUrl,
    siteName: 'RankUp NEET-UG Preparation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-about.jpg`,
        width: 1200,
        height: 630,
        alt: 'RankUp NEET-UG Preparation Platform - About Us',
        type: 'image/jpeg',
      },
    ],
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'About RankUp - Leading NEET-UG Preparation Platform',
    description: 'Discover how RankUp helps students crack NEET UG with strategies from MBBS toppers',
    site: '@rankup_neet',
    creator: '@rankup_neet',
    images: [`${baseUrl}/twitter-about.jpg`],
  },

  // Additional Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Authors and Copyright
  authors: [
    {
      name: 'RankUp Education',
      url: 'https://rankupp.in',
    },
  ],

  // Manifest and Theme Color
  manifest: '/manifest.json',
  themeColor: '#1E3A5F',

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },

  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },

  // Other Meta
  category: 'Education',
  classification: 'Medical Entrance Coaching',
  abstract: 'RankUp is a modern NEET-UG preparation platform founded by medical toppers to help students achieve their MBBS dreams.',
  subject: 'NEET-UG Preparation, Medical Entrance Coaching',
  copyright: `© ${new Date().getFullYear()} RankUp Education. All rights reserved.`,
  language: 'en-US',
  rating: 'General',
  revist: '7 days',
  distribution: 'Global',
  generator: 'Next.js',

  // Apple Specific
  appleWebApp: {
    capable: true,
    title: 'RankUp NEET-UG',
    statusBarStyle: 'black-translucent',
  },

  // App Links
  appLinks: {
    android: {
      package: 'com.rankup.neetug',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in',
    },
    ios: {
      app_store_id: '123456789',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in',
    },
    web: {
      url: 'https://rankupp.in',
      should_fallback: false,
    },
  },

  // Other properties
  other: {
    // JSON-LD Structured Data
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About RankUp - NEET-UG Preparation Platform",
      "description": "Learn about RankUp's mission, methodology, and success in helping students crack medical entrance exams",
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "Organization",
        "name": "RankUp Education Platform",
        "alternateName": "RankUp NEET-UG",
        "description": "Premium NEET-UG preparation platform founded by medical toppers",
        "url": "https://rankupp.in",
        "logo": `${baseUrl}/logo.png`,
        "foundingDate": "2023",
        "founders": [
          {
            "@type": "Person",
            "name": "RankUp Founder",
            "jobTitle": "Medical Educator & NEET PG Mentor",
            "honorificSuffix": "MBBS Gold Medalist"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chhatarpur",
          "addressRegion": "Madhya Pradesh",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "telephone": "+91-7389338475",
          "email": "support@rankupp.in",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
          "https://facebook.com/rankup",
          "https://twitter.com/rankup",
          "https://instagram.com/rankup",
          "https://linkedin.com/company/rankup",
          "https://youtube.com/rankup"
        ]
      },
      "breadcrumb": {
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
            "name": "About Us",
            "item": canonicalUrl
          }
        ]
      }
    }),

    // Additional structured data for local business
    'application/ld+json-org': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "RankUp NEET-UG Preparation Center",
      "description": "NEET-UG coaching institute providing online and offline preparation programs",
      "url": "https://rankupp.in",
      "logo": `${baseUrl}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "DR. L C CHOURASIYA KE PICHE, SHANTI NAGAR COLONY, SAGAR ROAD",
        "addressLocality": "Chhatarpur",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "471001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.9170",
        "longitude": "79.5934"
      },
      "telephone": "+91-7389338475",
      "openingHours": "Mo-Fr 09:00-18:00",
      "curriculum": "NEET-UG Syllabus, NCERT Based, Previous Year Questions",
      "educationalProgramMode": ["Online", "Offline", "Hybrid"],
      "educationalProgramName": ["NEET UG Foundation Course", "NEET UG Crash Course", "Test Series"]
    }),

    // Twitter specific
    'twitter:label1': 'NEET UG Success Rate',
    'twitter:data1': '95%',
    'twitter:label2': 'Students Trained',
    'twitter:data2': '10,000+',
  },
};

// Structured data for About Page content
const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About RankUp",
  "description": "Learn about RankUp's mission to revolutionize NEET-UG preparation",
  "url": canonicalUrl,
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": `${baseUrl}/about-hero.jpg`,
    "width": 1200,
    "height": 630
  },
  "datePublished": "2024-01-01T00:00:00Z",
  "dateModified": new Date().toISOString(),
  "publisher": {
    "@type": "Organization",
    "name": "RankUp Education",
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`
    }
  },
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "cssSelector": ".main-content"
  }
};

export default function AboutPage() {
  return (
    <>
      {/* Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />

      {/* Additional schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes RankUp different from other NEET-UG coaching?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RankUp is founded by MBBS Gold Medalists and NEET PG toppers who have actually walked the path. We provide proven strategies, not just theoretical knowledge."
                }
              },
              {
                "@type": "Question",
                "name": "Who founded RankUp?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RankUp was founded by a medical professional who is a Class 12th Gold Medalist, MBBS Gold Medalist, NEET PG AIR 1731, and UPSC CMS qualified."
                }
              },
              {
                "@type": "Question",
                "name": "What is the success rate of RankUp students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Students following RankUp's methodology have shown an average score improvement of 40%+ in NEET UG mock tests."
                }
              }
            ]
          })
        }}
      />

      {/* Breadcrumb structured data */}
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
                "name": "About Us",
                "item": canonicalUrl
              }
            ]
          })
        }}
      />

      {/* Main Content */}
      <StaticPageLayout slug="about" pageTitle="About Us" />
    </>
  );
}