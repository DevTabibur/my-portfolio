import React, { useEffect, useState } from 'react'


const useSingleProject = (id) => {
    const [singleProject, setSingleProject] = useState({});
    useEffect(() => {
        const url = `services.json/details/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setSingleProject(data));
      }, [singleProject]);

  return [singleProject, setSingleProject];
}

export default useSingleProject