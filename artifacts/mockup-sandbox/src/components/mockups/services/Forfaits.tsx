import { Check, Users } from "lucide-react";

const packs = [
  {
    name: "Essentiel",
    tagline: "Pour démarrer sereinement",
    limit: "2 clients max",
    hours: "8h / mois",
    price: "290€",
    period: "/ mois",
    highlight: false,
    color: "#ABC4AA",
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
    limit: "4 clients max",
    hours: "20h / mois",
    price: "650€",
    period: "/ mois",
    highlight: true,
    color: "#D45B1A",
    services: [
      "Gestion d'agenda",
      "Gestion des emails",
      "Organisation & Optimisation",
      "Réseaux sociaux",
      "Saisie de données",
    ],
    cta: "Choisir ce forfait",
  },
  {
    name: "Premium",
    tagline: "Délégation complète",
    limit: "6 clients max",
    hours: "40h / mois",
    price: "1 200€",
    period: "/ mois",
    highlight: false,
    color: "#F3AB06",
    services: [
      "Gestion d'agenda",
      "Gestion des emails",
      "Organisation & Optimisation",
      "Réseaux sociaux",
      "Saisie de données",
      "Recherches diverses",
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
        <p style={{ color: "#555", fontSize: "17px", maxWidth: "520px", margin: "0 auto" }}>
          Je travaille avec un nombre limité de clients pour garantir qualité et disponibilité. Choisissez le palier qui correspond à vos besoins.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "980px", margin: "0 auto" }}>
        {packs.map((pack, i) => (
          <div key={i} style={{
            background: pack.highlight ? "#72270C" : "#fff",
            borderRadius: "20px",
            padding: "36px 28px",
            border: pack.highlight ? "none" : "1px solid rgba(171,196,170,0.4)",
            boxShadow: pack.highlight ? "0 8px 32px rgba(114,39,12,0.18)" : "0 1px 4px rgba(0,0,0,0.04)",
            position: "relative",
            transform: pack.highlight ? "scale(1.03)" : "none",
          }}>
            {pack.highlight && (
              <div style={{
                position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                background: "#F3AB06", color: "#72270C", fontSize: "11px", fontWeight: 700,
                padding: "4px 14px", borderRadius: "999px", letterSpacing: "0.05em", textTransform: "uppercase"
              }}>
                Le plus choisi
              </div>
            )}

            {/* Limit badge */}
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: pack.highlight ? "rgba(255,255,255,0.12)" : "rgba(171,196,170,0.15)",
              borderRadius: "999px", padding: "5px 12px", marginBottom: "20px",
              width: "fit-content"
            }}>
              <Users style={{ width: "13px", height: "13px", color: pack.highlight ? "#F3AB06" : pack.color }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: pack.highlight ? "#F3AB06" : pack.color }}>
                {pack.limit}
              </span>
            </div>

            <h3 style={{
              fontSize: "22px", fontWeight: 700, marginBottom: "4px",
              color: pack.highlight ? "#fff" : "#72270C", fontFamily: "'Arima', serif"
            }}>
              {pack.name}
            </h3>
            <p style={{ fontSize: "13px", color: pack.highlight ? "rgba(255,255,255,0.65)" : "#999", marginBottom: "20px" }}>
              {pack.tagline}
            </p>

            <div style={{ marginBottom: "24px" }}>
              <span style={{ fontSize: "36px", fontWeight: 800, color: pack.highlight ? "#fff" : "#72270C", fontFamily: "'Arima', serif" }}>
                {pack.price}
              </span>
              <span style={{ fontSize: "14px", color: pack.highlight ? "rgba(255,255,255,0.6)" : "#aaa", marginLeft: "4px" }}>
                {pack.period}
              </span>
              <div style={{ fontSize: "12px", color: pack.highlight ? "rgba(255,255,255,0.55)" : "#bbb", marginTop: "2px" }}>
                {pack.hours} incluses
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${pack.highlight ? "rgba(255,255,255,0.12)" : "rgba(171,196,170,0.3)"}`, paddingTop: "20px", marginBottom: "28px" }}>
              {pack.services.map((srv, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <Check style={{ width: "15px", height: "15px", color: pack.highlight ? "#F3AB06" : pack.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "14px", color: pack.highlight ? "rgba(255,255,255,0.85)" : "#444" }}>{srv}</span>
                </div>
              ))}
            </div>

            <button style={{
              width: "100%", padding: "12px", borderRadius: "10px", border: "none",
              background: pack.highlight ? "#D45B1A" : "transparent",
              border: pack.highlight ? "none" : `2px solid ${pack.color}`,
              color: pack.highlight ? "#fff" : pack.color,
              fontWeight: 600, fontSize: "14px", cursor: "pointer"
            }}>
              {pack.cta}
            </button>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", marginTop: "48px", color: "#999", fontSize: "14px" }}>
        Vous avez des besoins particuliers ? <span style={{ color: "#D45B1A", textDecoration: "underline", cursor: "pointer" }}>Parlons-en</span> — je crée aussi des forfaits sur-mesure.
      </p>
    </div>
  );
}
