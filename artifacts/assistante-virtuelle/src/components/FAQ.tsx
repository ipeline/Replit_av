import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment se déroule une collaboration ?",
    answer: "Nous commençons par un appel découverte (gratuit et sans engagement) de 30 minutes pour faire connaissance et comprendre vos besoins. Ensuite, je vous propose un devis et un plan d'action. Une fois validé, nous mettons en place les outils de communication et de partage de fichiers, et la mission peut commencer !"
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Je propose deux formules : une facturation au temps passé (taux horaire de 45€ de l'heure) pour des besoins ponctuels, ou des forfaits mensuels récurrents (ex: 10h, 20h) avec un tarif dégressif. Chaque besoin étant unique, je vous fournis un devis sur-mesure après notre premier échange."
  },
  {
    question: "Comment échangeons-nous au quotidien ?",
    answer: "Je m'adapte à vos habitudes ! Nous pouvons communiquer via email, Slack, WhatsApp, ou des outils de gestion de projet comme Notion ou Trello. Des points de synchronisation réguliers (visio ou téléphone) sont prévus selon la fréquence qui vous convient."
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer: "Pour les missions ponctuelles, il n'y a aucun engagement au-delà de la mission définie. Pour les forfaits mensuels, l'engagement minimum est généralement de 3 mois pour nous laisser le temps de mettre en place une routine efficace, avec un préavis de résiliation d'un mois ensuite."
  },
  {
    question: "Comment gérez-vous la confidentialité de mes données ?",
    answer: "La confidentialité est primordiale dans mon métier. Un accord de confidentialité (NDA) est systématiquement inclus dans nos contrats. De plus, j'utilise des outils sécurisés pour le stockage et le partage des mots de passe (comme LastPass ou 1Password)."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Questions fréquentes
          </h2>
          <p className="text-lg text-foreground/80">
            Tout ce que vous devez savoir avant de démarrer notre collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-background/30 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-serif font-bold text-xl text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
