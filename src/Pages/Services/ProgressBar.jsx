import React from 'react'

const ProgressComponent = () => {
  return (
    <>
        <div className="flex md:flex-row py-10">
          <div className="basis-1/2">
            <h1 className="lg:text-9xl font-semibold font-sans mb-8">
              My Special Skill <br></br> Field Here.
            </h1>
            <button class="btn btn-accent">Get Resume</button>
          </div>

          <div className="basis-1/2">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">HTML</span>
                <progress class="progress progress-accent w-56" value="10" max="100"></progress>
{/* <progress class="progress progress-accent w-56" value="10" max="100"></progress>
<progress class="progress progress-accent w-56" value="40" max="100"></progress>
<progress class="progress progress-accent w-56" value="70" max="100"></progress>
<progress class="progress progress-accent w-56" value="100" max="100"></progress> */}
              </label>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProgressComponent