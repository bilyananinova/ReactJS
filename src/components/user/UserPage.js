import React from "react";
import { Link } from "react-router-dom";

import { getLikes } from "../../services/likeServices";

import UserPageProductCard from "./UserPageProductCard";

function UserPage({ match }) {
    let [wines, setWines] = React.useState([]);
    let userId = match.params.userId;

    React.useEffect(() => {
        getLikes(userId)
            .then(wines => {
                setWines(wines);
            });
    }, []);


    return (
        <>
            <h3>Your Likes</h3>
            <section className="products-wrapper">
                <section className="products-list">

                    { wines.length > 0 
                    ? wines.map(w =>
                        <UserPageProductCard wine={w} key={w.id} />
                    )
                    : <h1 className="no-content">Check our <Link to="/wine-catalog">catalog</Link> and find your wine...</h1>
                    }

                </section>
            </section>
        </>
    )
}

export default UserPage;