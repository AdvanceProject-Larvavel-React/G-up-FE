import { useState } from 'react';
import '../styles/ProductQuantity.css';

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="quantity-editor">
      <button onClick={handleDecrement} className="quantity-button">-</button>
      <span className="quantity-display">{quantity}</span>
      <button onClick={handleIncrement} className="quantity-button">+</button>
    </div>
  );
};

export default ProductQuantity;