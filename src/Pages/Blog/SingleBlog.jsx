import React from "react";
import { useParams } from "react-router-dom";
import useSingleBlog from "../../Hooks/useSingleBlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SingleBlog = () => {
  const { id } = useParams();
  console.log("single blog ID", id);
  const [singleBlog] = useSingleBlog(id);
  console.log(singleBlog);
  return (
    <>
      <div className="container mx-auto px-4 pt-12">
        <div className="grid md:grid-cols-1 gap-4">
          <div className="blog-img w-full relative">
            <img
              className="w-full md:h-96 rounded-lg"
              src={singleBlog?.blogImage}
              alt="blog__image"
            />
          </div>

          <div className="blog-info">
            <div className="blog-head">
              <h2 className="text-2xl text-primary font-bold text-left py-2">
                {singleBlog?.title}
              </h2>
              <p className="font-mono text-sm">
                Written By: {singleBlog?.author}
              </p>
              <p className="font-mono text-sm">
                Category: {singleBlog?.category}
              </p>
              <p className="font-mono text-sm">
                Published At: {singleBlog?.publishedAt}
              </p>
            </div>
            <div className="blog-description mt-6">
              <p>{singleBlog?.blog}</p>
            </div>
          </div>

          <div className="social-media bg-white text-center rounded-lg p-6">
            <h2 className="text-xl text-accent font-semibold font-serif text-center mb-4">
              Share With :{" "}
            </h2>
            <ul className="flex justify-center items-center">
              <li className="text-4xl mx-4 text-secondary">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li className="text-4xl mx-4 text-secondary">
                <FontAwesomeIcon icon={faFacebookMessenger} />
              </li>
              <li className="text-4xl mx-4 text-secondary">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="text-4xl mx-4 text-secondary">
                <FontAwesomeIcon icon={faYoutube} />
              </li>
              <li className="text-4xl mx-4 text-secondary">
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </ul>
          </div>

          <div className="comment-form">
          <h2 className="text-xl font-semibold font-serif  mb-4">Recent Comments</h2>
            <form></form>
          </div>



        </div>
      </div>
    </>
  );
};

export default SingleBlog;
