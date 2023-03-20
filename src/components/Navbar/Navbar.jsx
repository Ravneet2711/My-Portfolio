import { useState, useRef } from "react";
import "./Navbar.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { MdWorkOutline } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const home = useRef();
  const about = useRef();
  const skills = useRef();
  const project = useRef();
  const contact = useRef();
  const activeHome = () => {
    setActive(!active);
    if (home.current.href === window.location.href) {
      home.current.classList.toggle("active");
      console.log("home");
    } else if (about.current.href === window.location.href) {
      about.current.classList.toggle("active");
      console.log("about");
    } else if (skills.current.href === window.location.href) {
      skills.current.classList.toggle("active");
      console.log("skills");
    } else if (project.current.href === window.location.href) {
      project.current.classList.toggle("active");
      console.log("project");
    } else if (contact.current.href === window.location.href) {
      contact.current.classList.toggle("active");
      console.log("contact");
    }
  };

  return (
    <nav>
      <a href="#home" onClick={activeHome} ref={home}>
        <AiOutlineHome />
      </a>

      <a href="#about" onClick={activeHome} ref={about}>
        <AiOutlineUser />
      </a>

      <a href="#skills" onClick={activeHome} ref={skills}>
        <VscTools />
      </a>

      <a href="#projects" onClick={activeHome} ref={project}>
        <MdWorkOutline />
      </a>

      <a href="#contact" onClick={activeHome} ref={contact}>
        <BsChatDots />
      </a>
    </nav>
  );
};

export default Navbar;
