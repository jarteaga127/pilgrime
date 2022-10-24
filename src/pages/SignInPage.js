import { Button } from "../components/Button";
import "../styles/signin-page.css";
import Footer from "../components/Footer";

export default function SignInPage() {
    return (
        <div className="signin-page">
            <div className="signin-header">
                <h1>Sign Up or Login</h1>
            </div>
            <div className="signin-form-cont">
                <form className="signin-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" placeholder="E-mail"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder="Password" />
                    </div>
                    <div className="form-btn-cont">
                      <Button btnStyle="btn--default">Create Account</Button>
                    </div>
                </form>
                
            </div>
            <Footer/>
        </div>
    )
}