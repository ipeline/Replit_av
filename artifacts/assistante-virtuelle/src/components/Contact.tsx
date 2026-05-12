import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarDays, CheckCircle2 } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/votre-lien";

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
  const [form, setForm] = useState({
    prenom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#FFFDF8]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#ABC4AA]/30 text-primary font-medium text-sm mb-4 border border-[#ABC4AA]">
            Me contacter
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-foreground/70 text-lg max-w-xl mx-auto">
            Décrivez-moi votre sujet principal et je reviendrai vers vous sous 24h. Ou réservez directement un appel découverte gratuit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Calendly CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-3xl p-10 flex flex-col justify-between h-full min-h-[420px]"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <CalendarDays className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                Appel découverte
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                30 minutes offertes, sans engagement, pour discuter de vos besoins et voir si nous sommes faits pour travailler ensemble.
              </p>
              <ul className="space-y-3 mb-10">
                {["Gratuit et sans engagement", "30 minutes en visio", "Réponse rapide et personnalisée"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-[#F3AB06] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-calendly"
            >
              <Button
                size="lg"
                className="w-full bg-[#D45B1A] hover:bg-[#D45B1A]/90 text-white h-14 text-base font-semibold"
              >
                Réserver mon appel gratuit
              </Button>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-[#ABC4AA]/40 rounded-3xl p-10 shadow-sm"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[380px] text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#ABC4AA]/20 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-9 h-9 text-[#ABC4AA]" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">Message envoyé !</h3>
                <p className="text-foreground/70 max-w-xs">
                  Merci pour votre message. Je vous répondrai dans les 24h.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-primary underline underline-offset-4 hover:text-[#D45B1A] transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                  Envoyez-moi un message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="prenom" className="text-foreground font-medium">Prénom</Label>
                    <Input
                      id="prenom"
                      name="prenom"
                      placeholder="Marie"
                      value={form.prenom}
                      onChange={handleChange}
                      required
                      data-testid="input-prenom"
                      className="border-[#ABC4AA]/60 focus-visible:ring-primary/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="marie@exemple.fr"
                      value={form.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                      className="border-[#ABC4AA]/60 focus-visible:ring-primary/30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="sujet" className="text-foreground font-medium">Sujet principal</Label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={form.sujet}
                    onChange={handleChange}
                    required
                    data-testid="select-sujet"
                    className="w-full h-10 rounded-md border border-[#ABC4AA]/60 bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-colors"
                  >
                    <option value="" disabled>Sélectionnez un sujet...</option>
                    {sujets.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-foreground font-medium">Votre message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez-moi votre situation, vos besoins, ou ce dont vous souhaitez discuter..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    data-testid="textarea-message"
                    className="border-[#ABC4AA]/60 focus-visible:ring-primary/30 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  data-testid="button-submit-contact"
                  className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-semibold"
                >
                  Envoyer mon message
                </Button>

                <p className="text-xs text-foreground/50 text-center">
                  Vos données sont utilisées uniquement pour vous répondre.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
