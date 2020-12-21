import React from "react";
import "./About.css";
import headshot from "./headshot.jpg"
import Banner from "./Banner"

function About() {
  return (
    <div className="About">
      <span className="Line"></span>
      <div className="About-detail">
        <div className="Bio">
          <h1>Hello, </h1>
          <h4>I’m a brand strategist and aspiring content writer with
          expertise in creative storytelling and expert positioning that drives
          brand equity and stakeholder engagement for both consumer and
          corporate clients. Specializing in corporate social responsibility
          marketing within the beauty and lifestyle space.</h4>
        </div>
        <img className="Headshot" src={headshot} alt="headshot"/>
      </div>
      <Banner/>
    </div>
  );
}

export default About;
