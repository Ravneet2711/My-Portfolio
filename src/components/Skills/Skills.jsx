import React from "react";
// import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Skills.css";
import data from "./SkillData.json";

const Skills = () => {
  const { js, html, css, react } = data.SKILLS_DATA;
  // const [state, setState] = useState(html);

  return (
    <div id="skills">
      <h2 className="animated slide-in-left">Skills</h2>

      <div className="Skills-container">
        <div className="skillsection">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            speed={500}
            loop={true}
            pagination={{
              clickable: true,
            }}
            scrollbar={true}
            navigation={true}
            keyboard={{
              enabled: true,
            }}
            modules={[Pagination, Navigation, Scrollbar, Autoplay]}
            className=" container__details"
          >
            <SwiperSlide>
              <div className="skillname">
                <a className="skills-icon">
                  <SiHtml5 /> HTML5
                </a>

                <ul>
                  {html.map((items, index) => (
                    <li key={index}>{items}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skillname">
                <a className="skills-icon">
                  <SiCss3 /> CSS3
                </a>

                <ul>
                  {css.map((items) => (
                    <li>{items}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skillname">
                <a className="skills-icon">
                  <SiJavascript /> JavaScript
                </a>

                <ul>
                  {js.map((items) => (
                    <li>{items}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skillname">
                <a className="skills-icon">
                  <FaReact /> ReactJS
                </a>

                <ul>
                  {react.map((items) => (
                    <li>{items}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skills;
