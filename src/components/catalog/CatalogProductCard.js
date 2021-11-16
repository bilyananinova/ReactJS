function CatalogProductCart({wine, customRouter}) {

    function detailsClickHandler(e) {
        e.preventDefault();
        customRouter(`/details/${wine.id}`)
    };


    return (
        <section className="product-card">
            <div className="product-image">
                <img src={wine.img} />
            </div>
            <div className="product-details">
                <header className="product-header">
                    <h5>{wine.title}</h5>
                </header>
                <span className="product-price">{wine.price}$</span>
                <p>{wine.description.substring(0, 150)}...</p>
                <div className="product-action">
                    <a className="details-btn" href={`/details/${wine.id}`} onClick={detailsClickHandler}><i className="fas fa-wine-bottle"></i>details</a>
                    <a className="add-btn" href="#"><i className="fas fa-shopping-cart"></i>buy</a>
                </div>
            </div>
        </section>
    );
}

export default CatalogProductCart;