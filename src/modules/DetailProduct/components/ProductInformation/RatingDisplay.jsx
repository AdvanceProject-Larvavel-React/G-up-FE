import PropTypes from 'prop-types';

const RatingDisplay = ({ rating }) => {
  return (
    <div className="product-rating">
      <span className="rating-stars">
        {/* Map over the rating value to generate stars */}
        {Array.from({ length: rating }, (_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </span>
      <span className="rating-average">(4.5 out of 5)</span>
    </div>
  );
};

RatingDisplay.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingDisplay;