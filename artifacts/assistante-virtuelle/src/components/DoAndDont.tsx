import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const doList = [
  "Gestion d'agenda et prise de rendez-vous",
  "Tri et traitement de la boîte mail",
  "Saisie de données et mise à jour de bases",
  "Recherches documentaires et veille",
  "Mise en page de documents et présentations",
  "Gestion basique des réseaux sociaux (programmation)",
  "Organisation de déplacements professionnels",
  "Suivi de facturation (relances simples)"
];

const dontList = [
  "Comptabilité pure (bilans, déclarations fiscales)",
  "Développement web ou maintenance technique complexe",
  "Conseil juridique ou rédaction de contrats",
  "Traduction professionnelle certifiée",
  "Prospection commerciale à froid (cold calling)",
  "Création d'identité visuelle / Graphisme avancé"
];

export default function DoAndDont() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Clarté et transparence
          </h2>
          <p className="text-lg text-foreground/80">
            Pour une collaboration réussie, il est essentiel de définir le cadre. Voici ce que je peux faire pour vous, et ce qui dépasse mon champ d'expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Ce que je fais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/10 rounded-2xl p-8 lg:p-12 border border-secondary/30"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <CheckCircle2 className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Ce que je fais</h3>
            </div>
            
            <ul className="space-y-4">
              {doList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ce que je ne fais pas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-red-50/50 rounded-2xl p-8 lg:p-12 border border-red-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <XCircle className="text-destructive w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">Ce que je ne fais pas</h3>
            </div>
            
            <ul className="space-y-4">
              {dontList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="text-destructive/60 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-border/50 text-sm text-foreground/60 italic">
              * Je peux cependant vous recommander des professionnels qualifiés pour ces missions spécifiques au sein de mon réseau.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
