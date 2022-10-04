import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer-main">
            <div className="newsletter-signup">
                <div className="newsletter-text">
                    <h1>Sign up for our bi-monthly newsletter.</h1>
                    <p>Get the latest info on anime tourism spots in Japan.</p>
                    <form>
                        <input type="text" placeholder="My E-mail" className="newsletter-email"/>
                        <Button btnStyle="btn--outline" btnSize="btn--large">Subscribe</Button>
                    </form>
                </div>
            </div>
            <div className="footer-column-01">
                <div className="footer-column-cont">
                    <div className="column-header">About Us</div>
                    <ul className="footer-column-02">
                        <li className="footer-link-01">
                            <Link to="/" className="footer-link-02">What is Pilgrime?</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02">News</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02">Privacy Policy</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02">Careers</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02">Company Info</Link>
                           </li>
                    </ul>
                </div>
                <div className="footer-column-cont">
                    <div className="column-header">Contact Us</div>
                    <ul className="footer-column-02">
                        <li className="footer-link-01">
                            <Link to="/" className="footer-link-02">FAQs</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02">Locations Update</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02">What is Pilgrime</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02">What is Pilgrime</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02">What is Pilgrime</Link>
                           </li>
                    </ul>
                </div>
                <div className="footer-column-cont">
                    <div className="column-header">Follow Us</div>
                    <ul className="footer-column-02">
                        <li className="footer-link-01">
                            <Link to="/" className="footer-link-02"><i class="fa-brands fa-twitter"></i>Twitter</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02"><i class="fa-brands fa-facebook"></i>Facebook</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02"><i class="fa-brands fa-instagram"></i>Instagram</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02"><i class="fa-brands fa-line"></i>LINE</Link>
                           </li>
                           <li className="footer-link-01">
                            <Link to="/" className="footer-link-02"><i class="fa-brands fa-pinterest"></i>Pinterest</Link>
                           </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">2022 Pilgrime</div>
        </div>
    )
}