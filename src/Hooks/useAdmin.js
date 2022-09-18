import React, { useEffect, useState } from "react";

const useAdmin = () => {
  const [admin, setAdmin] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);

  // useEffect(() => {
  //   const url = `http://localhost:5000/user`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log('inside useAdmin hooks', data[0].role);
  //       if (data[0].role === "admin") {
  //         setAdmin(true);
  //         setAdminLoading(false);
  //         console.log("admin inside", admin);
  //       }
  //     });
  // }, []);


  return [admin];
};

export default useAdmin;
