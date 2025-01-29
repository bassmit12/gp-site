import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-off-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono text-white">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-gray-300">info@precisioncut.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-gray-300">123 Precision Lane, Metalville, MC 12345</span>
              </li>
            </ul>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

