import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
      <>
      {/* <Banner/> */}
        <About/>
        <Services/>
        {/* <Portfolio/> */}
        <Projects/>
        <Contact/>
      </>
  );
};

export default Home;
