import AboutImage from "../../assets/AboutImage.jpg";
import { HiDownload } from "react-icons/hi";
import "./About.css";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="Portrait_Image" />
          </div>
        </div>
        <div className="about__right">
          <div className="about__cards"></div>
          <p>
            Hi, My name is Ravneet Kaur. I am from Delhi, India. I'm a front-end
            developer with the Bachelors degree in Information Technology.I have
            done my Bachelors from GTBIT,GGSIPU. Familiar with (HTML, CSS,
            JavaSript, Bootstrap, ReactJS and Redux ).Currently looking for a
            job as a Front-End Developer.
          </p>
          <a href="#CV" download className="btn primary">
            Download CV
            <HiDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
