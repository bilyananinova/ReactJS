import './Header.css';
import React from 'react';
import { Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import { getUserCart } from '../../services/cartService';

import GuestNav from "./GuestNav";
import UserNav from "./UserNav";

function Header() {
    let user = React.useContext(UserContext);
    let [shoppingCart, setShoppingCart] = React.useState([]);
    let [totalQty, setTotalQty] = React.useState(0);

    React.useEffect(() => {

        getUserCart(user?.id)
            .then(result => {
                setShoppingCart(result)
                setTotalQty(shoppingCart.reduce((acc, cur) => {
                    return acc += Number(cur.wine?.qty);
                }, 0));
            });

    }, [shoppingCart, user?.id]);


    return (
        <>
            <header className="site-header">
                <section className="header-logo">
                    <h1>
                        <Link to="/">Wine Store</Link>
                    </h1>
                    <p>ReactJS</p>
                </section>
                <section>
                    <ul className="header-contacts">
                        <li><strong>Phone:</strong>+359 888 000 000</li>
                        <li><strong>Email:</strong>email@mail.bg</li>

                        <li className="cart">
                            <Link to="/cart">
                                <i className="fas fa-shopping-bag"></i>
                                <span className="cart-count">{totalQty}</span>
                            </Link>
                        </li>

                    </ul>
                </section>

            </header>

            <nav className="mainav">
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/wine-catalog">Shop</Link>
                    <Link to="/articles">Blog</Link>

                    {user?.isAdmin ?
                        <> <Link to="/wine-catalog/create">Create product</Link>
                            <Link to="/articles/create">Create article</Link>
                        </>
                        : ""}
                </div>
                {user?.isLogged ? <UserNav /> : <GuestNav />}

            </nav>

        </>
    );
}

export default Header;
