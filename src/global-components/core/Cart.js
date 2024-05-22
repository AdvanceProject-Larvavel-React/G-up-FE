// Cart.js
import { useState, useEffect } from 'react';
import React from "react";
import axios from 'axios';


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchCart = async () => {
            const response = await axios.get('/api/cart');
            setCartItems(response.data.items);
            setTotalPrice(response.data.totalPrice);
        };

        fetchCart();
    }, []);

    const handleQuantityChange = async (productId, newQuantity) => {
        try {
            const response = await axios.patch(`/api/cart/${productId}`, {
                quantity: newQuantity,
            });
            setCartItems(response.data.items);
            setTotalPrice(response.data.totalPrice);
        } catch (error) {
            alert('Error, Try again!');
        }
    };

    const handleRemove = async (productId) => {
        try {
            const response = await axios.delete(`/api/cart/${productId}`);
            setCartItems(response.data.items);
            setTotalPrice(response.data.totalPrice);
        } catch (error) {
            alert('Error, Try again!');
        }
    };

    return (
        <div>
            {cartItems.map(item => (
                <div key={item.productId}>
                    <span>{item.name}</span>
                    <span>{item.attributes.color}</span>
                    <span>{item.attributes.size}</span>
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.productId, e.target.value)}
                    />
                    <button onClick={() => handleRemove(item.productId)}>Remove</button>
                </div>
            ))}
            <div>Total Price: {totalPrice}</div>
        </div>
    );
};

export default Cart;
