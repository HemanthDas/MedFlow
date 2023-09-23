import Dashboard from "./pages/dashboard";
import Doctors from "./pages/doctors";
const routers = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
  },
];
export { routers };
