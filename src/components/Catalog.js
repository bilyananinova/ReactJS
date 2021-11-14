import './Catalog.css';

import React from 'react';

import { getAllWines } from "../services/winesServices";
import CatalogProductCart from "../components/catalog/CatalogProductCard";

function Catalog() {
    let [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        getAllWines()
            .then(wines => {

                setProducts(wines)
            })
    }, [])

    console.log(products);

    return (
        <>
            <h4>Our Wines</h4>
            <section className="products-wrapper">
                <aside className="products-aside">
                    <h6>Product categories</h6>
                    <ul>
                        <li><a href="#">Red Wine</a></li>
                        <li><a href="#">White Wine</a></li>
                        <li><a href="#">Rose Wine</a></li>
                    </ul>
                </aside>
                <section className="products-list">

                    {products.map(wine =>
                        <CatalogProductCart key={wine.id}>{wine}</CatalogProductCart>
                    )}

                </section>
            </section>
        </>
    );
}

export default Catalog;
