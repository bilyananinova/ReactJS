import './Cart.css';
import React from 'react';

import UserContext from '../../contexts/UserContext';
import CartProduct from './CartProduct';

function Cart() {
    let user = React.useContext(UserContext);
    let [cart, setCart] = React.useState([]);
    let [total, setTotal] = React.useState('0.00')

    React.useEffect(() => {
        if (user) {
            setCart(user.cart);
            setTotal(cart.reduce((acc, cur) => {
                return acc += Number(cur.price);
            }, 0));
        }
    })



    return (
        <>
            <h3>Shopping Cart</h3>
            <section className="cart-wrapper">

                {cart?.length > 0
                    ? < table className="cart-order">
                        <thead>
                            <tr>
                                {/* <td colSpan="2">Product</td> */}
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody>

                            {cart.map(w => <CartProduct wine={w} key={w.title} />)}

                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                {/* <td className="total" colSpan="2">Total:</td> */}
                                <td className="total">Total:</td>
                                <td className="total" colSpan="2">{total}<span>$</span></td>
                                <td className="total" colSpan="1">
                                    <a href="#">Buy</a>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    : <h6>Your shopping cart is empty</h6>}
            </section>
        </>
    );

}

export default Cart;