import { motion } from "framer-motion";
import { Calendar, Mail, FileText, Share2, Database, Search } from "lucide-react";

const services = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Gestion d'agenda",
    description: "Prise de rendez-vous, optimisation de votre planning, rappels et gestion des annulations.",
    color: "bg-secondary"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Gestion des emails",
    description: "Tri quotidien, réponses aux demandes récurrentes, classement et nettoyage de la boîte de réception.",
    color: "bg-[#F3AB06]"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Rédaction & Relecture",
    description: "Mise en page de documents, correction orthographique, création de présentations soignées.",
    color: "bg-accent"
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Réseaux Sociaux",
    description: "Programmation des posts, modération des commentaires simples, veille concurrentielle.",
    color: "bg-secondary"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Saisie de données",
    description: "Mise à jour de CRM, création de tableaux de bord, suivi d'indicateurs de performance.",
    color: "bg-[#F3AB06]"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Recherches diverses",
    description: "Recherche de prestataires, comparatifs de prix, préparation de dossiers thématiques.",
    color: "bg-accent"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-primary font-medium text-sm mb-6">
            Mes expertises
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            L'accompagnement sur-mesure
          </h2>
          <p className="text-lg text-foreground/80">
            Des services adaptés à vos besoins pour vous faire gagner un temps précieux au quotidien.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/40 hover:shadow-md transition-shadow group"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <p className="text-lg text-foreground/80 mb-6 font-medium">
            Des besoins spécifiques ? Parlons-en pour créer un forfait adapté à votre situation.
          </p>
        </div>
      </div>
    </section>
  );
}
