import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="section-title mx-auto text-center py-10">
          <h2 className="text-2xl font-bold mb-3 font-serif">
            What I'm Doing?
          </h2>
          <p className="font-serif">Find what am I doing?.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 py-10">
          <div className="box text-center bg-white p-12">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative mx-auto mb-6"
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
              <h3 className="title text-2xl font-bold font-mono mb-3">
                Web Design
              </h3>
              <p className="font-serif">
                I can design pixel perfect template with vanilla css, tailwind and bootstrap
              </p>
            </div>
          </div>

          <div className="box text-center bg-white p-12">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative mx-auto mb-6"
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
              <h3 className="title text-2xl font-bold font-mono mb-3">
                Development
              </h3>
              <p className="font-serif">
                I can develop a site with MERN stack
              </p>
            </div>
          </div>

          <div className="box text-center bg-white p-12">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative mx-auto mb-6"
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
              <h3 className="title text-2xl font-bold font-mono mb-3">
                Bug Fixing
              </h3>
              <p className="font-serif">
                Bug fixing is a next level experienced work. Error solving is my passion.
              </p>
            </div>
          </div>

          <div className="box text-center bg-white p-12">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative mx-auto mb-6"
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
              <h3 className="title text-2xl font-bold font-mono mb-3">
                Support (24/7)
              </h3>
              <p className="font-serif">
                Giving my client 24/7 support in my best.
              </p>
            </div>
          </div>

          <div className="box text-center bg-white p-12">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative mx-auto mb-6"
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
              <h3 className="title text-2xl font-bold font-mono mb-3">
                Backend Handle
              </h3>
              <p className="font-serif">
                backend develop with Node, express and mongo.
              </p>
            </div>
          </div>

          <div className="box text-center bg-white p-12">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative mx-auto mb-6"
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
              <h3 className="title text-2xl font-bold font-mono mb-3">
                Strategy
              </h3>
              <p className="font-serif">
                MERN is my strategy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
