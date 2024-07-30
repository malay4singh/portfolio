import Office from "./Office"

function WorkExperience(){

        const work = [
                {
                        name: "National Informatics Centre - May '24",
                        points: [
                                "Worked on the e-Jagriti Platform",
                                "Authentication, Authorization and Validation",
                                "React Router Authorization (Role-based)",
                                "Child nodes and Outlets",
                                "PostgreSQL",
                                "JWT Tokens (Access and Refresh)",
                        ],
                        cert: "https://drive.google.com/file/d/1VWxj76GGhFrilY6mal9JysvwMVo1S-gB/view?usp=sharing"
                },
                {
                        name: "iHUB DivyaSampark @ IIT Roorkee - June '23",
                        points: [
                                "Digital Footprinting",
                                "Web App Security",
                                "DOS, DDOS, SQL Injection",
                                "Penetration Testing Tools – nmap, recon-ng, SQLMap",
                                "Integrating Tools with Python Scripts",
                                "Project on Sub-domain discovery"
                        ],
                        cert: "https://drive.google.com/file/d/1-ZwQ7XwvoIRLvxllJxvzGbqJFaNkMtgv/view?usp=sharing"
                }
        ]

        return(
                <div className=" h-screen w-[90vw] flex justify-center items-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:items-start max-[600px]:py-10 scrollable">
                        <div className="text-xs flex flex-col w-[80%]">
                                <div className="flex flex-col gap-6">

                                        <div className="text-3xl mb-2">Work Experience</div>

                                        {work.map(office => (
                                                <Office work={office} />
                                        ))}

                                </div>
                        </div>
                </div>
        )
}

export default WorkExperience