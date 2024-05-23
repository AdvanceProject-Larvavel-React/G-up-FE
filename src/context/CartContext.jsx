import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.items.findIndex(
                item => item.id === action.payload.id
            );

            if (existingProductIndex >= 0) {
                const updatedItems = [...state.items];
                updatedItems[existingProductIndex].quantity += action.payload.quantity;
                return { ...state, items: updatedItems };
            }

            return { ...state, items: [...state.items, action.payload] };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
