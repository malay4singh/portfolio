import { useState } from 'react'

import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails';

function Projects(){

        const projects = [
                {
                        name: "My Portfolio",
                        img: "portfolio.png",
                        link: "http://www.malaysingh.com",
                        code: "https://www.github.com/malay4singh/portfolio.git",
                        tech: ['JavaScript', 'TypeScript', 'React.js', 'Express.js', 'Tailwind CSS'],
                        features: ['Express.js back-end serving multiple apps using the same server', 'Hosted on AWS EC2', 'Simple and minimalistic design', 'Smooth and precise transitions']
                },
                {
                        name: "E-Commerce",
                        img: "e-commerce.png",
                        link: "http://e-commerce.malaysingh.com",
                        code: "https://www.github.com/malay4singh/e-commerce.git",
                        tech: ['EJS', 'Express.js', 'MongoDB', 'Passport.js', 'Tailwind CSS'],
                        features: ['Full-Stack project using Express.js back-end', 'MongoDB Atlas Database', 'Separate Authorizations for Buyer and Seller', 'Fully Responsive Design']
                },
                {
                        name: "Marketplace",
                        img: "marketplace.png",
                        link: "http://marketplace.malaysingh.com",
                        code: "https://www.github.com/malay4singh/marketplace.git",
                        tech: ['JavaScript', 'jQuery', 'HTML', 'CSS'],
                        features: ['Dynamic Front-end using API calls', 'DOM Manipulation using jQuery', 'API Provided by dummyjson.com']
                },
                {
                        name: "To Do List",
                        img: "to-do-list.png",
                        link: "http://to-do-list.malaysingh.com",
                        code: "https://www.github.com/malay4singh/to-do-list.git",
                        tech: ['JavaScript', 'jQuery', 'HTML', 'CSS'],
                        features: ['Custom text inputs as to-do items', 'Task completion status', 'Re-ordering items']
                },
                {
                        name: "Medium Clone",
                        img: "medium-clone.png",
                        link: "http://medium-clone.malaysingh.com",
                        code: "https://www.github.com/malay4singh/medium-clone.git",
                        tech: ['HTML', 'CSS'],
                        features: ['Static Front-end clone of medium.com', 'CSS Styling tricks such as flexbox, sticky divs etc.']
                },
        ]

        const [visibility, setVisibility] = useState<boolean>(false);
        const [projectDetaills, setProjectDetails] = useState({
                name: '',
                img: '',
                link: '',
                code: '',
                tech: [],
                features: []
        });

        return(
                <div className='h-screen w-[90wv] flex items-center justify-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[1200px]:items-start max-[600px]:py-10 scrollable'>
                        <div className='w-[75%] flex flex-col gap-6 '>
                                <div className='text-3xl'>
                                        My Projects
                                </div>

                                <div className='grid-cols-3 grid max-[600px]:grid-cols-1 max-[1200px]:grid-cols-2'>
                                        {projects.map(project =>(
                                                <ProjectCard project={project} setVisibility={setVisibility} setProjectDetails={setProjectDetails} />
                                        ))}
                                </div>
                        </div>

                        <ProjectDetails setVisibility={setVisibility} visibility={visibility} projectDetails={projectDetaills} />
                </div>
        )
}

export default Projects