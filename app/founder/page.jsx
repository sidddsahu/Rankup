import FounderSection from "../components/FounderSection";

// Generate canonical URL for SEO
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rankupp.in';
const canonicalUrl = `${baseUrl}/founder`;

export const metadata = {
  // Primary Meta Tags
  title: {
    absolute: 'Meet Our Founder - RankUp NEET-UG | MBBS Gold Medalist & NEET PG AIR 1731',
    template: '%s | RankUp NEET-UG'
  },
  description: 'Meet the founder of RankUp - MBBS Gold Medalist, NEET PG AIR 1731, UPSC CMS qualified medical educator. Learn how his proven strategies help students succeed in NEET UG.',

  // Keywords
  keywords: [
    'RankUp founder',
    'MBBS Gold Medalist',
    'NEET PG AIR 1731',
    'medical educator',
    'NEET UG mentor',
    'medical topper',
    'RankUp creator',
    'medical exam expert',
    'UPSC CMS qualified',
    'NEET preparation guide'
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
    title: 'Meet Our Founder - MBBS Gold Medalist & NEET PG AIR 1731',
    description: 'Learn from RankUp founder - MBBS Gold Medalist, NEET PG AIR 1731, who has helped thousands of students achieve medical entrance success.',
    url: canonicalUrl,
    siteName: 'RankUp NEET-UG Preparation',
    locale: 'en_US',
    type: 'profile',
    profile: {
      firstName: 'RankUp',
      lastName: 'Founder',
      username: 'rankup_founder',
      gender: 'male'
    },
    images: [
      {
        url: `${baseUrl}/og-founder.jpg`,
        width: 1200,
        height: 630,
        alt: 'RankUp Founder - MBBS Gold Medalist & NEET PG Topper',
        type: 'image/jpeg',
      },
    ],
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Meet RankUp Founder - MBBS Gold Medalist & NEET PG AIR 1731',
    description: 'Learn from a medical topper who cracked NEET PG with AIR 1731 and now helps students achieve NEET UG success',
    site: '@rankup_neet',
    creator: '@rankup_founder',
    images: [`${baseUrl}/twitter-founder.jpg`],
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
      name: 'RankUp Founder',
      url: 'https://rankupp.in/founder',
    },
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
  category: 'Education Leadership',
  classification: 'Medical Educator Profile',
  abstract: 'Profile of RankUp founder - MBBS Gold Medalist from Shyam Shah Medical College, NEET PG AIR 1731, UPSC CMS qualified medical educator helping students achieve NEET UG success.',
  subject: 'Medical Educator, NEET Mentor, Education Founder',
  copyright: `© ${new Date().getFullYear()} RankUp Education. All rights reserved.`,
  language: 'en-US',
  rating: 'General',
  revist: '7 days',
  distribution: 'Global',
  generator: 'Next.js',

  // Apple Specific
  appleWebApp: {
    capable: true,
    title: 'RankUp Founder',
    statusBarStyle: 'black-translucent',
  },

  // App Links
  appLinks: {
    android: {
      package: 'com.rankup.neetug',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/founder',
    },
    ios: {
      app_store_id: '123456789',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/founder',
    },
    web: {
      url: 'https://rankupp.in/founder',
      should_fallback: false,
    },
  },

  // Other properties
  other: {
    // Person Schema
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${canonicalUrl}#person`,
          "name": "RankUp Founder",
          "description": "MBBS Gold Medalist, NEET PG AIR 1731, UPSC CMS qualified medical educator and founder of RankUp NEET-UG preparation platform",
          "url": canonicalUrl,
          "image": `${baseUrl}/founder-profile.jpg`,
          "jobTitle": "Medical Educator & NEET UG Mentor",
          "worksFor": {
            "@type": "Organization",
            "name": "RankUp Education",
            "url": "https://rankupp.in"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Shyam Shah Medical College, Rewa",
            "url": "https://en.wikipedia.org/wiki/Shyam_Shah_Medical_College"
          },
          "knowsAbout": [
            "NEET UG Preparation",
            "NEET PG Strategy",
            "Medical Education",
            "Competitive Exam Coaching",
            "UPSC CMS Examination"
          ],
          "hasCredential": [
            "MBBS Gold Medal",
            "NEET PG AIR 1731",
            "UPSC CMS Qualified",
            "Class 12 Gold Medalist"
          ],
          "award": [
            "MBBS Gold Medal",
            "Class 12 Gold Medal",
            "NEET PG All India Rank 1731",
            "UPSC CMS Qualified"
          ],
          "sameAs": [
            "https://linkedin.com/in/rankup-founder",
            "https://twitter.com/rankup_founder",
            "https://facebook.com/rankupfounder"
          ]
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          "name": "Meet Our Founder - RankUp NEET-UG",
          "description": "Profile page of RankUp founder - MBBS Gold Medalist and NEET PG topper",
          "url": canonicalUrl,
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
                "name": "Our Founder",
                "item": canonicalUrl
              }
            ]
          }
        }
      ]
    }),

    // Twitter specific
    'twitter:label1': 'MBBS College',
    'twitter:data1': 'Shyam Shah Medical College',
    'twitter:label2': 'NEET PG Rank',
    'twitter:data2': 'AIR 1731',
    'twitter:label3': 'Qualification',
    'twitter:data3': 'MBBS Gold Medalist',
  },
};

