import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
                >
                {/* part one */}
                <div>
                    <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
                    <h2 className="text-3xl md:text-4xl font-bold">Parcours scolaire</h2>
                    </div>
                    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Baccalauréat scientifique."
                        subTitle="LCA Oyem/Gabon"
                        result="Gabon"
                        des="J'ai obtenu un baccalauréat scientifique de spécialité Mathématique, Physique, Chimie, Biologie."
                    />
                    <ResumeCard
                        title="Licence de Biologie"
                        subTitle="USTM Franceville/Gabon"
                        result="Gabon"
                        des="J'ai obtenu un diplôme en licence de biologie dans une faculté de science."
                    />
                    <ResumeCard
                        title="Licence d'Informatique"
                        subTitle="AUPS Casablanca/Maroc"
                        result="Maroc"
                        des="J'ai obtenu un diplôme en licence professionnelle de conception et développement d'application. J'ai obtenu cette licence à AUPS (American University of Professional Studies) de Casablanca/Maroc."
                    />
                    </div>
                </div>

                <div>
                    <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-nowrap">Expérience professionnelle</h2>
                    </div>
                    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Stage chez BAYE Conception"
                        subTitle="BAYE Conception"
                        result="Maroc"
                        des="J'ai fait un stage qui m'avait initié dans le monde professionnel. J'ai fait 6 mois dans le domaine de la conception et développement des applications web et mobiles. J'ai acquis de fortes compétences et je me suis familiarisé à l'utilisation des nouvelles technologies et outils de développement."
                    />
                    <ResumeCard
                        title="Développeur freelance"
                        subTitle="Freelance chez BAYE Conception"
                        result="Maroc"
                        des="J'ai réalisé des sites web e-commerce en tant que développeur Freelance. J'ai également réalisé des applications mobiles et j'ai également participé à des projets en équipe."
                    />
                    <ResumeCard
                        title="Projets personnels."
                        subTitle="Projets libres"
                        result="Maroc"
                        des="J'ai réalisé plusieurs projets d'application mobiles et web, dans le but de toujours rester à jour sur les nouvelles technologies et pour perfectionner mes compétences. "
                    />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Education
