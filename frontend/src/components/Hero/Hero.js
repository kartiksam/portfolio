import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
const Hero = () => {
  return (
    <div className="hero">
      {/* by giving this class to flex all willbe horizontal inner classname to design that component  */}
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm kartik Sharma,</span>Mern Stack and Spring Developer based in
        India
      </h1>
      <p>
        <span>I'm kartik Sharma,</span> recently completed my Master's in
        computers apllication and having a good knowledge looking forward to
        join a decent company
      </p>
      <div className="hero-action">
        {/* genrally isnside div img,h1 tags  but here only div and inside content*/}
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
