// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Preload the mobile LCP hero image (use encoded path if needed) */}
          <link
            rel="preload"
            as="image"
            href="/_next/image?url=%2Fdeepak2.png&w=750&q=75"
            imagesrcset={
              "/_next/image?url=%2Fdeepak2.png&w=480&q=75 480w, " +
              "/_next/image?url=%2Fdeepak2.png&w=750&q=75 750w"
            }
            imagesizes="100vw"
          />

          {/* Preload critical CSS - replace with your real hashed css paths */}
          <link rel="preload" href="/css/c899bd73374d463e.css" as="style" />
          <link rel="preload" href="/css/e29195b664e7e13b.css" as="style" />
          <link rel="stylesheet" href="/css/c899bd73374d463e.css" />
          <link rel="stylesheet" href="/css/e29195b664e7e13b.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
