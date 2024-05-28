
import PropTypes from 'prop-types';

const ProductImage = ({ imageUrl, altText }) => {
  return (
    <div className="product-image">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

ProductImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired, 
};

export default ProductImage;