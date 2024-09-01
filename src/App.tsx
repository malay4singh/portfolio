import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Container from "./components/Container";
import About from "./components/About";
import Home from "./components/Home";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {

        const location = useLocation();

        return(
                <Routes>
                        <Route path="/" element={<Navigate to='/home' replace />} />

                        <Route path="/" element={<Container />}>

                                <Route path="*" element={<TransitionGroup>
                                        <CSSTransition key={location.key} timeout={500} classNames="fade">

                                                <Routes location={location}>
                                                        <Route path="/home" element={<Home />} />
                                                        <Route path="/about" element={<About />} />
                                                        <Route path="/work" element={<WorkExperience />} />
                                                        <Route path="/projects" element={<Projects />} />
                                                        <Route path="/contact" element={<Contact />} />
                                                </Routes>

                                        </CSSTransition>
                                </TransitionGroup>} />
                        
                        </Route>
                </Routes>
        )
}

export default App