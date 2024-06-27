import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
import footer_logo from "../../assets/footer_logo.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer" />
          <p>I'm a mern stack developer from,India.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 kartik Sharma,All rights reserved.
        </p>

        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
