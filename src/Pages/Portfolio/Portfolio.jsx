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
      if (item.tags === filterTag) {
        return item;
      }
    });
    setFilterData(filterArray);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12" id="portfolio">
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
              className="btn btn-sm btn-primary m-3 px-4 py-2 rounded-lg"
            >
              All
            </button>
            <button
              onClick={() => handleFilterSelection("WORDPRESS")}
              className="btn btn-sm btn-primary m-3 px-4 py-2 rounded-lg"
            >
              WORDPRESS
            </button>
            <button
              onClick={() => handleFilterSelection("E-COMMERCE")}
              className="btn btn-sm btn-primary m-3 px-4 py-2 rounded-lg "
            >
              E-COMMERCE
            </button>
            <button
              onClick={() => handleFilterSelection("REACT")}
              className="btn btn-sm btn-primary m-3 px-4 py-2 rounded-lg "
            >
              REACT
            </button>
            <button
              onClick={() => handleFilterSelection("TEAM WORK")}
              className="btn btn-sm btn-primary m-3 px-4 py-2 rounded-lg "
            >
              TEAM WORK
            </button>
            <button
              onClick={() => handleFilterSelection("FULL-STACK")}
              className="btn btn-sm btn-primary m-3 px-4 py-2 rounded-lg "
            >
              FULL-STACK
            </button>
            <button
              onClick={() => handleFilterSelection("CRUD")}
              className="btn btn-sm btn-primary m-3 px-4 py-2 rounded-lg "
            >
              CRUD
            </button>
            <button
              onClick={() => handleFilterSelection("OTHER")}
              className="btn btn-sm btn-primary m-3 px-4 py-2 rounded-lg "
            >
              OTHER
            </button>
          </ul>
        </div>
        <div className="flex flex-wrap -m-4 mb-4">
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
  const navigate = useNavigate();
  const hanldlePortfolioDetails = (id) => {
    navigate(`/portfolio/${id}`);
  };
  return (
    <>
      <div className="p-4 md:w-1/3 mt-8">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={fd?.projectImg1}
            alt="blog"
          />
          <div className="p-6 bg-accent">
            <h1 className="title-font text-lg font-medium text-primary mb-3">
              {fd?.appName}
            </h1>
            <p>
              {fd?.shortDescription && fd?.shortDescription.slice(0, 50)}...
            </p>
            <div className="flex items-center flex-wrap mt-6">
              <div className="card-actions flex ">
                <button className="btn btn-sm btn-primary">
                  <a href={fd?.liveDemo} target="_blank">
                    Live Demo
                  </a>
                </button>
                <button className="btn btn-sm btn-primary">
                  <a href={fd?.frontCode} target="_blank">
                    Client
                  </a>
                </button>
                <button className="btn btn-sm btn-primary">
                  <a href={fd?.backendCode} target="_blank">
                    Server
                  </a>
                </button>
                <button
                  onClick={() => hanldlePortfolioDetails(fd?._id)}
                  className="btn btn-sm btn-primary"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
