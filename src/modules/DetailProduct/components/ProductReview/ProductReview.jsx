import PropTypes from 'prop-types';
import '../styles/ProductReview.css';

import ProductImage from './ProductImage';
import RatingDisplay from './RatingDisplay';
import ProductComment from './ProductComment';

const ProductReview = ({ imageUrl, alt, rating, comments }) => {
  return (
    <div className="product-review">
      <ProductImage imageUrl={imageUrl} alt={alt} />
      <div className="product-info">
        <h2>Đánh giá sản phẩm</h2>
        <RatingDisplay rating={rating} />
        <div className="product-comments">
          {comments.map((comment) => (
            <ProductComment key={comment.id} {...comment} />
          ))}
          <button className="view-more-comments">Xem thêm đánh giá</button>
        </div>
      </div>
    </div>
  );
};

ProductReview.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductReview;