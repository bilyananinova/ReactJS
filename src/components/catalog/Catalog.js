import './Catalog.css';
import React from 'react';

import { getAllWines } from "../../services/winesServices";

import CatalogProductCart from "./CatalogProductCard";

function Catalog() {
    let [wines, setWines] = React.useState([]);
    let [category, setCategory] = React.useState('');

    React.useEffect(() => {
        let controller = new AbortController();
        getAllWines()
            .then(wines => {
                if (category) {
                    wines = wines.filter(w => w.category === category);
                }
                setWines(wines);
            });
        return () => controller?.abort();
    }, [wines, category]);

    return (

        <>
            <h3>Our Wines</h3>
            <section className="products-wrapper">
                <aside className="products-aside">
                    <h6>Product categories</h6>
                    <ul>
                        <li onClick={() => setCategory('red')}>Red Wine</li>
                        <li onClick={() => setCategory('white')}>White Wine</li>
                        <li onClick={() => setCategory('rose')}>Rose Wine</li>
                        <li onClick={() => setCategory('sparkling')}>Sparkling</li>
                        <li onClick={() => setCategory('dessert')}>Dessert</li>
                        <li onClick={() => setCategory('fortified')}>Fortified</li>
                        <li onClick={() => setCategory('')}>All Wines</li>
                    </ul>
                </aside>
                <section className="products-list">

                    {
                        wines
                            .sort((a, b) => b.createdAt - a.createdAt)
                            .map(w =>
                                <CatalogProductCart
                                    key={w.id}
                                    wine={w} >
                                </CatalogProductCart>
                            )
                    }

                </section>
            </section>
        </>
    );
}

export default Catalog;
