"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("translate-y-10")
          }, delay)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      {children}
    </div>
  )
}

