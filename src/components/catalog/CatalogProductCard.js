import "./CatalogProductCard.css";
import React from 'react';
import { Link } from "react-router-dom";
import { deleteWine } from '../../services/winesServices';
import UserContext from "../../contexts/UserContext";

function CatalogProductCart({ wine }) {
    let user = React.useContext(UserContext);

    function deleteHandler() {
        deleteWine(wine.id)
    }

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
                        user.isLoggedIn
                            ? < button
                                className="add-btn" >
                                <i className="fas fa-shopping-cart"></i>
                            buy
                        </button>
                            : ""
                    }


                    {
                        user.isAdmin
                            ?
                            <>
                                <Link
                                    to={`/wine-catalog/${wine.id}/edit`}
                                    className="edit-btn">
                                    <i className="fas fa-edit"></i>
                                    edit
                                 </Link>
                                <button
                                    onClick={deleteHandler}
                                    className="delete-btn" >
                                    <i className="fas fa-trash-alt"></i>
                                    delete
                                </button>
                            </>
                            : ""
                    }

                </div>

            </div>
        </section >
    );
}

export default CatalogProductCart;