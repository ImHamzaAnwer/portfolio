"use client";
import { useEffect, useRef } from "react";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <>
      <style jsx>{`
        .custom-gradient-bg {
          background-image: radial-gradient(
            600px at var(--x, 100px) var(--y, 100px),
            rgba(29, 78, 216, 0.15),
            transparent 80%
          );
        }
      `}</style>
      <main
        ref={heroRef}
        className="custom-gradient-bg flex min-h-screen flex-col bg-slate-900"
      >
        <div className="container mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
}
