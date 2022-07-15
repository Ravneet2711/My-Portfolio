import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import About from "./components/About Me/About";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default App;
