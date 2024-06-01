import  { useState } from 'react';
import '../styles/Product.css';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="product-page-container">
      <div className="product-details">
        <div className="product-image-container">
          <img src="[Product Image URL]" alt="Product" className="product-image" />
        </div>
        <div className="product-info">
          <h2 className="product-title">[Product Name]</h2>
          <p className="product-price">[$Product Price]</p>
          <div className="product-rating">
            <span className="rating-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </span>
            <span className="rating-text">(4.8 out of 5 stars)</span>
          </div>
          <p className="product-description">
            [Product Description Text]
          </p>
        </div>
      </div>
      <div className="product-options">
        
        
        <div className="product-quantity">
          <label htmlFor="quantity">Quantity:</label>
          <div className="quantity-controls">
            <button className="quantity-button" onClick={handleDecreaseQuantity}>
              -
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              min="1"
              max="10"
            />
            <button className="quantity-button" onClick={handleIncreaseQuantity}>
              +
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductPage;