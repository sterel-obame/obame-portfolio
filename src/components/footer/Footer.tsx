import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { socialNetwork } from "../../data/data";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32 rounded-full" src={logo} alt="logo" />
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

      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Lien rapide
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link to={socialNetwork.about} target="_blank" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to={socialNetwork.service} target="_blank" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to={socialNetwork.blog} target="_blank" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Blog
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer