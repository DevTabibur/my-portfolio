import React from "react";
import "./About.css";
import AboutImg from "../../Assets/Images/Topu Profile transparent bg.png";

const About = () => {
  return (
    <div className="about py-10 pb-0" id="about">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center">
          <div className="left-col flex-1">
            <h2 className="text-3xl mb-2">About Me</h2>
            <p>A Passionate MERN stack Developer,</p>
            <span></span>
            <p>
              Hi, I'm a dedicated and passionate MERN Developer. I'm a quick
              learner and eager to learn new technologies to expand my
              knowledge. I want to work with a renowned team or company to build
              up my career as a Software Engineer. I want to see myself as a
              Senior MERN Developer in the next 5 years.
            </p>
            {/* <button className="btn mr-4 mt-5">HIRE ME</button> */}
            <button className="btn mt-5">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1Pih96b70P_Lfbfnb3GnZalmzlkIEBBA9/view?usp=sharing"
              >
                DOWNLOAD RESUME
              </a>
            </button>
          </div>

          <div className="right-col flex-1 relative w-100 h-100">
            <img className="w-96" src={AboutImg} alt="AboutImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
