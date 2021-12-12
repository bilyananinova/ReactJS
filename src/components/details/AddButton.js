import './AddButton.css'

import { addCart } from '../../services/cartService';

let product;

function AddButton({ wine, userId}) {

    function cartHandler(e) {
        e.preventDefault();
        product = wine;
        product['qty'] = 1;
        product['totalPrice'] = product.qty * product.price;

        addCart(product, userId);
    }
    return (
        <button
            onClick={cartHandler}
            className="add-btn">
            <i className="fas fa-shopping-cart"></i>
            add to cart
        </button>
    );
}

export default AddButton;