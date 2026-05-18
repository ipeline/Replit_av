import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { packs } from "@/data/packs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendly.com/votre-lien";

const packColors: Record<string, { bg: string; border: string; accent: string }> = {
  "coup-de-pouce": { bg: "rgba(243,171,6,0.08)", border: "#F3AB06", accent: "#72270C" },
  serenite: { bg: "rgba(171,196,170,0.25)", border: "rgba(171,196,170,0.7)", accent: "#D45B1A" },
  "bras-droit": { bg: "rgba(243,171,6,0.08)", border: "#F3AB06", accent: "#72270C" },
};

export default function PriseDeRdv() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  const pack = packs.find((p) => p.slug === slug);
  const colors = packColors[slug ?? ""] ?? packColors["coup-de-pouce"];

  const [form, setForm] = useState({
    prenom: "",
    email: "",
    telephone: "",
    message: `Bonjour, je suis intéressé(e) par le forfait "${pack?.name ?? ""}" et j'aimerais en discuter avec vous.`,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!pack) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
        <p className="text-foreground/60">Forfait introuvable.</p>
        <Button onClick={() => navigate("/")} variant="outline">
          Retour à l'accueil
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full font-sans text-foreground bg-background selection:bg-accent/30 min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">

          {/* Back */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground/80 transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Retour aux forfaits
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            {/* Pack badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.accent }}
            >
              Forfait choisi : {pack.name} — {pack.price}{pack.period}
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Parlons de votre projet
            </h1>
            <p className="text-foreground/60 text-lg max-w-md mx-auto">
              Remplissez ce formulaire ou réservez directement un appel découverte gratuit de 30 minutes.
            </p>
          </motion.div>

          {/* Calendly CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
          >
            <div>
              <p className="font-semibold text-primary mb-1">Vous préférez en parler directement ?</p>
              <p className="text-sm text-foreground/60">Réservez un créneau en 2 clics — sans engagement.</p>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <Button
                className="gap-2 whitespace-nowrap"
                style={{
                  background: colors.accent,
                  color: "#fff",
                  border: "none",
                }}
              >
                <CalendarDays className="w-4 h-4" />
                Réserver un appel
              </Button>
            </a>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border/40" />
            <span className="text-sm text-foreground/40">ou envoyez-moi un message</span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-border/40 shadow-sm"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[280px] text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-9 h-9 text-secondary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">Message envoyé !</h3>
                <p className="text-foreground/60 max-w-xs">
                  Merci pour votre intérêt pour le forfait <strong>{pack.name}</strong>. Je vous répondrai dans les 24h pour convenir d'un rendez-vous.
                </p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-4 text-sm text-accent underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  Retour à l'accueil
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="prenom" className="text-foreground font-medium">Prénom *</Label>
                    <Input
                      id="prenom" name="prenom" placeholder="Marie"
                      value={form.prenom} onChange={handleChange} required
                      className="border-[#ABC4AA]/60 focus-visible:ring-[#D45B1A]/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                    <Input
                      id="email" name="email" type="email" placeholder="marie@exemple.fr"
                      value={form.email} onChange={handleChange} required
                      className="border-[#ABC4AA]/60 focus-visible:ring-[#D45B1A]/30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="telephone" className="text-foreground font-medium">
                    Téléphone <span className="text-foreground/40 font-normal">(facultatif)</span>
                  </Label>
                  <Input
                    id="telephone" name="telephone" type="tel" placeholder="+33 6 00 00 00 00"
                    value={form.telephone} onChange={handleChange}
                    className="border-[#ABC4AA]/60 focus-visible:ring-[#D45B1A]/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-foreground font-medium">Votre message *</Label>
                  <Textarea
                    id="message" name="message"
                    value={form.message} onChange={handleChange} required rows={5}
                    className="border-[#ABC4AA]/60 focus-visible:ring-[#D45B1A]/30 resize-none"
                  />
                </div>

                <Button
                  type="submit" size="lg"
                  className="w-full text-white h-12 text-base font-semibold"
                  style={{ background: "#72270C" }}
                >
                  Envoyer ma demande
                </Button>

                <p className="text-xs text-foreground/40 text-center">
                  Vos données sont utilisées uniquement pour vous recontacter.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
