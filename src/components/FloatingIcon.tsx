import { useSpring, animated } from '@react-spring/web';

interface FloatingIconProps{
        alias: string;
        right: number;
        top: number
}

function FloatingIcon(props:FloatingIconProps){

        const ani = useSpring({
                from : { right : props.right-50, opacity : 0, top : props.top},
                to : { right : props.right, opacity : 1, top : props.top}
        })

        const img_path=`${props.alias}.svg`;

        return(
                <animated.img className="absolute" src={img_path} style={ani} width='35px' />
        )
}

export default FloatingIcon