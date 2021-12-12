import './CartProduct.css';

function CartProduct({ product, productIncrease, productDecrease, productDelete }) {
    let wine = { ...product.wine };

    function productIncreaseHandle() {
        productIncrease(wine);
    }

    function productDecreaseHandle() {
        productDecrease(wine);
    }

    function productDeleteHandle() {
        productDelete(wine);
    }

    return (
        <section className="order-card">
            <div className="order-image">
                <img src={wine.image} alt={wine.title} />
            </div>
            <div className="order-details">

                <header className="order-header">
                    <h5>{wine.title}</h5>
                    <p>Category: <span className="order-type">{wine.category}</span></p>
                </header>

                <span className="order-price">{(wine.totalPrice).toFixed(2)} $</span>

                <div className="order-action">
                    <div className="btn-minus" onClick={productDecreaseHandle}>
                        <i className="fas fa-minus"></i>
                    </div>
                    <div className="product-qty">{wine.qty}</div>
                    <div className="btn-plus" onClick={productIncreaseHandle}>
                        <i className="fas fa-plus"></i>
                    </div>

                    <button onClick={productDeleteHandle}>Delete</button>

                </div>

            </div>
        </section >
    )
}

export default CartProduct;