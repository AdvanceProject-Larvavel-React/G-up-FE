// src/App.jsx
import React from 'react';
import { CartProvider } from './context/CartContext';
import AddToCartButton from './components/AddToCartButton';
import Cart from './components/Cart';

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
];

const App = () => {
    return (
        <CartProvider>
            <div>
                <h1>Product List</h1>
                {products.map(product => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                        <AddToCartButton product={product} />
                    </div>
                ))}
                <Cart />
            </div>
        </CartProvider>
    );
};

export default App;
