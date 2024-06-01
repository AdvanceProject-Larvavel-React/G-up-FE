import PropTypes from 'prop-types';
import '../styles/ProductReview.css';

const ProductComment = ({ author, date, content }) => {
  return (
    <div className="comment">
      <p className="comment-author">{author}</p>
      <p className="comment-date">{date}</p>
      <p className="comment-content">{content}</p>
    </div>
  );
};

// Định nghĩa PropTypes bên ngoài hàm thành phần
ProductComment.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ProductComment;
