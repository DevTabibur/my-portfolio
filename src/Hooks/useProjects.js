import React, { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return [projects, setProjects]
}

export default useProjects;