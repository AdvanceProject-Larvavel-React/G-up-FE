import React, { useState } from 'react';
import CartItem from './CartItem';

const CartView = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'Product 1', price: 10, quantity: 2 },
        { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    ]);

    const handleUpdateQuantity = (productId, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
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
                />
            ))}
            <div>Total: ${calculateTotal(cart)}</div>
        </div>
    );
};

export default CartView;