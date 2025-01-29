import Hero from "@/components/hero"
import Projects from "@/components/projects"
import AboutUs from "@/components/about-us"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Projects />
      <AboutUs />
      <Contact />
    </main>
  )
}

