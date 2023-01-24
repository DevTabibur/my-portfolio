import React from "react";
import SpinnerImage from "../../../Assets/Images/spinner.gif";
const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-32 h-32">
        <img src={SpinnerImage} alt="spinner" className="relative w-32 h-32" />
      </div>

      {/* <button className="btn loading text-accent">
      </button> */}
    </div>
  );
};

export default Loader;
