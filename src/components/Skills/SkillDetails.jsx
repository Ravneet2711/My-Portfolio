import React from "react";
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Skills.css";

import data from "./SkillData.json";

const SkillDetails = (props) => {
  return (
    <div className="skillsection">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        autoHeight="true"
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container container__details"
      >
        <SwiperSlide>
          <ul>
            {props.skill.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SkillDetails;
