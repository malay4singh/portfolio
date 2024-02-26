// import FloatingIcon from "./FloatingIcon"

function About(){
        return(
                <div className="h-screen w-[90vw] flex justify-center items-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:items-start scrollable">
                        <div className="text-xs flex flex-col w-[80%]">
                                <div className="flex flex-col gap-4">
                                        <div className="text-3xl overflow-hidden">About Me</div>
                                        <div className="text-sm">Hey, I'm a computer science engineer who loves messing around with computers. I find joy in tweaking operating systems, playing with hardware, and getting creative with web development. Arch Linux is my go-to - love the hands-on, customizable vibe. <br />If something involves coding, system stuff, and a bit of hardware wizardry, count me in!</div>

                                        <div className="flex max-[600px]:flex-col max-[600px]:gap-4">
                                                <div className="relative w-[50%]">
                                                        <span className="text-3xl">Skills</span><br />
                                                        <ol className="mt-3 list-decimal list-inside leading-snug">
                                                                <li>MERN Stack</li>
                                                                <li>Programming Languages
                                                                        <ul className="list-disc list-inside ml-7">
                                                                                <li>Java</li>
                                                                                <li>C++</li>
                                                                                <li>Python</li>
                                                                        </ul>
                                                                </li>
                                                                <li>Amazon Web Services</li>
                                                                <li>Git</li>
                                                                <li>Linux</li>
                                                                <li>Networking</li>
                                                        </ol>

                                                        {/* <FloatingIcon alias='js' top={75} right={210} />
                                                        <FloatingIcon alias='java' top={190} right={160} />
                                                        <FloatingIcon alias='aws' top={380} right={180} />
                                                        <FloatingIcon alias='git' top={330} right={270} />
                                                        <FloatingIcon alias='linux' top={170} right={100} />
                                                        <FloatingIcon alias='windows' top={300} right={95} /> */}
                                                </div>

                                                <div className="border-l-2 border-black max-[600px]:border-none">
                                                        <span className="text-3xl ml-9 max-[600px]:ml-0">Contact</span>

                                                        <div className="ml-9 mt-9 flex items-center gap-4 max-[600px]:ml-0">
                                                                <img src="phone.svg" width="35px" />+91 9312711492
                                                        </div>
                                                        <div className="ml-9 mt-9 flex items-center gap-4 max-[600px]:ml-0">
                                                                <img src="mail.svg" width="35px" />malay4singh@gmail.com
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default About