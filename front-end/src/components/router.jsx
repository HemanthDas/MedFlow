import Dashboard from "./pages/dashboard";
import Doctors from "./pages/doctors";
import DocDashboard from "./pages/docdashboard";
import { useContext } from "react";
import { AuthContext } from "./authprovider";
function Routes() {
  const { isDoctor } = useContext(AuthContext);

  const routers = [
    {
      path: "/",
      element: isDoctor ? <DocDashboard /> : <Dashboard />,
    },
    {
      path: "/doctors",
      element: <Doctors />,
    },
  ];

  return routers;
}
export default Routes;
