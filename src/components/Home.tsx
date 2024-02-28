function Home(){
        return(
                <div className="flex gap-[100px] w-[90vw] justify-center h-screen max-[600px]:gap-8 max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:flex-col max-[600px]:items-center">
                        <div className="flex justify-center min-[601px]:h-screen items-center">
                                <img className="rounded-[50%] border-[16px] border-[#156064] w-[250px] min-[601px]:w-[330px] min-[1700px]:w-[400px]" src="avatar.jpg" />
                        </div>

                        <div className="flex flex-col justify-center gap-4 w-[50%] max-[600px]:w-[80%]">
                                <div className="flex flex-col gap-1 ">
                                        <div>
                                                HI THERE, I'M
                                        </div>
                                        <div className="text-3xl">
                                                <span className="text-3xl text-[#156064]">MALAY</span> SINGH        
                                        </div>        
                                </div>

                                <div>
                                        A Full-Stack Web Developer passionate about creating interactive applications and experiences on the web.
                                </div>

                                <div className="flex gap-7">
                                        <div>
                                                <a href="https://github.com/malay4singh" target="_blank"><img src="github.svg" width='47px' /></a>
                                        </div>
                                        <div>
                                                <a href="https://www.linkedin.com/in/malay-singh-15b722274/" target="_blank"><img src="linkedin.svg" width='47px' /></a>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Home