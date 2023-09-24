import React, { useContext } from "react";
import { AuthContext } from "../authprovider";
const DocDashboard = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <React.Fragment>
      {isLoggedIn ? <h1>Hello</h1> : <h1>Login avara puma</h1>}
    </React.Fragment>
  );
};

export default DocDashboard;
