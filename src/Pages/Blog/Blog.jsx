import React from "react";
import { Link } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";
import "./Blog.css";

const Blog = () => {
  const [blogs] = useBlogs();
  // console.log('blogs component', blogs)
  return (
    <>
      {/* <div id="blog">
    //   <div className="container mx-auto py-60">
    //     <h2 className="text-3xl mx-auto text-center">Coming Soon!</h2>

    //     <div className="md:flex gap-6">
    //       <div className="md:w-[60%] md:order-2 order-1">11</div>
    //       <div className="md:w-[30%] md:order-1">22</div>
    //       <div className="md:w-[30%] md:order-3">33</div>
    //     </div>

    //   </div>
    // </div> */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogs.map((blog, idx) => (
              <ShowBlog key={idx} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const ShowBlog = ({blog}) => {
  // console.log('blog', blog)
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
          {blog?.description}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link to={`blogs/${blog?._id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
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
            </Link>
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
