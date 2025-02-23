import { Sheet, Zap, Scale } from "lucide-react";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Crafting Excellence in Metal
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              With over a decade of experience, we combine traditional
              craftsmanship with cutting-edge technology
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FadeIn delay={200}>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-white">
                      <Sheet className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      State-of-the-Art Equipment
                    </h3>
                    <p className="text-gray-400">
                      Our advanced CNC plasma cutting machine delivers precision
                      cuts with exceptional accuracy
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-white">
                      <Zap className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Rapid Turnaround
                    </h3>
                    <p className="text-gray-400">
                      Quick project completion without compromising on quality
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-white">
                      <Scale className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Custom Solutions
                    </h3>
                    <p className="text-gray-400">
                      From one-off pieces to large production runs, we scale to
                      your needs
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={400}>
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-5">
                <Image
                  src="/images/gp.jpg"
                  alt="Owner with safety equipment"
                  width={600}
                  height={750}
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-charcoal/80 backdrop-blur-sm rounded-lg p-6">
                  <p className="text-lg font-semibold text-white mb-2">
                    Safety First, Quality Always
                  </p>
                  <p className="text-gray-300">
                    We maintain the highest standards of safety and precision in
                    every project we undertake
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
