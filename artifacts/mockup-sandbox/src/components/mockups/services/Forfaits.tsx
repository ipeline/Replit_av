import { Check, Zap } from "lucide-react";

const packs = [
  {
    name: "Coup de pouce",
    tagline: "Pour démarrer sereinement",
    quotas: ["30 emails / mois", "Agenda : jusqu'à 10 rdv", "5 recherches ponctuelles"],
    price: "290€",
    period: "/ mois",
    highlight: false,
    borderColor: "#F3AB06",
    checkColor: "#72270C",
    services: [
      "Gestion d'agenda",
      "Gestion des emails",
      "Recherches ponctuelles",
    ],
    cta: "Choisir ce forfait",
  },
  {
    name: "Sérénité",
    tagline: "Le plus choisi",
    quotas: ["75 emails / mois", "Agenda : jusqu'à 30 rdv", "Organisation & suivi", "Réseaux sociaux"],
    price: "650€",
    period: "/ mois",
    highlight: true,
    borderColor: null,
    checkColor: "#D45B1A",
    services: [
      "Gestion d'agenda",
      "Gestion des emails",
      "Organisation & Optimisation",
      "Réseaux sociaux",
      "Saisie de données",
      "1 point mensuel avec vous",
    ],
    cta: "Choisir ce forfait",
  },
  {
    name: "Bras droit",
    tagline: "Délégation complète",
    quotas: ["Emails illimités", "Agenda complet", "Toutes les tâches", "Suivi hebdomadaire"],
    price: "1 200€",
    period: "/ mois",
    highlight: false,
    borderColor: "#F3AB06",
    checkColor: "#72270C",
    services: [
      "Gestion d'agenda",
      "Gestion des emails",
      "Organisation & Optimisation",
      "Réseaux sociaux",
      "Saisie de données",
      "Recherches diverses",
      "1 point hebdomadaire avec vous",
    ],
    cta: "Choisir ce forfait",
  },
];

