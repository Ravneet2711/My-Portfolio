import React from "react";
import "./Navbar.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { MdWorkOutline } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <a href="#home">
        <AiOutlineHome />
      </a>

      <a href="#about">
        <AiOutlineUser />
      </a>

      <a href="#skills">
        <VscTools />
      </a>

      <a href="#projects">
        <MdWorkOutline />
      </a>

      <a href="#contact">
        <BsChatDots />
      </a>
    </nav>
  );
};

export default Navbar;
