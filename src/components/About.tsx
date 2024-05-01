function About(){
        return(
                <div className="h-screen w-[90vw] flex justify-center items-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:items-start max-[600px]:py-10 scrollable">
                        <div className="text-xs flex flex-col w-[80%]">
                                <div className="flex flex-col gap-4">
                                        <div className="text-3xl">About Me</div>
                                        <div className="text-sm">I'm a Computer Science engineer passionate about customizing operating systems, exploring hardware, and creating innovative web solutions. I specialize in Linux for its hands-on, customizable nature.<br />As a student, I bring both theoretical knowledge and practical experience, driven by curiosity. I'm excited to collaborate on projects and contribute to groundbreaking initiatives in the field.</div>

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
                                                </div>

                                                <div className="border-l-2 border-black max-[600px]:border-none">
                                                        <span className="text-3xl ml-9 max-[600px]:ml-0">Contact</span>

                                                        <div className="ml-9 mt-9 flex items-center gap-4 max-[600px]:ml-0 max-[600px]:mt-5">
                                                                <img src="phone.svg" width="35px" />+91 9312711492
                                                        </div>
                                                        <div className="ml-9 mt-9 flex items-center gap-4 max-[600px]:ml-0 max-[600px]:mt-7">
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