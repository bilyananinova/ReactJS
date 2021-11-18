import './Catalog.css';
import React from 'react';
import { Link } from "react-router-dom";
import { getAllWines } from "../services/winesServices";
import CatalogProductCart from "../components/catalog/CatalogProductCard";

function Catalog() {
    let [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        getAllWines()
            .then(wines => {

                setProducts(wines)
            })
    }, []);

    return (
        <>
            <h3>Our Wines</h3>
            <section className="products-wrapper">
                <aside className="products-aside">
                    <h6>Product categories</h6>
                    <ul>
                        <li><Link to="#">Red Wine</Link></li>
                        <li><Link to="#">White Wine</Link></li>
                        <li><Link to="#">Rose Wine</Link></li>
                    </ul>
                </aside>
                <section className="products-list">

                    {products.map(w =>
                        <CatalogProductCart key={w.id} wine={w} ></CatalogProductCart>
                    )}

                </section>
            </section>
        </>
    );
}

export default Catalog;