// Breadcrumb Schema
const breadcrumbSchema = {
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
      "name": "Our Founder",
      "item": canonicalUrl
    }
  ]
};

// Profile Page Schema
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "Founder Profile - RankUp NEET-UG",
  "description": "Profile page showcasing the achievements and journey of RankUp founder",
  "url": canonicalUrl,
  "mainEntity": {
    "@type": "Person",
    "name": "RankUp Founder",
    "description": "Medical educator and founder of RankUp NEET-UG preparation platform"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": `${baseUrl}/founder-hero.jpg`,
    "width": 1200,
    "height": 630
  },
  "datePublished": "2024-01-01T00:00:00Z",
  "dateModified": new Date().toISOString(),
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "InteractAction",
    "actionType": "FollowAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://rankupp.in/follow/founder"
    }
  }
};

// Achievement Collection Schema
const achievementSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Founder Achievements",
  "description": "Academic and professional achievements of RankUp founder",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "AchieveAction",
        "description": "Class 12th Gold Medalist"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "AchieveAction",
        "description": "MBBS Gold Medalist from Shyam Shah Medical College"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "AchieveAction",
        "description": "NEET PG All India Rank 1731"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "AchieveAction",
        "description": "UPSC Combined Medical Services Qualified"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "AchieveAction",
        "description": "Rank 41 in Madhya Pradesh for NEET PG"
      }
    }
  ]
};

export default function FounderPage() {
  return (
    <>
      {/* Profile Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />

      {/* Achievement Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(achievementSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Additional FAQ Schema for Founder */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What qualifications does the RankUp founder have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our founder is a Class 12th Gold Medalist, MBBS Gold Medalist from Shyam Shah Medical College, achieved NEET PG AIR 1731, and is UPSC CMS qualified."
                }
              },
              {
                "@type": "Question",
                "name": "How does the founder's experience help NEET UG students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Having successfully cleared multiple medical entrance exams, our founder understands the challenges and strategies needed for success. This firsthand experience forms the foundation of RankUp's teaching methodology."
                }
              },
              {
                "@type": "Question",
                "name": "What is the founder's teaching philosophy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The founder believes in smart preparation over hard work - focusing on high-yield topics, consistent revision, and personalized study strategies rather than just long study hours."
                }
              }
            ]
          })
        }}
      />

      {/* Speakable Schema for Voice Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SpeakableSpecification",
            "cssSelector": [".founder-achievements", ".teaching-philosophy", ".success-story"],
            "xpath": [
              "/html/head/title",
              "/html/head/meta[@name='description']/@content"
            ]
          })
        }}
      />

      {/* Main Content */}
      <FounderSection />
    </>
  );
}