import Icon from "./Icon";

function Navbar(){
        return(
                <nav>
                        <div className="bg-[#156064] h-screen w-[10vw] flex flex-col items-center justify-around max-[600px]:h-[10vh] max-[600px]:w-screen max-[600px]:flex-row">
                                <Icon name="home" />
                                <Icon name="about" />
                                <Icon name="work" />
                                <Icon name="projects" />
                                <Icon name="contact" />
                        </div>
                </nav>
        )
}

export default Navbar