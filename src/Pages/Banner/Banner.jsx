import React from "react";
import "./Banner.css";
import BannerImg from "../../Assets/Images/Untitled design (1).png";

const Banner = () => {
  //     document.querySelector(document).ready(function() {
  //         // Transition effect for navbar
  //         document.querySelector(window).scroll(function() {
  //           // checks if window is scrolled more than 500px, adds/removes solid class
  //           if(document.querySelector(this).scrollTop > 500) {
  //               document.querySelector('.navbar').classList.add('solid');
  //           } else {
  //               document.querySelector('.navbar').classList.remove('solid');
  //           }
  //         });
  // });

  // $(document).ready(function() {
  //     // Transition effect for navbar
  //     $(window).scroll(function() {
  //       // checks if window is scrolled more than 500px, adds/removes solid class
  //       if($(this).scrollTop() > 500) {
  //           $('.navbar').addClass('solid');
  //       } else {
  //           $('.navbar').removeClass('solid');
  //       }
  //     });
  // });

  return (
    <div className="banner relative">
      <img src={BannerImg} alt="BannerImg" />
      {/* <div className="container relative mx-auto px-4"> */}
        <div className="banner-info absolute p-2.5 bottom-1 left-50  bg-blue-400 text-white  ">
          <h2 className="text-2xl">HELLO</h2>
          <h1 className="text-3xl">I am Tabibur Rahman</h1>
          <h3 className="text-xl">
            A Passionate MERN Stack Developer, WordPress Expert
          </h3>
        </div>
      </div>
    // </div>
  );
};

export default Banner;
