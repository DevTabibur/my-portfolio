import React from "react";

const ProgressComponent = () => {
  return (
    <div className="py-10">
      <div className="md:flex flex-row py-10">
        <div className="basis-1/2">
          <h1 className="lg:text-9xl text-5xl font-semibold font-sans mb-8">
            My Special Skill <br></br> Field Here.
          </h1>
          <button className="btn btn-accent">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Pih96b70P_Lfbfnb3GnZalmzlkIEBBA9/view?usp=sharing"
            >
              DOWNLOAD RESUME
            </a>
          </button>
        </div>

        <div className="basis-1/2  p-5">
          <div className="form-control">
            <label className="label">
              <span className="">HTML</span>
              <progress
                className="progress progress-primary w-full ml-4"
                value="98"
                max="100"
              ></progress>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="">CSS</span>
              <progress
                className="progress progress-primary w-full ml-4"
                value="96"
                max="100"
              ></progress>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="">JS</span>
              <progress
                className="progress progress-primary w-full ml-4"
                value="70"
                max="100"
              ></progress>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="">REACT</span>
              <progress
                className="progress progress-primary w-full ml-4"
                value="89"
                max="100"
              ></progress>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="">MongoDB</span>
              <progress
                className="progress progress-primary w-full ml-4"
                value="98"
                max="100"
              ></progress>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="">Express.js</span>
              <progress
                className="progress progress-primary w-full ml-4"
                value="60"
                max="100"
              ></progress>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="">Node.js</span>
              <progress
                className="progress progress-primary w-full ml-4"
                value="50"
                max="100"
              ></progress>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressComponent;
