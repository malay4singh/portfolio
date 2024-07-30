function WorkExperience(){
        return(
                <div className=" h-screen w-[90vw] flex justify-center items-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:items-start max-[600px]:py-10 scrollable">
                        <div className="text-xs flex flex-col w-[80%]">
                                <div className="flex flex-col gap-6">

                                        <div className="text-3xl mb-2">Work Experience</div>

                                        <div className="flex flex-col gap-3">
                                                <div className="text-xl text-[#156064] flex gap-2 items-center"><img src="location.svg" width={'20px'} />
                                                        National Informatics Centre - 01/05/2024 to 14/06/2024
                                                </div>
                                                <div className="text-md ml-6 flex flex-col">
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />Worked on the e-Jagriti Platform</div>
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />Authentication, Authorization and Validation</div>
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />React Router Authorization (Role-based)</div>
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />Child nodes and Outlets</div>
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />PostgreSQL</div>
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />JWT Tokens (Access and Refresh)</div>
                                                </div>
                                        </div>

                                        <div className="flex flex-col gap-3 ">
                                                <div className="text-xl text-[#156064] flex gap-2 items-center"><img src="location.svg" width={'20px'} />
                                                iHUB DivyaSampark @ IIT Roorkee - 12/06/2023 to 26/07/2023
                                                </div>
                                                <div className="text-md ml-6 flex flex-col gap-1">
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />Digital Footprinting</div>
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />Web App Security</div>
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />DOS, DDOS, SQL Injection</div>
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />Penetration Testing Tools – nmap, recon-ng, SQLMap</div>
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />Integrating Tools with Python Scripts</div>
                                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />Project on Sub-domain discovery</div>
                                                </div>
                                        </div>

                                </div>
                        </div>
                </div>
        )
}

export default WorkExperience