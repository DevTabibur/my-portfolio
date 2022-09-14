import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import useProjects from "../../Hooks/useProjects";

const Portfolio = () => {
  const [projects] = useProjects();
  // console.log('pro', projects)

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
          Project ShowCase
        </h2>

        <div id="myButtonsContainer">
          <ul className="flex justify-center items-center">
            <button
              onClick={() => handleFilterSelection("all")}
              className="btn btn-primary mx-3 px-4 py-2 rounded-lg"
            >
              All
            </button>
            <button
              onClick={() => handleFilterSelection("Food")}
              className="btn  btn-primary mx-3 px-4 py-2 rounded-lg"
            >
              food
            </button>
            <button
              onClick={() => handleFilterSelection("Animals")}
              className="btn  btn-primary mx-3 px-4 py-2 rounded-lg "
            >
              animals
            </button>
            <button
              onClick={() => handleFilterSelection("Plants")}
              className="btn  btn-primary mx-3 px-4 py-2 rounded-lg "
            >
              plants
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
  return (
    <>
      <div className="card w-full bg-accent shadow">
        <figure className="rounded-lg">
          <img className="" src={fd.src} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{fd.author}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn ">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
