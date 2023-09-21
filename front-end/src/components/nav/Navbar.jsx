import React from 'react'
import '../nav/nav.css'
import { User, useAuth0 } from "@auth0/auth0-react";
import {FaShoppingCart} from 'react-icons/fa';
const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
    <nav>
        <ul className="nav_links">
            <li><a href="/" className='active'>Home</a></li>
            <li><a href="/">Doctors</a></li>
            <li><a href="/">Medicines</a></li>
            <li><a href="/">Partners</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        <div className="nav_logo">
            <h1><a href="/">MedFlow</a></h1>
        </div>

        <div className="action-btn">
        <button className='cart-btn'><FaShoppingCart /></button>
        
        {
            isAuthenticated ?(
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='logout-btn'>Log Out</button>
            ):(
                <button onClick={() => loginWithRedirect()} className='login-btn'>Log In</button>
            )
        }
        
        </div>
    </nav>
    </div>
  )
}

export default Navbar