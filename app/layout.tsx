import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";

// The Finalized Optimized Metadata
export const metadata: Metadata = {
  // Use a cleaner title structure
  title: {
    default: "Jayden Kusuma | Software Engineer | Jakarta",
    template: "%s | Jayden Kusuma"
  },
  description: "Official website of Jayden Kusuma: Software Engineer, tech enthusiast, and musician based in Jakarta. Exploring elegant solutions and crafting digital experiences.",
  keywords: [
    "Jayden Kusuma",
    "Jaykus",
    "Software Engineer Jakarta",
    "developer portfolio",
    "React developer",
    "Jakarta tech scene"
  ],
  authors: [{ name: "Jayden Kusuma" }],
  creator: "Jayden Kusuma",
  robots: "index, follow",
  // Ensure these paths match the generated PNGs below
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    // This is the one Google focuses on for mobile
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  // Ensure metadataBase is set for relative paths to work
  metadataBase: new URL("https://jaydenkusuma.vercel.app"),
  openGraph: {
    title: "Jayden Kusuma - Software Engineer & Musician",
    description: "Elegant code, compelling music, and personal projects from Jayden Kusuma's digital hub.",
    url: "https://jaydenkusuma.vercel.app",
    type: "website",
    siteName: "Jayden Kusuma",
    locale: "en_ID",
    images: [
      {
        url: "/og-image.jpg", // The dynamic image below
        width: 1200,
        height: 630,
        alt: "Jayden Kusuma - Digital Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayden Kusuma | Jaykus - Personal Hub",
    description: "Software engineering and music from Jayden Kusuma.",
    images: [
      "/og-image.jpg", // Reusing the dynamic image
    ],
  },
};

// Root Layout (Remains as you wrote it, it was correct!)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="QK2YvKvDNfZ0lHlKjOPPvbL33Bxhde-70Z-XqMe66O8"
        />
        {/* The Schema Strategy 'afterInteractive' is a good move for performance */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jayden Kusuma",
              url: "https://jaydenkusuma.vercel.app",
              sameAs: [
                "https://github.com/jdnkusuma",
                "https://www.linkedin.com/in/jayden-kusuma-81670b238",
                "https://instagram.com/jayden.kusuma",
              ],
              // Explicit jobTitle for better Knowledge Graph recognition
              jobTitle: "Software Engineer", 
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