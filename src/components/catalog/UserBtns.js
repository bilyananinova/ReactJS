import "./UserBtns.css";
import React from 'react';

import { addCart } from '../../services/cartService';
import { like, dislike } from "../../services/likeServices";

let product;

function UserBtns({ wine, userId }) {

    function cartHandler(e) {
        e.preventDefault();
        product = wine;
        product['qty'] = 1;
        product['totalPrice'] = product.qty * product.price;

        addCart(product, userId);
    }

    function likeWine(e) {
        e.preventDefault();
        like(wine.id, userId);
    }

    function dislikeWine(e) {
        e.preventDefault();
        dislike(wine.id, userId);
    }


    return (
        <>
            { !wine.likes?.includes(userId)
                ?
                <button className="like-btn" onClick={(e) => likeWine(e)}><i className="fas fa-thumbs-up"></i><span>{wine.likes?.length || 0}</span></button>
                :
                <button className="dislike-btn" onClick={(e) => dislikeWine(e)}><i className="fas fa-thumbs-down"></i><span>{wine.likes?.length || 0}</span></button>
            }
            <button
                onClick={cartHandler}
                className="add-btn">
                <i className="fas fa-shopping-cart"></i>
            add to cart
        </button>
        </>
    )
}

export default UserBtns;