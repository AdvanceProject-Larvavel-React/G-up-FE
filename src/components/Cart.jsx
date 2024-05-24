import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext.jsx';

const CartContainer = styled.div`
    padding: 20px;
    border: 1px solid #ddd;
`;

const CartItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Cart = () => {
    const { state, dispatch } = useCart();

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    const totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContainer>
            <h2>Shopping Cart</h2>
            {state.items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                state.items.map((item) => (
                    <CartItem key={item.id}>
                        <div>
                            <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                        </div>
                        <div>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                min="1"
                            />
                        </div>
                    </CartItem>
                ))
            )}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </CartContainer>
    );
};

export default Cart;
