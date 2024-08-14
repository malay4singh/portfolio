interface Project{
        name: string,
        img: string,
        link: string,
        code: string,
        tech: string[],
        features: string[]
}

interface ProjectCardProps{
        project: Project,
        setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
        setProjectDetails: React.Dispatch<React.SetStateAction<any>>,
        visibility: boolean
}

function ProjectCard(props: ProjectCardProps){

        const viewDetails = ()=>{
                props.setVisibility(true);
                props.setProjectDetails(props.project);
        }

        return(
                <div onClick={viewDetails} className={`p-8 text-[#156064] ${props.visibility ? "invisible" : "visible"}`}>
                        <img className="mx-auto h-[130px] w-[260px] min-[1700px]:h-[150px] min-[1700px]:w-[300px] object-cover border-2 border-black rounded-lg cursor-pointer transition ease-in-out hover:shadow-2xl hover:scale-110 duration-400" src={props.project.img} />

                        <div className="flex flex-col items-center gap-4 mt-4">
                                <div>
                                        {props.project.name}
                                </div>
                        </div>
                </div>
        )
}

export default ProjectCard