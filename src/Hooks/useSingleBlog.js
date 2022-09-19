import React, { useEffect, useState } from "react";

const useSingleBlog = (id) => {
    // console.log('id useSingle blog', id)
  const [singleBlog, setSingleBlog] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/blogs/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("inside single blog", data);
        setSingleBlog(data)
      });
  }, [singleBlog]);

  return [singleBlog];
};

export default useSingleBlog;
