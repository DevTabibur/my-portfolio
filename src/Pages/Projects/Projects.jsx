import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";

const Projects = () => {
 const [projects] = useProjects();

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              You can find my latest project with MERN stack. I build all of
              this.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {projects?.map((project) => (
              <ShowProjects key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const ShowProjects = ({ project }) => {
  const { id, name, image, shortDescription, live, server } = project;
  const navigate = useNavigate();

const handleID = (id) =>{
  navigate(`/${id}`)
}


  return (
    <>
      <div className="lg:w-1/3 sm:w-1/2 p-4 shadow">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded "
            src={image}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              DETAILS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {name}
            </h1>
            <p className="leading-relaxed">
              {shortDescription}
            </p>
            {/* <Link to={`/details/${id}`} className="btn mt-5">DETAILS</Link> */}
            <button onClick={()=> handleID(id)} className="btn mt-5">DETAILS</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
