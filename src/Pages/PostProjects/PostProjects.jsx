import React from "react";
import "./PostProjects.css";
import { useForm } from "react-hook-form";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const PostProjects = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    console.log(data)
    const url = `http://localhost:5000/projects`;
    fetch(url, {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        Swal.fire({
          title: 'SUCCESSFUL!',
          icon: 'success',
        })
        e.target.reset()
      }
      else{
        Swal.fire({
          title: `ERROR!`,
          icon: 'error',
        })
      }
    })
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold font-serif text-primary">
          Welcome to posting projects
        </h2>

        <div className="my-8 md:p-12 p-6 bg-white shadow-lg rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              {/* email */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    defaultValue="tobiburrohman2@gmail.com"
                    className="input input-bordered font-mono"
                    readOnly
                    {...register("email")}
                  />
                </div>
              </div>

              {/* publishedAt */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Date*
                  </label>
                  <input
                    type="text"
                    defaultValue={new Date()}
                    className="input input-bordered font-mono"
                    readOnly
                    {...register("publishedAt")}
                  />
                </div>
              </div>

              {/* appName */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    App Name*
                  </label>
                  <input
                    type="text"
                    placeholder="App Name"
                    className="input input-bordered font-mono"
                    {...register("appName", {
                      required: {
                        value: true,
                        message: "App Name is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.appName?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.appName.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>

              {/* tags */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Tags*
                  </label>
                  <select
                    type="text"
                    className="select select-bordered font-mono"
                    {...register("tags", {
                      required: {
                        value: true,
                        message: "Tags is Required",
                      },
                    })}
                  >
                    <option disabled defaultValue>
                      Pick one
                    </option>
                    <option value="ONE PAGE">ONE PAGE</option>
                    <option value="E-COMMERCE">E-COMMERCE</option>
                    <option value="DESIGN">DESIGN</option>
                    <option value="TEAM WORK">TEAM WORK</option>
                    <option value="BACKEND">BACKEND</option>
                    <option value="FRONT-END">FRONT-END</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                  <label className="label my-1 py-0">
                    {errors.tags?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.tags.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>

              {/* projectImg1 */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Project Image (1)*
                  </label>
                  <input
                    type="text"
                    placeholder="Project Image (1) (imgbb Link)"
                    className="input input-bordered font-mono"
                    {...register("projectImg1", {
                      required: {
                        value: true,
                        message: "Project Image (1) is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.projectImg1?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.projectImg1.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>

              {/* projectImg2 */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Project Image (2)*
                  </label>
                  <input
                    type="text"
                    placeholder="Project Image (2) (imgbb Link)"
                    className="input input-bordered font-mono"
                    {...register("projectImg2", {
                      required: {
                        value: true,
                        message: "Project Image (2) is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.projectImg2?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.projectImg2.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>

              {/* projectImg3 */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Project Image (3)
                  </label>
                  <input
                    type="text"
                    placeholder="Project Image (3) (imgbb Link)"
                    className="input input-bordered font-mono"
                    {...register("projectImg3")}
                  />
                </div>{" "}
              </div>

              {/* liveDemo */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Live Demo Link*
                  </label>
                  <input
                    type="text"
                    placeholder="Live Demo Link (imgbb Link) with http:// or https://"
                    className="input input-bordered font-mono"
                    {...register("liveDemo", {
                      required: {
                        value: true,
                        message: "Live Demo Link is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.liveDemo?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.liveDemo.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>

              {/* front-code */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Front-end Code Link*
                  </label>
                  <input
                    type="text"
                    placeholder="Front-end Code Link (imgbb Link) with http:// or https://"
                    className="input input-bordered font-mono"
                    {...register("frontCode", {
                      required: {
                        value: true,
                        message: "Front-end Code Link is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.frontCode?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.frontCode.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>

              {/* backend-code */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Backend-end Code Link*
                  </label>
                  <input
                    type="text"
                    placeholder="Backend-end Code Link (imgbb Link) with  http:// or https://"
                    className="input input-bordered font-mono"
                    {...register("backendCode", {
                      required: {
                        value: true,
                        message: "Backend-end Code Link is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.backendCode?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.backendCode.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>
            </div>

            {/* technologies */}
            <div>
              <div className="form-control">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Available Technologies*
                </label>
                <textarea
                  type="text"
                  placeholder="Available Technologies"
                  className="textarea textarea-bordered font-mono"
                  {...register("technologies", {
                    required: {
                      value: true,
                      message: "Available Technologies is Required",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.technologies?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.technologies.message}
                    </span>
                  )}
                </label>
              </div>{" "}
            </div>

            {/* shortDescription */}
            <div>
              <div className="form-control">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Short Description*
                </label>
                <textarea
                  type="text"
                  placeholder="Write here your content"
                  className="textarea textarea-bordered font-mono"
                  {...register("shortDescription", {
                    required: {
                      value: true,
                      message: "Short Description is Required",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.shortDescription?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.shortDescription.message}
                    </span>
                  )}
                </label>
              </div>{" "}
            </div>

            <input
              type="submit"
              value="POST PROJECTS"
              className="btn btn-accent w-full mt-8 text-primary font-bold text-xl font-mono"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PostProjects;
