import './UserNav.css';
import React from 'react';
import { Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";

function UserNav() {
    let user = React.useContext(UserContext);

    return (
        <div className="user">
            <Link to={`/user/${user.id}`}>Welcome, {user.name}!</Link>
            <Link to="/logout" >Logout</Link>
        </div>
    );
}

export default UserNav;