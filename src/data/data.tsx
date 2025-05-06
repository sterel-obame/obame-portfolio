import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import projectOne from '../assets/images/projects/projectOne.jpg';
import projectTwo from '../assets/images/projects/projectTwo.jpg';
import projectThree from '../assets/images/projects/projectThree.jpeg'


// Features Data
export const featuresData = [
    {
        id: 1,
        title: "Intégration API",
        des: "J'ai la capacité d'intégrer des API tierces dans mes projets, ce qui me permet d'ajouter des fonctionnalités avancées et de récupérer des données en temps réel.",
        link: "https://github.com/sterel-obame",
    },

    {
        id: 2,
        icon: <AiFillAppstore />,
        title: "Integration Templates",
        des: "J'ai la capacité d'intégrer des modèles de conception dans mes projets, personnaliser ces modèles pour répondre aux besoins spécifiques de mes clients.",
        link: "https://github.com/sterel-obame",
    },

    // {
    //     id: 3,
    //     icon: <SiProgress />,
    //     title: "SEO Optimisation",
    //     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    //     link: "https://github.com/sterel-obame",
    // },

    {
        id: 4,
        icon: <FaMobile />,
        title: "Développement mobile",
        des: "J'ai la capacité de créer des applications mobiles réactives et performantes, offrant une expérience utilisateur fluide sur les appareils mobiles.",
        link: "https://github.com/sterel-obame",
    },

    {
        id: 5,
        icon: <SiAntdesign />,
        title: "Intégration web/mobile",
        des: "J'ai la capacité d'intégrer des modèles de conception Figma dans mes projets, personnaliser ces modèles pour répondre aux besoins spécifiques d'un client.",
        link: "https://github.com/sterel-obame",
    },

    {
        id: 6,
        icon: <FaGlobe />,
        title: "Développement web",
        des: "J'ai la capacité de créer des sites web réactifs et performants, offrant une expérience utilisateur fluide sur les appareils mobiles.",
        link: "https://github.com/sterel-obame",
    },
];

// projectData
export const projectData = [
    {
        id:1, 
        title:"Music player", 
        des:`
            Un lecteur audio mobile intuitif et puissant, conçu pour les mélomanes exigeants. Découvrez une bibliothèque organisée, des recommandations intelligentes et une qualité sonore haute définition. Projet réalisé avec :
            🔹 React Native Expo TypeScript
            🔹 Figma
        `,
        src: projectOne,
        link:"https://github.com/sterel-obame/music-player"
    },
    {
        id:2, 
        title:"E-commerce mobile", 
        des:`
            Application de vente en ligne intuitive, offrant une navigation fluide, des paiements instantanés et un suivi de commande en temps réel. Conçue pour maximiser l’engagement et les conversions. Projet réalisé avec :
        🔹 React Native Expo
        🔹 ExpressJS, MongoDB
        🔹 Redux RTK
        🔹 Figma
        `,
        src: projectTwo,
        link:"https://github.com/sterel-obame/e-commerce-mobile1"
    },
    {
        id:3, 
        title:"Chatting App CLONE", 
        des:`
            Une application mobile de chat moderne, alliant simplicité et performances. Discussions en temps réel, chiffrement de bout en bout et fonctionnalités intelligentes pour une communication fluide. Projet réalisé avec :
        🔹 React Native Expo TypeScript
        🔹 NestJS, MongoDB
        🔹 Redux RTK
        🔹 Figma
        `,
        src: projectThree,
        link:"https://github.com/sterel-obame/chat"
    },
    // {
    //     id:4, 
    //     title:"SOCIAL MEDIA CLONE", 
    //     des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    //     src: projectOne,
    //     link:"https://github.com/sterel-obame/"
    // },
    // {
    //     id:5, 
    //     title:"E-commerce Website", 
    //     des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    //     src: projectTwo,
    //     link:"https://github.com/sterel-obame/"
    // },
    // {
    //     id:6, 
    //     title:"Chatting App", 
    //     des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    //     src: projectThree,
    //     link:"https://github.com/sterel-obame/"
    // },
]

export const socialNetwork = {
    facebook:'#',
    linkedin:'https://www.linkedin.com/in/sterel-obame-b5a9972a6',
    twitter:'#',
    blog:'#',
    about:'#',
    service:'#'
}
