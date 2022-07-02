import React from "react";
import "./Skills.css";
import SkillsDetails from "../SkillsDetails/SkillsDetails";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = React.forwardRef((_, ref) => {
  return (
    <section id="skills" ref={ref}>
      <h5>Technical Knowledge</h5>
      <h2>Skills I have</h2>

      <div className="container skills__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>

          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>jQuery</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skill__familiar">
          <h3>Familiar With</h3>

          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>VSCode</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>Brackets</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>GitHub</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>Firebase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>Netlify</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />

              <div>
                <h4>Parcel</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <SkillsDetails />
    </section>
  );
});

export default Skills;
