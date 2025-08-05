import Icon from "./Icon";

interface NavbarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Navbar(props: NavbarProps) {
  return (
    <nav>
      <div className="bg-[#156064] h-screen w-[10vw] flex flex-col items-center justify-around max-[600px]:h-[10vh] max-[600px]:w-screen max-[600px]:flex-row">
        <Icon name="home" setCurrentPage={props.setCurrentPage} pageValue={1} />
        <Icon
          name="about"
          setCurrentPage={props.setCurrentPage}
          pageValue={2}
        />
        <Icon
          name="certifications"
          setCurrentPage={props.setCurrentPage}
          pageValue={3}
        />
        <Icon
          name="experience"
          setCurrentPage={props.setCurrentPage}
          pageValue={4}
        />
        {/* <Icon name="projects" setCurrentPage={props.setCurrentPage} pageValue={5} /> */}
        <Icon
          name="contact"
          setCurrentPage={props.setCurrentPage}
          pageValue={5}
        />
      </div>
    </nav>
  );
}

export default Navbar;
