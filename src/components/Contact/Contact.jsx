import React from "react";
// import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

import Form from "./Form";
import "./Contact.css";
import ContactImg from "../../assets/contact.jpeg";

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-title">
          <h2>Get In Touch 📧</h2>
        </div>
        <div className="contact-icons">
          <a href="#">F</a>
          <a href="#">I</a>
          <a href="#">L</a>
          <a href="#">E</a>
          <a href="#">T</a>
        </div>
        <div className="form-container">
          <div className="form-img">
            <h4>Send Your Email Here!</h4>
            <img src={ContactImg} alt="image not found" />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
