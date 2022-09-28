import Footer from "../components/Footer";

export default function SearchAnime() {
    return (
      <div className="search-anime">
        <div className="section-header">
          <h2>Search by Anime</h2>
        </div>
        <div className="search-anime-02">
        <div className="searchbar-cont">
          <input type="text" placeholder="Search Anime"/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="sort-alphabet-cont">
          <ul className="sort-alphabet-02">
            <li className="alphabet">A</li>
            <li className="alphabet">B</li>
            <li className="alphabet">C</li>
            <li className="alphabet">D</li>
            <li className="alphabet">E</li>
            <li className="alphabet">F</li>
            <li className="alphabet">G</li>
            <li className="alphabet">H</li>
            <li className="alphabet">I</li>
            <li className="alphabet">J</li>
            <li className="alphabet">K</li>
            <li className="alphabet">L</li>
            <li className="alphabet">M</li>
            <li className="alphabet">N</li>
            <li className="alphabet">O</li>
            <li className="alphabet">P</li>
            <li className="alphabet">Q</li>
            <li className="alphabet">R</li>
            <li className="alphabet">S</li>
            <li className="alphabet">T</li>
            <li className="alphabet">U</li>
            <li className="alphabet">V</li>
            <li className="alphabet">W</li>
            <li className="alphabet">X</li>
            <li className="alphabet">Y</li>
            <li className="alphabet">Z</li>
          </ul>
        </div>
        </div>
        <Footer/>
      </div>
    )
}