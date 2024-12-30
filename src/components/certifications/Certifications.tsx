function Certifications() {
        return (
                <div className='h-screen w-[90vw] flex items-center justify-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[1200px]:items-start max-[600px]:py-10 scrollable'>
                        <div className='w-[80%] flex flex-col h-[75%] max-[600px]:h-fit max-[600px]:gap-10'>
                                <div className={`text-3xl`}>
                                        Certifications
                                </div>

                                <div className="grow flex items-center justify-center">
                                        <div className="flex gap-10 items-center max-[600px]:flex-col max-[600px]:justify-start">
                                                <div className="w-[250px] max-[600px]:w-[150px]">
                                                        <img src="aws-csa.png" />
                                                </div>

                                                <div className="flex flex-col gap-14 max-[600px]:gap-10">
                                                        AWS Certified Solutions Architect - Associate <br /> (SAA-C03)

                                                        <div className="flex justify-around">
                                                                <a href='https://drive.google.com/file/d/14WC56HS10ZzzsbU27LiJVWDZkfsERg0P/view?usp=sharing' target="_blank"><div className="flex items-center bg-[#156064] text-[#fffff0] gap-2 p-1 rounded text-xs ">
                                                                        CERTIFCATE <img src="link.svg" width={'20px'} />
                                                                </div></a>
                                                                <a href='https://www.credly.com/badges/f945e5d2-66a4-4c14-ab84-488ccc5ff5ed/public_url' target="_blank"><div className="flex items-center bg-[#156064] text-[#fffff0] gap-2 p-1 rounded text-xs ">
                                                                        CREDLY <img src="link.svg" width={'20px'} />
                                                                </div></a>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Certifications