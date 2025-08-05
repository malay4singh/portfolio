import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Container from "./components/Container";
import About from "./components/about/About";
import Home from "./components/Home";
import WorkExperience from "./components/work/WorkExperience";
// import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useEffect, useState } from "react";
import Certification from "./components/certifications/Certifications";

function App() {
  const location = useLocation();

  const [previousPage, setPreviousPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const isSmallScreen = window.innerWidth < 601;

  useEffect(() => {
    const setPage = () => {
      setPreviousPage(currentPage);
    };

    setPage();
  }, [currentPage]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/" element={<Container setCurrentPage={setCurrentPage} />}>
        <Route
          path="*"
          element={
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={500}
                classNames={
                  isSmallScreen
                    ? previousPage < currentPage
                      ? "left"
                      : "right"
                    : previousPage < currentPage
                      ? "up"
                      : "down"
                }
              >
                <Routes location={location}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/certifications" element={<Certification />} />
                  <Route path="/experience" element={<WorkExperience />} />
                  {/* <Route path="/projects" element={<Projects />} /> */}
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
