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
      <div className="hero py-10" id="hero-banner">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="hero-portrait relative">
            <div className="image box bounce-1">
              <img
                src={AboutImg}
                className="lg:max-w-md max-w-sm h-auto"
                alt="hero pic"
              />
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
            <p className="py-6">
              Hi, I'm a dedicated and passionate MERN Developer. I'm a quick
              learner and eager to learn new technologies to expand my
              knowledge. I want to work with a renowned team or company to build
              up my career as a Software Engineer. I want to see myself as a
              Senior MERN Developer in the next 5 years.
            </p>

            <div className="download-btn">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1_Kt0_bYxTfazGULj7UBsKSg6y2xSVyKY/view?usp=sharing"
                class="btn btn-accent glow-on-hover"
                type="button"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
