import { Link } from "react-router-dom";
import "../styles/whats-new.css";

export default function Thumbnail({items}) {
    return (
        <>
        {items.map(({link, image, text}) => (

        
        <li className="thumb-item">
            <div className="thumbnail">
                <Link to={link} className="thumb-link">
                <div className="thumb-img">
                    <img src={image} alt="Your Lie in April in Nerima" />
                </div>
                <div className="thumb-text">
                    {text}
                </div>
                </Link>
            </div>
        </li>
        ))}
        </>
    )
}