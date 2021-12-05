import './UserNav.css';
import { Link } from "react-router-dom";
import React from 'react';
import UserContext from "../../contexts/UserContext";

function UserNav() {
    let user = React.useContext(UserContext);

    return (
        <div className="user">
            <Link to="/">Welcome, {user.name}!</Link>
            <Link to="/logout" >Logout</Link>
        </div>
    );
}

export default UserNav;