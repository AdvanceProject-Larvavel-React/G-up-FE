
import React from 'react';
import AddToCartButton from './AddToCartButton.js';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <AddToCartButton product={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;

// ProductDetail.js
import React from 'react';
import AddToCartButton from './AddToCartButton.js';

const ProductDetail = ({ product }) => {
    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <AddToCartButton product={product} />
        </div>
    );
};

export default ProductDetail;
