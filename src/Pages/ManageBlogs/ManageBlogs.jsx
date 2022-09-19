import React from "react";
import useBlogs from "../../Hooks/useBlogs";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const ManageBlogs = () => {
  const [blogs] = useBlogs();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you wan to delete?");
    if (proceed) {
      const url = `http://localhost:5000/blogs/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            Swal.fire({
              title: "ARTICLE DELETED SUCCESSFULLY",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "ERROR!",
              text: "Do you want to continue",
              icon: "error",
            });
          }
        });
    }
  };
  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold font-serif text-primary mb-8">
          Manage Your Blogs
        </h2>
        <p className="text-center text-xl font-bold font-serif text-primary mb-8">
          You have {blogs.length} blogs.
        </p>
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog, idx) => (
            <ShowBlog key={idx} blog={blog} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageBlogs;

const ShowBlog = ({ blog, handleDelete }) => {
  // console.log("blog", blog);

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={blog?.blogImage}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {blog?.category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {blog?.title}
          </h1>
          <p className="leading-relaxed mb-3">
            {/* {blog?.description?.length < 400 ? blog?.description?.length : blog?.description?.slice(0, 400)} */}
            {blog.blog}
          </p>
          <div className="flex items-center flex-wrap ">
            <button
              onClick={() => handleDelete(blog?._id)}
              className="btn btn-primary inline-flex items-center md:mb-2 lg:mb-0"
            >
              DELETE
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
