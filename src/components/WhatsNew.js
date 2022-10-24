import { thumbData } from "./thumbData";
import Thumbnail from "./Thumbnail";
import "../styles/whats-new.css";

export default function WhatsNew() {
    return (
    <div className="whats-new">
        <div className="section-header">
            <h2>What's New?</h2>
        </div>
        <div className="thumb-container">
            <div className="thumb-wrapper">
                <ul className="thumb-group">
                    <Thumbnail items={thumbData}/>
                </ul>
            </div>
        </div>
    </div>
    )
}