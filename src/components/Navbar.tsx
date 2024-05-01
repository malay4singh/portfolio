import Icon from "./Icon"

interface NavbarProps{
        setNavigation : React.Dispatch<React.SetStateAction<number>>
}

function Navbar(props: NavbarProps){
        return(
                <nav>
                        <div className="bg-[#156064] h-screen w-[10vw] flex flex-col items-center justify-around max-[600px]:h-[10vh] max-[600px]:w-screen max-[600px]:flex-row">
                                <Icon name="home" setNavigation={props.setNavigation} screen={-0} />
                                <Icon name="about" setNavigation={props.setNavigation} screen={-33.333333} />
                                <Icon name="projects" setNavigation={props.setNavigation} screen={-66.666666} />
                        </div>
                </nav>
        )
}

export default Navbar