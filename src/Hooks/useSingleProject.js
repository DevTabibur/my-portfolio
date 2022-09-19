import React, { useEffect, useState } from "react";

const useSingleProject = (id) => {
  const [singleProject, setSingleProject] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/projects/${id}`;
    // console.log(url, "url");
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSingleProject(data);
      });
  }, [singleProject]);

  return [singleProject, setSingleProject];
};

export default useSingleProject;
