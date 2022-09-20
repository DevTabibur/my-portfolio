import React from "react";
import { useParams } from "react-router-dom";
import useSingleProject from "../../Hooks/useSingleProject";

const SinglePortfolio = () => {
  const { id } = useParams();
  const [singleProject] = useSingleProject(id);

  const {
    appName,
    email,
    publishedAt,
    tags,
    projectImg1,
    projectImg2,
    projectImg3,
    liveDemo,
    frontCode,
    backendCode,
    technologies,
    shortDescription,
  } = singleProject;
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center mb-6 text-3xl font-bold font-serif text-primary">
          {appName}
        </h2>
        <p className="font-mono text-white mb-2">Email : {email}</p>
        <p className="font-mono text-white mb-2">Published : {publishedAt}</p>
        <p className="font-mono text-white mb-2">Tags : {tags}</p>

        {projectImg3 ? (
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div>
              <div className="card w-full  shadow-xl">
                <figure className="w-full">
                  <img
                    className="w-full h-auto"
                    src={projectImg1}
                    alt="Project Image 1"
                  />
                </figure>
              </div>
            </div>
            <div>
              <div className="card w-full  shadow-xl">
                <figure className="w-full">
                  <img
                    className="w-full h-auto"
                    src={projectImg2}
                    alt="Project Image 2"
                  />
                </figure>
              </div>
            </div>
            <div>
              <div className="card w-full  shadow-xl">
                <figure className="w-full">
                  <img
                    className="w-full h-auto"
                    src={projectImg3}
                    alt="Project Image 3"
                  />
                </figure>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div>
              <div className="card w-full  shadow-xl">
                <figure className="w-full">
                  <img
                    className="w-full h-auto"
                    src={projectImg1}
                    alt="Project Image 1"
                  />
                </figure>
              </div>
            </div>
            <div>
              <div className="card w-full  shadow-xl">
                <figure className="w-full">
                  <img
                    className="w-full h-auto"
                    src={projectImg2}
                    alt="Project Image 2"
                  />
                </figure>
              </div>
            </div>
          </div>
        )}

        <p className="text-white my-6 text-xl font-semibold">
          {" "}
          <strong className="text-primary">Available Technologies: </strong>{" "}
          {technologies}
        </p>

        <p className="text-white my-6 text-md ">
          {" "}
          <strong className="text-primary">About Project: </strong>{" "}
          {shortDescription}
        </p>

        <div className="flex md:flex-row justify-center items-center gap-6" >
            <div className="buttons mt-6">
                <button className="btn font-semibold mx-3">
                    <a href={liveDemo} target="_blank">Live demo</a>
                </button>
                <button className="btn font-semibold mx-3">
                    <a href={frontCode} target="_blank">Front-end Code</a>
                </button>
                <button className="btn font-semibold mx-3">
                    <a href={backendCode} target="_blank">Backend-end Code</a>
                </button>
            </div>
        </div>

      </div>
    </>
  );
};

export default SinglePortfolio;
