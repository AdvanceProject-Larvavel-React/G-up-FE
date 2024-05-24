// CartView.jsx

import React, { useState } from 'react';
import CartItem from './CartItem';

const CartView = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'Product 1', price: 10, quantity: 2, size: 'M', color: 'red' },
        { id: 2, name: 'Product 2', price: 20, quantity: 1, size: 'L', color: 'blue' },
    ]);

    const handleUpdateQuantity = (productId, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleUpdateAttribute = (productId, attributeName, newValue) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, [attributeName]: newValue } : item
            )
        );
    };

    const handleRemoveProduct = (productId) => {
        setCart(prevCart =>
            prevCart.filter(item => item.id !== productId)
        );
    };

    const calculateTotal = (cart) => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="cart-view">
            <h2>Shopping Cart</h2>
            {cart.map(item => (
                <CartItem
                    key={item.id}
                    product={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onUpdateAttribute={handleUpdateAttribute}
                    onRemoveProduct={handleRemoveProduct}
                />
            ))}
            <div>Total: ${calculateTotal(cart)}</div>
        </div>
    );
};

export default CartView;
