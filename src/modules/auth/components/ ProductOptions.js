
import React, { useState } from 'react';

const ProductOptions = () => {
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="">Select Color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
    );
}

export default ProductOptions;
