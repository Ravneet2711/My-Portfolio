import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiDribbble } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ash14ish/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        href="https://github.com/ash14ish"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://dribbble.com/ash14ish"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
