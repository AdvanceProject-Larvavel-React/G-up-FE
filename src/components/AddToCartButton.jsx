import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext.jsx';

const Button = styled.button`
    padding: 10px 20px;
    background-color: #ff6347;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #ff4500;
    }
`;

const AddToCartButton = ({ product }) => {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: { ...product, quantity: 1 }
        });
        alert('Product added to cart');
    };

    return <Button onClick={handleAddToCart}>Add to Cart</Button>;
};

export default AddToCartButton;
