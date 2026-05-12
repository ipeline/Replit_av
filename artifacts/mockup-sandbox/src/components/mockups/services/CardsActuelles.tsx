import { Calendar, Mail, LayoutDashboard, Share2, Database, Search } from "lucide-react";

const services = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Gestion d'agenda",
    description: "Prise de rendez-vous, optimisation de votre planning, rappels et gestion des annulations.",
    color: "#ABC4AA",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Gestion des emails",
    description: "Tri quotidien, réponses aux demandes récurrentes, classement et nettoyage de la boîte de réception.",
    color: "#F3AB06",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Organisation & Optimisation",
    description: "Mise en place d'outils de suivi, clarification des tâches à prioriser, structuration de votre activité.",
    color: "#D45B1A",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Réseaux Sociaux",
    description: "Programmation des posts, modération des commentaires, veille concurrentielle.",
    color: "#ABC4AA",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Saisie de données",
    description: "Mise à jour de CRM, création de tableaux de bord, suivi d'indicateurs de performance.",
    color: "#F3AB06",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Recherches diverses",
    description: "Recherche de prestataires, comparatifs de prix, préparation de dossiers thématiques.",
    color: "#D45B1A",
  },
];

export function CardsActuelles() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#FFFDF8", minHeight: "100vh", padding: "60px 40px" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span style={{
          display: "inline-block", padding: "6px 16px", borderRadius: "999px",
          background: "rgba(171,196,170,0.2)", color: "#D45B1A",
          fontSize: "13px", fontWeight: 500, border: "1px solid rgba(171,196,170,0.5)", marginBottom: "16px"
        }}>
          Ce que je vous propose
        </span>
        <h2 style={{ fontSize: "38px", fontWeight: 700, color: "#72270C", marginBottom: "12px", fontFamily: "'Arima', serif" }}>
          L'accompagnement sur-mesure
        </h2>
        <p style={{ color: "#555", fontSize: "17px", maxWidth: "520px", margin: "0 auto" }}>
          Des services adaptés à vos besoins pour vous faire gagner un temps précieux au quotidien.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "960px", margin: "0 auto" }}>
        {services.map((s, i) => (
          <div key={i} style={{
            background: "#fff", borderRadius: "16px", padding: "32px",
            border: "1px solid rgba(171,196,170,0.4)", boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
          }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "12px",
              background: s.color, display: "flex", alignItems: "center",
              justifyContent: "center", marginBottom: "20px", color: "#fff"
            }}>
              {s.icon}
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#72270C", marginBottom: "10px", fontFamily: "'Arima', serif" }}>
              {s.title}
            </h3>
            <p style={{ color: "#666", lineHeight: 1.6, fontSize: "14px" }}>{s.description}</p>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", marginTop: "48px", color: "#888", fontSize: "15px" }}>
        Des besoins spécifiques ? Parlons-en pour créer un forfait adapté à votre situation.
      </p>
    </div>
  );
}
