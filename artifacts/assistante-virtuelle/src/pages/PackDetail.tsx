import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Check, X, ArrowLeft, CalendarDays, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packs } from "@/data/packs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendly.com/votre-lien";

const packColors: Record<string, { border: string; check: string; badge: string; bg: string; text: string }> = {
  "coup-de-pouce": {
    border: "#F3AB06",
    check: "#72270C",
    badge: "rgba(243,171,6,0.12)",
    bg: "rgba(243,171,6,0.07)",
    text: "#72270C",
  },
  serenite: {
    border: "rgba(171,196,170,0.6)",
    check: "#D45B1A",
    badge: "rgba(171,196,170,0.3)",
    bg: "rgba(171,196,170,0.15)",
    text: "#D45B1A",
  },
  "bras-droit": {
    border: "#F3AB06",
    check: "#72270C",
    badge: "rgba(243,171,6,0.12)",
    bg: "rgba(243,171,6,0.07)",
    text: "#72270C",
  },
};

export default function PackDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  const pack = packs.find((p) => p.slug === slug);
  const colors = packColors[slug ?? ""] ?? packColors["coup-de-pouce"];

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

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="w-full font-sans text-foreground bg-background selection:bg-accent/30 min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">

          {/* Back button */}
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
            className="mb-14"
          >
            {pack.highlight && (
              <span
                className="inline-block text-[11px] font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-4"
                style={{ background: "#F3AB06", color: "#72270C" }}
              >
                Le plus choisi
              </span>
            )}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">
                  {pack.name}
                </h1>
                <p className="text-lg text-foreground/60">{pack.tagline}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-4xl font-serif font-extrabold text-primary">{pack.price}</div>
                <div className="text-sm text-foreground/50">{pack.period}</div>
              </div>
            </div>

            {/* Accroche */}
            <div
              className="mt-8 p-6 rounded-2xl text-foreground/80 leading-relaxed"
              style={{ background: colors.bg, borderLeft: `4px solid ${colors.border}` }}
            >
              {pack.accroche}
            </div>
          </motion.div>

          {/* Pour qui */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-14"
          >
            <div className="flex items-center gap-2 mb-5">
              <Users className="w-5 h-5" style={{ color: colors.text }} />
              <h2 className="text-2xl font-serif font-bold text-primary">À qui s'adresse ce forfait ?</h2>
            </div>
            <ul className="space-y-3">
              {pack.pourQui.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: colors.check }} />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Services détaillés */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-14"
          >
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Ce qui est inclus — en détail</h2>
            <div className="space-y-5">
              {pack.services.map((service, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border"
                  style={{ borderColor: colors.border, background: "#fff" }}
                >
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">{service.titre}</h3>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{service.detail}</p>
                  <div className="space-y-1.5">
                    {service.exemples.map((ex, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: colors.check }} />
                        <span className="text-sm text-foreground/65">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Volumes inclus */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-14"
          >
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-5 h-5" style={{ color: colors.text }} />
              <h2 className="text-2xl font-serif font-bold text-primary">Volumes inclus</h2>
            </div>
            <div
              className="rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
              style={{ background: colors.bg }}
            >
              {pack.quotas.map((q, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border"
                  style={{ borderColor: colors.border }}
                >
                  <Check className="w-4 h-4 shrink-0" style={{ color: colors.check }} />
                  <span className="text-sm font-medium text-foreground/80">{q}</span>
                </div>
              ))}
            </div>
            {pack.note && (
              <p className="text-sm text-foreground/50 mt-4 italic">{pack.note}</p>
            )}
          </motion.section>

          {/* Hors scope */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-14"
          >
            <h2 className="text-2xl font-serif font-bold text-primary mb-5">Ce qui n'est pas inclus</h2>
            <div className="rounded-2xl p-6 bg-white border border-border/40 space-y-3">
              {pack.horsScope.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 mt-0.5 shrink-0 text-foreground/30" />
                  <span className="text-sm text-foreground/60">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/45 mt-4">
              Ces éléments peuvent faire l'objet d'un devis séparé selon votre besoin.
            </p>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl p-8 md:p-12 text-center"
            style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">
              Ce forfait vous correspond ?
            </h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Prenez contact pour qu'on en discute — l'appel découverte est gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base font-semibold"
              >
                M'envoyer un message
              </Button>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#D45B1A] text-[#D45B1A] hover:bg-[#D45B1A]/5 gap-2 h-12 px-8 text-base"
                >
                  <CalendarDays className="w-4 h-4" />
                  Réserver un appel découverte
                </Button>
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
