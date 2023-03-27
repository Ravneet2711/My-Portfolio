import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaSkype } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="icon-wrap">
          <a href="/">
            <div className="icon">
              <i>
                <FaLinkedin />
              </i>
            </div>
          </a>
          <a href="/">
            <div className="icon">
              <i>
                <FaGithub />
              </i>
            </div>
          </a>
          <a href="/">
            <div className="icon">
              <i>
                <FaSkype />
              </i>
            </div>
          </a>
          <a href="/">
            <div className="icon">
              <i>
                <HiOutlineMail />
              </i>
            </div>
          </a>
        </div>
        <div className="info-box">
          <div className="footnote">
            Ravneet Kaur
            <span className="highlight">&copy;2023</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
