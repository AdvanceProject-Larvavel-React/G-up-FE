import { useState } from "react";
import '../../../assets/styles/QuantityAdjuster.css';
export const QuantityAdjuster = () => {
    const [quantity, setQuantity] = useState(1);
  
    const handleQuantityChange = (value) => {
      setQuantity(value);
    };
  return (
    <>
        <div className="quantity-controls">
              
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
                min="1"
                max="10"
              />
             
        </div>
    </>
  )
}
