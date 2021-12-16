import './Cart.css';
import React from 'react';
import { useHistory } from "react-router-dom";

import UserContext from '../../contexts/UserContext';
import { getUserCart, updateCart, deleteFromCart } from '../../services/cartService';

import CartProducts from './CartProducts';

let updatedWine;

function Cart() {
    let user = React.useContext(UserContext);
    let [shoppingCart, setShoppingCart] = React.useState([]);
    let [show, setShow] = React.useState(false);
    let history = useHistory();
    let totalQty = shoppingCart.reduce((acc, cur) => {
        return acc += Number(cur.wine?.qty);
    }, 0);

    let totalToPay = shoppingCart.reduce((acc, cur) => {
        return acc += Number(cur.wine?.totalPrice);
    }, 0);

    React.useEffect(() => {
        let abortController = new AbortController();

        getUserCart(user?.id)
            .then(result => {
                setShoppingCart(result);
            })
            .catch(err => {
                console.error(err);
            });

        return () => {
            abortController.abort();
            console.log('aborting... cart');
        }

    }, [shoppingCart, user?.id]);

    function productIncrease(wine) {
        updatedWine = wine;
        updatedWine.qty = Number(updatedWine.qty) + 1;
        updatedWine.totalPrice = Number(updatedWine.qty) * Number(updatedWine.price);

        updateCart(wine.id, user.id, updatedWine);
    }

    function productDecrease(wine) {
        updatedWine = wine;
        if (wine.qty > 1) {
            updatedWine.qty = Number(updatedWine.qty) - 1;
            updatedWine.totalPrice = Number(updatedWine.qty) * Number(updatedWine.price);

            updateCart(wine.id, user.id, updatedWine);
        }
    }

    function productDelete(wine) {
        deleteFromCart(user.id, wine.id);
    }

    function clearCart(e) {
        e.preventDefault();
        shoppingCart.forEach(product => {
            deleteFromCart(user.id, product.wine.id);
        });
        history.push('/');
    }

    function showHandler() {
        setShow(true);
    }

    return (
        <>
            <h3>Shopping Cart</h3>
            <section className="cart-wrapper">

                {shoppingCart.length > 0
                    ? <CartProducts shoppingCart={shoppingCart}
                        productIncrease={productIncrease}
                        productDecrease={productDecrease}
                        productDelete={productDelete} />
                    : <h3 className="no-content">Your shopping cart is empty</h3>
                }
            </section >
            {
                !show
                    ?
                    <section className="summary-box">
                        <h4>Cart Summary</h4>
                        <div>Total Products: <span>{totalQty}</span></div>
                        <div>Total Price to Pay: <span>{totalToPay.toFixed(2)} $</span></div>
                        <button onClick={showHandler}>Continue</button>
                    </section>
                    :
                    <section className="checkout-box">
                        <h4>Checkout</h4>
                        <div className="personal-info">
                            <label htmlFor="phone">Phone <span className="required">*</span></label>
                            <input type="text" className="checkout-input" id="phone" name="phone" placeholder="+359 888 000 000" />
                            <label htmlFor="address">Address <span className="required">*</span></label>
                            <input type="text" className="checkout-input" id="address" name="address" placeholder="Street Name & Number, Town, Postcode/Zip" />
                        </div>
                        <div>Total Products: <span>{totalQty}</span></div>
                        <div>Total Price to Pay: <span>{totalToPay.toFixed(2)} $</span></div>
                        <button onClick={clearCart} >Submit</button>
                    </section>
            }
        </>
    );
}

export default Cart;