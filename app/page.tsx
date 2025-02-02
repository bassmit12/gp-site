"use client";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServiceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export default function CNCPlasmaWebsite() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="relative bg-zinc-900 py-6 border-t border-zinc-800">
        <div className="container mx-auto px-6 text-center text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} Precisie Plasmasnijden. Website
            door{" "}
            <a
              href="https://bassmit.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              Bas Smit
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
