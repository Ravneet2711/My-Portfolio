import React from "react";
import "./About.css";
import MeAbout from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { VscFolderActive } from "react-icons/vsc";

const About = React.forwardRef((_, ref) => {
  return (
    <section ref={ref} id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={MeAbout} alt="my-pic" className="about__me-image"></img>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a href="#contact" className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </a>

            <a href="#skills" className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Qualification</h5>
              <small>B.Tech(78%)</small>
            </a>

            <a href="#projects" className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </a>
          </div>

          <p>
            Hello, everyone. I live in Delhi. I have done my graduation in
            B.Tech. in EEE from GTBIT, Delhi. I am aspiring to use my technical{" "}
            <a href="#skillsdetails">skills</a> to excel my career as a
            Front-End-Developer in IT.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
});

export default About;
