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
                <div className={`p-7 border-2 border-black absolute transform transition-transform duration-300 ease-in-out ${props.visibility ? "scale-100" : "scale-0"} w-[75%] h-[90%] bg-[#156064] text-[#FFFFF0] rounded-lg max-[600px]:w-[80%] max-[600px]:h-fit max-[600px]:overflow-y-scroll`}>
                        
                        <div className="text-2xl">
                                {props.projectDetails.name}
                        </div>

                        <div className="flex items-center justify-between">
                                <div className="mt-4 text-lg">
                                        Tech Used
                                        <ul className="list-disc list-inside ml-4">
                                                {props.projectDetails.tech.map(item =>(
                                                        <li>{item}</li>
                                                ))}
                                        </ul>
                                </div>

                                <img className="w-[420px] h-[200px] mr-9 object-cover max-[600px]:hidden" src={props.projectDetails.img} />
                        </div>
                        

                        <div className="mt-4 text-lg">
                                Features
                                <ul className="list-disc list-inside ml-4">
                                        {props.projectDetails.features.map(item =>(
                                                <li>{item}</li>
                                        ))}
                                </ul>
                        </div>
                       
                        <div className="max-[600px]:flex max-[600px]:mt-6 max-[600px]:justify-between">
                                {props.projectDetails.name !== "My Portfolio" &&
                                        <div className="border-2 border-black text-black bg-[#FFFFF0] px-1 rounded-md absolute bottom-[30px] right-[340px] min-[1700px]:right-[390px] hover:cursor-pointer transition ease-in-out hover:shadow-2xl hover:scale-110 duration-400 max-[600px]:static max-[600px]:w-fit">
                                                <a href={props.projectDetails.link} target="_blank">Open</a>
                                        </div>
                                }
                                <div className="border-2 border-black text-black bg-[#FFFFF0] px-1 rounded-md absolute bottom-[30px] right-[150px] min-[1700px]:right-[160px] hover:cursor-pointer transition ease-in-out hover:shadow-2xl hover:scale-110 duration-400 max-[600px]:right-[105px] max-[600px]:static max-[600px]:w-fit">
                                        <a href={props.projectDetails.code} target="_blank">Source Code</a>
                                </div>
                                <div onClick={hideDetails} className="border-2 border-black text-black bg-[#FFFFF0] px-1 rounded-md absolute bottom-[30px] right-[40px] hover:cursor-pointer transition ease-in-out hover:shadow-2xl hover:scale-110 duration-400 max-[600px]:right-[30px] max-[600px]:static max-[600px]:w-fit">
                                        Close
                                </div>
                        </div>
                </div>
        )
}

export default ProjectDetails