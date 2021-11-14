

function CatalogProductCart(props) {
    let description = props.children.description.split(' ').slice(0, 20).join(' ')
    
    return (
        <section className="product-card">
            <div className="product-image">
                <img src={props.children.img} />
            </div>
            <div className="product-details">
                <header className="product-header">
                    <h5>{props.children.title}</h5>
                </header>
                <span className="product-price">{props.children.price}$</span>
                <p>{description}...</p>
                <div className="product-action">
                    <a className="details-btn" href="#"><i className="fas fa-wine-bottle"></i>details</a>
                    <a className="add-btn" href="#"><i className="fas fa-shopping-cart"></i>buy</a>
                </div>
            </div>
        </section>
    );
}

export default CatalogProductCart;