import './CartProduct.css';

function CartProduct({ wine }) {
    return (
        <tr>
            {/* <td className="cart-image">
                <img src={wine.image} alt={wine.title} />
            </td> */}
            <td className="cart-title">{wine.title}</td>
            <td className="cart-price">{wine.price}<span>$</span></td>
            <td className="cart-quantity">1</td>
            <td className="cart-subtotal">{wine.price * 1 || 0.00}<span>$</span></td>
            <td>
                <button>X</button>
            </td>
        </tr>
    )
}

export default CartProduct;