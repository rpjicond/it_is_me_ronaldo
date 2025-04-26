import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  vision,
  tictoc,
  stage,
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Expérience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Deep Learning",
    icon: web,
  },
  {
    title: "IoT",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tensorflow",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
 
  {
      title: " Stage - Développeur Fullstack Java / API REST",
      company_name: "OBJECTIVO SIMILAR",
      icon: meta, // Substitua por um ícone ou logo relevante
      iconBg: "#E6DEDD",
      date: "Mars  2025 - Juin 2025 ",
      points: [
        "Développement et optimisation de services backend avec Java 17, Spring Boot, Spring Batch.",
        "Implémentation et test d'API RESTful avec Swagger / OpenAPI.",
        "Travail en méthodologie Agile (Scrum/Kanban) avec Jira et Confluence.",
        "Résolution de bugs et amélioration des systèmes backend existants.",
    ],
  },
  {
    title: "Stage – Développeur IA & IoT(Python et  C++)",
    company_name: "Digichrone",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Avril 2024 - Juin 2024",
    points: [
      "Développement d’une solution d’IA avec TensorFlow, Keras et OpenCV pour la détection d’anomalies et de personnes perdues en forêt.",
      "Intégration de protocoles IoT (MQTT, HTTPS, LoRa) pour assurer la communication entre les capteurs et la plateforme cloud.",
      "Déploiement d’API REST permettant l’accès aux données en temps réel pour les équipes de secours.",
  
    ],
  },
];

const testimonials = [
  {
    
    image: cert1,
  },
  {
    
    image: cert2,
  },
  {
    image: cert3,
  },
  {
    image: cert4,
  },
  {
    image: cert5,
  },
  {
    image: cert6,
  },
];

const projects = [
  {
    name: "Surveillance de Santé",
    description:
      "Plateforme web permettant de surveiller la santé des patients en temps réel via une montre connectée, utilisant un backend intégré avec Django, ESP8266 et SQLite3 pour collecter et analyser les données de santé.",
    tags: [
      {
        name: " Django",
        color: "blue-text-gradient",
      },
      {
        name: " ESP8266",
        color: "green-text-gradient",
      },
      {
        name: "SQLite3",
        color: "pink-text-gradient",
      },
      {
        name: "Smart watch",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rpjicond/Hospital-System",
  },
  {
    name: "Surveillance de Santé",
    description:
      "Plateforme web permettant de surveiller la santé des patients en temps réel via une montre connectée, utilisant un backend intégré avec Django, ESP8266 et SQLite3 pour collecter et analyser les données de santé.",
    tags: [
      {
        name: " Django",
        color: "blue-text-gradient",
      },
      {
        name: " ESP8266",
        color: "green-text-gradient",
      },
      {
        name: "SQLite3",
        color: "pink-text-gradient",
      },
      {
        name: "Smart watch",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rpjicond/Hospital-System",
  },
  {
    name: " Datacenter",
    description:
      "Plateforme web dédiée à la sécurisation et à la surveillance d'un datacenter, Le système assure un contrôle d'accès biométrique, une vidéosurveillance et une gestion efficace des données à l'aide de solutions modernes de monitoring.",
        tags: [
      {
        name: "InfluxDB",
        color: "blue-text-gradient",
      },
      {
        name: "Node-RED",
        color: "green-text-gradient",
      },
      {
        name: "Grafana",
        color: "pink-text-gradient",
      },
      {
        name: "ESP8266",
        color: "blue-text-gradient",
      },
      {
        name: " NFC",
        color: "pink-text-gradient",
      },
      {
        name: "APIs (Telegram)",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Système IoT pour la Surveillance des Données",
    description:
      "J'ai développé un système IoT utilisant HTML, CSS, PHP, JavaScript et MySQL pour stocker et visualiser les données des capteurs en temps réel. Le projet inclut la génération de fichiers JSON pour conserver l'historique des données de chaque module enregistré, assurant une gestion précise et efficace des informations.",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "MYSQL",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rpjicond/Monitoring_IoT/blob/main/Information_important.pdf.pdf",
  },
  

  {
    name: "Détection de Personnes Perdues en Forêt ",
    description:
      "Système basé sur TensorFlow et Keras pour détecter et localiser des personnes perdues en forêt à partir d'images capturées, en utilisant des techniques de vision par ordinateur avec OpenCV. Ce projet utilise l'apprentissage profond pour améliorer la précision de la détection.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: " OpenCV",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Vision par Ordinateur",
        color: "blue-text-gradient",
      },
    ],
    image: stage,
    source_code_link: "https://github.com/",
  },

  {
    name: "Jeu Tic-Tac-Toe avec IA en Python",
    description:
      "Jeu Tic-Tac-Toe développé en Python, intégrant une intelligence artificielle utilisant Scikit-learn pour jouer contre l'utilisateur, en optimisant les décisions basées sur des algorithmes d'apprentissage automatique.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SwingScikit-learn",
        color: "green-text-gradient",
      },
      {
        name: " IA",
        color: "pink-text-gradient",
      },
      {
        name: "Apprentissage Automatique",
        color: "blue-text-gradient",
      },
    ],
    image: tictoc,
    source_code_link: "https://github.com/rpjicond/tic-tac",
  },

  {
    name: "Système de Suivi de Vitesse des Véhicules avec Licences",
    description:
      "Plateforme de surveillance des vitesses des véhicules basée sur les plaques d'immatriculation, utilisant des technologies de traitement d'images et de reconnaissance pour analyser et suivre la vitesse des véhicules en temps réel.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      
    ],
    image: vision,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
