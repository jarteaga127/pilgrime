import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchAnime from "./pages/SearchAnime";
import SearchLoca from "./pages/SearchLoca";
import SignInPage from "./pages/SignInPage";
import Article01 from "./pages/Article01";
import Accommodations from "./pages/Accommodations";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search-anime" element={<SearchAnime/>}/>
        <Route path="/search-loca" element={<SearchLoca/>}/>
        <Route path="/accommodations" element={<Accommodations/>}/>
        <Route path="/sign-up" element={<SignInPage/>}/>
        <Route path="/article-01" element={<Article01/>}/>
        <Route path="/404-error" element={<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
