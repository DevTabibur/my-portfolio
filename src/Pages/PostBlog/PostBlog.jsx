import React from "react";
import "./PostBlog.css";
import { useForm } from "react-hook-form";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

const PostBlog = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {

    const url = `http://localhost:5000/blogs`;
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
          title: 'POST ARTICLE SUCCESSFULLY!',
          icon: 'success',
        })
        e.target.reset()
      }
      else{
        Swal.fire({
          title: `ARTICLE DIDN'T PUBLISH`,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    })
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold font-serif text-primary">
          WELCOME TO POSTING BLOGS
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

              {/* Name */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered font-mono"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                      pattern: {
                        value:
                          /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
                        message: "Provide a valid Name",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                    {errors.name?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>

              {/* authorImg */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Author Image*
                  </label>
                  <input
                    type="text"
                    placeholder="Author Image (imgbb Link)"
                    className="input input-bordered font-mono"
                    {...register("authorImg", {
                      required: {
                        value: true,
                        message: "Author Image is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.authorImg?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.authorImg.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>

              {/* title */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Blog Title*
                  </label>
                  <input
                    type="text"
                    placeholder="Blog Title"
                    className="input input-bordered font-mono"
                    {...register("blogTitle", {
                      required: {
                        value: true,
                        message: "Blog Title is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.blogTitle?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.blogTitle.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>

              {/* category */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Category*
                  </label>
                  <input
                    type="text"
                    placeholder="Category"
                    className="input input-bordered font-mono"
                    {...register("category", {
                      required: {
                        value: true,
                        message: "Category is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.category?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.category.message}
                      </span>
                    )}
                  </label>
                </div>{" "}
              </div>

              {/* blogImg */}
              <div>
                <div className="form-control">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Blog Image*
                  </label>
                  <input
                    type="text"
                    placeholder="Blog Image (imgbb Link)"
                    className="input input-bordered font-mono"
                    {...register("blogImage", {
                      required: {
                        value: true,
                        message: "Blog Image is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.blogImage?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.blogImage.message}
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
                    Tags
                  </label>
                  <input
                    type="text"
                    placeholder="Tags"
                    className="input input-bordered font-mono"
                    {...register("tags")}
                  />
                </div>{" "}
              </div>
            </div>

            {/* content */}
            <div>
              <div className="form-control">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Content*
                </label>
                <textarea
                  type="text"
                  placeholder="Write here your content"
                  className="textarea textarea-bordered font-mono"
                  {...register("content", {
                    required: {
                      value: true,
                      message: "Content is Required",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.content?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.content.message}
                    </span>
                  )}
                </label>
              </div>{" "}
            </div>

            <input
              type="submit"
              value="POST ARTICLE"
              className="w-full mt-8 text-primary bg-base-100 p-4 rounded-lg font-bold text-xl font-mono"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PostBlog;
