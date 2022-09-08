import React, { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/projects`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return [projects]
}

export default useProjects;