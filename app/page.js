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
        .content-container {
          position: relative;
          z-index: 1;
          background-image: radial-gradient(
            600px at var(--x) var(--y),
            rgba(29, 78, 216, 0.15),
            transparent 80%
          );
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          min-height: 100vh;
        }
      `}</style>
      <div
        ref={heroRef}
        className="content-container bg-slate-900 inset-0 transition duration-300"
      >
        <div className="container relative z-20 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
