"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react if not already installed

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="fixed w-full z-10 bg-charcoal/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleScroll(e, "#gallery")}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Gallery
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleScroll(e, "#gallery")}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Gallery
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
