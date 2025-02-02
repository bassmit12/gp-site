import { PrinterIcon as Printer3d, Zap, Flame } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import { motion } from "framer-motion";

const services = [
  {
    title: "CNC Plasmasnijden",
    description:
      "Precisie snijden van metaal met onze geavanceerde CNC plasmamachine voor complexe vormen en designs.",
    icon: Zap,
  },
  {
    title: "3D Printen",
    description:
      "Creëer unieke prototypes en onderdelen met onze state-of-the-art 3D printers voor diverse materialen.",
    icon: Printer3d,
  },
  {
    title: "Lassen",
    description:
      "Professioneel laswerk voor alle soorten metalen, van kleine reparaties tot grote constructies.",
    icon: Flame,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="Onze Diensten"
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Van precisie plasmasnijden tot 3D printen en professioneel laswerk,
            wij bieden een compleet pakket aan metaalbewerkingsdiensten.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
                <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-sky-400 to-sky-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-700/50 text-sky-400 group-hover:bg-sky-400 group-hover:text-zinc-900 transition-all duration-300">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-sky-400 transition-colors tracking-wide">
                  {service.title}
                </h3>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-sky-400 group-hover:text-sky-300 transition-colors">
                    Lees meer
                  </span>
                  <svg
                    className="ml-2 h-4 w-4 text-sky-400 group-hover:text-sky-300 transition-colors transform group-hover:translate-x-1 duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
