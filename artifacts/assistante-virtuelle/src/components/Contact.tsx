import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, CalendarDays } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/ipeline_assistante-vituelle/reprenez-le-controleou-autre";

const sujets = [
  "Gestion d'agenda",
  "Gestion des emails",
  "Rédaction & relecture",
  "Réseaux sociaux",
  "Saisie de données",
  "Recherches diverses",
  "Autre",
];

export default function Contact() {
  const [form, setForm] = useState({ prenom: "", email: "", sujet: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#FFFDF8]">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F3AB06]/20 text-[#D45B1A] font-medium text-sm mb-4 border border-[#F3AB06]/40">
            Me contacter
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Prêt(e) à reprendre le contrôle de votre emploi du temps ?
          </h2>
          <p className="text-foreground/60 text-lg max-w-lg mx-auto">
            Décrivez-moi votre sujet principal et je reviendrai vers vous sous 24h.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-[#ABC4AA]/40 rounded-3xl p-8 md:p-12 shadow-sm"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center min-h-[340px] text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#ABC4AA]/20 flex items-center justify-center mb-2">
                <CheckCircle2 className="w-9 h-9 text-[#ABC4AA]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Message envoyé !</h3>
              <p className="text-foreground/60 max-w-xs">
                Merci pour votre message. Je vous répondrai dans les 24h.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm text-[#D45B1A] underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="prenom" className="text-foreground font-medium">Prénom</Label>
                  <Input
                    id="prenom" name="prenom" placeholder="Marie"
                    value={form.prenom} onChange={handleChange} required
                    data-testid="input-prenom"
                    className="border-[#ABC4AA]/60 focus-visible:ring-[#D45B1A]/30"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    id="email" name="email" type="email" placeholder="marie@exemple.fr"
                    value={form.email} onChange={handleChange} required
                    data-testid="input-email"
                    className="border-[#ABC4AA]/60 focus-visible:ring-[#D45B1A]/30"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="sujet" className="text-foreground font-medium">Sujet principal</Label>
                <select
                  id="sujet" name="sujet" value={form.sujet}
                  onChange={handleChange} required data-testid="select-sujet"
                  className="w-full h-10 rounded-md border border-[#ABC4AA]/60 bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#D45B1A]/30 focus:border-[#D45B1A]/60 transition-colors"
                >
                  <option value="" disabled>Sélectionnez un sujet...</option>
                  {sujets.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-foreground font-medium">Votre message</Label>
                <Textarea
                  id="message" name="message"
                  placeholder="Décrivez-moi votre situation, vos besoins, ou ce dont vous souhaitez discuter..."
                  value={form.message} onChange={handleChange} required rows={5}
                  data-testid="textarea-message"
                  className="border-[#ABC4AA]/60 focus-visible:ring-[#D45B1A]/30 resize-none"
                />
              </div>

              <Button
                type="submit" size="lg" data-testid="button-submit-contact"
                className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-semibold"
              >
                Envoyer mon message
              </Button>

              <p className="text-xs text-foreground/40 text-center">
                Vos données sont utilisées uniquement pour vous répondre.
              </p>
            </form>
          )}
        </motion.div>

        {/* Calendly alternative */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-foreground/50 text-sm mb-3">Vous préférez en discuter de vive voix ?</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" data-testid="link-calendly">
            <Button
              variant="outline"
              className="border-[#D45B1A] text-[#D45B1A] hover:bg-[#D45B1A]/5 gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              Réserver un appel découverte gratuit
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
