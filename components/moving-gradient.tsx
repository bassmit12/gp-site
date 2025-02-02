"use client"

export const MovingGradient = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -top-[40%] -left-[40%] w-[180%] h-[180%] animate-slow-spin">
        <div className="absolute inset-0 bg-gradient-conic from-sky-500/40 via-sky-500/10 to-transparent blur-2xl" />
      </div>
    </div>
  )
}

