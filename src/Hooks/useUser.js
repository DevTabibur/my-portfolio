import React, { useState } from "react";

const useUser = () => {
  const [user, setUser] = useState(false);

  return [user];
};

export default useUser;