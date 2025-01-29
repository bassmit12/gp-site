import Link from "next/link"
import { Cog } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Cog className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold font-mono text-white">PrecisionCut</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/#projects" className="text-gray-300 hover:text-blue-400 transition duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-blue-400 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-blue-400 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

