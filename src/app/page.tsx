import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Beyond from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />

      {/* ============================= HERO ============================= */}
      <Hero />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="hairline" />
      </div>

      {/* ============================= ABOUT ============================ */}
      <About />

      {/* =========================== EXPERIENCE ========================= */}
      <WorkExperience />

      {/* ============================ PROJECTS ========================== */}
      <Projects />

      {/* ============================= SKILLS ========================== */}
      <Skills />

      {/* ===================== EDUCATION & ACHIEVEMENTS ================= */}
      <Beyond />

      {/* ============================ CONTACT ========================== */}
      <Contact />

      {/* ============================= FOOTER ========================== */}
      <Footer />
    </div>
  );
}
