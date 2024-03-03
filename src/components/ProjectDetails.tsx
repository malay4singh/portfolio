interface Project{
        name: string,
        img: string,
        link: string,
        code: string,
        tech: string[],
        features: string[]
}

interface ProjectDetailsProps{
        visibility: boolean,
        setVisibility: React.Dispatch<React.SetStateAction<boolean>>
        projectDetails: Project
}

function ProjectDetails(props: ProjectDetailsProps){

        const hideDetails = ()=>{
                props.setVisibility(false);
        }

        return(
                <div className={`p-7 border-2 border-black absolute w-[75%] h-[30%] ${props.visibility ? "visible" : "invisible"} bg-[#156064] text-[#FFFFF0] rounded-lg`}>
                        <div className="text-3xl">
                                {props.projectDetails.name}
                        </div>

                        <div className="flex items-center justify-between">
                                <div className="mt-6 text-xl">
                                        Tech Used
                                        <ul className="list-disc list-inside ml-4">
                                                {props.projectDetails.tech.map(item =>(
                                                        <li>{item}</li>
                                                ))}
                                        </ul>
                                </div>

                                <img className="w-[420px] h-[200px] mr-9 object-cover" src={props.projectDetails.img} />
                        </div>
                        

                        <div className="mt-6 text-xl">
                                Features
                                <ul className="list-disc list-inside ml-4">
                                        {props.projectDetails.features.map(item =>(
                                                <li>{item}</li>
                                        ))}
                                </ul>
                        </div>
                       

                        {props.projectDetails.name !== "My Portfolio" &&
                                <div className="border-2 border-black text-black bg-[#FFFFF0] px-1 rounded-md absolute bottom-[30px] right-[340px] hover:cursor-pointer transition ease-in-out hover:shadow-2xl hover:scale-110 duration-400">
                                        <a href={props.projectDetails.link}>Open</a>
                                </div>
                        }
                        <div className="border-2 border-black text-black bg-[#FFFFF0] px-1 rounded-md absolute bottom-[30px] right-[150px] hover:cursor-pointer transition ease-in-out hover:shadow-2xl hover:scale-110 duration-400">
                                <a href={props.projectDetails.code} target="_blank">Source Code</a>
                        </div>
                        <div onClick={hideDetails} className="border-2 border-black text-black bg-[#FFFFF0] px-1 rounded-md absolute bottom-[30px] right-[40px] hover:cursor-pointer transition ease-in-out hover:shadow-2xl hover:scale-110 duration-400">
                                Close
                        </div>
                </div>
        )
}

export default ProjectDetails