import "./navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function NavBar() {

    const [click, setClick] = useState(false);
    

    const handleClick = () => setClick(!click);
    const closeSideMenu = () => setClick(false);


    return (
    <nav className="navbar">
        <div className="nav-left">
            <div className="side-btn-cont">
                <button className="side-menu-btn" onClick={handleClick} ><i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"} ></i></button>
            </div>
            <div className="site-logo">
                <Link to="/" className="nav-link-logo" onClick={closeSideMenu}>
                <h1>Pilgrime</h1>
                </Link>
            </div>
        </div>
        <div className="nav-right">
            <ul className={click ? "nav-link-group active" : "nav-link-group"}>
                <li className="nav-link-item">
                    <Link to="/" className="nav-link" onClick={closeSideMenu}>Home</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/search-anime" className="nav-link" onClick={closeSideMenu}>Search by Anime</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/search-loca" className="nav-link" onClick={closeSideMenu}>Search by Location</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/accommodations" className="nav-link" onClick={closeSideMenu}>Accommodations</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/404-error" className="nav-link" onClick={closeSideMenu}>Deals</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/sign-up" className="sign-up-btn" onClick={closeSideMenu}>Sign Up</Link>
                </li>
                <li className="nav-link-item">
                <Link to="/sign-up" className="signin-btn" onClick={closeSideMenu}>Sign In</Link>
                </li>
            </ul>
        </div>
    </nav>
   ) 
}