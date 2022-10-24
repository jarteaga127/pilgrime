import Footer from "../components/Footer";

export default function SearchLoca() {
    return (
        <div className="search-loca">
            <div className="section-header">
          <h2>Please pick a location</h2>
        </div>
<div className="location-list-cont">
<ul className="location-list">
    <li className="location-item">Kanto</li>
    <li className="location-item">Kansai</li>
    <li className="location-item">Tohoku</li>
    <li className="location-item">Hokkaido</li>
    <li className="location-item">Chuubu</li>
    <li className="location-item">Chuugoku</li>
    <li className="location-item">Shikoku</li>
    <li className="location-item">Kyuushu</li>
    <li className="location-item">Okinawa</li>
</ul>
</div>
<Footer/>
        </div>
    )
}