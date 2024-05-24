// CartItem.jsx

import React from 'react';

const CartItem = ({ product, onUpdateQuantity, onUpdateAttribute, onRemoveProduct }) => {
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        onUpdateQuantity(product.id, newQuantity);
    };

    const handleAttributeChange = (event) => {
        const { name, value } = event.target;
        onUpdateAttribute(product.id, name, value);
    };

    const handleRemoveClick = () => {
        onRemoveProduct(product.id);
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
            <label htmlFor={`size-${product.id}`}>Size:</label>
            <select
                id={`size-${product.id}`}
                name="size"
                value={product.size}
                onChange={handleAttributeChange}
            >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
            </select>
            <label htmlFor={`color-${product.id}`}>Color:</label>
            <select
                id={`color-${product.id}`}
                name="color"
                value={product.color}
                onChange={handleAttributeChange}
            >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <button onClick={handleRemoveClick}>Remove</button>
        </div>
    );
};

export default CartItem;
