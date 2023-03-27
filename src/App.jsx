import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import About from "./components/AboutMe/About";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
