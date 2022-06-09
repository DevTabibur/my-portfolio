import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
      <>
        <About/>
        <Services/>
        {/* <Portfolio/> */}
        <Contact/>
      </>
  );
};

export default Home;
