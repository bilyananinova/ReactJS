import "./CatalogProductCard.css";
import { Link } from "react-router-dom";

function CatalogProductCart({ authInfo, wine }) {
    
    return (
        <section className="product-card">
            <div className="product-image">
                <img src={wine.image} alt="" />
            </div>
            <div className="product-details">

                <header className="product-header">
                    <h5>{wine.title}</h5>
                </header>

                <span className="product-price">{wine.price}$</span>
                <p>{wine.description.substring(0, 150)}...</p>
                <div className="product-action">
                    
                    <Link
                        to={`/wine-catalog/details/${wine.id}`}
                        className="details-btn">
                        <i className="fas fa-wine-bottle"></i>
                        details
                    </Link>

                    {
                        authInfo.isAuthenticated
                            ? <Link
                                to="#"
                                className="add-btn" >
                                <i className="fas fa-shopping-cart"></i>
                                buy
                            </Link>
                            : ""
                    }

                </div>

            </div>
        </section>
    );
}

export default CatalogProductCart;