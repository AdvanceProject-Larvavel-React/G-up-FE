import PropTypes from 'prop-types';

const PriceDisplay = ({ price }) => {
  return (
    <div className="product-price">
      <span className="old-price">$50.00</span>
      <span className="new-price">{price}</span>
    </div>
  );
};

PriceDisplay.propTypes = {
  price: PropTypes.string.isRequired,
};
  
export default PriceDisplay;