import "./UserPageProductCard.css";
import React from 'react';
import { Link } from "react-router-dom";

function UserPageProductCard({ wine }) {

    return (
        <section className="user-product-card">
            <div className="user-product-image">
                <img src={wine.image} alt={wine.title} />
            </div>
            <div className="user-product-details">

                <header className="user-product-header">
                    <h5>{wine.title}</h5>
                    <p>Category: <span className="user-product-type">{wine.category}</span></p>
                </header>

                <span className="user-product-price">{wine.price}$</span>

                <p>{wine.description.substring(0, 150)}...</p>

                <div className="user-product-action">

                    <Link
                        to={`/wine-catalog/${wine.id}/details`}
                        className="details-btn">
                        <i className="fas fa-wine-bottle"></i>
                        details
                    </Link>

                </div>

            </div>
        </section >
    );
}

export default UserPageProductCard;