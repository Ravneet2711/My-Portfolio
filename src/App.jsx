import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const navBarRef = useRef();

  const observerOptions = {
    threshold: 0.3,
    onChange: (_, entry) => {
      const allNavs = navBarRef.current.children;

      if (entry.isIntersecting) {
        [...allNavs].forEach(nav => {
          nav.classList.remove("active");
        });

        const activeNav = [...allNavs].find(
          nav => nav.getAttribute("href").slice(1) === entry.target.id
        );

        activeNav.classList.add("active");
      }
    },
  };

  const [homeRef] = useInView(observerOptions);
  const [aboutRef] = useInView(observerOptions);
  const [skillsRef] = useInView(observerOptions);
  const [projectsRef] = useInView({ ...observerOptions, threshold: 0 });
  const [contactRef] = useInView(observerOptions);

  return (
    <>
      <Navbar ref={navBarRef} />

      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />

      <Footer />
    </>
  );
};

export default App;
