import { Layers, Zap, Compass } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Custom Designs",
    description:
      "Breng je ideeën tot leven met onze precisie CNC plasma machine",
    icon: Compass,
  },
  {
    title: "Snelle terugkoppeling",
    description: "Binnen een week krijg je reactie op je ideeën.",
    icon: Zap,
  },
  {
    title: "Bulk productie",
    description:
      "Wij bieden bulk productie aan zodat jij kunt profiteren van onze ervaring en technologie.",
    icon: Layers,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ons aanbod
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Precisie metaalwerk op aanbod
            </p>
          </div>
        </FadeIn>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 200}>
              <div className="bg-gray-800 rounded-lg px-6 py-8 hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="text-center">
                  <service.icon className="mx-auto h-12 w-12 text-red-500" />
                  <h3 className="mt-6 text-xl font-medium text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
