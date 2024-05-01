interface IconProps{
        name: string
        setNavigation: React.Dispatch<React.SetStateAction<number>>,
        screen: number
}

function Icon(props: IconProps){
        const handleClick = ()=>{
                props.setNavigation(props.screen);
        }

        return(
                <div onClick={handleClick}>
                        <img className="hover:cursor-pointer w-[55px] min-[1700px]:w-[70px] max-[600px]:w-[35px]" src={props.name+".svg"} />
                </div>
        )
}

export default Icon