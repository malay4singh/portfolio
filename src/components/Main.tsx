import Home from './Home'
import About from './About'
import Projects from './Projects'

interface MainProps{
        navigation: number
}

function Main(props: MainProps){
        const isSmallScreen = window.innerWidth < 601;

        return(
                <div className='bg-[#FFFFF0]'>
                        <section className='max-[600px]:flex max-[600px]:flex max-[600px]:overflow-x-hidden max-[600px]:w-[300vw]' style={{transform: isSmallScreen ?`translate(${props.navigation}%, 0)` : `translate(0, ${props.navigation}%)`, transition: `transform 0.3s`}}>
                                <Home />

                                <About />

                                <Projects />
                        </section>
                </div>
        )
}

export default Main