"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="relative h-screen flex items-center bg-black overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Plasma Hover Effect */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: isHovering
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 150, 255, 0.3) 0%, rgba(0, 150, 255, 0.1) 20%, transparent 50%)`
            : "none",
        }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4 font-mono text-white"
            >
              Precision
              <br />
              <span className="text-blue-400">Metal Cutting</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 max-w-md text-gray-300"
            >
              Transforming raw metal into precision components with
              state-of-the-art CNC plasma cutting technology!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="#contact"
                className="
                  relative
                  inline-flex
                  items-center
                  justify-center
                  overflow-hidden
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-3
                  px-6
                  rounded-md
                  transition
                  duration-300
                  group
                "
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image
                src="/images/hero2.jpg"
                alt="CNC Plasma Cutting in Action"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
