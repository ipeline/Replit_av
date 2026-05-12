import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { packs } from "@/data/packs";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const [, navigate] = useLocation();

  return (
    <section id="services" className="py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-accent font-medium text-sm mb-6 border border-secondary/50">
            Ce que je vous propose
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Un investissement qui vous rapporte
          </h2>
          <p className="text-lg text-foreground/80">
            Chaque forfait est défini par un volume de tâches mensuel — pour que vous sachiez exactement ce qui est inclus.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start"
        >
          {packs.map((pack) => (
            <motion.div
              key={pack.slug}
              variants={item}
              className="flex flex-col rounded-2xl p-8 relative"
              style={
                pack.highlight
                  ? {
                      background: "rgba(171,196,170,0.45)",
                      border: "1px solid rgba(171,196,170,0.6)",
                      boxShadow: "0 8px 32px rgba(171,196,170,0.3)",
                      transform: "scale(1.04)",
                    }
                  : {
                      background: "#fff",
                      border: "2px solid #F3AB06",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    }
              }
            >
              {pack.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-widest uppercase px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ background: "#F3AB06", color: "#72270C" }}
                >
                  Le plus choisi
                </div>
              )}

              <h3
                className="text-2xl font-serif font-bold mb-1"
                style={{ color: pack.highlight ? "#D45B1A" : "#72270C" }}
              >
                {pack.name}
              </h3>
              <p className="text-sm mb-5" style={{ color: pack.highlight ? "#72270C" : "#999" }}>
                {pack.tagline}
              </p>

              <div className="mb-5">
                <span
                  className="text-4xl font-serif font-extrabold"
                  style={{ color: pack.highlight ? "#D45B1A" : "#72270C" }}
                >
                  {pack.price}
                </span>
                <span className="text-sm ml-1" style={{ color: pack.highlight ? "#5a5a5a" : "#bbb" }}>
                  {pack.period}
                </span>
              </div>

              {/* Services list */}
              <div
                className="flex-1 pt-5 mb-4"
                style={{
                  borderTop: pack.highlight
                    ? "1px solid rgba(255,255,255,0.5)"
                    : "1px solid rgba(243,171,6,0.35)",
                }}
              >
                {pack.services.map((srv, j) => (
                  <div key={j} className="flex items-start gap-2.5 mb-2.5">
                    <Check
                      className="w-3.5 h-3.5 mt-0.5 shrink-0"
                      style={{ color: pack.highlight ? "#D45B1A" : "#72270C" }}
                    />
                    <span
                      className="text-sm leading-snug"
                      style={{ color: pack.highlight ? "#3a3a3a" : "#555" }}
                    >
                      {srv.titre}
                    </span>
                  </div>
                ))}
              </div>

              {/* Volume quotas */}
              <div
                className="rounded-xl p-3 mb-4"
                style={
                  pack.highlight
                    ? { background: "rgba(255,255,255,0.4)" }
                    : {
                        background: "rgba(243,171,6,0.07)",
                        border: "1px dashed rgba(243,171,6,0.4)",
                      }
                }
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <Zap
                    className="w-2.5 h-2.5"
                    style={{ color: pack.highlight ? "#D45B1A" : "#F3AB06" }}
                  />
                  <span
                    className="text-[11px] font-bold tracking-wider uppercase"
                    style={{ color: pack.highlight ? "#D45B1A" : "#72270C" }}
                  >
                    Volumes inclus
                  </span>
                </div>
                {pack.quotas.map((q, j) => (
                  <div
                    key={j}
                    className="text-xs"
                    style={{
                      color: pack.highlight ? "#3a3a3a" : "#666",
                      paddingBottom: j < pack.quotas.length - 1 ? "5px" : 0,
                      marginBottom: j < pack.quotas.length - 1 ? "5px" : 0,
                      borderBottom:
                        j < pack.quotas.length - 1
                          ? pack.highlight
                            ? "1px solid rgba(255,255,255,0.4)"
                            : "1px solid rgba(243,171,6,0.2)"
                          : "none",
                    }}
                  >
                    {q}
                  </div>
                ))}
              </div>

              {/* Detail link */}
              <button
                onClick={() => navigate(`/forfait/${pack.slug}`)}
                className="w-full text-xs mb-3 underline underline-offset-2 transition-opacity hover:opacity-70"
                style={{ color: pack.highlight ? "#72270C" : "#999" }}
              >
                Voir le détail complet →
              </button>

              <button
                onClick={() => navigate(`/forfait/${pack.slug}`)}
                className="w-full py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90 cursor-pointer"
                style={
                  pack.highlight
                    ? { background: "#D45B1A", color: "#fff", border: "none" }
                    : { background: "transparent", border: "2px solid #F3AB06", color: "#72270C" }
                }
              >
                Choisir ce forfait
              </button>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center mt-14 text-foreground/60 text-sm">
          Des besoins spécifiques ?{" "}
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Parlons-en
          </button>{" "}
          — je crée aussi des forfaits sur-mesure.
        </p>
      </div>
    </section>
  );
}
