import React from "react";
import "./Scroll.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
const Scroll = () => {
  return (
    <div className="fixed bottom-6 right-10 overflow-hidden">
      <Link to='#hero-banner' className="relative" smooth>
          <FontAwesomeIcon className=" rounded-lg text-4xl text-primary" icon={faArrowCircleUp} />{" "}
      </Link>
    </div>
  );
};

export default Scroll;
