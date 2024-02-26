import ProjectCard from './ProjectCard'

function Projects(){
        return(
                <div className='h-screen w-[90wv] flex items-center justify-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[1200px]:items-start scrollable'>
                        <div className='w-[70%] flex flex-col gap-6 '>
                                <div className='text-3xl'>
                                        My Projects
                                </div>

                                <div className='grid-cols-3 grid gap-3 max-[600px]:grid-cols-1 max-[1200px]:grid-cols-2'>
                                        <ProjectCard name="My Portfolio" alias='portfolio' />
                                        <ProjectCard name="E-Commerce" alias='e-commerce' />
                                        <ProjectCard name="Marketplace" alias="marketplace" />
                                        <ProjectCard name="To Do List" alias='to-do-list' />
                                        <ProjectCard name="Medium Clone" alias="medium-clone" />
                                </div>
                        </div>
                </div>
        )
}

export default Projects