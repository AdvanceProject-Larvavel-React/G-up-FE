import React, { useState } from 'react';

const CartItem = ({ item, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange(item.id, quantity - 1);
        }
    };

    const handleQuantityIncrease = () => {
        setQuantity(quantity + 1);
        onQuantityChange(item.id, quantity + 1);
    };

    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={handleQuantityDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleQuantityIncrease}>+</button>
        </div>
    );
};

export default CartItem;
