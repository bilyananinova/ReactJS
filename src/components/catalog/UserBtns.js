import "./UserBtns.css";
import React from 'react';

import { addCart } from '../../services/cartService';
import UserContext from "../../contexts/UserContext";

function UserBtns({ wine }) {
    let user = React.useContext(UserContext);

    function cartHandler(e) {
        e.preventDefault();
        addCart(user.id, wine.title, wine.price, wine.image)
    }

    return (
        <button
            onClick={cartHandler}
            className="add-btn">
            <i className="fas fa-shopping-cart"></i>
            add to cart
        </button>
    )
}

export default UserBtns;