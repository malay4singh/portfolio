import Icon from "./Icon"

interface NavbarProps{
        setNavigation : React.Dispatch<React.SetStateAction<number>>
}

function Navbar(props: NavbarProps){
        return(
                <nav>
                        <div className="bg-[#156064] h-screen w-[10vw] flex flex-col items-center justify-around max-[600px]:h-[10vh] max-[600px]:w-screen max-[600px]:flex-row">
                                <Icon name="home" setNavigation={props.setNavigation} screen={-0} />
                                <Icon name="about" setNavigation={props.setNavigation} screen={-25} />
                                <Icon name="work" setNavigation={props.setNavigation} screen={-50} />
                                <Icon name="projects" setNavigation={props.setNavigation} screen={-75} />
                        </div>
                </nav>
        )
}

export default Navbar