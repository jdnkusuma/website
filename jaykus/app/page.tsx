'use client'

import Hero from "./components/hero";
import { useEffect } from "react";
import QuickAbout from "./components/quick-about";
import Services from "./components/services";


export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const main = document.querySelector("main");
      if (header) {
      header.classList.toggle("stuck", window.scrollY > 0);
      }
      if (main) {
        main.classList.toggle("stuck", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen bg-dark text-light transition-all duration-500">
      <Hero/>
      <QuickAbout/>
      <Services/>
    </main>
  );
}
