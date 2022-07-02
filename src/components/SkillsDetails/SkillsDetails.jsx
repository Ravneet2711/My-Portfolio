import React from "react";
import "./SkillsDetails.css";

import { SiJavascript } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";

import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import SKILLS_DATA from "./SKILLS_DATA.js";

const SkillsDetails = () => {
  return (
    <section id="skillsdetails">
      <h5>What I know</h5>
      <h2>About My Skills</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        autoHeight="true"
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container container__details"
      >
        <SwiperSlide className="frontend__details">
          <SiJavascript id="js" className="frontend__details-icon" />

          <ul>
            {SKILLS_DATA.js.map((skill, index) => (
              <li key={index} className="frontend__details-list">
                {skill}
              </li>
            ))}
          </ul>
        </SwiperSlide>

        <SwiperSlide className="frontend__details">
          <RiReactjsFill id="react" className="frontend__details-icon" />

          <ul>
            {SKILLS_DATA.react.map((skill, index) => (
              <li key={index} className="frontend__details-list">
                {skill}
              </li>
            ))}
          </ul>
        </SwiperSlide>

        <SwiperSlide className="frontend__details">
          <IoLogoHtml5 id="html" className="frontend__details-icon" />
          <ul>
            {SKILLS_DATA.html.map((skill, index) => (
              <li key={index} className="frontend__details-list">
                {skill}
              </li>
            ))}
          </ul>
        </SwiperSlide>

        <SwiperSlide className="frontend__details">
          <IoLogoCss3 id="css" className="frontend__details-icon" />

          <ul>
            {SKILLS_DATA.css.map((skill, index) => (
              <li key={index} className="frontend__details-list">
                {skill}
              </li>
            ))}
          </ul>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SkillsDetails;
