"use client";

import { ArrowDownCircle } from "lucide-react";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/hero7.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/25 to-charcoal"></div>
      </div>
      <div className="z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Precision Metal Cutting & Design
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Bringing your visions to life through advanced CNC plasma cutting
          technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            onClick={(e) => handleScroll(e, "#services")}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
          >
            Our Services
            <ArrowDownCircle className="ml-2 -mr-1 h-5 w-5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
