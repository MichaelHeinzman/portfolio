import React from "react";
import "../CSS/Contact.css";

const Contact = ({ contactRef }) => {
  return (
    <div id="Contact" className="contact" ref={contactRef}>
      <h1 className="contact-title">contact</h1>
      <img src="/Mail.svg" alt="Mail Contact" className="contact-mail" />
    </div>
  );
};

export default Contact;
