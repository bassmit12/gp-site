import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
    </main>
  )
}

