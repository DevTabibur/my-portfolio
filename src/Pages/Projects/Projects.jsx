import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-4 py-24 mx-auto">
          <div className="md:grid grid-cols-3 gap-4">
            {projects.map((project) => (
              <ShowProjects key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const ShowProjects = ({ project }) => {
  const { name, image, shortDescription } = project;
  return (
    <>
      <div className="card w-100 border">
        <figure>
          <img className="relative w-52 h-52" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
