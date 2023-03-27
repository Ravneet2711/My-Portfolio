import React from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

// import Form from "./Form";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="animated slide-in-left">Contact Me</h2>
      <div className="contact-container">
        <form>
          <input placeholder="Name" type="text" name="name" required />
          <input placeholder="Enter email" type="email" name="email" required />
          <textarea
            placeholder="Your Message"
            type="text"
            name="message"
            required
          />
          <button className="btn">
            SUBMIT
            <i>
              <FiSend />
            </i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// import React from "react";
// import {
//   BsInstagram,
//   BsGithub,
//   BsLinkedin,
//   BsTwitter,
//   BsFacebook,
// } from "react-icons/bs";

// import Form from "./Form";
// import "./Contact.css";
// import ContactImg from "../../assets/contact.jpeg";

// const Contact = () => {
//   return (
//     <div id="contact">
//       <h2 className="animated slide-in-left">Contact Me</h2>
//       <div className="contact-container">
//         <div className="contact-title">
//           <h3>Get In Touch 📧</h3>
//         </div>
//         <div className="contact-icons">
//           <a href="#">
//             <BsFacebook />
//           </a>
//           <a href="#">
//             <BsInstagram />
//           </a>
//           <a href="#">
//             <BsLinkedin />
//           </a>
//           <a href="#">
//             <BsGithub />
//           </a>
//           <a href="#">
//             <BsTwitter />
//           </a>
//         </div>
//         <div className="form-container">
//           <div className="form-img">
//             <h4>Send Your Email Here!</h4>
//             <img src={ContactImg} alt="image not found" />
//           </div>
//           <Form />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
