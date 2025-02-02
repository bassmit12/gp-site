"use client"

import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div
        className={cn(
          "pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 transform",
          "[--size:20rem] h-[var(--size)] w-[var(--size)]",
          "bg-gradient-to-r from-sky-500 to-sky-300 opacity-20 blur-[100px]",
        )}
      />
      <div
        className={cn(
          "animate-pulse pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 transform",
          "[--size:40rem] h-[var(--size)] w-[var(--size)]",
          "bg-gradient-to-r from-sky-500 to-sky-300 opacity-10 blur-[100px]",
        )}
      />
    </div>
  )
}

