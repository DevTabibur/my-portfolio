import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";
import "./Details.css";
// import Monota1 from '../../Assets/Images/monota1.png';
// import Monota2 from '../../Assets/Images/monota2.png';

// import Incubator1 from '../../Assets/Images/incubator1.png';
// import Incubator2 from '../../Assets/Images/incubator2.png';
// import Incubator3 from '../../Assets/Images/incubator3.png';

// import Juristic1 from '../../Assets/Images/juristic 1st.png';
// import Juristic2 from '../../Assets/Images/juristic 2.png';
// import Juristic3 from '../../Assets/Images/juristic 3.png';

const Details = () => {
  const { id } = useParams();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.log(error));
  }, []);

  let singleProject = {};

  projects?.map((project) => {
    if (project.id == id) {
      singleProject = project;
    }
  });

  const { name, image, shortDescription, live, client, server, image2, image3 } = singleProject;
  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={image}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  {name}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  {shortDescription}
                </p>
              </div>

              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={image2}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  {name}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  {shortDescription}
                </p>
              </div>

              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={image3}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  {name}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  {shortDescription}
                </p>
              </div>
              <div className="buttons mx-auto text-center mt-10">
              <button className="btn mr-4"> <a href={live} target="_blank">Live Site</a> </button>
              <button className="btn mr-4"> <a href={client} target="_blank">Client Site</a> </button>
              <button className="btn mr-4"> <a href={server} target="_blank">Server Site</a> </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Details;
