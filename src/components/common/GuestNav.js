import './GuestNav.css';
import { Link } from "react-router-dom";

function GuestNav() {
    return (
        <div className="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default GuestNav;