import React from "react";
import useProjects from "../../Hooks/useProjects";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import Portfolio from "../Portfolio/Portfolio";

const ManageProjects = () => {
  const [projects] = useProjects();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/projects/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            Swal.fire({
              title: "DELETE SUCCESSFUL",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "ERROR!",
              text: "Do you want to continue",
              icon: "error",
            });
          }
        });
    }
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold font-serif text-primary mb-12">
          Manage Your projects ( {projects.length} )
        </h2>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, idx) => (
            <ShowProject
              key={idx}
              project={project}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageProjects;

const ShowProject = ({ project, handleDelete }) => {
  const { projectImg1, appName , liveDemo, frontCode, backendCode} = project;
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={projectImg1}
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-primary mb-3">
            {appName}
          </h1>
          <div className="flex items-center flex-wrap ">
          <div className="card-actions flex ">
                <button className="btn btn-sm btn-primary">
                  <a href={liveDemo} target="_blank">
                    Live Demo
                  </a>
                </button>
                <button className="btn btn-sm btn-primary">
                  <a href={frontCode} target="_blank">
                    Client
                  </a>
                </button>
                <button className="btn btn-sm btn-primary">
                  <a href={backendCode} target="_blank">
                    Server
                  </a>
                </button>
                <button
                  onClick={() => handleDelete(project?._id)}
                  className="btn btn-sm btn-primary"
                >
                  Delete
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
