import { useState } from "react";
import "./Navbar.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { MdWorkOutline } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState("#home");

  const navLinks = [
    { href: "#home", component: <AiOutlineHome /> },
    { href: "#about", component: <AiOutlineUser /> },
    { href: "#skills", component: <VscTools /> },
    { href: "#projects", component: <MdWorkOutline /> },
    { href: "#contact", component: <BsChatDots /> },
  ];

  return (
    <nav>
      {navLinks.map((data) => (
        <a
          href={data?.href}
          onClick={() => setActive(data?.href)}
          className={data?.href === active ? "active" : ""}
        >
          {data?.component}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
