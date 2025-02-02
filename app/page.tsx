"use client";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { ServicesSection } from "@/components/ServiceSection";

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
            &copy; {new Date().getFullYear()} Precisie Plasmasnijden. Alle
            rechten voorbehouden.
          </p>
        </div>
      </footer>
    </div>
  );
}
