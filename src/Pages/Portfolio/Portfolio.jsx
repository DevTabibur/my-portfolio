import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import useProjects from "../../Hooks/useProjects";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  const [projects] = useProjects();

  const [filterData, setFilterData] = useState([]);
  const [allData, setAllData] = useState(false);

  let filterArray = [];
  const handleFilterSelection = (tag) => {
    const filterTag = tag;
    setAllData(true);
    if (tag === "all") {
      setAllData(false);
    }

    filterArray = projects?.filter((item, idx) => {
      if (item.tag === filterTag) {
        return item;
      }
    });
    setFilterData(filterArray);
  };
  // console.log(" outside", filterData);

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center mx-auto pt-2 pb-8 text-2xl font-bold text-primary">
          Project ShowCase ( {projects.length} )
        </h2>

        <div
          className="lg:flex flex-row justify-center items-center"
          id="myButtonsContainer"
        >
          <ul className="">
            <button
              onClick={() => handleFilterSelection("all")}
              className="btn btn-primary m-3 px-4 py-2 rounded-lg"
            >
              All
            </button>
            <button
              onClick={() => handleFilterSelection("ONE PAGE")}
              className="btn  btn-primary m-3 px-4 py-2 rounded-lg"
            >
              ONE PAGE
            </button>
            <button
              onClick={() => handleFilterSelection("E-COMMERCE")}
              className="btn  btn-primary m-3 px-4 py-2 rounded-lg "
            >
              E-COMMERCE
            </button>
            <button
              onClick={() => handleFilterSelection("DESIGN")}
              className="btn  btn-primary m-3 px-4 py-2 rounded-lg "
            >
              DESIGN
            </button>
            <button
              onClick={() => handleFilterSelection("TEAM WORK")}
              className="btn  btn-primary m-3 px-4 py-2 rounded-lg "
            >
              TEAM WORK
            </button>
            <button
              onClick={() => handleFilterSelection("FRONT-END")}
              className="btn  btn-primary m-3 px-4 py-2 rounded-lg "
            >
              FRONT-END
            </button>
            <button
              onClick={() => handleFilterSelection("BACKEND-END")}
              className="btn  btn-primary m-3 px-4 py-2 rounded-lg "
            >
              BACKEND-END
            </button>
            <button
              onClick={() => handleFilterSelection("OTHER")}
              className="btn  btn-primary m-3 px-4 py-2 rounded-lg "
            >
              OTHER
            </button>
          </ul>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {allData ? (
            <>
              {filterData.map((fd, idx) => (
                <Cards key={idx} fd={fd} />
              ))}
            </>
          ) : (
            <>
              {projects.map((fd, idx) => (
                <Cards key={idx} fd={fd} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

const Cards = ({ fd }) => {
  // console.log("item", fd);
  console.log("item", fd?._id);
  const navigate= useNavigate();
  const hanldlePortfolioDetails = id => {
    navigate(`/portfolio/${id}`)
  }
  return (
    <>
      <div onClick={()=> hanldlePortfolioDetails(fd?._id)}  className="card w-full bg-accent shadow transition duration-300 delay-150 hover:delay-300">
        <figure className="rounded-lg">
          <img className="" src={fd?.projectImg1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{fd?.appName}</h2>
          <p>{fd?.shortDescription}</p>
          <div className="card-actions flex ">
            <button  className="btn btn-primary">
              <a href={fd?.liveDemo} target="_blank">Live Demo</a>
            </button>
            <button  className="btn btn-primary">
              <a href={fd?.frontCode} target="_blank">Front-end Code</a>
            </button>
            <button  className="btn btn-primary">
              <a href={fd?.backendCode} target="_blank">Backend-end Code</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
