import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-gray-400 text-sm">
            Website designed and developed by{" "}
            <Link
              href="https://bassmit.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Bas Smit
            </Link>
          </p>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

