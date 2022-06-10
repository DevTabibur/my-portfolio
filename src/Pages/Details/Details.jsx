import React from "react";
import { useParams } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";
import useSingleProject from "../../Hooks/useSingleProject";
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
  const [singleProject] = useSingleProject(id);
console.log('singleProject', singleProject);
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
                    src="https://dummyimage.com/1205x505"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  The 400 Blows
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Details;
