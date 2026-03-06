import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jayden Kusuma - Personal Website",
  description:
    "The official website of Jayden Kusuma, a tech enthusiast and musician. Discover personal projects, music, and more from the local guy in tech.",
  keywords: [
    "Jayden Kusuma",
    "Jaykus",
    "personal website",
    "tech enthusiast",
    "musician",
    "developer portfolio",
  ],
  authors: [{ name: "Jayden Kusuma" }],
  creator: "Jayden Kusuma",
  robots: "index, follow",
  openGraph: {
    title: "Jayden Kusuma - Personal Website",
    description:
      "The official website of Jayden Kusuma, a tech enthusiast and musician. Discover personal projects, music, and more from the local guy in tech.",
    url: "https://jdnkusuma.vercel.app",
    type: "website",
    siteName: "Jaykus",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D5616AQFmb6XykQhH-g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1738745241361?e=1751500800&v=beta&t=zZmZW1a5KdJ3XAdvB2UpQ0Jj65uiIJ-H63P_DtWyXL0",
        width: 1200,
        height: 630,
        alt: "Jaykus - Personal Website of Jayden Kusuma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayden Kusuma | Jaykus - Personal Website",
    description:
      "The official website of Jayden Kusuma, a tech enthusiast and musician. Discover personal projects, music, and more.",
    images: [
      "https://media.licdn.com/dms/image/v2/D5616AQFmb6XykQhH-g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1738745241361?e=1751500800&v=beta&t=zZmZW1a5KdJ3XAdvB2UpQ0Jj65uiIJ-H63P_DtWyXL0",
    ],
  },
  metadataBase: new URL("https://jdnkusuma.vercel.app"),
};

// 2. Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 3. Google Site Verification */}
        <meta
          name="google-site-verification"
          content="QK2YvKvDNfZ0lHlKjOPPvbL33Bxhde-70Z-XqMe66O8"
        />

        {/* 4. JSON-LD Structured Data for Personal Schema */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jayden Kusuma",
              url: "https://jdnkusuma.vercel.app",
              sameAs: [
                "https://github.com/jdnkusuma",
                "https://www.linkedin.com/in/jayden-kusuma-81670b238",
                "https://instagram.com/jayden.kusuma",
              ],
              jobTitle: "Tech Enthusiast & Musician",
            }),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
