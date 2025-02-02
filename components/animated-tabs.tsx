"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface Tab {
  id: string
  label: string
}

interface AnimatedTabsProps {
  tabs: Tab[]
  onTabChange?: (tab: string) => void
}

export function AnimatedTabs({ tabs, onTabChange }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="flex flex-wrap justify-center space-x-1 rounded-lg bg-zinc-800/50 p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id)
            onTabChange?.(tab.id)
          }}
          className={cn(
            "relative rounded-md px-6 py-3 text-lg font-medium text-zinc-400 transition-colors hover:text-sky-400",
            activeTab === tab.id && "text-white",
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-zinc-700"
              style={{ borderRadius: 8 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

