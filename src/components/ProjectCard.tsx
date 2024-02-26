interface ProjectCardProps{
        name: string;
        alias: string;
}

function ProjectCard(props: ProjectCardProps){
        const image_path=`${props.alias}.png`
        const visit_link=`http://malaysingh.com/${props.alias}`
        const source_code=`https://www.github.com/malay4singh/${props.alias}.git`
        return(
                <div className="border-2 border-black p-5 bg-[#156064] text-[#FFFFF0] rounded-lg">
                        <div>
                                <img className="mx-auto object-fit" src={image_path} width="230px" />
                        </div>

                        <div className="flex flex-col items-center gap-4 mt-4">
                                <div>
                                        {props.name}
                                </div>
                                <div className="flex gap-2">
                                        {props.alias!="portfolio" &&
                                        <div className="border-2 border-black text-black bg-[#FFFFF0] px-1 rounded-md">
                                                <a className="text-sm" href={visit_link} target='_blank'>Open</a>
                                        </div>
                                        }
                                        <div className="border-2 border-black text-black bg-[#FFFFF0] px-1 rounded-md">
                                                <a className="text-sm" href={source_code} target='_blank'>Source Code</a>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default ProjectCard