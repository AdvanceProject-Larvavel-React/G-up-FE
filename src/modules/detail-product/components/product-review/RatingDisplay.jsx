
import PropTypes from 'prop-types';
import { Typography, Rate } from 'antd';
import '../../styles/RatingDisplay.css';

const { Text } = Typography;

const RatingDisplay = ({ rating, purchases }) => {
  return (
    <div className="rating">
      <Rate defaultValue={2.5} />
      <Text className="ml-3 rating-text">{rating}/5 đánh giá | {purchases} đã mua</Text>
    </div>
  );
};

RatingDisplay.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number,
  purchases: PropTypes.number,
};

RatingDisplay.defaultProps = {
  reviews: 0,
  purchases: 0,
};

export default RatingDisplay;
