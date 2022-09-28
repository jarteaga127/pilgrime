import Footer from "../components/Footer";
import WelcomeSec from "../components/WelcomeSec";
import WhatsNew from "../components/WhatsNew";

export default function HomePage() {
    return (
        <div className="home-page">
       <WelcomeSec/>
       <WhatsNew/>
       <Footer/>
       </div>
    )
}