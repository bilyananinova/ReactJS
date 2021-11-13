import './Catalog.css';

function Catalog() {
    return (
        <>
            <main>
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
                        <section className="product-card">
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1597043851759-3b383a6d1c14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                            </div>
                            <div className="product-details">
                                <header className="product-header">
                                    <h5>Title</h5>
                                </header>
                                <span className="product-price">20.00$</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, temporibus assumenda provident suscipit quasi voluptate dolores eligendi placeat aliquam nostrum iste molestias nemo sint officia iusto ipsa modi tenetur. </p>
                                <div className="product-action">
                                    <a className="details-btn" href="#"><i className="fas fa-wine-bottle"></i>details</a>
                                    <a className="add-btn" href="#"><i className="fas fa-shopping-cart"></i>buy</a>
                                </div>
                            </div>
                        </section>
                        <section className="product-card">
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1553682544-4ccf2778c9a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
                            </div>
                            <div className="product-details">
                                <header className="product-header">
                                    <h5>Title</h5>
                                </header>
                                <span className="product-price">20.00$</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, temporibus assumenda provident suscipit quasi voluptate dolores eligendi placeat aliquam nostrum iste molestias nemo sint officia iusto ipsa modi tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, temporibus assumenda provident suscipit quasi voluptate dolores eligendi placeat aliquam nostrum iste molestias nemo sint officia iusto ipsa modi tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                <div className="product-action">
                                    <a className="details-btn" href="#"><i className="fas fa-wine-bottle"></i>details</a>
                                    <a className="add-btn" href="#"><i className="fas fa-shopping-cart"></i>buy</a>
                                </div>
                            </div>
                        </section>
                        <section className="product-card">
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1554230561-31bdc707b537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            </div>
                            <div className="product-details">
                                <header className="product-header">
                                    <h5>Title</h5>
                                </header>
                                <span className="product-price">20.00$</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                <div className="product-action">
                                    <a className="details-btn" href="#"><i className="fas fa-wine-bottle"></i>details</a>
                                    <a className="add-btn" href="#"><i className="fas fa-shopping-cart"></i>buy</a>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </>
    );
}

export default Catalog;
