import './Catalog.css';
import React from 'react';
import { getAllWines } from "../../services/winesServices";
import CatalogProductCart from "./CatalogProductCard";

function Catalog({ authInfo }) {

    let [wines, setWines] = React.useState([]);
    let [type, setType] = React.useState('');

    React.useEffect(() => {
        getAllWines(setWines);
    }, []);

    function filter(type) {
        setType(type);
    }
    console.log(wines);
    return (
        <>
            <h3>Our Wines</h3>
            <section className="products-wrapper">
                <aside className="products-aside">
                    <h6>Product categories</h6>
                    <ul>
                        <li onClick={() => filter('red')}>Red Wine</li>
                        <li onClick={() => filter('white')}>White Wine</li>
                        <li onClick={() => filter('rose')}>Rose Wine</li>
                    </ul>
                </aside>
                <section className="products-list">

                    {type
                        ? (
                            wines
                                .filter(w => w.type === type)
                                .map(w =>
                                    <CatalogProductCart
                                        key={w.id}
                                        authInfo={authInfo}
                                        wine={w} >
                                    </CatalogProductCart>
                                )
                        )
                        : (
                            wines
                                .map(w =>
                                    <CatalogProductCart
                                        key={w.id}
                                        authInfo={authInfo}
                                        wine={w} >
                                    </CatalogProductCart>
                                )
                        )
                    }

                </section>
            </section>
        </>
    );
}

export default Catalog;
