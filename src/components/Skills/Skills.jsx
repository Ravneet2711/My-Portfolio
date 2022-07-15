import React from "react";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import "./Skills.css";
import data from "./SkillData.json";
import SkillDetails from "./SkillDetails";

const Skills = () => {
  const { js, html, css, react } = data.SKILLS_DATA;
  const [state, setState] = useState(html);

  // handleClick = () => {
  //   setState();
  // };
  return (
    <div>
      <h2>Skills</h2>

      <div className="Skills-container">
        <div className="skill-left-section">
          <ul>
            <li className={state === html ? "active" : ""}>
              <a onClick={() => setState(html)}>
                <SiHtml5 /> HTML5
              </a>
            </li>
            <li className={state === css ? "active" : ""}>
              <a onClick={() => setState(css)}>
                <SiCss3 /> CSS3
              </a>
            </li>
            <li className={state === js ? "active" : ""}>
              <a onClick={() => setState(js)}>
                <SiJavascript /> JavaScript
              </a>
            </li>
            <li className={state === react ? "active" : ""}>
              <a onClick={() => setState(react)}>
                <FaReact /> ReactJS
              </a>
            </li>
          </ul>
        </div>
        <div className="skill-right-section">
          <SkillDetails skill={state} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
