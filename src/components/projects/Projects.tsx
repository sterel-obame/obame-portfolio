import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import { projectData } from '../../data/data';

const Projects = () => {
    return (
        <>
            <section
                id="projects"
                className="w-full py-20 border-b-[1px] border-b-black"
                >
                <div className="flex justify-center items-center text-center">
                    <Title
                    title="VISITEZ MON PORTFOLIO AVEC MES PROJETS"
                    des="Mes Projets"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                    {projectData && projectData.map((item)=>{
                        return(
                            <ProjectsCard
                                key={item.id}
                                title={item.title}
                                des={item.des}
                                src={item.src}
                                link={item.link}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Projects
