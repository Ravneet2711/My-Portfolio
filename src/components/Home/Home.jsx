import React from "react";
import "./Home.css";

import ActionButtons from "./ActionButtons";
import MyPic from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Home = React.forwardRef((_, ref) => {
  return (
    <header ref={ref} id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ashish</h1>
        <h5 className="text-light">Front-End Developer</h5>

        <ActionButtons />
        <HeaderSocial />

        <div className="my-pic">
          <img src={MyPic} alt="my-pic"></img>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
});
export default Home;
