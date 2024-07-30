interface Work {
        name: string,
        points: Array<string>,
        cert: string
}

interface OfficeInterface {
        work: Work
}

function Office(props: OfficeInterface) {
        return (
                <div className="flex flex-col gap-3 max-[600px]:gap-5">

                        <div className="flex gap-6 items-center max-[600px]:flex-col max-[600px]:gap-2">
                                <div className="text-xl text-[#156064] flex gap-2 items-center"><img src="location.svg" width={'20px'} />
                                        {props.work.name}
                                </div>

                                <a href={props.work.cert} target="_blank"><div className="border=2 border-black flex items-center bg-[#156064] text-[#fffff0] gap-2 p-1 rounded text-xs">
                                        CERTIFCATE <img src="link.svg" width={'20px'} />
                                </div></a>
                        </div>
                        
                        <div className="text-md ml-6 flex flex-col max-[600px]:ml-0 max-[600px]:gap-1">
                                {props.work.points.map(point => (
                                        <div className="flex gap-2 py-1"><img src="point.svg" width={'12px'} />{point}</div>
                                ))} 
                        </div>
                </div>
        )
}

export default Office