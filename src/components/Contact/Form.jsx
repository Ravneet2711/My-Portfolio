import React, { useRef } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "./Form.css";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_z7e46nu",
      "template_zo132t8",
      form.current,
      "13bN_6QS_JxfAOxX2"
    );
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" required autoComplete="off" name="name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" required autoComplete="off" name="email" />

      <label htmlFor="msg">Message</label>
      <textarea
        type="text"
        id="msg"
        required
        autoComplete="off"
        name="message"
      />

      <button className="btn">
        Send
        <FiSend />
      </button>
    </form>
  );
};

export default Form;
