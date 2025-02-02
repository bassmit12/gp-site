import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedText } from "@/components/animated-text";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="Neem Contact Op"
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          />
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Heeft u vragen of wilt u een offerte aanvragen? Neem gerust contact
            met ons op.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
              Stuur ons een bericht
            </h3>
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Uw Naam"
                className="bg-zinc-700/50 border-zinc-600 text-white"
              />
              <Input
                type="email"
                placeholder="Uw E-mail"
                className="bg-zinc-700/50 border-zinc-600 text-white"
              />
              <Input
                type="tel"
                placeholder="Uw Telefoonnummer"
                className="bg-zinc-700/50 border-zinc-600 text-white"
              />
              <Textarea
                placeholder="Uw Bericht"
                className="bg-zinc-700/50 border-zinc-600 text-white"
                rows={4}
              />
              <Button
                type="submit"
                className="w-full bg-sky-400 hover:bg-sky-500 text-zinc-900 font-semibold"
              >
                Verstuur Bericht
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
              Contactgegevens
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-sky-400 w-6 h-6" />
                <span className="text-zinc-300">
                  info@precisieplasmasnijden.nl
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-sky-400 w-6 h-6" />
                <span className="text-zinc-300">+31 6 31279994</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-sky-400 w-6 h-6" />
                <span className="text-zinc-300">
                  Metaalwerkstraat 123, 1234 AB Staalstad
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
