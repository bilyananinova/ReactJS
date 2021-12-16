import './Catalog.css';
import React from 'react';

import { getAllWines } from "../../services/winesServices";

import CatalogProductCart from "./CatalogProductCard";

// let categories = [
//     { key: 'red', text: 'Red Wines' },
//     { key: 'white', text: 'White Wines' },
//     { key: 'rosé', text: 'Rosé Wines' },
//     { key: 'sparkling', text: 'Sparkling Wines' },
//     { key: 'dessert', text: 'Dessert Wines' },
//     { key: 'fortified', text: 'Fortified Wines' },
// ]

function Catalog() {
    let [wines, setWines] = React.useState([]);
    // let [category, setCategory] = React.useState('');

    React.useEffect(() => {
        let abortController = new AbortController();

        getAllWines(setWines)
        // .then(wines => {
        // if (!category || category === 'all') {
        //     wines = wines;
        // } else if (category !== 'all') {
        //     wines = wines.filter(w => w.category.toLowerCase() === category.toLowerCase());
        // }
        // if (wines) {
        //     setWines(wines);
        // }
        // })
        // .catch(err => {
        //     console.error(err);
        // });

        return () => {
            abortController.abort();
            console.log('aborting... catalog');
        }
    }, []);

    return (

        <>
            <h3>Our Wines</h3>
            <section className="products-wrapper">
                {/* <aside className="products-aside">
                    <h6>Product categories</h6>
                    <ul>
                        {categories.map(c => <li key={c.key}
                            onClick={() => setCategory(c.key)}>
                            {c.text}
                        </li>)}
                    </ul>
                </aside> */}
                <section className="products-list">

                    {wines.length > 0
                        ? wines
                            .sort((a, b) => b.createdAt - a.createdAt)
                            .map(w =>
                                <CatalogProductCart
                                    key={w.id}
                                    wine={w} />
                            )
                        : <h1 className="no-content">Sorry, No wines in database...</h1>
                    }

                </section>
            </section>
        </>
    );
}

export default Catalog;
