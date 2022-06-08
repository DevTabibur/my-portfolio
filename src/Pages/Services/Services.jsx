import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title mx-auto w-full">
          <h2 className="text-2xl font-bold">What I'm Doing?</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 py-10">
          <div className="box text-center bg-white p-12">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 relative"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="content">
              <h3 className="title">Web Design</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
                itaque.
              </p>
            </div>
          </div>
          <div>22</div>
          <div>33</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
