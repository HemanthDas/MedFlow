import "./nav.css";
import React, { useContext } from "react";
import { AuthContext } from "../authprovider";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-location";
const Navbar = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  return (
    <React.Fragment>
      <nav>
        <ul className="nav_links">
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <Link to="/doctors">Doctors</Link>
          <li>
            <a href="/">Partners</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Achievements</a>
          </li>
        </ul>
        <div className="nav_logo">
          <h1>
            <a href="/">MedFlow</a>
          </h1>
        </div>
        <div className="menu-btn">
          <button>
            <a href="/">
              <i className="ri-menu-line"></i>
            </a>
          </button>
        </div>
        <div className="action-btn">
          <button className="cart-btn">
            <FaShoppingCart />
          </button>
          {isLoggedIn && (
            <img className="user-image" src={user.picture} alt={user.name} />
          )}

          {isLoggedIn ? (
            <button
              onClick={() =>
                // logout({ logoutParams: { returnTo: window.location.origin } })
                console.log("logout")
              }
              className="logout-btn"
            >
              Log Out
            </button>
          ) : (
            <button onClick={() => console.log("login")} className="login-btn">
              Log In
            </button>
          )}
        </div>
      </nav>
      <header>
        <section className="container header-container">
          <div className="text-container">
            <h1 className="heading-1">Welcome to MedFlow!</h1>
            <br />
            <div className="redirect">
              {isLoggedIn && (
                <p className="text">
                  Hi there... (Mr/Mrs) <small>{user.name}</small>{" "}
                </p>
              )}
            </div>
            <br />
            <div className="paragraph">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                corrupti veniam a distinctio voluptas reprehenderit animi
                numquam, ullam, excepturi tempora rem dicta recusandae
                repudiandae cum veritatis harum eligendi quas? Sed?
              </p>
            </div>
            <br />
            <div className="buttons">
              {isLoggedIn ? (
                <button className="book-btn">
                  <a href="/">Book Appointment</a>
                </button>
              ) : (
                <button className="emergency-btn">
                  <a href="/">Emergency</a>
                </button>
              )}
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/735/113/non_2x/medicine-concept-with-portrait-doctor-character-standing-in-medical-uniform-flat-illustration-for-banner-poster-layout-template-brochure-design-flyer-for-advertising-medical-services-vector.jpg"
              alt=""
            />
          </div>
        </section>
      </header>

      {/**************************************************************** DOCTORS SECTION ****************************************************************************************************/}
    </React.Fragment>
  );
};

export default Navbar;
