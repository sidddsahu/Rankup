import StaticPageLayout from '../components/StaticPageLayout';

// Generate canonical URL for SEO
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rankupp.in';
const canonicalUrl = `${baseUrl}/contact`;

export const metadata = {
  // Primary Meta Tags
  title: {
    absolute: 'Contact RankUp NEET-UG Support | Get Medical Entrance Coaching Help',
    template: '%s | RankUp NEET-UG'
  },
  description: 'Contact RankUp NEET-UG preparation platform for technical support, billing queries, course information, and partnership opportunities. Email: support@rankupp.in, Phone: +91-7389338475.',

  // Keywords
  keywords: [
    'NEET UG contact',
    'medical coaching support',
    'RankUp customer service',
    'NEET preparation help',
    'MBBS coaching contact',
    'medical entrance query',
    'NEET helpline number',
    'RankUp support team',
    'coaching center contact',
    'education support India'
  ],

  // Canonical URL
  alternates: {
    canonical: canonicalUrl,
    languages: {
      'en-US': canonicalUrl,
      'hi-IN': `${canonicalUrl}/hi`,
    },
  },

  // Open Graph for Social Media
  openGraph: {
    title: 'Contact RankUp - NEET-UG Preparation Support & Assistance',
    description: 'Get in touch with RankUp NEET-UG support team for technical help, billing queries, and partnership opportunities.',
    url: canonicalUrl,
    siteName: 'RankUp NEET-UG Preparation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-contact.jpg`,
        width: 1200,
        height: 630,
        alt: 'Contact RankUp NEET-UG Support Team',
        type: 'image/jpeg',
      },
    ],
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Contact RankUp NEET-UG Support Team',
    description: 'Reach out to RankUp for NEET UG preparation support, technical assistance, and course inquiries',
    site: '@rankup_neet',
    creator: '@rankup_neet',
    images: [`${baseUrl}/twitter-contact.jpg`],
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
      name: 'RankUp Support Team',
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
  category: 'Education Support',
  classification: 'Medical Education Customer Service',
  abstract: 'Contact page for RankUp NEET-UG preparation platform - Get help with technical issues, billing, courses, and partnerships.',
  subject: 'NEET-UG Support, Medical Coaching Assistance',
  copyright: `© ${new Date().getFullYear()} RankUp Education. All rights reserved.`,
  language: 'en-US',
  rating: 'General',
  revist: '7 days',
  distribution: 'Global',
  generator: 'Next.js',

  // Apple Specific
  appleWebApp: {
    capable: true,
    title: 'RankUp Contact',
    statusBarStyle: 'black-translucent',
  },

  // App Links
  appLinks: {
    android: {
      package: 'com.rankup.neetug',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/contact',
    },
    ios: {
      app_store_id: '123456789',
      app_name: 'RankUp NEET-UG',
      url: 'https://rankupp.in/contact',
    },
    web: {
      url: 'https://rankupp.in/contact',
      should_fallback: false,
    },
  },

  // Other properties
  other: {
    // Contact Page Schema
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          "@id": `${canonicalUrl}#contactpage`,
          "name": "Contact RankUp NEET-UG Support",
          "description": "Contact page for RankUp NEET-UG preparation platform support team",
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
                "name": "Contact Us",
                "item": canonicalUrl
              }
            ]
          }
        },
        {
          "@type": "Organization",
          "@id": "https://rankupp.in/#organization",
          "name": "RankUp NEET-UG Preparation Platform",
          "url": "https://rankupp.in",
          "logo": `${baseUrl}/logo.png`,
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-7389338475",
              "contactType": "customer service",
              "contactOption": "TollFree",
              "areaServed": ["IN"],
              "availableLanguage": ["English", "Hindi"],
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00",
                "timeZone": "Asia/Kolkata"
              }
            },
            {
              "@type": "ContactPoint",
              "email": "support@rankupp.in",
              "contactType": "technical support",
              "contactOption": "HearingImpairedSupported",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }
          ],
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
          }
        }
      ]
    }),

    // FAQ Schema
    'application/ld+json-faq': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are RankUp's support hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our customer support is available Monday to Friday from 9:00 AM to 6:00 PM IST. Email queries are responded to within 24 hours."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact RankUp for technical support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For technical issues, email us at support@rankupp.in or call +91-7389338475 during business hours."
          }
        },
        {
          "@type": "Question",
          "name": "Where is RankUp's office located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office is located at DR. L C CHOURASIYA KE PICHE, SHANTI NAGAR COLONY, SAGAR ROAD, CHHATARPUR, Madhya Pradesh."
          }
        }
      ]
    }),

    // Twitter specific
    'twitter:label1': 'Support Hours',
    'twitter:data1': 'Mon-Fri 9AM-6PM IST',
    'twitter:label2': 'Response Time',
    'twitter:data2': 'Within 24 hours',
    'twitter:label3': 'Phone Support',
    'twitter:data3': '+91-7389338475',
  },
};

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RankUp NEET-UG Coaching Center",
  "image": `${baseUrl}/office.jpg`,
  "@id": "https://rankupp.in/#localbusiness",
  "url": "https://rankupp.in",
  "telephone": "+91-7389338475",
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
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00",
      "timeZone": "Asia/Kolkata"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00",
      "timeZone": "Asia/Kolkata"
    }
  ],
  "priceRange": "₹₹",
  "sameAs": [
    "https://facebook.com/rankup",
    "https://twitter.com/rankup",
    "https://instagram.com/rankup"
  ]
};

// WebPage Schema
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Contact RankUp NEET-UG Support",
  "description": "Contact page for RankUp NEET-UG preparation platform with support information, office location, and contact form",
  "url": canonicalUrl,
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": `${baseUrl}/contact-hero.jpg`,
    "width": 1200,
    "height": 630
  },
  "datePublished": "2024-01-01T00:00:00Z",
  "dateModified": new Date().toISOString(),
  "potentialAction": {
    "@type": "CommunicateAction",
    "name": "Contact RankUp Support",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://rankupp.in/contact",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform"
      ]
    },
    "expectsAcceptanceOf": {
      "@type": "Offer",
      "category": "CustomerService"
    }
  }
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
      "name": "Contact Us",
      "item": canonicalUrl
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Additional FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What payment methods does RankUp accept?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We accept all major credit/debit cards, UPI, net banking, and EMI options for course payments."
                }
              },
              {
                "@type": "Question",
                "name": "Can I visit RankUp office for counseling?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can visit our Chhatarpur office for in-person counseling by scheduling an appointment in advance."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get a refund for my course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Please email us at support@rankupp.in with your registration details for refund inquiries. Refunds are processed as per our refund policy."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer demo classes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide free demo classes. Contact us to schedule a demo session with our faculty."
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
            "cssSelector": [".contact-info", ".support-hours", ".office-address"],
            "xpath": ["/html/head/title", "/html/head/meta[@name='description']/@content"]
          })
        }}
      />

      {/* Main Content */}
      <StaticPageLayout slug="contact" pageTitle="Contact Us" />
    </>
  );
}