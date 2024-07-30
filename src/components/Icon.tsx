interface IconProps{
        name: string
        setNavigation: React.Dispatch<React.SetStateAction<number>>,
        screen: number,
        navigation: number
}

function Icon(props: IconProps){
        const handleClick = ()=>{
                props.setNavigation(props.screen);
        }

        const design = {
                "box-shadow": "inset 0 0px 30px 0 rgb(-16 73 76 / 1)",
                "outline": "1px solid rgb(-16 73 76)"
        }

        const empty ={}

        return(
                <div onClick={handleClick} className="p-3 rounded" style={props.screen == props.navigation ? design : empty}>
                        <img className="hover:cursor-pointer w-[50px] min-[1700px]:w-[65px] max-[600px]:w-[30px]" src={props.name+".svg"} />
                </div>
        )
}

export default Icon