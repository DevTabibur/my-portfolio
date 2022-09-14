import React from "react";
import { useParams } from "react-router-dom";
import useSingleBlog from "../../Hooks/useSingleBlog";

const SingleBlog = () => {
  const { id } = useParams();
  console.log("single blog ID", id);
  const [singleBlog] = useSingleBlog(id);
  console.log(singleBlog);
  return (
    <>
      <div className="container mx-auto px-4"></div>
    </>
  );
};

export default SingleBlog;
