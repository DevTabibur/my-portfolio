import React from "react";
import About from "../About/About";
import HeroBanner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Filters from "../Portfolio/Portfolio";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Scroll from "../Shared/ScrollToTop/Scroll";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* <HeroBanner />
      <Services /> */}
      <Portfolio />
      {/* <Blog />
      <Contact /> */}
    </>
  );
};

export default Home;
