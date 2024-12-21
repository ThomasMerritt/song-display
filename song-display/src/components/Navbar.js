import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="logo">
                    <p>Johmo</p>
                </div>
            </div>
            <div className="navbar-center">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/music">Music</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="sign-in">
                    <p>Sign In</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;