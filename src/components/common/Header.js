import './Header.css';
import { Link } from "react-router-dom";

function Header({ authInfo }) {

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
                        {authInfo.isAuthenticated
                            ? <li className="cart">
                                <Link to="#">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="cart-count">0</span>
                                </Link>
                            </li>
                            : ""
                        }
                    </ul>
                </section>

            </header>

            <nav className="mainav">
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/wine-catalog">Shop</Link>
                    <Link to="/articles">Blog</Link>
                </div>
                {authInfo.isAuthenticated
                    ? <div className="user">
                        <Link to="#">Wellcome,  {authInfo.name} !</Link>
                        <Link to="/logout" >Logout</Link>
                    </div>
                    : <div className="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }

            </nav>

        </>
    );
}

export default Header;
