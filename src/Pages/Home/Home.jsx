import React from "react";
import About from "../About/About";
import HeroBanner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Filters from "../Portfolio/Portfolio";
import Portfolio  from "../Portfolio/Portfolio";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Counter from "../Shared/Counter";
import "./Home.css";

const Home = () => {
  return (
      <>
      <HeroBanner/>
      <Services/>
      <Portfolio/>

        <Contact/>
      </>
  );
};

export default Home;
