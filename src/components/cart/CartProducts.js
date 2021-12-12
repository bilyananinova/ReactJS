import React from 'react';

import CartProduct from './CartProduct';

function CartProducts({ shoppingCart, productIncrease , productDecrease, productDelete}) {

    return (
        shoppingCart.map(p =>
            <CartProduct 
            product={p} 
            key={p.wine.id} 
            productIncrease={productIncrease}
            productDecrease={productDecrease}
            productDelete={productDelete} />
        ))
}

export default CartProducts;