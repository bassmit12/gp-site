// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { Flame, Menu, X } from "lucide-react";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

export function Navbar({ scrollToSection }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction and visibility
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not at the top
        setIsVisible(false);
        // Close mobile menu if open
        setIsMenuOpen(false);
      }

      // Update active section
      const sections = ["home", "about", "services", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-sm shadow-md z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Flame className="text-sky-400 w-8 h-8" />
          <nav className="hidden md:flex space-x-1">
            {["home", "about", "services", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === section
                      ? "bg-sky-400 text-zinc-900"
                      : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ),
            )}
          </nav>
          <button
            className="md:hidden text-sky-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800">
          <nav className="px-6 py-4 space-y-2">
            {["home", "about", "services", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === section
                      ? "bg-sky-400 text-zinc-900"
                      : "text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
