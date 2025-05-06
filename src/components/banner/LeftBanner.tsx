import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Développeur passionné.", "Développeur Full Stack.", "Toujours à l'écoute."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <>
            <div className="w-full lgl:w-1/2 flex flex-col gap-20">
                <div className="flex flex-col gap-5">
                    <h4 className=" text-lg font-normal">BIENVENUE DANS MON MONDE</h4>
                    <h1 className="text-6xl font-bold text-white">
                        Salut, je suis <span className="text-designColor capitalize">Stérel OBAME</span>
                    </h1>
                    <h2 className="text-4xl font-bold text-white">
                    un <span>{text}</span>
                    <Cursor
                        cursorBlinking={false}
                        cursorStyle="✍️"
                        cursorColor="#ff014f"
                    />
                    </h2>
                    <p className="text-base font-bodyFont leading-6 tracking-wide">
                        Je suis un développeur full stack passionné par la création d’expériences numériques fluides et performantes. 
                        Toujours à la recherche de nouveaux défis. Je conçois et développe des applications web et mobiles sur mesure à l'aide des maquettes Figma, 
                        en mettant l’accent sur la performance, l’ergonomie et l’innovation.
                    </p>
                </div>
                {/* Media */}
                <Media />
            </div>
        </>
    )
}

export default LeftBanner
