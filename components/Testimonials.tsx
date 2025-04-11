import { Star } from "lucide-react";
import Image from "next/image";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "John Smith",
    role: "Construction Manager",
    content:
      "The precision and quality of their work is outstanding. They delivered our custom metal components ahead of schedule.",
    image: "/images/gp.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    content:
      "Their ability to bring my design concepts to life is remarkable. The attention to detail in their metal artwork is exceptional.",
    image: "/images/gp.jpg",
  },
  {
    name: "Mike Williams",
    role: "Manufacturing Director",
    content:
      "We've been working with them for bulk orders, and their consistency and reliability are unmatched in the industry.",
    image: "/images/gp.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Reviews
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Neem niet alleen ons woord aan maar ook de reviews van voorgaande
              klanten.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 200}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-red-500 text-red-500"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
