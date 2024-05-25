import React, { useState } from 'react';

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQuantityIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <QuantityContainer>
            <QuantityButton onClick={handleQuantityDecrease} disabled={quantity === 1}>
                -
            </QuantityButton>
            <QuantityInput type="number" value={quantity} readOnly />
            <QuantityButton onClick={handleQuantityIncrease}>+</QuantityButton>
        </QuantityContainer>
    );
};

export default QuantitySelector;