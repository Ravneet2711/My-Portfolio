import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaQuora } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={logo} alt="my-logo" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.quora.com/profile/Ashish-Sharma-424"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaQuora />
        </a>

        <a
          href="https://www.instagram.com/ash14ish/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>

        <a
          href="https://twitter.com/aas_hi_shh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AM Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
