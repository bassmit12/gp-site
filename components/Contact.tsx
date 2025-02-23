import { Mail, Phone, MapPin } from "lucide-react"
import FadeIn from "./FadeIn"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-400">
              Ready to start your project? Contact us today for a consultation.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
              <Phone className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 text-center">+1 (555) 234-5678</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
              <Mail className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 text-center">contact@metalcraft.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
              <MapPin className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400 text-center">123 Metal Street, Industrial District</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

