import React from "react";
import { useForm } from "react-hook-form";

const PortfolioForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    // console.log(data);
    const formData = new FormData();

    formData.append("photo", data.photo[0]);

    const url = `http://localhost:5000/upload-files`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("File media is uploaded", data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* project name */}
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Project Name*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            {...register("projectName", {
              required: {
                value: true,
                message: "Project Name is Required",
              },
            })}
          />
          <label className="label my-1 py-0">
            {errors.projectName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.projectName.message}
              </span>
            )}
          </label>
        </div> */}

        {/* project tag */}

        {/* <div className="form-control">
        <label className="label">
            <span className="label-text">Select Tag*</span>
          </label>
          <select className="bg-base-100" {...register("tag", {
            required:{
              value: true,
              message:"Project Tag is required"
            }
          })}>
            <option value="Blog">Blog</option>
            <option value="Landing Page">Landing Page</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Front-end">Front-end</option>
            <option value="Backend-end">Backend-end</option>
            <option value="React">React</option>
          </select>
        </div> */}

        {/* Live site link */}
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Live Site Link*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            {...register("liveSiteLink", {
              required: {
                value: true,
                message: "Live Site Link is Required",
              },
            })}
          />
          <label className="label my-1 py-0">
            {errors.liveSiteLink?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.liveSiteLink.message}
              </span>
            )}
          </label>
        </div> */}

        {/* Front-end code link */}
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Front-end Code Link*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            {...register("frontEndCodeLink", {
              required: {
                value: true,
                message: "Front-end Code Link is Required",
              },
            })}
          />
          <label className="label my-1 py-0">
            {errors.frontEndCodeLink?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.frontEndCodeLink.message}
              </span>
            )}
          </label>
        </div> */}

        {/* Backend-end code link */}
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Backend-end Code Link*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            {...register("backendEndCodeLink", {
              required: {
                value: true,
                message: "Backend-end Code Link is Required",
              },
            })}
          />
          <label className="label my-1 py-0">
            {errors.backendEndCodeLink?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.backendEndCodeLink.message}
              </span>
            )}
          </label>
        </div> */}

        {/* tools */}
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Write Used Tools*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            {...register("tools", {
              required: {
                value: true,
                message: "Used Tools is Required",
              },
            })}
          />
          <label className="label my-1 py-0">
            {errors.tools?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.tools.message}
              </span>
            )}
          </label>
        </div> */}

        {/* technology */}
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Write Used Technology*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            {...register("technology", {
              required: {
                value: true,
                message: "Used Technology is Required",
              },
            })}
          />
          <label className="label my-1 py-0">
            {errors.technology?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.technology.message}
              </span>
            )}
          </label>
        </div> */}

        {/* project photo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Project Photo*</span>
          </label>
          <input
            type="file"
            placeholder="Type here"
            className="input input-bordered"
            {...register("photo", {
              required: {
                value: true,
                message: "Photo is Required",
              },
            })}
          />
          <label className="label my-1 py-0">
            {errors.photo?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.photo.message}
              </span>
            )}
          </label>
        </div>

        {/* description */}
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description*</span>
          </label>
          <textarea
            type="text"
            placeholder="Type here"
            className="textarea textarea-bordered"
            {...register("description", {
              required: {
                value: true,
                message: "Short Description is Required under 400 words",
              },
            })}
          />
          <label className="label my-1 py-0">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div> */}

        <div className="form-control">
          <input
            type="submit"
            className="btn btn-primary mt-4"
            value="UPLOAD PROJECT"
          />
        </div>
      </form>
    </div>
  );
};

export default PortfolioForm;
