import "./CatalogProductCard.css";
import React from 'react';
import { Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";

import AdminBtns from "./AdminBtns";
import UserBtns from "./UserBtns";

function CatalogProductCart({ wine }) {
    let user = React.useContext(UserContext);

    return (
        <section className="product-card">
            <div className="product-image">
                <img src={wine.image} alt={wine.title} />
            </div>
            <div className="product-details">

                <header className="product-header">
                    <h5>{wine.title}</h5>
                    <p>Category: <span className="product-type">{wine.category}</span></p>
                </header>

                <span className="product-price">{wine.price}$</span>

                <p>{wine.description.substring(0, 150)}...</p>

                <div className="product-action">

                    <Link
                        to={`/wine-catalog/${wine.id}/details`}
                        className="details-btn">
                        <i className="fas fa-wine-bottle"></i>
                        details
                    </Link>

                    {
                        user?.isLogged
                            ? <UserBtns wine={wine} userId={user.id} />
                            : ""
                    }

                    {
                        user?.isAdmin
                            ?
                            <AdminBtns wine={wine} />
                            : ""
                    }

                </div>

            </div>
        </section >
    );
}

export default CatalogProductCart;