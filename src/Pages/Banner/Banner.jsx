import React from "react";
import "./Banner.css";
import BannerImg from "../../Assets/Images/Untitled design (1).png";
import AboutImg from "../../Assets/Images/Topu Profile transparent bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const HeroBanner = () => {
  return (
    <>
      <div className="hero py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="hero-portrait relative ">
            <div className="image">
              <img src={AboutImg} className="lg:max-w-md max-w-sm h-auto" alt="hero pic" />
              <div className="image-half-round-shape relative"></div>
              <div className="image-social-link relative">
                <li className="list-none mx-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=100006104477233"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                </li>
                <li className="list-none mx-2">
                  <a href="https://twitter.com/DevTabibur" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </li>
                <li className="list-none mx-2">
                  <a
                    href="https://www.linkedin.com/in/tabibur-rahman-a41a44205/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Hello! I'm Tabibur Rahman</h1>
            <p className="py-6">A Passionate MERN and full-stack developer.</p>
            <button className="btn btn-accent">Download Resume</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
