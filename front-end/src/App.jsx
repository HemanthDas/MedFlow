import React from "react";
import "./App.css";
import Navbar from "./components/App/Navbar";
import Footer from "./components/footer/Footer";
import Routes from "./components/router";
import { ReactLocation, Outlet, Router } from "react-location";
import { AuthProvider } from "./components/authprovider";
function App() {
  const location = new ReactLocation();
  return (
    <React.Fragment>
      <Router location={location} routes={Routes()}>
        <Navbar />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
