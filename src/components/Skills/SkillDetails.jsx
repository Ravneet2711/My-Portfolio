import React from "react";

import "./Skills.css";

const SkillDetails = (props) => {
  return (
    <div className="skillsection">
      <ul className="htmlEle">
        {props.skill.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillDetails;
