import React from "react";
import { FaGithub, FaLinkedin, FaSkype } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import footer from "../../assets/footer3.png";
// import ProfileImg from "../../assets/profile.png";
import Professional from "./Professional";
// import BackgroundImg from "../../assets/home-bg.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-section" id="home">
      {/* <div className="home-background">
        <img src={BackgroundImg} />
      </div> */}
      <div className="home-container">
        {/* <div className="home-image">
          <img src={ProfileImg} className="profile-picture" />
        </div> */}
        <div className="home-info">
          <div className="profile-icon"></div>
          <div className="profile-name">
            <span className="profile-text">
              Hello, I'm <span className="highlighted">Ravneet</span>
            </span>
          </div>
          <div className="profile-role">
            <span className="profile-text">
              <h1>Front End Developer</h1>
            </span>
          </div>
          <div className="profile-options">
            <a href="#contact">Hire Me</a>
            <a href="#contact">Download CV</a>
          </div>
        </div>
        {/* <div className="home-image">
          <div className="profile-picture"></div>
        </div> */}
      </div>
      <div className="social-icons">
        <ul>
          <li className="linkedin">
            <a href="/">
              LinkedIn
              <FaLinkedin className="icon" />
            </a>
          </li>
          <li className="email">
            <a href="/">
              Email
              <HiOutlineMail className="icon" />
            </a>
          </li>
          <li className="skype">
            <a href="/">
              Skype <FaSkype className="icon" />
            </a>
          </li>
          <li className="github">
            <a href="/">
              Github <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="footer-container">
        <div className="footer-parent">
          <img src={footer} alt="none" />
        </div>
      </div> */}

      <Professional />
    </div>
  );
};

export default Home;
