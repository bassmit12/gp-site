import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MetalCraft Precision | Custom CNC Plasma Cutting",
  description: "Precision metalwork and custom CNC plasma cutting services for all your design needs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-charcoal text-gray-200`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

