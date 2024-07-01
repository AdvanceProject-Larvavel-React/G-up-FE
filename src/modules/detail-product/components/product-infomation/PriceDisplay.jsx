import PropTypes from "prop-types";
import "../../styles/PriceDisplay.css";

const PriceDisplay = ({ price }) => {
  return (
    <div className="product-price">
      <span className="new-price">{price}</span>
    </div>
  );
};

PriceDisplay.propTypes = {
  price: PropTypes.string.isRequired,
};

export default PriceDisplay;
