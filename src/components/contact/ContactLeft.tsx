import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { socialNetwork } from "../../data/data";
import { contactImg } from "../../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">OBAME Stérel</h3>
        <p className="text-lg font-normal text-gray-400">
          Ma Stack est MNRN
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Je suis un développeur très passionné et très engagé. Je possède un grand amour pour la programmation.
          Ma stack préférée est MongoDB, Nestjs, Reactjs, Nodejs. Il m'arrive de basculer à React Native pour les applications mobiles.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+212 624 571 578</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">obamesterel@yahoo.fr</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Retrouvez-moi sur</h2>
        <div className="flex gap-4">
          <Link to={socialNetwork.facebook} target="_blank" className="bannerIcon">
            <FaFacebookF />
          </Link>
          <Link to={socialNetwork.twitter} target="_blank" className="bannerIcon">
            <FaTwitter />
          </Link>
          <Link to={socialNetwork.linkedin} target="_blank" className="bannerIcon">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft