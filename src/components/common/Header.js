import './Header.css';

function Header() {
    return (
        <>
            <header className="site-header">
                <section className="header-logo">
                    <h1><a href="/">Wine Store</a></h1>
                    <p>ReactJS</p>
                </section>
                <section>
                    <ul className="header-contacts">
                        <li><strong>Phone:</strong>+359 888 000 000</li>
                        <li><strong>Email:</strong>email@mail.bg</li>
                        <li className="cart">
                            <a href="#">
                                <i className="fas fa-shopping-bag"></i>
                                <span className="cart-count">0</span>
                            </a>
                        </li>
                    </ul>
                </section>

            </header>

            <nav className="mainav">
                <div>
                    <a href="/">Home</a>
                    <a href="/wines">Shop</a>
                    <a href="/wines">Blog</a>
                </div>
                <div className="guest">
                    <a href="/">Login</a>
                    <a href="/">Register</a>
                </div>
                <div className="user">
                    <a href="/">Wellcome, [name]!</a>
                    <a href="/">Logout</a>
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
