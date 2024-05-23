
import React from 'react';
import { useCart } from './CartContext.js';

const AddToCartButton = ({ product }) => {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <button onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
