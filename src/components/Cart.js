import './Cart.css'

function Cart() {
    return (
        <>
            <h3>Shopping Cart</h3>
            <section className="cart-wrapper">

                <table className="cart-order">
                    <thead>
                        <tr>
                            <td colSpan="2">Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="cart-image">
                                <img src="https://moulin.bg/wines/wp-content/uploads/2019/01/merlot-cabernet-arjolle-510x510.jpg" />
                            </td>
                            <td className="cart-title">Title</td>
                            <td className="cart-price">20<span>$</span></td>
                            <td className="cart-quantity">1</td>
                            <td className="cart-subtotal">20<span>$</span></td>
                            <td>
                                <a href="#">X</a>
                            </td>
                        </tr>

                        <tr>
                            <td className="cart-image">
                                <img src="https://moulin.bg/wines/wp-content/uploads/2019/01/merlot-cabernet-arjolle-510x510.jpg" />
                            </td>
                            <td className="cart-title">Title</td>
                            <td className="cart-price">20<span>$</span></td>
                            <td className="cart-quantity">1</td>
                            <td className="cart-subtotal">20 <span>$</span></td>
                            <td>
                                <a href="#">X</a>
                            </td>
                        </tr>

                        <tr>
                            <td className="cart-image">
                                <img src="https://moulin.bg/wines/wp-content/uploads/2019/01/merlot-cabernet-arjolle-510x510.jpg" />
                            </td>
                            <td className="cart-title">Title</td>
                            <td className="cart-price">20<span>$</span></td>
                            <td className="cart-quantity">1</td>
                            <td className="cart-subtotal">20 <span>$</span></td>
                            <td>
                                <a href="#">X</a>
                            </td>
                        </tr>

                        <tr>
                            <td className="cart-image">
                                <img src="https://moulin.bg/wines/wp-content/uploads/2019/01/merlot-cabernet-arjolle-510x510.jpg" />
                            </td>
                            <td className="cart-title">Title</td>
                            <td className="cart-price">20<span>$</span></td>
                            <td className="cart-quantity">1</td>
                            <td className="cart-subtotal">20 <span>$</span></td>
                            <td>
                                <a href="#">X</a>
                            </td>
                        </tr>

                        <tr>
                            <td className="cart-image">
                                <img src="https://moulin.bg/wines/wp-content/uploads/2019/01/merlot-cabernet-arjolle-510x510.jpg" />
                            </td>
                            <td className="cart-title">Title</td>
                            <td className="cart-price">20<span>$</span></td>
                            <td className="cart-quantity">1</td>
                            <td className="cart-subtotal">20 <span>$</span></td>
                            <td>
                                <a href="#">X</a>
                            </td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td className="total" colSpan="2">Total:</td>
                            <td className="total" colSpan="2">40<span>$</span></td>
                            <td className="total" colSpan="1">
                                <a href="#">Buy</a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </section>
        </>
    );

}

export default Cart;