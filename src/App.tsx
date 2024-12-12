import { Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/Container";
import About from "./components/About";
import Home from "./components/Home";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useEffect, useState } from "react";

function App() {

        // const location = useLocation();

        // const [previousPage, setPreviousPage] = useState<number>(0);
        const [currentPage, setCurrentPage] = useState<number>(1);

        // const isSmallScreen = window.innerWidth < 601;

        useEffect( () => {
                const setPage = () => {
                        // setPreviousPage(currentPage);
                }

                setPage();
        }, [currentPage])

        return(
                <Routes>
                        <Route path="/" element={<Navigate to='/home' replace />} />

                        <Route path="/" element={<Container setCurrentPage={setCurrentPage} />}>

                                {/* <Route path="*" element={<TransitionGroup>
                                        <CSSTransition key={location.key} timeout={500} classNames={ isSmallScreen ? ( previousPage < currentPage ? "left" : "right" ) : ( previousPage < currentPage ? "up" : "down" ) }>

                                                <Routes location={location}>
                                                        <Route path="/home" element={<Home />} />
                                                        <Route path="/about" element={<About />} />
                                                        <Route path="/work" element={<WorkExperience />} />
                                                        <Route path="/projects" element={<Projects />} />
                                                        <Route path="/contact" element={<Contact />} />
                                                </Routes>

                                        </CSSTransition>
                                </TransitionGroup>} /> */}

                                                        <Route path="/home" element={<Home />} />
                                                        <Route path="/about" element={<About />} />
                                                        <Route path="/work" element={<WorkExperience />} />
                                                        <Route path="/projects" element={<Projects />} />
                                                        <Route path="/contact" element={<Contact />} />
                        
                        </Route>
                </Routes>
        )
}

export default App