import { Link } from "react-router-dom";
import "../styles/accommodations.css";

export default function HotelThumb({hotels}) {
    return (
        <>
        {hotels.map(({image, title, price}) => (

        
        <li className="hotel-item">
            <div className="hotel-thumb">
            <Link to="/" className="hotel-link">
<div className="thumb-img">
    <img src={image} alt="hotel" />
</div>
<div className="thumb-text">
    <div className="thumb-title">
        {title}
    </div>
    <div className="thumb-price">{price}</div>
    <div className="button-cont">
        <button>View Details</button>
    </div>
</div>
            </Link>
            </div>
        </li>
        ))}
        </>
    )
}