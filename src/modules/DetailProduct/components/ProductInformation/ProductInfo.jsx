import PropTypes from 'prop-types';
import PriceDisplay from './RatingDisplay';
const ProductInfo = ({ title, price, description}) => {
  return (
    <div className="product-info">
      <h2>{title}</h2>
      <PriceDisplay price={price} /> 
      <div className="product-rating">
        <span className="rating-stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </span>
        <span className="rating-average">(4.5 out of 5)</span>
      </div>
      <p className="product-description">{description}</p>
    </div>
  );
};

ProductInfo.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired, // Price is required
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ProductInfo;