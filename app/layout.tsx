import "./globals.css"
import { Inter, Roboto_Mono } from "next/font/google"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" })

export const metadata = {
  title: "PrecisionCut - CNC Plasma Cutting Specialists",
  description: "Precision metal fabrication with state-of-the-art CNC plasma cutting technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans bg-black text-gray-100`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

