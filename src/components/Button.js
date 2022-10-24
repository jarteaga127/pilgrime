import "../styles/button.css";
import { Link } from "react-router-dom";

const STYLES = ['btn--default', 'btn--outline'];

const SIZES = ['btn--regular', 'btn--large'];

export const Button = ({
    children,
    type, 
    onClick,
    btnStyle,
    btnSize
}) => {

    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

    return (
        <Link to="/sign-up" className="button-link">
            <button
            className={`btn ${checkBtnStyle} ${checkBtnSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}