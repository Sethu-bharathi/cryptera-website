import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import "../../Styles/AboutUs.css";
import what_we_do from "../../Assets/Asset 6.png";

function AboutUs() {
  return (
    <div className="about-us">
      {/* <p className="vertical">Cryptera</p> */}
      <div className="about-us-container">
        <div className="left-container">
          <h2 className="heading1">CRYPTERA</h2>
          <p className="para1">
            Cryptera is a national level technical symposium conducted by
            <span> Department of Computer Science and engineering</span>
          </p>
        </div>
        <div className="lottie-animation">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_eg2c5umh/data.json"
          ></lottie-player>
        </div>
      </div>
      <h2 className="heading2">What do we do?</h2>
      <div className="container2">
      <div className="left-container1">
      <img src={what_we_do} alt="What we do?" className="about-svg" />
      </div>
          <div className="right-container1">
          <div className="what-do-we-do-card">
            <i class="fa fa-facebook"></i>
            <p>Lorem ipsum donar lorem ipsum donar ihjr lorem ipsum</p>
          </div>
          <div className="what-do-we-do-card">
          <i class="fa-duotone fa-laptop-code"></i>
            <p>Lorem ipsum donar lorem ipsum donar ihjr lorem ipsum Lorem ipsum donar lorem ipsum donar </p>
          
        </div>
          </div>
      </div>
      <h2 className="heading3">ABOUT CIT</h2>
      <div className="container2">
        <p>
        Lorem ipsum donar lorem ipsum donar ihjr lorem ipsum Lorem ipsum donar lorem ipsum donar
        Lorem ipsum donar lorem ipsum donar ihjr lorem ipsum Lorem ipsum donar lorem ipsum donar
        Lorem ipsum donar lorem ipsum donar ihjr lorem ipsum Lorem ipsum donar lorem ipsum donar
        Lorem ipsum donar lorem ipsum donar ihjr lorem ipsum Lorem ipsum donar lorem ipsum donar
        </p>
        <img src={what_we_do} alt="CIT" srcset="" className="cit-logo"/>
      </div>
    </div>
  );
}

export default AboutUs;
