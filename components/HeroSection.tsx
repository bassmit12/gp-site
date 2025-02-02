import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/spotlight"
import { MovingGradient } from "@/components/moving-gradient"
import { AnimatedText } from "@/components/animated-text"
import { motion } from "framer-motion"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero6.jpg-eOPPihVSw7KbMJva3ZGU0x5fn2p0qL.jpeg)",
      }}
    >
      <MovingGradient className="opacity-30" />
      <Spotlight className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="relative">
            <AnimatedText
              text="Precisie Plasmasnijden"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 tracking-tight"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-zinc-300 max-w-2xl mx-auto mt-4">
                Metaal transformeren met ongeëvenaarde precisie en geavanceerde innovatie
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-sky-400 hover:bg-sky-500 text-zinc-900 font-semibold px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg"
            >
              Bekijk Ons Werk
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent hover:bg-sky-400 text-sky-400 hover:text-zinc-900 font-semibold border border-sky-400 hover:border-transparent px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg"
            >
              Vraag een Offerte
            </Button>
          </motion.div>
        </div>
      </Spotlight>
    </section>
  )
}

