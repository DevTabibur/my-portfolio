import React, { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = `https://portfolio-server-kh8j.onrender.com/projects`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, [projects]);
  return [projects]
}

export default useProjects;