export function Forfaits() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#FFFDF8", minHeight: "100vh", padding: "60px 40px" }}>
      <div style={{ textAlign: "center", marginBottom: "52px" }}>
        <span style={{
          display: "inline-block", padding: "6px 16px", borderRadius: "999px",
          background: "rgba(171,196,170,0.2)", color: "#D45B1A",
          fontSize: "13px", fontWeight: 500, border: "1px solid rgba(171,196,170,0.5)", marginBottom: "16px"
        }}>
          Ce que je vous propose
        </span>
        <h2 style={{ fontSize: "38px", fontWeight: 700, color: "#72270C", marginBottom: "12px", fontFamily: "'Arima', serif" }}>
          Des forfaits clairs, sans surprise
        </h2>
        <p style={{ color: "#555", fontSize: "17px", maxWidth: "560px", margin: "0 auto" }}>
          Chaque forfait est défini par un volume de tâches mensuel — pour que vous sachiez exactement ce qui est inclus, et moi ce que je m'engage à livrer.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "980px", margin: "0 auto" }}>
        {packs.map((pack, i) => {
          const isGreen = pack.highlight;
          const cardBg = isGreen ? "#2D6A4F" : "#fff";
          const headingColor = isGreen ? "#D45B1A" : "#72270C";
          const bodyColor = isGreen ? "rgba(255,255,255,0.78)" : "#555";
          const priceColor = isGreen ? "#D45B1A" : "#72270C";
          const subColor = isGreen ? "rgba(255,255,255,0.55)" : "#bbb";
          const divider = isGreen ? "rgba(255,255,255,0.15)" : "rgba(243,171,6,0.35)";

          return (
            <div key={i} style={{
              background: cardBg,
              borderRadius: "20px",
              padding: "36px 28px",
              border: isGreen ? "none" : `2px solid ${pack.borderColor}`,
              boxShadow: isGreen ? "0 8px 32px rgba(45,106,79,0.22)" : "0 1px 4px rgba(0,0,0,0.05)",
              position: "relative",
              transform: isGreen ? "scale(1.04)" : "none",
            }}>
              {isGreen && (
                <div style={{
                  position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)",
                  background: "#F3AB06", color: "#72270C", fontSize: "11px", fontWeight: 700,
                  padding: "4px 14px", borderRadius: "999px", letterSpacing: "0.06em", textTransform: "uppercase"
                }}>
                  Le plus choisi
                </div>
              )}

              {/* Volume badge */}
              <div style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: isGreen ? "rgba(255,255,255,0.12)" : "rgba(243,171,6,0.12)",
                borderRadius: "999px", padding: "5px 12px", marginBottom: "20px",
                width: "fit-content"
              }}>
                <Zap style={{ width: "12px", height: "12px", color: isGreen ? "#F3AB06" : "#F3AB06" }} />
                <span style={{ fontSize: "11px", fontWeight: 600, color: isGreen ? "#F3AB06" : "#72270C", letterSpacing: "0.03em" }}>
                  Volume de tâches défini
                </span>
              </div>

              <h3 style={{
                fontSize: "24px", fontWeight: 700, marginBottom: "4px",
                color: headingColor, fontFamily: "'Arima', serif"
              }}>
                {pack.name}
              </h3>
              <p style={{ fontSize: "13px", color: bodyColor, marginBottom: "20px" }}>
                {pack.tagline}
              </p>

              {/* Task quotas */}
              <div style={{
                background: isGreen ? "rgba(255,255,255,0.08)" : "rgba(243,171,6,0.07)",
                borderRadius: "10px", padding: "12px 14px", marginBottom: "20px"
              }}>
                {pack.quotas.map((q, j) => (
                  <div key={j} style={{
                    fontSize: "12px", color: isGreen ? "rgba(255,255,255,0.75)" : "#666",
                    paddingBottom: j < pack.quotas.length - 1 ? "6px" : 0,
                    marginBottom: j < pack.quotas.length - 1 ? "6px" : 0,
                    borderBottom: j < pack.quotas.length - 1 ? `1px solid ${isGreen ? "rgba(255,255,255,0.08)" : "rgba(243,171,6,0.2)"}` : "none"
                  }}>
                    {q}
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <span style={{ fontSize: "36px", fontWeight: 800, color: priceColor, fontFamily: "'Arima', serif" }}>
                  {pack.price}
                </span>
                <span style={{ fontSize: "14px", color: subColor, marginLeft: "4px" }}>
                  {pack.period}
                </span>
              </div>

              <div style={{ borderTop: `1px solid ${divider}`, paddingTop: "18px", marginBottom: "24px" }}>
                {pack.services.map((srv, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "9px" }}>
                    <Check style={{
                      width: "14px", height: "14px",
                      color: pack.checkColor,
                      flexShrink: 0, marginTop: "2px"
                    }} />
                    <span style={{ fontSize: "13px", color: bodyColor, lineHeight: 1.4 }}>{srv}</span>
                  </div>
                ))}
              </div>

              <button style={{
                width: "100%", padding: "12px", borderRadius: "10px",
                background: isGreen ? "#D45B1A" : "transparent",
                border: isGreen ? "none" : `2px solid ${pack.borderColor}`,
                color: isGreen ? "#fff" : "#72270C",
                fontWeight: 600, fontSize: "14px", cursor: "pointer",
                fontFamily: "'Inter', sans-serif"
              }}>
                {pack.cta}
              </button>
            </div>
          );
        })}
      </div>

      <p style={{ textAlign: "center", marginTop: "48px", color: "#999", fontSize: "14px" }}>
        Vous avez des besoins particuliers ?{" "}
        <span style={{ color: "#D45B1A", textDecoration: "underline", cursor: "pointer" }}>Parlons-en</span>
        {" "}— je crée aussi des forfaits sur-mesure.
      </p>
    </div>
  );
}
