import React from "react";
import { FiSend } from "react-icons/fi";
import "./Form.css";

const Form = () => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" required autoComplete="off" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" required autoComplete="off" />

      <label htmlFor="msg">Message</label>
      <textarea type="text" id="msg" required autoComplete="off" />

      <button className="btn">
        Send
        <FiSend />
      </button>
    </form>
  );
};

export default Form;
