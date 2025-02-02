import { AnimatedText } from "@/components/animated-text";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="Over Ons"
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Wij combineren geavanceerde technologie met vakmanschap om uw
            metaalprojecten naar het hoogste niveau te tillen
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white tracking-tight mb-6">
              Een Passie voor Precisie
            </h3>
            <p className="text-zinc-400">
              Als vader en enthousiaste hobbyist begon mijn reis in de wereld
              van plasmasnijden vanuit mijn eigen garage. Wat begon als een
              weekend project om speeltoestellen voor mijn kinderen te maken,
              groeide uit tot een ware passie voor precisie metaalbewerking.
            </p>
            <p className="text-zinc-400">
              Met meer dan 10 jaar ervaring in verschillende
              metaalbewerkingsprojecten, van kunstzinnige tuindecoraties tot
              complexe industriële onderdelen, heb ik mijn hobby kunnen
              ontwikkelen tot een professionele dienstverlening. Elk project
              wordt met dezelfde toewijding en precisie aangepakt als die eerste
              creaties voor mijn kinderen.
            </p>
            <p className="text-zinc-400">
              Veiligheid en kwaliteit staan bij ons voorop - niet alleen omdat
              het moet, maar omdat ik geloof dat alleen het beste goed genoeg is
              voor onze klanten, net zoals voor mijn eigen familie.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-lg overflow-hidden ">
              <Image
                height={2048}
                width={1477}
                src="/images/gp.jpg"
                alt="Vakman aan het werk met veiligheidsuitrusting"
                className="w-full h-auto max-w-md mx-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
