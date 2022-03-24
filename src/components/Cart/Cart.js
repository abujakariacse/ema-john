import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h4>Order Summmery</h4>
            <h4>Total Ordered: {cart.length}</h4>
        </div>
    );
};

export default Cart;