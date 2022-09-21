import React, { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const url = `https://portfolio-server-kh8j.onrender.com/blogs`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log('inside hooks', data)
        setBlogs(data);
      });
  }, [blogs]);
  return [blogs];
};

export default useBlogs;
