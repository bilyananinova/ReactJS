import './Header.css';
import { Link } from "react-router-dom";

function Header() {
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
                            <Link to="#">
                                <i className="fas fa-shopping-bag"></i>
                                <span className="cart-count">0</span>
                            </Link>
                        </li>
                    </ul>
                </section>

            </header>

            <nav className="mainav">
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/wines">Shop</Link>
                    <Link to="/articles">Blog</Link>
                </div>
                <div className="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                <div className="user">
                    <Link to="/">Wellcome, [name]!</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            </nav>

        </>
    );
}

export default Header;


<li className="cart">
    <a href="#">
        <i class="icon-cart-thick"></i>
        <span class="cart-count badge-circle">1</span>
    </a>
</li>
