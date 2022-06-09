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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste aliquid iusto magnam in maxime, quod alias velit quia vitae deleniti earum repellendus voluptas assumenda ad molestias autem, eius corporis!</p>
                  <button className="btn mr-4 mt-5">HIRE ME</button>
                  <button className="btn mt-5">DOWNLOAD CV</button>
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
