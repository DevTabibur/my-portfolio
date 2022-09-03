import React from "react";

const ProgressComponent = () => {
  return (
    <div className="py-20">
      <div className="md:flex flex-row py-10">
        <div className="basis-1/2">
          <h1 className="lg:text-9xl text-5xl font-semibold font-sans mb-8">
            My Special Skill <br></br> Field Here.
          </h1>
          <button class="btn btn-accent">Get Resume</button>
        </div>

        <div className="basis-1/2  p-5">

          <div class="form-control">
            <label class="label">
              <span class="">HTML</span>
              <progress
                class="progress progress-primary w-full ml-4"
                value="98"
                max="100"
              ></progress>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="">CSS</span>
              <progress
                class="progress progress-primary w-full ml-4"
                value="96"
                max="100"
              ></progress>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="">JS</span>
              <progress
                class="progress progress-primary w-full ml-4"
                value="70"
                max="100"
              ></progress>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="">REACT</span>
              <progress
                class="progress progress-primary w-full ml-4"
                value="89"
                max="100"
              ></progress>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="">MongoDB</span>
              <progress
                class="progress progress-primary w-full ml-4"
                value="98"
                max="100"
              ></progress>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="">Express.js</span>
              <progress
                class="progress progress-primary w-full ml-4"
                value="60"
                max="100"
              ></progress>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="">Node.js</span>
              <progress
                class="progress progress-primary w-full ml-4"
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
