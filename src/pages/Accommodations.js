import HotelThumb from "../components/HotelThumb";
import { HotelData } from "../data/HotelData";
import "../styles/accommodations.css";
import Footer from "../components/Footer";

export default function Accommodations() {
    return (
        <div className="accommodations">
            <div className="section-header">
                <h2>Accommodations</h2>
            </div>
            <div className="thumb-container">
            <div className="thumb-wrapper">
                <ul className="thumb-group">
                    <HotelThumb hotels={HotelData}/>
                </ul>
            </div>
        </div>
        <Footer/>
        </div>
    )
}