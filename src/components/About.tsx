import SkillContainer from "./SkillContainer"

function About(){
        const categories = [
                {
                        title: "Web Development",
                        skills: [
                                {
                                        name: "JavaScript",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg"
                                },
                                {
                                        name: "TypeScript",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg"
                                },
                                {
                                        name: "Node.js",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-original-wordmark.svg"
                                },
                                {
                                        name:"Express.js",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/express/express-original.svg"
                                },
                                {
                                        name: "React.js",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg"
                                },
                                {
                                        name: "MongoDB",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/mongodb/mongodb-original.svg"
                                },
                                {
                                        name: "PostgreSQL",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original.svg"
                                }
                        ]
                },
                {
                        title: "Languages",
                        skills: [
                                {
                                        name: "Java",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/java/java-original.svg"
                                },
                                {
                                        name: "C++",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/cplusplus/cplusplus-original.svg"
                                },
                                {
                                        name:"Python",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/python/python-original.svg"
                                }
                        ]
                },
                {
                        title: "Others",
                        skills: [
                                {
                                        name: "AWS",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                                },
                                {
                                        name: "Git",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/git/git-original.svg"
                                },
                                {
                                        name: "Linux",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/linux/linux-original.svg"
                                },
                                {
                                        name: "nginx",
                                        icon: "https://github.com/devicons/devicon/raw/master/icons/nginx/nginx-original.svg"
                                }
                        ]
                }
        ]

        return(
                <div className=" h-screen w-[90vw] flex justify-center items-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:items-start max-[600px]:py-10 scrollable">
                        <div className="text-xs flex flex-col w-[80%]">
                                <div className="flex flex-col gap-6">

                                        <div className="flex flex-col gap-3">
                                                <div className="text-3xl">About Me</div>
                                                <div className="text-sm">I'm a Computer Science engineer passionate about customizing operating systems, exploring hardware, and creating innovative web solutions. I specialize in Linux for its hands-on, customizable nature.<br />As a student, I bring both theoretical knowledge and practical experience, driven by curiosity. I'm excited to collaborate on projects and contribute to groundbreaking initiatives in the field.</div>
                                        </div>

                                        <div className="flex max-[600px]:flex-col max-[600px]:gap-4">
                                                <div className="w-full flex flex-col gap-3">

                                                        <div className="text-3xl">Skills</div>

                                                        <div className="h-[fit-content] w-full flex justify-around max-[600px]:flex-col max-[600px]:items-center max-[600px]:h-[160dvh]">
                                                                {categories.map(category =>(
                                                                        <SkillContainer category={category} />
                                                                ))}
                                                        </div>

                                                </div>
                                        </div>

                                </div>
                        </div>
                </div>
        )
}

export default About