import { Button } from "./Button";

export default function WelcomeSec() {
    return (
        <div className="welcome-sec">
            <div className="welcome-img">
                <div className="welcome-text">
                    <div className="welcome-text-02">
                    <h1>Pilgrime</h1>
                    <p>Visit the real life locations of your favorite anime!</p>
                    <div className="welcome-btns">
                    <Button btnStyle="btn--outline" btnSize="btn--large">Let's Get Started</Button>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}