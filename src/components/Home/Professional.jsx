import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";
import ProfileImg from "../../assets/profile.png";
const Professional = () => {
  return (
    <div className="profession-container">
      <div className="profession-box">
        <div className="profession" style={{ "--i": "0" }}>
          <i>
            <SiHtml5 />
          </i>
          <h3>HTML</h3>
        </div>
        <div className="profession" style={{ "--i": "1" }}>
          <i>
            <SiCss3 />
          </i>
          <h3>CSS</h3>
        </div>
        <div className="profession" style={{ "--i": "2" }}>
          <i>
            <SiJavascript />
          </i>
          <h3>JavaScript</h3>
        </div>
        <div className="profession" style={{ "--i": "3" }}>
          <i>
            <SiReact />
          </i>
          <h3>ReactJS</h3>
        </div>
        <div className="circle"></div>
      </div>
      {/* <div className="profession-mobile-view">
        <div className="profession-mv" style={{ "--i": "0" }}>
          <i>
            <SiHtml5 />
          </i>
          <h3>HTML</h3>
        </div>
        <div className="profession-mv" style={{ "--i": "1" }}>
          <i>
            <SiCss3 />
          </i>
          <h3>CSS</h3>
        </div>
        <div className="profession-mv" style={{ "--i": "2" }}>
          <i>
            <SiJavascript />
          </i>
          <h3>JavaScript</h3>
        </div>
        <div className="profession-mv" style={{ "--i": "3" }}>
          <i>
            <SiReact />
          </i>
          <h3>ReactJS</h3>
        </div>
        <div className="circle"></div>
      </div> */}
      <div className="overlay"></div>
      <div className="home-image">
        <img src={ProfileImg} alt="Profile" className="profile-picture" />
      </div>
    </div>
  );
};

export default Professional;
