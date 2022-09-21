import React, { useEffect, useState } from "react";

const useAdmin = () => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  // useEffect(() => {
  //   const url = `https://portfolio-server-kh8j.onrender.com/user`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data[0].role === "admin") {
  //         setAdmin(true);
  //         setAdminLoading(false);
  //         console.log("admin in  side", admin);
  //       }
  //     });
  // }, [admin]);


  return [admin, adminLoading];
};

export default useAdmin;
