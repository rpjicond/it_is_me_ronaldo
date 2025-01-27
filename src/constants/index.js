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
    title: "Projet",
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
      title: "Stage Développeur Backend PHP/MySQL",
      company_name: "Noraccount",
      icon: meta, // Substitua por um ícone ou logo relevante
      iconBg: "#E6DEDD",
      date: "février 2021 - décembre 2021",
      points: [
        "Développement de la partie backend des sites web en utilisant PHP et MySQL.",
        "Conception et gestion des bases de données pour optimiser le stockage et la récupération des données.",
        "Implémentation de fonctionnalités backend robustes pour assurer la sécurité et la performance des applications.",
        "Résolution de bugs et amélioration des systèmes backend existants.",
    ],
  },
  {
    title: "Stage Développeur",
    company_name: "Digichrone",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Avril 2024 - Juin 2024",
    points: [
      "Création d'un système utilisant TensorFlow, Keras et OpenCV pour la détection d'objets et de personnes dans des images de forêts.",
      "Entraînement de modèles de Deep Learning pour identifier des personnes perdues en utilisant des images prises par des drones ou caméras.",
      "Intégration de solutions d'IA pour améliorer la précision et la rapidité de la recherche.",
  
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
    name: "Chat Desktop en Java",
    description:
      "Application de chat en temps réel pour bureau, développée en Java. Le système permet aux utilisateurs de discuter instantanément via une interface conviviale et un backend robuste.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Swing",
        color: "green-text-gradient",
      },
      {
        name: " Messagerie Instantanée",
        color: "pink-text-gradient",
      },
      {
        name: "MYSQL",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
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
