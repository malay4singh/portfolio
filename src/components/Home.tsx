function Home(){
        return(
                <div className="flex gap-[100px] w-[90vw] justify-center h-screen max-[600px]:gap-8 max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:flex-col max-[600px]:items-center">
                        <div className="flex justify-center min-[601px]:h-screen items-center">
                                <img className="rounded-[50%] border-[16px] border-[#156064] w-[250px] min-[601px]:w-[330px] min-[1700px]:w-[400px]" src="pfp.jpeg" />
                        </div>

                        <div className="flex flex-col justify-center gap-4 w-[50%] max-[600px]:w-[80%]">
                                <div className="flex flex-col gap-1 ">
                                        <div>
                                                HI
                                        </div>
                                        <div className="text-3xl">
                                                <span className="text-3xl text-[#156064]">MALAY</span> SINGH        
                                        </div>        
                                </div>

                                <div>
                                        A B.Tech CSE student aspiring to become a Full-Stack Web Developer and create interactive experiences on the web.
                                </div>

                                <div className="flex gap-7 h-[50px] items-center">
                                        <div className="h-[100%]">
                                                <a href="https://github.com/malay4singh" target="_blank"><img className="h-[100%]" src="github.svg" /></a>
                                        </div>
                                        <div className="h-[100%]">
                                                <a href="https://www.linkedin.com/in/malay4singh" target="_blank"><img className="h-[100%]" src="linkedin.svg" /></a>
                                        </div>
                                        <a className="h-full flex items-center" href="https://drive.google.com/file/d/1uYpPO0rvCv2xIOnPDf-Wj2PiHcGvfIZ3/view?usp=sharing" target="_blank">
                                                <div className="px-1 rounded bg-[#156064] text-[#fffff0] flex gap-2 h-[90%] items-center">
                                                        RESUME <img src="link.svg" width={'20px'} />
                                                </div>
                                        </a>
                                </div>
                        </div>
                </div>
        )
}

export default Home