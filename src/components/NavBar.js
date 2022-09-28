import "./navbar.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default function NavBar() {

    return (
    <nav className="navbar">
        <div className="nav-left">
            <div className="site-logo">
                <Link to="/" className="nav-link">
                <h1>Pilgrime</h1>
                </Link>
            </div>
        </div>
        <div className="nav-right">
            <ul className="nav-link-group">
                <li className="nav-link-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/search-anime" className="nav-link">Search by Anime</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/search-loca" className="nav-link">Search by Location</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/" className="nav-link">Accommodations</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/" className="nav-link">Deals</Link>
                </li>
                <li className="nav-link-item">
                    <Button btnStyle="btn--outline">Sign Up</Button>
                </li>
                <li className="nav-link-item">
                    <Button btnStyle="btn--default">Sign In</Button>
                </li>
            </ul>
        </div>
    </nav>
   ) 
}