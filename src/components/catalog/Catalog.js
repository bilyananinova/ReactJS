import './Catalog.css';
import React from 'react';
import { Link, } from 'react-router-dom';
import { getAllWines } from "../../services/winesServices";
import CatalogProductCart from "./CatalogProductCard";

function Catalog({ match }) {
    let [wines, setWines] = React.useState([]);

    React.useEffect(() => {
        getAllWines()
            .then(wines => {
                if (match.params.category) {
                    wines = wines.filter(w => w.category == match.params.category);
                }
                setWines(wines);
            })
    }, [wines, match.params.category]);

    return (
        <>
            <h3>Our Wines</h3>
            <section className="products-wrapper">
                <aside className="products-aside">
                    <h6>Product categories</h6>
                    <ul>
                        <li><Link to={`${match.url}/red`} >Red Wine</Link></li>
                        <li><Link to={`${match.url}/white`}>White Wine</Link></li>
                        <li><Link to={`${match.url}/rose`}>Rose Wine</Link></li>
                        <li><Link to={`${match.url}/sparkling`}>Sparkling</Link></li>
                        <li><Link to={`${match.url}/dessert`}>Dessert</Link></li>
                        <li><Link to={`${match.url}/fortified`}>Fortified</Link></li>
                    </ul>
                </aside>
                <section className="products-list">

                    {
                        wines
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
