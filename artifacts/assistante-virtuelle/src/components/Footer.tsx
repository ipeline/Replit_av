import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Prêt(e) à retrouver <span className="text-[#F3AB06]">votre temps ?</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg leading-relaxed">
              Discutons de vos besoins autour d'un café virtuel. Cet appel de 30 minutes est gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#D45B1A] text-white hover:bg-[#D45B1A]/90 h-14 px-8 text-base">
                Réserver un appel <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-serif font-bold mb-8 text-white">Mes coordonnées</h3>
            
            <div className="space-y-6">
              <a href="mailto:bonjour@clairedubois.fr" className="flex items-center gap-4 group hover:text-[#F3AB06] transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F3AB06]/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-lg font-medium">bonjour@clairedubois.fr</div>
              </a>
              
              <a href="tel:+33600000000" className="flex items-center gap-4 group hover:text-[#F3AB06] transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F3AB06]/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-lg font-medium">06 00 00 00 00</div>
              </a>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-lg font-medium">100% en ligne (basée en France)</div>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/60 text-sm">
          <div className="font-serif font-bold text-xl text-white">Claire Dubois.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
          <div>© {new Date().getFullYear()} Claire Dubois - Tous droits réservés</div>
        </div>
      </div>
    </footer>
  );
}
