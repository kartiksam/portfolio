import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="contact-section">
        <div className="about-left">
          <h1> Let's talk</h1>
          <p>
            I'm currently available to join new company and eager to start with
            my journey with that company,You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>kartiksam123489@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-7011679411</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Delhi,India</p>
            </div>
          </div>
        </div>
        <form className="about-right">
          <label htmlFor="">Your Name </label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <labe htmlFor="">Your Email</labe>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message here"
          ></textarea>
          <button className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
// in curly braces everything that come from file or data in any variable or from api that will come thode time me spring bhi seekh jaunga bs
