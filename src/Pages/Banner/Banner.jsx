import React from "react";
import "./Banner.css";
import BannerImg from "../../Assets/Images/Untitled design (1).png";
import AboutImg from "../../Assets/Images/Topu Profile transparent bg.png";
const HeroBanner = () => {
  return (
    <div className="bg-base-100">
      <div className="container mx-auto px-4">
        <div className="hero-content flex-col lg:flex-row-reverse py-0 my-0">
          <div className=" image relative w-full">
            <img
              src={AboutImg}
              className="lg:max-w-lg max-w-sm rounded-lg "
              alt="hero"
            />
          </div>
          <div className=" py-10 text-primary w-full">
            <h1 className="text-5xl font-bold">
              Hello! I’m <br></br>
              Tabibur Rahman
            </h1>
            <p className="py-6">A Passionate MERN stack Developer.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default HeroBanner;
