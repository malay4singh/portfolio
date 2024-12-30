import { useNavigate, useLocation } from "react-router-dom";

interface IconProps{
        name: string,
        setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
        pageValue: number
}

function Icon(props: IconProps){
        const navigate = useNavigate();

        const location = useLocation();
        const page = location.pathname.split('/').pop();

        const handleClick = ()=>{
                props.setCurrentPage(props.pageValue);
                navigate(`/${props.name}`);
        }

        const design = {
                "box-shadow": "inset 0 0px 30px 0 rgb(-16 73 76 / 1)",
                "outline": "1px solid rgb(-16 73 76)"
        }

        const empty = {}

        return(
                <div onClick={handleClick} className="p-3 rounded hover:cursor-pointer" style={props.name == page ? design : empty}>
                        <img className="w-[50px] min-[1700px]:w-[65px] max-[600px]:w-[30px]" src={props.name+".svg"} />
                </div>
        )
}

export default Icon