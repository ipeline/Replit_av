export type Pack = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  highlight: boolean;
  accroche: string;
  pourQui: string[];
  services: {
    titre: string;
    detail: string;
    exemples: string[];
  }[];
  quotas: string[];
  horsScope: string[];
  note?: string;
};

export const packs: Pack[] = [
  {
    slug: "coup-de-pouce",
    name: "Coup de pouce",
    tagline: "Pour démarrer sereinement",
    price: "290€",
    period: "/ mois",
    highlight: false,
    accroche:
      "Vous êtes à votre compte depuis peu, ou vous avez quelques tâches précises à déléguer sans vous lancer dans une collaboration intensive. Ce forfait est fait pour tester la délégation en douceur.",
    pourQui: [
      "Indépendants ou auto-entrepreneurs en début d'activité",
      "Professionnels avec un volume de mails modéré",
      "Personnes qui souhaitent tester la délégation avant d'aller plus loin",
    ],
    services: [
      {
        titre: "Gestion des emails",
        detail:
          "Tri quotidien de votre boîte, archivage, réponses aux messages types définis ensemble, signalement des urgences.",
        exemples: [
          "Réponse aux demandes de renseignements simples",
          "Classement dans des dossiers définis",
          "Signalement des messages nécessitant votre attention",
        ],
      },
      {
        titre: "Gestion d'agenda",
        detail:
          "Prise de rendez-vous selon vos disponibilités, envoi des confirmations, gestion des annulations.",
        exemples: [
          "Planification de jusqu'à 10 rendez-vous par mois",
          "Envoi des confirmations et rappels",
          "Gestion des reports et annulations",
        ],
      },
      {
        titre: "Recherches ponctuelles",
        detail:
          "Recherches ciblées sur des sujets définis à l'avance, avec restitution d'un résumé clair.",
        exemples: [
          "Comparatif de prestataires ou d'outils",
          "Recherche de contacts ou d'informations pratiques",
          "Préparation d'un dossier simple",
        ],
      },
    ],
    quotas: [
      "30 emails traités / mois",
      "Agenda : jusqu'à 10 rendez-vous",
      "5 recherches ponctuelles / mois",
    ],
    horsScope: [
      "Création de contenu ou copywriting",
      "Gestion des réseaux sociaux",
      "Saisie comptable ou administrative complexe",
      "Appels téléphoniques en votre nom",
    ],
    note: "Au-delà des volumes inclus, chaque tranche supplémentaire est facturée à part, définie ensemble en amont.",
  },
  {
    slug: "serenite",
    name: "Sérénité",
    tagline: "Le plus choisi",
    price: "650€",
    period: "/ mois",
    highlight: true,
    accroche:
      "Votre activité tourne bien, mais les tâches administratives et organisationnelles commencent à empiéter sur votre cœur de métier. Ce forfait vous libère du quotidien sur plusieurs fronts à la fois.",
    pourQui: [
      "Entrepreneurs et freelances avec une activité bien établie",
      "Professionnels avec un flux régulier d'emails et de rendez-vous",
      "Personnes qui veulent une présence sur les réseaux sans y passer des heures",
    ],
    services: [
      {
        titre: "Gestion des emails",
        detail:
          "Tri, réponses aux emails récurrents, relances simples, classement, nettoyage régulier de la boîte.",
        exemples: [
          "Réponses aux demandes courantes selon vos modèles",
          "Relances clients ou fournisseurs",
          "Classement et archivage organisé",
        ],
      },
      {
        titre: "Gestion d'agenda",
        detail:
          "Planification complète de vos rendez-vous, coordination avec vos interlocuteurs, rappels automatiques.",
        exemples: [
          "Jusqu'à 30 rendez-vous planifiés par mois",
          "Coordination avec vos clients ou partenaires",
          "Rappels envoyés avant chaque rendez-vous",
        ],
      },
      {
        titre: "Organisation & Optimisation",
        detail:
          "Mise en place ou amélioration de vos outils de suivi, structuration de vos processus pour gagner en efficacité.",
        exemples: [
          "Création ou mise à jour d'un tableau de bord simple",
          "Classement et organisation de vos fichiers",
          "Suggestion d'outils adaptés à votre activité",
        ],
      },
      {
        titre: "Réseaux sociaux",
        detail:
          "Programmation de vos posts selon un calendrier défini ensemble, modération basique des commentaires.",
        exemples: [
          "Jusqu'à 3 publications programmées par semaine",
          "Modération des commentaires simples",
          "Veille concurrentielle légère",
        ],
      },
      {
        titre: "Point mensuel",
        detail:
          "Un rendez-vous mensuel de 30 à 45 min pour faire le bilan, ajuster les priorités et planifier le mois suivant.",
        exemples: [
          "Bilan des tâches réalisées",
          "Ajustement des volumes ou des priorités",
          "Questions / réponses libres",
        ],
      },
    ],
    quotas: [
      "75 emails traités / mois",
      "Agenda : jusqu'à 30 rendez-vous",
      "Réseaux : jusqu'à 3 posts / semaine",
      "1 point mensuel de 30–45 min",
    ],
    horsScope: [
      "Création graphique ou vidéo",
      "Rédaction d'articles de blog ou de newsletters longues",
      "Comptabilité ou déclarations fiscales",
      "Appels téléphoniques en votre nom",
    ],
    note: "Ce forfait est limité à 4 clients actifs simultanément pour garantir une qualité de service optimale.",
  },
  {
    slug: "bras-droit",
    name: "Bras droit",
    tagline: "Délégation complète",
    price: "1 200€",
    period: "/ mois",
    highlight: false,
    accroche:
      "Vous avez besoin de quelqu'un sur qui compter au quotidien, qui connaît votre activité et anticipe vos besoins. Ce forfait est une collaboration en profondeur, avec un suivi hebdomadaire et une disponibilité accrue.",
    pourQui: [
      "Dirigeants ou indépendants avec un fort volume d'activité",
      "Personnes qui veulent déléguer l'ensemble de leur back-office",
      "Entrepreneurs qui ont besoin d'un point de contact régulier et fiable",
    ],
    services: [
      {
        titre: "Gestion des emails",
        detail:
          "Prise en charge complète de votre boîte : tri, réponses, relances, classement, nettoyage. Pas de limite de volume.",
        exemples: [
          "Traitement illimité de vos emails",
          "Réponses adaptées à votre ton et votre style",
          "Gestion des fils de discussion complexes",
        ],
      },
      {
        titre: "Gestion d'agenda",
        detail:
          "Gestion complète de votre planning : tous vos rendez-vous, toutes vos échéances, toutes vos coordinations.",
        exemples: [
          "Agenda intégralement pris en charge",
          "Coordination multi-interlocuteurs",
          "Gestion des priorités et des conflits d'agenda",
        ],
      },
      {
        titre: "Organisation & Optimisation",
        detail:
          "Audit et amélioration continue de vos processus, mise en place d'outils, structuration de votre activité.",
        exemples: [
          "Création et maintien d'un système de gestion complet",
          "Optimisation de vos outils existants",
          "Propositions d'amélioration de vos processus",
        ],
      },
      {
        titre: "Réseaux sociaux",
        detail:
          "Gestion éditoriale et programmation complète, modération, veille et reporting mensuel.",
        exemples: [
          "Jusqu'à 5 publications par semaine",
          "Modération quotidienne des commentaires",
          "Rapport mensuel des performances",
        ],
      },
      {
        titre: "Saisie de données",
        detail:
          "Saisie et mise à jour complète de vos bases de données, CRM, tableaux de suivi et reportings.",
        exemples: [
          "CRM maintenu et à jour en permanence",
          "Tableaux de bord hebdomadaires",
          "Saisie de devis, factures et documents",
        ],
      },
      {
        titre: "Recherches diverses",
        detail:
          "Recherches approfondies sur demande, avec restitution structurée et recommandations.",
        exemples: [
          "Dossiers thématiques complets",
          "Comparatifs prestataires ou solutions",
          "Veille sectorielle régulière",
        ],
      },
      {
        titre: "Point hebdomadaire",
        detail:
          "Un rendez-vous toutes les semaines pour synchroniser les priorités, anticiper les besoins et ajuster le travail en cours.",
        exemples: [
          "Bilan de la semaine écoulée",
          "Priorisation des tâches à venir",
          "Échanges libres et ajustements",
        ],
      },
    ],
    quotas: [
      "Emails illimités",
      "Agenda complet, toutes échéances",
      "Réseaux : jusqu'à 5 posts / semaine",
      "1 point hebdomadaire de 30 min",
    ],
    horsScope: [
      "Création graphique ou vidéo professionnelle",
      "Comptabilité, fiscalité ou déclarations légales",
      "Développement web ou technique",
      "Appels téléphoniques en votre nom",
    ],
    note: "Ce forfait est limité à 6 clients actifs simultanément. Les disponibilités sont donc restreintes — n'hésitez pas à prendre contact pour vérifier.",
  },
];
