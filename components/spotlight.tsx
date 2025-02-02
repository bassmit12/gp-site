"use client"

import { useEffect, useRef, useState } from "react"

export const Spotlight = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const divRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  useEffect(() => {
    const div = divRef.current
    if (div) {
      div.addEventListener("mousemove", handleMouseMove)
      return () => div.removeEventListener("mousemove", handleMouseMove)
    }
  }, [divRef.current]) // Added divRef.current as a dependency

  return (
    <div ref={divRef} className={`relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

