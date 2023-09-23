import "./App.css";
import Navbar from "./components/App/Navbar";
import Footer from "./components/footer/Footer";
import { routers } from "./components/router";
import { ReactLocation, Outlet, Router } from "react-location";
function App() {
  const location = new ReactLocation();
  return (
    <div>
      <Router location={location} routes={routers}>
        <Navbar />
        <Outlet />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
