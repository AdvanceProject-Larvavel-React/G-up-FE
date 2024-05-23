import React from 'react';

const CartItem = ({ product, onUpdateQuantity }) => {
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        onUpdateQuantity(product.id, newQuantity);
    };

    return (
        <div className="cart-item">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
            <input
                type="number"
                id={`quantity-${product.id}`}
                value={product.quantity}
                onChange={handleQuantityChange}
            />
        </div>
    );
};

export default CartItem;