import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Precisie Plasmasnijden",
  description: "Geavanceerde CNC plasmasnijdiensten voor uw metaalprojecten",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}

