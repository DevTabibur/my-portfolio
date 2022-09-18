import React, { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/blogs`;
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
