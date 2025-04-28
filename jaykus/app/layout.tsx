import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "jaykus - personal website",
  description: "personal website of jayden kusuma, a tech enthusiast and musician. discover projects, music, etc from the local guy in tech.",
  keywords: ["Jayden Kusuma", "personal website", "tech enthusiast", "musician", "Jaykus"],
  authors: [{ name: "Jayden Kusuma" }],
  robots: "index, follow",
  openGraph: {
    title: "jaykus - personal website of jayden kusuma",
    description: "personal website of jayden kusuma, a tech enthusiast and musician. discover projects, music, etc from the local guy in tech.",
    url: "https://jdnkusuma.vercel.app", // Replace with your actual website URL
    type: "website",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D5616AQFmb6XykQhH-g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1738745241361?e=1751500800&v=beta&t=zZmZW1a5KdJ3XAdvB2UpQ0Jj65uiIJ-H63P_DtWyXL0", // Replace with your actual Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Jaykus - Personal Website of Jayden Kusuma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaykus - Personal Website of Jayden Kusuma",
    description: "personal website of jayden kusuma, a tech enthusiast and musician. discover projects, music, etc from the local guy in tech",
    images: ["https://media.licdn.com/dms/image/v2/D5616AQFmb6XykQhH-g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1738745241361?e=1751500800&v=beta&t=zZmZW1a5KdJ3XAdvB2UpQ0Jj65uiIJ-H63P_DtWyXL0"], // Replace with your actual Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
      <Analytics/>
      <SpeedInsights/>
    </html>
  );
}
