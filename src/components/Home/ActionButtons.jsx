import React from "react";
import cv from "../../assets/cv.pdf";

const ActionButtons = () => {
  return (
    <div className="cta">
      <a href={cv} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's chat
      </a>
    </div>
  );
};

export default ActionButtons;
