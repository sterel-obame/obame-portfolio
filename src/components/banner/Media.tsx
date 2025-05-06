import { FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiNestjs, SiMongodb, SiNodedotjs, SiGithub } from "react-icons/si";
const Media = () => {

  // pour les icones de réseaux sociaux et compétences techniques 
  // on utilise les icones de react-icons qui sont des composants react
  // on les importe et on les utilise comme des balises html
  // on peut aussi les styliser avec tailwindcss
  // on peut aussi les cliquer pour rediriger vers le fichier source de l'icone et ensuite on recherche le nom de l'icone pour l'utiliser
  // exemple:
  //
  // import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Retrouvez-moi sur
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/sterel-obame" target="_blank" className="bannerIcon">
              <SiGithub />
            </a>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <a href="https://www.linkedin.com/in/sterel-obame-b5a9972a6/" target="_blank" className="bannerIcon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            MEILLEURE COMPÉTENCE SUR
          </h2>
          <div className="flex gap-4">
            <a href="https://react.dev/" target="_blank" className="bannerIcon">
              <FaReact />
            </a>
            <a href="https://docs.nest-js.fr/" target="_blank" className="bannerIcon">
              <SiNestjs />
            </a>
            <a href="https://nodejs.org/fr" target="_blank" className="bannerIcon">
              <SiNodedotjs />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" className="bannerIcon">
              <SiMongodb />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Media