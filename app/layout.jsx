// import ReduxProvider from '../providers/ReduxProvider';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import './globals.css';

// import { Inter } from 'next/font/google';
// import Script from 'next/script';
// // import Script from 'next/script';gi


// /* =========================
//    FONT (LCP OPTIMIZED)
// ========================= */
// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap', // ✅ IMPORTANT for LCP
// });

// /* =========================
//    METADATA (SEO SAFE)
// ========================= */
// export const metadata = {
//   title: 'RankUp — NEET-UG Preparation App',
//   description:
//     'RankUp helps NEET-UG aspirants with smart flashcards, tests, and analytics to boost scores.',

//   openGraph: {
//     title: 'RankUp — NEET-UG Preparation App',
//     description:
//       'Smart flashcards, AI revision planner & detailed analytics for NEET-UG.',
//     url: 'https://www.rankupp.in',
//     images: ['/og-image.png'],
//   },

//   robots: 'index, follow',

//   icons: {
//     icon: '/favs.png',
//     shortcut: '/favs.png',
//     apple: '/favs.png',
//   },
// };

// /* =========================
//    ROOT LAYOUT
// ========================= */
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>

//         {/* =========================
//             GOOGLE ANALYTICS (NON-BLOCKING)
//         ========================= */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-X3HCWNWJB3"
//           strategy="lazyOnload"   // ✅ KEY FIX
//         />

//         <Script id="ga-init" strategy="lazyOnload">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-X3HCWNWJB3');
//           `}
//         </Script>

//         {/* =========================
//             APP CONTENT
//         ========================= */}
//         <ReduxProvider>
//           <Header />
//           {children}
//           <Footer />
//         </ReduxProvider>

//       </body>
//     </html>
//   );
// }

import ReduxProvider from '../providers/ReduxProvider';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

import { Inter } from 'next/font/google';
import Script from 'next/script';

/* =========================
   FONT (LCP OPTIMIZED)
========================= */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

/* =========================
   METADATA (SEO)
========================= */
export const metadata = {
  title: 'RankUp — NEET-UG Preparation App',
  description:
    'RankUp helps NEET-UG aspirants with smart flashcards, tests, and analytics to boost scores.',

  openGraph: {
    title: 'RankUp — NEET-UG Preparation App',
    description:
      'Smart flashcards, AI revision planner & detailed analytics for NEET-UG.',
    url: 'https://www.rankupp.in',
    images: ['/og-image.png'],
  },

  robots: 'index, follow',
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ FORCE FAVICON FOR GOOGLE */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />

        {/* ✅ PWA / ANDROID */}
        <meta name="theme-color" content="#0f172a" />
      </head>

      <body className={inter.className}>

        {/* =========================
            GOOGLE ANALYTICS
        ========================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X3HCWNWJB3"
          strategy="lazyOnload"
        />

        <Script id="ga-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X3HCWNWJB3');
          `}
        </Script>

        {/* =========================
            APP CONTENT
        ========================= */}
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>

      </body>
    </html>
  );
}

