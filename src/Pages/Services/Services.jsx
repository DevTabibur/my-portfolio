import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode , faDatabase, faBrain, faServer, faBugSlash } from "@fortawesome/free-solid-svg-icons";
import ProgressComponent from "../Shared/ProgressBar";


const Services = () => {
  
  return (
    <div  className="services" id="services">
      <div className="container mx-auto px-4">
        <div className="section-title mx-auto text-center py-10">
          <h2 className="text-2xl font-bold mb-3 font-serif">
            What I'm Doing?
          </h2>
          <p className="font-serif">Find what am I doing?.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 py-10">

          <div className="box text-center bg-accent p-12 rounded-lg">
            <div className="icon">
              <FontAwesomeIcon icon={faCode} />
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

          <div className="box text-center bg-accent p-12 rounded-lg">
            <div className="icon">
              <FontAwesomeIcon icon={faServer} />
            </div>
            <div className="content">
              <h3 className="title text-2xl font-bold font-mono mb-3">
                Server
              </h3>
              <p className="font-serif">
                I can do backend with MongoDB, Mongoose, Node.js and Expres.js
              </p>
            </div>
          </div>

          <div className="box text-center bg-accent p-12 rounded-lg">
            <div className="icon">
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            <div className="content">
              <h3 className="title text-2xl font-bold font-mono mb-3">
                Development
              </h3>
              <p className="font-serif">
              I can develop a site with MERN also.
              </p>
            </div>
          </div>

          <div className="box text-center bg-accent p-12 rounded-lg">
            <div className="icon">
              <FontAwesomeIcon icon={faBugSlash} />
            </div>
            <div className="content">
              <h3 className="title text-2xl font-bold font-mono mb-3">
               Bug Fixing
              </h3>
              <p className="font-serif">
              Bug Fixing is a another level of creativity and productivity.
              </p>
            </div>
          </div>


          <div className="box text-center bg-accent p-12 rounded-lg">
            <div className="icon">
            <FontAwesomeIcon icon={faBugSlash} />
            </div>
            <div className="content">
              <h3 className="title text-2xl font-bold font-mono mb-3">
                Support (24/7)
              </h3>
              <p className="font-serif">
                I also connect with my clients for 24/7
              </p>
            </div>
          </div>


          <div className="box text-center bg-accent p-12 rounded-lg">
            <div className="icon">
            <FontAwesomeIcon icon={faBrain} />
            </div>
            <div className="content">
              <h3 className="title text-2xl font-bold font-mono mb-3">
                Strategy
              </h3>
              <p className="font-serif">
                MERN is my strategy and passion to code.
              </p>
            </div>
          </div>

          

         
        </div>

        <ProgressComponent/>
      </div>
    </div>
  );
};

export default Services;
