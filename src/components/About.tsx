import SkillContainer from "./SkillContainer"

function About(){

        const iconUrl = `https://github.com/devicons/devicon/raw/master/icons`;

        const categories = [
                {
                        title: "Web Development",
                        skills: [
                                {
                                        name: "JavaScript",
                                        icon: `${iconUrl}/javascript/javascript-original.svg`
                                },
                                {
                                        name: "TypeScript",
                                        icon: `${iconUrl}/typescript/typescript-original.svg`
                                },
                                {
                                        name: "Node.js",
                                        icon: `${iconUrl}/nodejs/nodejs-original-wordmark.svg`
                                },
                                {
                                        name:"Express.js",
                                        icon: `${iconUrl}/express/express-original.svg`
                                },
                                {
                                        name: "React.js",
                                        icon: `${iconUrl}/react/react-original.svg`
                                },
                                {
                                        name: "MongoDB",
                                        icon: `${iconUrl}/mongodb/mongodb-original.svg`
                                }
                        ]
                },
                {
                        title: "Deployment",
                        skills: [
                                {
                                        name: "AWS",
                                        icon: `${iconUrl}/amazonwebservices/amazonwebservices-plain-wordmark.svg`
                                },
                                {
                                        name: "Git",
                                        icon: `${iconUrl}/git/git-original.svg`
                                },
                                {
                                        name: "Linux",
                                        icon: `${iconUrl}/linux/linux-original.svg`
                                },
                                {
                                        name: "Bash Script",
                                        icon: `${iconUrl}/bash/bash-original.svg`
                                },
                                {
                                        name: "Vagrant",
                                        icon: `${iconUrl}/vagrant/vagrant-original.svg`
                                },
                                {
                                        name:"Docker",
                                        icon: `${iconUrl}/docker/docker-original.svg`
                                },
                                {
                                        name:"Kubernetes",
                                        icon: `${iconUrl}/kubernetes/kubernetes-original.svg`
                                },
                                {
                                        name: "Jenkins",
                                        icon: `${iconUrl}/jenkins/jenkins-original.svg`
                                },
                                {
                                        name: "nginx",
                                        icon: `${iconUrl}/nginx/nginx-original.svg`
                                }
                        ]
                },
                {
                        title: "Languages",
                        skills: [
                                {
                                        name: "Java",
                                        icon: `${iconUrl}/java/java-original.svg`
                                },
                                {
                                        name: "C++",
                                        icon: `${iconUrl}/cplusplus/cplusplus-original.svg`
                                },
                                {
                                        name:"Python",
                                        icon: `${iconUrl}/python/python-original.svg`
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
                                                <div className="text-sm">I'm a Computer passionate about customizing operating systems, exploring hardware, and creating innovative web solutions. I specialize in Linux for its hands-on, customizable nature.<br />As a student, I bring both theoretical knowledge and practical experience, driven by curiosity. I'm excited to collaborate on projects and contribute to groundbreaking initiatives in the field.</div>
                                        </div>

                                        <div className="flex max-[600px]:flex-col max-[600px]:gap-4">
                                                <div className="w-full flex flex-col gap-3">

                                                        <div className="text-3xl">Skills</div>

                                                        <div className="h-[fit-content] w-full flex justify-around max-[600px]:justify-start max-[600px]:gap-5 max-[600px]:flex-col max-[600px]:items-center">
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