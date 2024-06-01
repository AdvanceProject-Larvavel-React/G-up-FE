import  { useState } from 'react';
import "../styles/ProductPage.css" ;

const ProductPage = () => {
  const [product, setProduct] = useState({
    id: 1,
    name: 'Olay Body Cellscience B3 + Vitamin C Body Lotion',
    brand: 'Olay',
    description: 'A highly acclaimed skincare product that has received numerous accolades for its exceptional quality. This body lotion is part of Olay\'s Body Cellscience line, which is designed to address the unique needs of mature skin. The B3 + Vitamin C formula is particularly noteworthy as it combines two powerful ingredients, niacinamide (B3) and vitamin C, to provide a range of benefits for the skin.',
    price: 30.00,
    salePrice: 22.50,
    discount: 25,
    ratings: 4.5,
    reviews: 25000,
    imageUrl: 'https://i.imgur.com/Y365432.png',
    sizes: ['S', 'M', 'L'],
    selectedSize: 'M',
    quantity: 1,
  });

  const handleSizeChange = (event) => {
    setProduct({
      ...product,
      selectedSize: event.target.value,
    });
  };

  const handleQuantityChange = (event) => {
    setProduct({
      ...product,
      quantity: parseInt(event.target.value),
    });
  };

  const addToCart = () => {
    // Add product to cart
    console.log('Added to cart');
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p>by {product.brand}</p>
        <div className="product-description">
          {product.description}
        </div>

        <div className="product-price">
          <span className="sale-price">${product.salePrice}</span>
          <span className="original-price">${product.price}</span>
          <span className="discount-badge">-{product.discount}%</span>
        </div>

        <div className="product-ratings">
          <span className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fas fa-star ${i < product.ratings ? 'active' : ''}`}
              ></i>
            ))}
          </span>
          <span className="rating-count">({product.reviews} reviews)</span>
        </div>

        <div className="product-options">
          <div className="product-size">
            <label htmlFor="size">Size:</label>
            <select id="size" value={product.selectedSize} onChange={handleSizeChange}>
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="product-quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={product.quantity}
              onChange={handleQuantityChange}
              min={1}
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;