import { Check, Zap } from "lucide-react";

const packs = [
  {
    name: "Coup de pouce",
    tagline: "Pour démarrer sereinement",
    price: "290€",
    period: "/ mois",
    highlight: false,
    services: [
      "Gestion d'agenda",
      "Gestion des emails",
      "Recherches ponctuelles",
    ],
    quotas: ["30 emails / mois", "Agenda : jusqu'à 10 rdv", "5 recherches / mois"],
    cta: "Choisir ce forfait",
  },
  {
    name: "Sérénité",
    tagline: "Le plus choisi",
    price: "650€",
    period: "/ mois",
    highlight: true,
    services: [
      "Gestion d'agenda",
      "Gestion des emails",
      "Organisation & Optimisation",
      "Réseaux sociaux",
      "Saisie de données",
      "1 point mensuel avec vous",
    ],
    quotas: ["75 emails / mois", "Agenda : jusqu'à 30 rdv", "Réseaux : 3 posts / sem."],
    cta: "Choisir ce forfait",
  },
  {
    name: "Bras droit",
    tagline: "Délégation complète",
    price: "1 200€",
    period: "/ mois",
    highlight: false,
    services: [
      "Gestion d'agenda",
      "Gestion des emails",
      "Organisation & Optimisation",
      "Réseaux sociaux",
      "Saisie de données",
      "Recherches diverses",
      "1 point hebdomadaire avec vous",
    ],
    quotas: ["Emails illimités", "Agenda complet", "Toutes les tâches incluses"],
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
          Un investissement qui vous rapporte
        </h2>
        <p style={{ color: "#555", fontSize: "17px", maxWidth: "560px", margin: "0 auto" }}>
          Chaque forfait est défini par un volume de tâches mensuel — pour que vous sachiez exactement ce qui est inclus.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "980px", margin: "0 auto" }}>
        {packs.map((pack, i) => {
          const isGreen = pack.highlight;
          const cardBg = isGreen ? "#ABC4AA" : "#fff";
          const cardBorder = isGreen ? "none" : `2px solid #F3AB06`;
          const cardShadow = isGreen ? "0 8px 32px rgba(171,196,170,0.45)" : "0 1px 4px rgba(0,0,0,0.05)";
          const headingColor = isGreen ? "#D45B1A" : "#72270C";
          const priceColor = isGreen ? "#D45B1A" : "#72270C";
          const taglineColor = isGreen ? "#72270C" : "#999";
          const bodyColor = isGreen ? "#3a3a3a" : "#555";
          const checkColor = isGreen ? "#D45B1A" : "#72270C";
          const dividerColor = isGreen ? "rgba(255,255,255,0.5)" : "rgba(243,171,6,0.35)";
          const quotaBg = isGreen ? "rgba(255,255,255,0.4)" : "rgba(243,171,6,0.07)";
          const quotaText = isGreen ? "#3a3a3a" : "#666";
          const quotaDivider = isGreen ? "rgba(255,255,255,0.4)" : "rgba(243,171,6,0.2)";
          const btnBg = isGreen ? "#D45B1A" : "transparent";
          const btnBorder = isGreen ? "none" : `2px solid #F3AB06`;
          const btnColor = isGreen ? "#fff" : "#72270C";

          return (
            <div key={i} style={{
              background: cardBg,
              borderRadius: "20px",
              padding: "36px 28px",
              border: cardBorder,
              boxShadow: cardShadow,
              position: "relative",
              transform: isGreen ? "scale(1.04)" : "none",
              display: "flex",
              flexDirection: "column",
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

              <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "4px", color: headingColor, fontFamily: "'Arima', serif" }}>
                {pack.name}
              </h3>
              <p style={{ fontSize: "13px", color: taglineColor, marginBottom: "20px" }}>
                {pack.tagline}
              </p>

              <div style={{ marginBottom: "20px" }}>
                <span style={{ fontSize: "36px", fontWeight: 800, color: priceColor, fontFamily: "'Arima', serif" }}>
                  {pack.price}
                </span>
                <span style={{ fontSize: "14px", color: isGreen ? "#5a5a5a" : "#bbb", marginLeft: "4px" }}>
                  {pack.period}
                </span>
              </div>

              {/* Services list */}
              <div style={{ borderTop: `1px solid ${dividerColor}`, paddingTop: "18px", marginBottom: "16px", flex: 1 }}>
                {pack.services.map((srv, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "9px" }}>
                    <Check style={{ width: "14px", height: "14px", color: checkColor, flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "13px", color: bodyColor, lineHeight: 1.4 }}>{srv}</span>
                  </div>
                ))}
              </div>

              {/* Volume quotas — below services */}
              <div style={{
                background: quotaBg,
                borderRadius: "10px",
                padding: "12px 14px",
                marginBottom: "24px",
                border: isGreen ? "none" : `1px dashed rgba(243,171,6,0.4)`
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "8px" }}>
                  <Zap style={{ width: "11px", height: "11px", color: isGreen ? "#D45B1A" : "#F3AB06" }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, color: isGreen ? "#D45B1A" : "#72270C", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Volumes inclus
                  </span>
                </div>
                {pack.quotas.map((q, j) => (
                  <div key={j} style={{
                    fontSize: "12px", color: quotaText,
                    paddingBottom: j < pack.quotas.length - 1 ? "5px" : 0,
                    marginBottom: j < pack.quotas.length - 1 ? "5px" : 0,
                    borderBottom: j < pack.quotas.length - 1 ? `1px solid ${quotaDivider}` : "none"
                  }}>
                    {q}
                  </div>
                ))}
              </div>

              <button style={{
                width: "100%", padding: "12px", borderRadius: "10px",
                background: btnBg,
                border: btnBorder,
                color: btnColor,
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
